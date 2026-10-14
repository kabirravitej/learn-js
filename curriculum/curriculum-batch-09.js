/**
 * Curriculum batch 09 — Units 81–90 (Next Steps)
 */
window.LEARN_JS_BATCH_09 = [
  {
    "id": "u81",
    "section": "Next Steps",
    "title": "How Browsers Run JS",
    "blurb": "Engine, event loop sketch.",
    "nodes": [
      {
        "id": "u81-concept",
        "type": "concept",
        "title": "Engine + event loop sketch",
        "minutes": 7,
        "summary": "JS runs on an engine; the event loop schedules later callbacks.",
        "knowledgeCard": "Parse → run sync stack → drain microtasks → next macrotask (timers, events)",
        "steps": [
          {
            "type": "teach",
            "text": "Browsers embed a JS engine (e.g. V8 in Chrome/Edge) that parses and runs your code."
          },
          {
            "type": "teach",
            "text": "Synchronous code runs on a call stack — one thing at a time in classic JS."
          },
          {
            "type": "teach",
            "text": "When async work finishes, callbacks/Promise jobs are queued for later."
          },
          {
            "type": "teach",
            "text": "The event loop picks the next task when the stack is clear — that’s why A, C, then B with setTimeout(0)."
          },
          {
            "type": "teach",
            "text": "You don’t memorize every queue detail yet — knowing “now vs later” prevents frozen-UI thinking."
          },
          {
            "type": "mcq",
            "prompt": "Chrome’s JS engine is commonly called…",
            "choices": [
              "V8",
              "Photoshop",
              "FTP",
              "JSON.exe"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "The event loop schedules work after the current stack clears.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Runs line-by-line first",
            "choices": [
              "call stack",
              "CSS grid",
              "DNS"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "setTimeout callbacks run…",
            "choices": [
              "As later tasks",
              "Before any sync code always",
              "Inside CSS only",
              "Instead of HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Understanding async order helps debug UI code.",
            "answer": true
          }
        ]
      },
      {
        "id": "u81-memory",
        "type": "memory",
        "title": "Microtasks vs timers (light)",
        "minutes": 6,
        "summary": "Promise then jobs usually run before the next timer callback.",
        "knowledgeCard": "Promise reactions (microtasks) often beat setTimeout(0)",
        "steps": [
          {
            "type": "teach",
            "text": "Promise then/catch handlers are microtasks — they often run before a setTimeout(0)."
          },
          {
            "type": "teach",
            "text": "You don’t need exam-level queue theory to build apps — notice order when debugging."
          },
          {
            "type": "teach",
            "text": "DevTools Performance can visualize long tasks later if pages jank."
          },
          {
            "type": "mcq",
            "prompt": "Promise then usually runs…",
            "choices": [
              "Before a waiting setTimeout(0)",
              "Only after a full day",
              "Inside a CSS file",
              "Never in browsers"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Long sync work can still freeze the page.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Scheduler idea name",
            "choices": [
              "event loop",
              "float",
              "margin"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u81-practice",
        "type": "practice",
        "title": "Engine & loop flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Chrome engine?",
            "accept": [
              "V8"
            ],
            "explain": "V8"
          },
          {
            "prompt": "Sync runs on?",
            "accept": [
              "stack",
              "call stack"
            ],
            "explain": "call stack"
          },
          {
            "prompt": "Later work scheduler?",
            "accept": [
              "event loop",
              "loop"
            ],
            "explain": "event loop"
          },
          {
            "prompt": "Timer callbacks are…",
            "accept": [
              "later",
              "async",
              "tasks"
            ],
            "explain": "later / tasks"
          },
          {
            "prompt": "Promise jobs often before?",
            "accept": [
              "timeout",
              "setTimeout"
            ],
            "explain": "setTimeout(0)"
          }
        ]
      },
      {
        "id": "u81-chest",
        "type": "chest",
        "title": "How Browsers Run JS chest",
        "minutes": 2
      },
      {
        "id": "u81-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Engine runs JS; event loop handles later work. Next: Node.",
        "knowledgeCard": "Next: Node.js: What & Why",
        "steps": [
          {
            "type": "teach",
            "text": "Browsers run JS on an engine with an event loop for async."
          },
          {
            "type": "teach",
            "text": "Next: the same language outside the browser — Node.js."
          },
          {
            "type": "tf",
            "prompt": "Async order comes from queues, not magic.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u82",
    "section": "Next Steps",
    "title": "Node.js: What & Why",
    "blurb": "JS outside the browser.",
    "nodes": [
      {
        "id": "u82-concept",
        "type": "concept",
        "title": "JavaScript on the server (and tooling)",
        "minutes": 7,
        "summary": "Node runs JS outside the browser — APIs, scripts, tooling.",
        "knowledgeCard": "node app.js — files, network, npm ecosystem; no DOM by default",
        "steps": [
          {
            "type": "teach",
            "text": "Node.js is a runtime: JS (V8) plus system APIs — files, network, processes."
          },
          {
            "type": "teach",
            "text": "There’s no document/window unless you add libraries — Node isn’t a browser."
          },
          {
            "type": "teach",
            "text": "People use Node for APIs, CLIs, build tools, and servers."
          },
          {
            "type": "teach",
            "text": "Same language skills transfer: functions, async/await, modules, JSON."
          },
          {
            "type": "teach",
            "text": "You’ll install Node, then run files with node and manage packages with npm."
          },
          {
            "type": "mcq",
            "prompt": "Node.js lets you…",
            "choices": [
              "Run JS outside the browser",
              "Replace HTML with FTP",
              "Only write CSS",
              "Delete JSON forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "document is not a built-in Node global like in browsers.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Run a file roughly with",
            "choices": [
              "node",
              "photoshop",
              "float"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Node is commonly used for…",
            "choices": [
              "Servers and tooling",
              "Only animating CSS",
              "Drawing DNS maps by hand",
              "Replacing electricity"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Your JS fundamentals still apply in Node.",
            "answer": true
          }
        ]
      },
      {
        "id": "u82-memory",
        "type": "memory",
        "title": "Browser vs Node mental split",
        "minutes": 6,
        "summary": "Browser: DOM + fetch to users. Node: files, servers, tools.",
        "knowledgeCard": "Front-end ≠ Node, but both speak JavaScript",
        "steps": [
          {
            "type": "teach",
            "text": "Front-end code ships to users’ browsers; Node often runs on a machine you control."
          },
          {
            "type": "teach",
            "text": "Secrets and heavy logic can live on a Node server — not in public JS bundles."
          },
          {
            "type": "teach",
            "text": "Many React projects still use Node tooling to build/bundle even if the app runs in the browser."
          },
          {
            "type": "mcq",
            "prompt": "Put secret API keys…",
            "choices": [
              "On a server (e.g. Node), not public front-end",
              "In every HTML comment",
              "In CSS variables for users",
              "In localStorage forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Build tools for front-end apps often run on Node.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Server-side JS runtime",
            "choices": [
              "Node",
              "Photoshop",
              "Markdown"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u82-practice",
        "type": "practice",
        "title": "Node flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "JS outside browser?",
            "accept": [
              "Node"
            ],
            "explain": "Node.js"
          },
          {
            "prompt": "Run file command?",
            "accept": [
              "node"
            ],
            "explain": "node"
          },
          {
            "prompt": "Has DOM by default?",
            "accept": [
              "no",
              "false"
            ],
            "explain": "no"
          },
          {
            "prompt": "Common use?",
            "accept": [
              "server",
              "API",
              "tooling"
            ],
            "explain": "servers / tooling"
          },
          {
            "prompt": "Engine under Node?",
            "accept": [
              "V8"
            ],
            "explain": "V8"
          }
        ]
      },
      {
        "id": "u82-chest",
        "type": "chest",
        "title": "Node.js: What & Why chest",
        "minutes": 2
      },
      {
        "id": "u82-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Node = JS + system powers. Next: npm.",
        "knowledgeCard": "Next: npm & packages Idea",
        "steps": [
          {
            "type": "teach",
            "text": "Node runs JS for servers, scripts, and tools."
          },
          {
            "type": "teach",
            "text": "Next: npm — installing and reusing packages."
          },
          {
            "type": "tf",
            "prompt": "Node is a major next step after browser JS.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u83",
    "section": "Next Steps",
    "title": "npm & packages Idea",
    "blurb": "Reuse other people’s code.",
    "nodes": [
      {
        "id": "u83-concept",
        "type": "concept",
        "title": "Install shared libraries",
        "minutes": 7,
        "summary": "npm installs packages; package.json lists dependencies.",
        "knowledgeCard": "npm install lodash → node_modules + package.json dependency",
        "steps": [
          {
            "type": "teach",
            "text": "npm is the default package manager in the Node ecosystem."
          },
          {
            "type": "teach",
            "text": "package.json records your project’s name, scripts, and dependencies."
          },
          {
            "type": "teach",
            "text": "npm install package adds code under node_modules and lists it as a dependency."
          },
          {
            "type": "teach",
            "text": "You import/require that package in your code instead of reinventing everything."
          },
          {
            "type": "teach",
            "text": "Lockfiles help others install the same versions — teamwork and deploys get safer."
          },
          {
            "type": "mcq",
            "prompt": "package.json mainly…",
            "choices": [
              "Describes the project and dependencies",
              "Stores passwords for users",
              "Replaces HTML",
              "Is a CSS reset only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "npm install downloads packages into node_modules.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "JS package manager",
            "choices": [
              "npm",
              "FTP",
              " Dom"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "You use packages to…",
            "choices": [
              "Reuse maintained code",
              "Avoid learning JS forever",
              "Delete the internet",
              "Hide HTTPS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Scripts in package.json can run build/test/start commands.",
            "answer": true
          }
        ]
      },
      {
        "id": "u83-memory",
        "type": "memory",
        "title": "Trust and updates",
        "minutes": 6,
        "summary": "Prefer known packages; read READMEs; keep deps updated carefully.",
        "knowledgeCard": "Check downloads/maintenance; don’t install random unknown tools blindly",
        "steps": [
          {
            "type": "teach",
            "text": "Anyone can publish packages — skim docs and popularity/maintenance signals."
          },
          {
            "type": "teach",
            "text": "Updating dependencies can fix bugs — and occasionally break APIs; read changelogs."
          },
          {
            "type": "teach",
            "text": "Front-end bundlers also pull npm packages even for browser apps."
          },
          {
            "type": "mcq",
            "prompt": "Before relying on a package…",
            "choices": [
              "Check docs/trust signals",
              "Email your password to it",
              "Assume it’s perfect forever",
              "Put secrets in it publicly"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "node_modules is usually not hand-edited.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Dependency list file",
            "choices": [
              "package.json",
              "index.html",
              "favicon.ico"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u83-practice",
        "type": "practice",
        "title": "npm flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Package manager?",
            "accept": [
              "npm"
            ],
            "explain": "npm"
          },
          {
            "prompt": "Project manifest?",
            "accept": [
              "package.json"
            ],
            "explain": "package.json"
          },
          {
            "prompt": "Install command idea?",
            "accept": [
              "npm install",
              "install"
            ],
            "explain": "npm install"
          },
          {
            "prompt": "Packages land in?",
            "accept": [
              "node_modules"
            ],
            "explain": "node_modules"
          },
          {
            "prompt": "Reuse…",
            "accept": [
              "libraries",
              "packages"
            ],
            "explain": "packages"
          }
        ]
      },
      {
        "id": "u83-chest",
        "type": "chest",
        "title": "npm & packages Idea chest",
        "minutes": 2
      },
      {
        "id": "u83-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "npm installs reusable packages. Next: React problem.",
        "knowledgeCard": "Next: React: What Problem It Solves",
        "steps": [
          {
            "type": "teach",
            "text": "package.json + npm install unlock the ecosystem."
          },
          {
            "type": "teach",
            "text": "Next: why React exists — UI as components."
          },
          {
            "type": "tf",
            "prompt": "Packages help you build faster with shared code.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u84",
    "section": "Next Steps",
    "title": "React: What Problem It Solves",
    "blurb": "UI as components (concepts only).",
    "nodes": [
      {
        "id": "u84-concept",
        "type": "concept",
        "title": "UI that stays in sync with state",
        "minutes": 7,
        "summary": "React helps build UIs from components and state — less manual DOM glue.",
        "knowledgeCard": "Component(state) → UI; update state, React reconciles the DOM",
        "steps": [
          {
            "type": "teach",
            "text": "As UIs grow, hand-written DOM updates get hard to keep consistent."
          },
          {
            "type": "teach",
            "text": "React (and similar libraries) describe UI as functions of state: given data, here’s the view."
          },
          {
            "type": "teach",
            "text": "Components are reusable UI pieces — button, card, page section."
          },
          {
            "type": "teach",
            "text": "When state changes, React updates the DOM for you (reconciliation) instead of you hunting nodes."
          },
          {
            "type": "teach",
            "text": "This unit is conceptual — you’re preparing to learn React with solid JS underneath."
          },
          {
            "type": "mcq",
            "prompt": "React’s big idea is roughly…",
            "choices": [
              "UI from components + state",
              "Replacing TCP",
              "Deleting JavaScript",
              "Only writing CSS files"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Manual DOM updates get harder as apps grow.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Reusable UI piece",
            "choices": [
              "component",
              "FTP",
              "DNS"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "When state changes, React…",
            "choices": [
              "Updates the UI to match",
              "Turns off the browser",
              "Removes npm",
              "Blocks HTTPS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Strong JS skills make learning React easier.",
            "answer": true
          }
        ]
      },
      {
        "id": "u84-memory",
        "type": "memory",
        "title": "Not magic — still JavaScript",
        "minutes": 6,
        "summary": "Props, state, and events are JS ideas wearing component clothes.",
        "knowledgeCard": "props in → UI out; events setState/updaters; lists need keys",
        "steps": [
          {
            "type": "teach",
            "text": "You’ll still use arrays, objects, fetch, and async — React organizes the UI layer."
          },
          {
            "type": "teach",
            "text": "Thinking in “state → view” matches the render-from-data habits you practiced."
          },
          {
            "type": "teach",
            "text": "Other UI libraries exist; React is popular, not the only option."
          },
          {
            "type": "mcq",
            "prompt": "React still relies on…",
            "choices": [
              "JavaScript fundamentals",
              "Avoiding all functions",
              "Only HTML comments",
              "No arrays ever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Render-from-state habits transfer into React.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "UI library example",
            "choices": [
              "React",
              "JPEG",
              "SMTP"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u84-practice",
        "type": "practice",
        "title": "React idea flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Reusable UI unit?",
            "accept": [
              "component"
            ],
            "explain": "component"
          },
          {
            "prompt": "Data driving UI?",
            "accept": [
              "state"
            ],
            "explain": "state"
          },
          {
            "prompt": "React helps sync…",
            "accept": [
              "UI",
              "DOM",
              "view"
            ],
            "explain": "UI / DOM"
          },
          {
            "prompt": "Still need?",
            "accept": [
              "JavaScript"
            ],
            "explain": "JavaScript"
          },
          {
            "prompt": "Describe UI from…",
            "accept": [
              "state",
              "data"
            ],
            "explain": "state"
          }
        ]
      },
      {
        "id": "u84-chest",
        "type": "chest",
        "title": "React: What Problem It Solves chest",
        "minutes": 2
      },
      {
        "id": "u84-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "React = components + state → UI. Next: frameworks vs DOM scripts.",
        "knowledgeCard": "Next: Components vs DOM Scripts",
        "steps": [
          {
            "type": "teach",
            "text": "React tackles complex UI sync with components and state."
          },
          {
            "type": "teach",
            "text": "Next: mental model — components vs hand DOM scripts."
          },
          {
            "type": "tf",
            "prompt": "You learned the JS foundation React sits on.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u85",
    "section": "Next Steps",
    "title": "Components vs DOM Scripts",
    "blurb": "Mental model for frameworks.",
    "nodes": [
      {
        "id": "u85-concept",
        "type": "concept",
        "title": "Two ways to think about UI",
        "minutes": 7,
        "summary": "Imperative DOM scripts vs declarative components.",
        "knowledgeCard": "Imperative: do steps to the DOM. Declarative: describe the UI for this state.",
        "steps": [
          {
            "type": "teach",
            "text": "Imperative style: querySelector, then manually change textContent/classes step by step."
          },
          {
            "type": "teach",
            "text": "Declarative style: given state, declare what the UI should look like; the library applies diffs."
          },
          {
            "type": "teach",
            "text": "Both are valid — small widgets are fine in vanilla; large apps often prefer components."
          },
          {
            "type": "teach",
            "text": "Your vanilla skills never expire — frameworks compile down to DOM operations."
          },
          {
            "type": "teach",
            "text": "Choose tools by problem size: don’t need a framework for a single toggle."
          },
          {
            "type": "mcq",
            "prompt": "querySelector + manual updates is…",
            "choices": [
              "Imperative DOM scripting",
              "Only TypeScript",
              "DNS routing",
              "npm itself"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Declarative UI describes what should show for current state.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Framework UI building block",
            "choices": [
              "component",
              "marquee",
              "blink"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Vanilla JS is…",
            "choices": [
              "Still useful alongside frameworks",
              "Illegal after React",
              "Only for CSS",
              "Useless with fetch"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Small features can stay vanilla.",
            "answer": true
          }
        ]
      },
      {
        "id": "u85-memory",
        "type": "memory",
        "title": "Transfer checklist",
        "minutes": 6,
        "summary": "State, lists, events, and async still matter in every model.",
        "knowledgeCard": "state · render · events · effects/data — same story, new syntax",
        "steps": [
          {
            "type": "teach",
            "text": "Lists → map to components. Events → handlers. Fetch → effects/loaders."
          },
          {
            "type": "teach",
            "text": "Debugging still means inspecting state and reproducing bugs."
          },
          {
            "type": "teach",
            "text": "Learn one framework deeply after fundamentals — syntax is the easy part."
          },
          {
            "type": "mcq",
            "prompt": "Frameworks still need you to understand…",
            "choices": [
              "State and events",
              "Only FTP passwords",
              "Avoiding functions",
              "Deleting JSON"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Learning vanilla first makes frameworks less mysterious.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Describe UI from state",
            "choices": [
              "declarative",
              "imperative only",
              "FTP"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u85-practice",
        "type": "practice",
        "title": "Components vs DOM flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Manual DOM steps?",
            "accept": [
              "imperative"
            ],
            "explain": "imperative"
          },
          {
            "prompt": "Describe UI from state?",
            "accept": [
              "declarative"
            ],
            "explain": "declarative"
          },
          {
            "prompt": "Reusable piece?",
            "accept": [
              "component"
            ],
            "explain": "component"
          },
          {
            "prompt": "Vanilla still…",
            "accept": [
              "useful",
              "valid"
            ],
            "explain": "useful"
          },
          {
            "prompt": "Pick tools by…",
            "accept": [
              "problem size",
              "need"
            ],
            "explain": "problem size"
          }
        ]
      },
      {
        "id": "u85-chest",
        "type": "chest",
        "title": "Components vs DOM Scripts chest",
        "minutes": 2
      },
      {
        "id": "u85-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Imperative DOM vs declarative components. Next: TypeScript peek.",
        "knowledgeCard": "Next: TypeScript Peek",
        "steps": [
          {
            "type": "teach",
            "text": "Frameworks change how you express UI, not the need for JS thinking."
          },
          {
            "type": "teach",
            "text": "Next: types as optional guardrails — TypeScript."
          },
          {
            "type": "tf",
            "prompt": "Declarative UI still rests on solid JS.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u86",
    "section": "Next Steps",
    "title": "TypeScript Peek",
    "blurb": "Types as guardrails.",
    "nodes": [
      {
        "id": "u86-concept",
        "type": "concept",
        "title": "Annotate shapes so mistakes fail early",
        "minutes": 7,
        "summary": "TypeScript adds types on top of JavaScript.",
        "knowledgeCard": "let n: number = 3; type User = { name: string }",
        "steps": [
          {
            "type": "teach",
            "text": "TypeScript (TS) is JavaScript plus a type system — it compiles to JS."
          },
          {
            "type": "teach",
            "text": "Types document intent: this function takes a string, returns a number."
          },
          {
            "type": "teach",
            "text": "Editors catch many typos and wrong property names before runtime."
          },
          {
            "type": "teach",
            "text": "You already think in shapes (objects, arrays) — TS writes those shapes down."
          },
          {
            "type": "teach",
            "text": "Peek only: you don’t need TS to finish this path, but you’ll see it in many jobs."
          },
          {
            "type": "mcq",
            "prompt": "TypeScript mainly adds…",
            "choices": [
              "A type system on JS",
              "A new CPU",
              "A CSS engine",
              "A replace for HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "TS usually compiles down to JavaScript.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Types help catch",
            "choices": [
              "mistakes",
              "FTP",
              "rain"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "A type annotation might say a value is a…",
            "choices": [
              "string or number, etc.",
              "JPEG only",
              "DNS record",
              "GPU"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Learning JS first makes TypeScript easier.",
            "answer": true
          }
        ]
      },
      {
        "id": "u86-memory",
        "type": "memory",
        "title": "Gradual adoption",
        "minutes": 6,
        "summary": "You can add types file-by-file; JS skills remain the core.",
        "knowledgeCard": "Start with JS; add types where they prevent pain",
        "steps": [
          {
            "type": "teach",
            "text": "Many codebases are mixed or gradually typed."
          },
          {
            "type": "teach",
            "text": "any exists but weakens the benefits — prefer real types as you learn."
          },
          {
            "type": "teach",
            "text": "Runtime JS bugs can still happen — types aren’t a full test suite."
          },
          {
            "type": "mcq",
            "prompt": "TS is…",
            "choices": [
              "Optional tooling many teams use",
              "Required to run any JS",
              "A browser replacement",
              "Only for CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Types reduce some classes of bugs early.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "TS compiles to",
            "choices": [
              "JavaScript",
              "JPEG",
              "SQL only"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u86-practice",
        "type": "practice",
        "title": "TypeScript peek flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "TS adds?",
            "accept": [
              "types",
              "type system"
            ],
            "explain": "types"
          },
          {
            "prompt": "Outputs?",
            "accept": [
              "JavaScript"
            ],
            "explain": "JavaScript"
          },
          {
            "prompt": "Helps catch?",
            "accept": [
              "errors",
              "mistakes"
            ],
            "explain": "mistakes early"
          },
          {
            "prompt": "Learn first?",
            "accept": [
              "JavaScript"
            ],
            "explain": "JavaScript"
          },
          {
            "prompt": "Annotation example idea?",
            "accept": [
              ": string",
              "string"
            ],
            "explain": ": string"
          }
        ]
      },
      {
        "id": "u86-chest",
        "type": "chest",
        "title": "TypeScript Peek chest",
        "minutes": 2
      },
      {
        "id": "u86-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "TS = typed JS. Next: other languages.",
        "knowledgeCard": "Next: Other Languages After JS",
        "steps": [
          {
            "type": "teach",
            "text": "Types are guardrails; JS remains underneath."
          },
          {
            "type": "teach",
            "text": "Next: how JS skills transfer to Python and beyond."
          },
          {
            "type": "tf",
            "prompt": "TypeScript builds on JavaScript knowledge.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u87",
    "section": "Next Steps",
    "title": "Other Languages After JS",
    "blurb": "Python, etc. — transfer skills.",
    "nodes": [
      {
        "id": "u87-concept",
        "type": "concept",
        "title": "Programming ideas travel",
        "minutes": 7,
        "summary": "Variables, functions, loops, and data structures transfer across languages.",
        "knowledgeCard": "syntax changes; algorithms, debugging, and design habits remain",
        "steps": [
          {
            "type": "teach",
            "text": "Every language has different syntax — the ideas rhyme: variables, functions, loops, types/data."
          },
          {
            "type": "teach",
            "text": "Python is a common next language: readable, great for scripting, data, and backends."
          },
          {
            "type": "teach",
            "text": "Your debugging habits, naming, and decomposition skills transfer immediately."
          },
          {
            "type": "teach",
            "text": "Learning a second language gets easier because you already know what “if” and “list” are for."
          },
          {
            "type": "teach",
            "text": "Pick languages based on goals: web (JS/TS), data (Python), systems (others) — curiosity welcome."
          },
          {
            "type": "mcq",
            "prompt": "Across languages, what transfers most?",
            "choices": [
              "Core programming ideas & habits",
              "Exact semicolon rules always",
              "Chrome DevTools only",
              "npm lockfiles forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Python is a popular language to learn after or beside JS.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Reusable skill",
            "choices": [
              "debugging",
              "only CSS floats",
              "one browser bug"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Syntax differences mean…",
            "choices": [
              "You relearn spelling, not all thinking",
              "You forget functions exist",
              "Loops disappear",
              "JSON dies"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Goals should influence which language you learn next.",
            "answer": true
          }
        ]
      },
      {
        "id": "u87-memory",
        "type": "memory",
        "title": "Don’t abandon the web stack",
        "minutes": 6,
        "summary": "JS remains central for browsers; other langs expand your range.",
        "knowledgeCard": "Keep building web projects while you explore sideways",
        "steps": [
          {
            "type": "teach",
            "text": "Browsers run JS — your front-end path stays valuable."
          },
          {
            "type": "teach",
            "text": "Full-stack often pairs JS/TS front-ends with various backends."
          },
          {
            "type": "teach",
            "text": "Compare features: “What’s the list type here? How do modules work?”"
          },
          {
            "type": "mcq",
            "prompt": "Browser pages still primarily use…",
            "choices": [
              "JavaScript",
              "Only Python in the DOM",
              "Only Java applets",
              "FTP scripts in CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Learning another language can deepen how you see JS.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Common next language",
            "choices": [
              "Python",
              "JPEG",
              "YAML-only"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u87-practice",
        "type": "practice",
        "title": "Transfer skills flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "What transfers?",
            "accept": [
              "ideas",
              "habits",
              "concepts"
            ],
            "explain": "ideas / habits"
          },
          {
            "prompt": "Popular next lang?",
            "accept": [
              "Python"
            ],
            "explain": "Python"
          },
          {
            "prompt": "Browsers still need?",
            "accept": [
              "JavaScript"
            ],
            "explain": "JavaScript"
          },
          {
            "prompt": "Syntax is…",
            "accept": [
              "different",
              "new spelling"
            ],
            "explain": "different"
          },
          {
            "prompt": "Pick by…",
            "accept": [
              "goals",
              "projects"
            ],
            "explain": "goals"
          }
        ]
      },
      {
        "id": "u87-chest",
        "type": "chest",
        "title": "Other Languages After JS chest",
        "minutes": 2
      },
      {
        "id": "u87-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Ideas transfer; syntax varies. Next: full-stack sketch.",
        "knowledgeCard": "Next: APIs & Full-Stack Sketch",
        "steps": [
          {
            "type": "teach",
            "text": "You’re a programmer now — languages are dialects."
          },
          {
            "type": "teach",
            "text": "Next: how front-ends talk to backends."
          },
          {
            "type": "tf",
            "prompt": "JS skills make other languages easier to approach.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u88",
    "section": "Next Steps",
    "title": "APIs & Full-Stack Sketch",
    "blurb": "Front talks to back.",
    "nodes": [
      {
        "id": "u88-concept",
        "type": "concept",
        "title": "Browser ↔ server contract",
        "minutes": 7,
        "summary": "Front-end fetch talks to backend HTTP APIs; JSON is common.",
        "knowledgeCard": "Browser fetch → HTTP → server (Node/etc.) → JSON → UI",
        "steps": [
          {
            "type": "teach",
            "text": "Full-stack means UI + server + data working together."
          },
          {
            "type": "teach",
            "text": "The front-end sends HTTP requests (fetch); the back-end responds with data (often JSON)."
          },
          {
            "type": "teach",
            "text": "Auth, validation, and secrets belong heavily on the server."
          },
          {
            "type": "teach",
            "text": "Your Learn JS account/API is a tiny example of this shape."
          },
          {
            "type": "teach",
            "text": "REST-ish JSON APIs are a common beginner-friendly style — not the only one."
          },
          {
            "type": "mcq",
            "prompt": "Browsers often call APIs with…",
            "choices": [
              "fetch",
              "Photoshop",
              "float",
              "marquee"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "JSON is a common API response format.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Server half of the app",
            "choices": [
              "backend",
              "favicon",
              "margin"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Secrets should live…",
            "choices": [
              "On the server side",
              "In public JS bundles",
              "In CSS comments",
              "In the URL bar forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Front and back agree on URLs and data shapes.",
            "answer": true
          }
        ]
      },
      {
        "id": "u88-memory",
        "type": "memory",
        "title": "Sketch a feature end-to-end",
        "minutes": 6,
        "summary": "UI event → request → server logic → database/store → response → render.",
        "knowledgeCard": "button → fetch /api/items → DB → JSON → render list",
        "steps": [
          {
            "type": "teach",
            "text": "Draw the path of one feature on paper — it clarifies ownership of each step."
          },
          {
            "type": "teach",
            "text": "Errors can happen on network, server, or parse — handle each kindly."
          },
          {
            "type": "teach",
            "text": "Later you’ll meet databases, auth sessions, and deployment — same sketch grows."
          },
          {
            "type": "mcq",
            "prompt": "A list feature might end with…",
            "choices": [
              "Rendering JSON into the UI",
              "Deleting the server always",
              "Only sorting CSS",
              "Blocking all HTTP"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "End-to-end thinking connects units you’ve already learned.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Common payload format",
            "choices": [
              "JSON",
              "MP3",
              "PNG-only"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u88-practice",
        "type": "practice",
        "title": "Full-stack sketch flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "UI side?",
            "accept": [
              "frontend",
              "front-end"
            ],
            "explain": "front-end"
          },
          {
            "prompt": "Server side?",
            "accept": [
              "backend",
              "back-end"
            ],
            "explain": "back-end"
          },
          {
            "prompt": "Browser HTTP helper?",
            "accept": [
              "fetch"
            ],
            "explain": "fetch"
          },
          {
            "prompt": "Common data format?",
            "accept": [
              "JSON"
            ],
            "explain": "JSON"
          },
          {
            "prompt": "Secrets belong…",
            "accept": [
              "server",
              "backend"
            ],
            "explain": "on the server"
          }
        ]
      },
      {
        "id": "u88-chest",
        "type": "chest",
        "title": "APIs & Full-Stack Sketch chest",
        "minutes": 2
      },
      {
        "id": "u88-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Front fetch ↔ back API. Next: portfolio ideas.",
        "knowledgeCard": "Next: Portfolio Project Ideas",
        "steps": [
          {
            "type": "teach",
            "text": "Full-stack is a conversation over HTTP with clear data shapes."
          },
          {
            "type": "teach",
            "text": "Next: what to build to practice and show your skills."
          },
          {
            "type": "tf",
            "prompt": "You already practiced pieces of the full-stack loop.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u89",
    "section": "Next Steps",
    "title": "Portfolio Project Ideas",
    "blurb": "What to build next.",
    "nodes": [
      {
        "id": "u89-concept",
        "type": "concept",
        "title": "Ship small, finishable apps",
        "minutes": 7,
        "summary": "Pick projects that use lists, forms, async, and deploy.",
        "knowledgeCard": "Todo+filter · quiz · habit tracker · API browser · mini blog UI",
        "steps": [
          {
            "type": "teach",
            "text": "Portfolio pieces should be finished enough to demo — small scope wins."
          },
          {
            "type": "teach",
            "text": "Ideas: todo with filters, flashcard quiz, habit tracker, public API explorer, recipe box."
          },
          {
            "type": "teach",
            "text": "Each should include: structure, state, forms/validation, and optionally fetch."
          },
          {
            "type": "teach",
            "text": "Deploy something live — a URL beats a zip file in a drawer."
          },
          {
            "type": "teach",
            "text": "Write a short README: what it does, how to run, what you learned."
          },
          {
            "type": "mcq",
            "prompt": "Best early portfolio projects are…",
            "choices": [
              "Small and finishable",
              "AAA games in one weekend",
              "OS kernels only",
              "Unscoped mega apps"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "A live URL helps others see your work.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Project writeup file",
            "choices": [
              "README",
              "favicon",
              ".env public"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Good projects practice…",
            "choices": [
              "State, UI, and maybe APIs",
              "Only renaming files",
              "Avoiding functions",
              "Hiding all code"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Scope control is a skill.",
            "answer": true
          }
        ]
      },
      {
        "id": "u89-memory",
        "type": "memory",
        "title": "Show your thinking",
        "minutes": 6,
        "summary": "Commits, clear UI, and notes on tradeoffs impress more than clutter.",
        "knowledgeCard": "Demo GIF/screenshots · clear UX · what you’d improve next",
        "steps": [
          {
            "type": "teach",
            "text": "Screenshots or a short clip make repos inviting."
          },
          {
            "type": "teach",
            "text": "Mention tradeoffs: “used vanilla on purpose” / “would add auth next.”"
          },
          {
            "type": "teach",
            "text": "Quality of one solid project > ten abandoned half-starts."
          },
          {
            "type": "mcq",
            "prompt": "Employers/learners often like…",
            "choices": [
              "Clear finished demos",
              "Secret broken zips only",
              "Empty repos",
              "Password dumps"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Explaining what you’d improve next shows maturity.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Finish over…",
            "choices": [
              "sprawl",
              "infinite scope"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u89-practice",
        "type": "practice",
        "title": "Portfolio flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Prefer projects that are…",
            "accept": [
              "small",
              "finishable"
            ],
            "explain": "small / finishable"
          },
          {
            "prompt": "Share a…",
            "accept": [
              "URL",
              "deploy"
            ],
            "explain": "live URL"
          },
          {
            "prompt": "Document with…",
            "accept": [
              "README"
            ],
            "explain": "README"
          },
          {
            "prompt": "Include practice of…",
            "accept": [
              "state",
              "forms",
              "fetch"
            ],
            "explain": "state / forms / fetch"
          },
          {
            "prompt": "Many half-starts vs one solid?",
            "accept": [
              "one solid",
              "finish one"
            ],
            "explain": "one solid"
          }
        ]
      },
      {
        "id": "u89-chest",
        "type": "chest",
        "title": "Portfolio Project Ideas chest",
        "minutes": 2
      },
      {
        "id": "u89-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Build small shipped projects. Next: graduation.",
        "knowledgeCard": "Next: Graduation Capstone",
        "steps": [
          {
            "type": "teach",
            "text": "Pick a finishable app and put it on the web."
          },
          {
            "type": "teach",
            "text": "Next: close the path — you’re ready for Node, React, and beyond."
          },
          {
            "type": "tf",
            "prompt": "Shipping teaches more than endless tutorials alone.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u90",
    "section": "Next Steps",
    "title": "Graduation Capstone",
    "blurb": "You’re ready for Node, React, and beyond.",
    "nodes": [
      {
        "id": "u90-concept",
        "type": "concept",
        "title": "You’ve got the foundation",
        "minutes": 7,
        "summary": "JS syntax, DOM, async, structure, and habits — enough to go further.",
        "knowledgeCard": "Next: build · Node · React/TS · keep practicing",
        "steps": [
          {
            "type": "teach",
            "text": "You can read and write core JavaScript, work with the DOM, and handle async data."
          },
          {
            "type": "teach",
            "text": "You know how sites are structured, how to validate input, and how to think about deploy."
          },
          {
            "type": "teach",
            "text": "Collections, purity, and debugging habits will follow you into every stack."
          },
          {
            "type": "teach",
            "text": "Graduation isn’t the end — it’s permission to learn Node, React, TypeScript, or another language with confidence."
          },
          {
            "type": "teach",
            "text": "Keep a practice rhythm: tiny daily reps beat rare marathon crams."
          },
          {
            "type": "mcq",
            "prompt": "This path prepared you to…",
            "choices": [
              "Keep learning Node/React/real projects",
              "Stop using the web",
              "Avoid all APIs",
              "Delete your editor"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Foundations make frameworks learnable.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Healthy practice style",
            "choices": [
              "daily reps",
              "never practice",
              "only cram yearly"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "A strong next move is…",
            "choices": [
              "Build something and explore Node or React",
              "Memorize only trivia forever",
              "Avoid shipping",
              "Ignore async"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You can return to earlier units anytime for review.",
            "answer": true
          }
        ]
      },
      {
        "id": "u90-memory",
        "type": "memory",
        "title": "Your launch checklist",
        "minutes": 6,
        "summary": "Ship one project, try Node hello-world, skim a React intro — in any order.",
        "knowledgeCard": "Project ✓ · node hello ✓ · React/TS peek ✓ · keep momentum",
        "steps": [
          {
            "type": "teach",
            "text": "Checklist: finish one small app, run a Node script, complete an official React intro lesson."
          },
          {
            "type": "teach",
            "text": "Help others or explain a concept — teaching locks learning in."
          },
          {
            "type": "teach",
            "text": "Milo’s proud. Now go make things that didn’t exist this morning."
          },
          {
            "type": "mcq",
            "prompt": "Graduation suggests you…",
            "choices": [
              "Use the skills on real next steps",
              "Erase the curriculum",
              "Avoid HTML",
              "Quit debugging"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Explaining a concept to someone else deepens mastery.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Runtime outside the browser",
            "choices": [
              "Node",
              "only CSS",
              "only Markdown"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u90-practice",
        "type": "practice",
        "title": "Graduation flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Ready for?",
            "accept": [
              "Node",
              "React",
              "projects"
            ],
            "explain": "Node / React / projects"
          },
          {
            "prompt": "Keep practicing…",
            "accept": [
              "daily",
              "often"
            ],
            "explain": "often / daily"
          },
          {
            "prompt": "Frameworks need?",
            "accept": [
              "foundations",
              "JS"
            ],
            "explain": "JS foundations"
          },
          {
            "prompt": "Ship something…",
            "accept": [
              "small",
              "real"
            ],
            "explain": "small & real"
          },
          {
            "prompt": "This path was…",
            "accept": [
              "foundation",
              "start"
            ],
            "explain": "a foundation"
          }
        ]
      },
      {
        "id": "u90-chest",
        "type": "chest",
        "title": "Graduation Capstone chest",
        "minutes": 2
      },
      {
        "id": "u90-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Foundation complete — build onward.",
        "knowledgeCard": "Go build. The path continues with you.",
        "steps": [
          {
            "type": "teach",
            "text": "You finished the 90-unit Learn JS path — fundamentals through a bridge outward."
          },
          {
            "type": "teach",
            "text": "Pick a project, touch Node or React, and keep your momentum alive."
          },
          {
            "type": "tf",
            "prompt": "You’re ready to keep growing as a JavaScript developer.",
            "answer": true
          }
        ]
      }
    ]
  }
];
