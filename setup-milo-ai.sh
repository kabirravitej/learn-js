#!/usr/bin/env bash
# Local Milo coaching: Ollama + Apache-2.0 Qwen2.5-Coder (small only).
set -euo pipefail

MODEL="${MILO_MODEL:-qwen2.5-coder:1.5b}"
MAX_GB="${MILO_MAX_GB:-30}"

# Refuse anything that is not our tiny default without an explicit override list.
ALLOWED='qwen2.5-coder:0.5b qwen2.5-coder:1.5b qwen2.5-coder:7b'
if ! printf '%s' " $ALLOWED " | grep -q " $MODEL "; then
  echo "Refusing model '$MODEL'. Allowed under the ${MAX_GB}GB cap: $ALLOWED"
  exit 1
fi

USER_OLLAMA="$HOME/Applications/Ollama.app/Contents/Resources"
if [[ -x "$USER_OLLAMA/ollama" ]]; then
  export PATH="$USER_OLLAMA:$PATH"
fi

if ! command -v ollama >/dev/null 2>&1; then
  echo "Ollama not found. Put Ollama.app in ~/Applications (or /Applications), then re-run."
  exit 1
fi

export OLLAMA_ORIGINS="${OLLAMA_ORIGINS:-*}"

# Start server if needed
if ! curl -fsS http://127.0.0.1:11434/api/tags >/dev/null 2>&1; then
  echo "Starting Ollama..."
  open "$HOME/Applications/Ollama.app" 2>/dev/null || open -a Ollama 2>/dev/null || true
  ollama serve >/tmp/ollama-learnjs.log 2>&1 &
  for _ in $(seq 1 40); do
    curl -fsS http://127.0.0.1:11434/api/tags >/dev/null 2>&1 && break
    sleep 1
  done
fi

echo "Pulling $MODEL (must stay under ${MAX_GB}GB)..."
ollama pull "$MODEL"

SIZE_BYTES="$(ollama show "$MODEL" --modelfile 2>/dev/null | wc -c | tr -d ' ')"
# Rough on-disk check via blobs dir if available
MODEL_DIR="${HOME}/.ollama/models"
if [[ -d "$MODEL_DIR" ]]; then
  USED_GB="$(du -sg "$MODEL_DIR" 2>/dev/null | awk '{print $1}')"
  echo "Ollama models folder ≈ ${USED_GB}GB (cap ${MAX_GB}GB)."
  if [[ "${USED_GB:-0}" -gt "$MAX_GB" ]]; then
    echo "ERROR: models exceed ${MAX_GB}GB. Remove larger models with: ollama rm <name>"
    exit 1
  fi
fi

echo "Ready. Model: $MODEL"
echo "Tip: keep Ollama running while using lessons in the browser."
