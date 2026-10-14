/**
 * Curriculum batch 07 — Units 61–70 (Build Sites)
 */
window.LEARN_JS_BATCH_07 = [
  {
    "id": "u61",
    "section": "Build Sites",
    "title": "Page Structure Review",
    "blurb": "HTML landmarks JS will touch.",
    "nodes": [
      {
        "id": "u61-concept",
        "type": "concept",
        "title": "Know the landmarks before you script",
        "minutes": 7,
        "summary": "header, main, nav, footer, and ids/classes JS can target.",
        "knowledgeCard": "document.querySelector(\"main\"); // landmark + hooks",
        "steps": [
          {
            "type": "teach",
            "text": "Real pages have structure: header, nav, main, sections, footer — not a soup of divs."
          },
          {
            "type": "teach",
            "text": "JS usually hooks into ids, classes, or data-* attributes on those landmarks."
          },
          {
            "type": "teach",
            "text": "semantic tags help screen readers and make querySelector targets clearer."
          },
          {
            "type": "teach",
            "text": "Plan the HTML first: what must update (lists, messages, forms) vs what stays static."
          },
          {
            "type": "teach",
            "text": "A clear structure makes later features (tabs, routing, forms) much easier."
          },
          {
            "type": "mcq",
            "prompt": "main is meant for…",
            "choices": [
              "The primary page content",
              "Only CSS files",
              "Passwords",
              "DNS settings"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Semantic landmarks help both accessibility and JS targeting.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Common content landmark",
            "choices": [
              "main",
              "blink",
              "marquee"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "JS often finds nodes with…",
            "choices": [
              "querySelector / getElementById",
              "FTP only",
              "JSON.stringify alone",
              "clearInterval"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Planning HTML hooks before coding UI logic saves rework.",
            "answer": true
          }
        ]
      },
      {
        "id": "u61-memory",
        "type": "memory",
        "title": "Stable hooks beat fragile paths",
        "minutes": 6,
        "summary": "Prefer data- attributes or clear classes over deep tag soup.",
        "knowledgeCard": "button[data-action=\"save\"] — stable hook for listeners",
        "steps": [
          {
            "type": "teach",
            "text": "data-* attributes are great hooks: data-tab=\"home\", data-id=\"42\"."
          },
          {
            "type": "teach",
            "text": "Avoid depending on exact nested tag order that designers will change."
          },
          {
            "type": "teach",
            "text": "One landmark query (main, #app) plus relative queries keeps code tidy."
          },
          {
            "type": "mcq",
            "prompt": "A stable JS hook is often…",
            "choices": [
              "data-* or a clear class/id",
              "Random tag depth",
              "The word float",
              "document.write"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "header/nav/main/footer are useful landmarks.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Find one element API",
            "choices": [
              "querySelector",
              "setInterval",
              "JSON.parse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u61-practice",
        "type": "practice",
        "title": "Page structure flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Primary content tag?",
            "accept": [
              "main"
            ],
            "explain": "main"
          },
          {
            "prompt": "Top chrome often?",
            "accept": [
              "header"
            ],
            "explain": "header"
          },
          {
            "prompt": "Links landmark?",
            "accept": [
              "nav"
            ],
            "explain": "nav"
          },
          {
            "prompt": "Find one node?",
            "accept": [
              "querySelector"
            ],
            "explain": "querySelector"
          },
          {
            "prompt": "Custom hook attr prefix?",
            "accept": [
              "data-",
              "data"
            ],
            "explain": "data-"
          }
        ]
      },
      {
        "id": "u61-chest",
        "type": "chest",
        "title": "Page Structure Review chest",
        "minutes": 2
      },
      {
        "id": "u61-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Landmarks + hooks before logic. Next: dynamic lists.",
        "knowledgeCard": "Next: Dynamic Lists in the DOM",
        "steps": [
          {
            "type": "teach",
            "text": "Structure the page so JS has clear places to read and write."
          },
          {
            "type": "teach",
            "text": "Next: render arrays as lists in the DOM."
          },
          {
            "type": "tf",
            "prompt": "Semantic HTML helps JS and accessibility.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u62",
    "section": "Build Sites",
    "title": "Dynamic Lists in the DOM",
    "blurb": "Render arrays as UI.",
    "nodes": [
      {
        "id": "u62-concept",
        "type": "concept",
        "title": "Arrays become list items",
        "minutes": 7,
        "summary": "Map data to elements; replace or append into a container.",
        "knowledgeCard": "ul.replaceChildren(...items.map(t => { const li=document.createElement(\"li\"); li.textContent=t; return li; }))",
        "steps": [
          {
            "type": "teach",
            "text": "UI lists are usually arrays in memory: todos, search results, products."
          },
          {
            "type": "teach",
            "text": "createElement + textContent (or a small template) builds each row safely."
          },
          {
            "type": "teach",
            "text": "Clear the container, then append — or use replaceChildren for a full re-render."
          },
          {
            "type": "teach",
            "text": "Re-render from data when the array changes so the DOM doesn’t drift from state."
          },
          {
            "type": "teach",
            "text": "For plain text, prefer textContent over innerHTML to avoid injection surprises."
          },
          {
            "type": "mcq",
            "prompt": "A todo list in JS is often stored as…",
            "choices": [
              "An array",
              "A CSS file",
              "A DNS record",
              "float only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "textContent is safer than innerHTML for plain strings.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Make a new element",
            "choices": [
              "createElement",
              "setItem",
              "fetch"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "After the array changes you usually…",
            "choices": [
              "Re-render the list from data",
              "Delete JavaScript",
              "Only edit CSS forever",
              "Ignore the DOM"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "replaceChildren can swap all kids of a container.",
            "answer": true
          }
        ]
      },
      {
        "id": "u62-memory",
        "type": "memory",
        "title": "One source of truth",
        "minutes": 6,
        "summary": "Update the array first, then paint the DOM from it.",
        "knowledgeCard": "items.push(x); render(items);",
        "steps": [
          {
            "type": "teach",
            "text": "Don’t only edit the DOM and forget the array — state gets lost on next render."
          },
          {
            "type": "teach",
            "text": "A render(list) function keeps painting in one place."
          },
          {
            "type": "teach",
            "text": "Empty states matter: show “No items” when the array length is 0."
          },
          {
            "type": "mcq",
            "prompt": "Best order?",
            "choices": [
              "Change data, then render",
              "Only paint DOM, never store data",
              "Shuffle CSS keys",
              "Await float"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Empty lists should still get a clear UI message.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Safe text fill",
            "choices": [
              "textContent",
              "eval",
              "innerHTML raw"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u62-practice",
        "type": "practice",
        "title": "Dynamic lists flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Data shape for lists?",
            "accept": [
              "array"
            ],
            "explain": "array"
          },
          {
            "prompt": "Create node?",
            "accept": [
              "createElement"
            ],
            "explain": "createElement"
          },
          {
            "prompt": "Safe plain text?",
            "accept": [
              "textContent"
            ],
            "explain": "textContent"
          },
          {
            "prompt": "Swap all children?",
            "accept": [
              "replaceChildren"
            ],
            "explain": "replaceChildren"
          },
          {
            "prompt": "Update UI from?",
            "accept": [
              "data",
              "array",
              "state"
            ],
            "explain": "data / array"
          }
        ]
      },
      {
        "id": "u62-chest",
        "type": "chest",
        "title": "Dynamic Lists in the DOM chest",
        "minutes": 2
      },
      {
        "id": "u62-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Render arrays into containers. Next: UI toggles.",
        "knowledgeCard": "Next: Toggle UI State",
        "steps": [
          {
            "type": "teach",
            "text": "Map array → elements; keep data as the source of truth."
          },
          {
            "type": "teach",
            "text": "Next: menus, tabs, and active classes."
          },
          {
            "type": "tf",
            "prompt": "Re-rendering from an array keeps list UI consistent.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u63",
    "section": "Build Sites",
    "title": "Toggle UI State",
    "blurb": "Menus, tabs, and active classes.",
    "nodes": [
      {
        "id": "u63-concept",
        "type": "concept",
        "title": "Open, closed, active",
        "minutes": 7,
        "summary": "classList and aria attributes drive visible UI state.",
        "knowledgeCard": "menu.classList.toggle(\"open\"); tab.classList.add(\"active\")",
        "steps": [
          {
            "type": "teach",
            "text": "UI state is often boolean: menu open?, tab selected?, modal visible?"
          },
          {
            "type": "teach",
            "text": "classList.add/remove/toggle flips CSS-driven appearance."
          },
          {
            "type": "teach",
            "text": "Only one tab should be active — remove active from siblings, add to the chosen one."
          },
          {
            "type": "teach",
            "text": "Keep a variable (or data attribute) for the current tab id so logic stays clear."
          },
          {
            "type": "teach",
            "text": "Pair visual state with accessibility attributes when you can (aria-expanded, hidden)."
          },
          {
            "type": "mcq",
            "prompt": "toggle(\"open\") on classList…",
            "choices": [
              "Adds if missing, removes if present",
              "Deletes the element",
              "Fetches JSON",
              "Clears localStorage"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Tabs usually allow only one active panel at a time.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Class helper API",
            "choices": [
              "classList",
              "JSON",
              "Map"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Showing a panel often means…",
            "choices": [
              "Removing hidden / adding active",
              "Deleting HTML files",
              "Stopping the server",
              "Using FTP"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "JS can drive CSS states via classes.",
            "answer": true
          }
        ]
      },
      {
        "id": "u63-memory",
        "type": "memory",
        "title": "Exclusive choices",
        "minutes": 6,
        "summary": "For tabs/radios, deactivate the others when activating one.",
        "knowledgeCard": "panels.forEach(p => p.hidden = true); current.hidden = false;",
        "steps": [
          {
            "type": "teach",
            "text": "hidden = true/false is a simple show/hide for panels."
          },
          {
            "type": "teach",
            "text": "Buttons that open menus should update aria-expanded for assistive tech."
          },
          {
            "type": "teach",
            "text": "Close on Escape or outside click when it fits the pattern (later polish)."
          },
          {
            "type": "mcq",
            "prompt": "Switching tabs should…",
            "choices": [
              "Hide others, show one",
              "Show all forever",
              "Remove querySelector",
              "Disable CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "aria-expanded can reflect open/closed menus.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Flip a class",
            "choices": [
              "toggle",
              "fetch",
              "parse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u63-practice",
        "type": "practice",
        "title": "UI state flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Flip class method?",
            "accept": [
              "toggle"
            ],
            "explain": "toggle"
          },
          {
            "prompt": "Class API?",
            "accept": [
              "classList"
            ],
            "explain": "classList"
          },
          {
            "prompt": "One active tab?",
            "accept": [
              "yes",
              "exclusive"
            ],
            "explain": "yes — exclusive"
          },
          {
            "prompt": "Hide panel property?",
            "accept": [
              "hidden"
            ],
            "explain": "hidden"
          },
          {
            "prompt": "Menu open hint attr?",
            "accept": [
              "aria-expanded",
              "aria"
            ],
            "explain": "aria-expanded"
          }
        ]
      },
      {
        "id": "u63-chest",
        "type": "chest",
        "title": "Toggle UI State chest",
        "minutes": 2
      },
      {
        "id": "u63-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Classes + exclusivity for UI state. Next: forms.",
        "knowledgeCard": "Next: Form Validation",
        "steps": [
          {
            "type": "teach",
            "text": "toggle/add/remove classes (and hidden) to reflect state."
          },
          {
            "type": "teach",
            "text": "Next: stop bad form input before submit."
          },
          {
            "type": "tf",
            "prompt": "UI state should stay consistent with what the user sees.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u64",
    "section": "Build Sites",
    "title": "Form Validation",
    "blurb": "Stop bad input before submit.",
    "nodes": [
      {
        "id": "u64-concept",
        "type": "concept",
        "title": "Check before you send",
        "minutes": 7,
        "summary": "Read inputs, validate, preventDefault on bad submit.",
        "knowledgeCard": "form.addEventListener(\"submit\", (e) => { if (!ok) e.preventDefault(); });",
        "steps": [
          {
            "type": "teach",
            "text": "Forms fire submit when the user sends them — listen and decide."
          },
          {
            "type": "teach",
            "text": "e.preventDefault() stops the browser’s default navigation/reload when invalid."
          },
          {
            "type": "teach",
            "text": "Trim strings; check required fields, simple email shape, min lengths."
          },
          {
            "type": "teach",
            "text": "Show an inline error message near the field; clear it when fixed."
          },
          {
            "type": "teach",
            "text": "HTML required/type=email help, but JS validation still matters for custom rules."
          },
          {
            "type": "mcq",
            "prompt": "Invalid submit should usually…",
            "choices": [
              "preventDefault",
              "delete the form",
              "crash the OS",
              "clear DNS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "trim() helps catch whitespace-only “empty” fields.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Form send event",
            "choices": [
              "submit",
              "scroll",
              "drag"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Tell the user about errors…",
            "choices": [
              "Near the field / clearly",
              "Only in the server room",
              "Via CSS float only",
              "Never"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Built-in HTML validation can help alongside JS.",
            "answer": true
          }
        ]
      },
      {
        "id": "u64-memory",
        "type": "memory",
        "title": "Validate what you care about",
        "minutes": 6,
        "summary": "Required, format, and matching fields cover most beginner forms.",
        "knowledgeCard": "if (!email.includes(\"@\")) { showError(\"Email looks off\"); }",
        "steps": [
          {
            "type": "teach",
            "text": "Start simple: non-empty, basic format, password === confirm."
          },
          {
            "type": "teach",
            "text": "Never trust the client alone for security — servers must validate too."
          },
          {
            "type": "teach",
            "text": "Disable the submit button while sending to avoid double posts."
          },
          {
            "type": "mcq",
            "prompt": "Client validation is…",
            "choices": [
              "UX help, not the only security",
              "Enough to hide all secrets",
              "A CSS replacement",
              "Useless always"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Matching password fields is a common check.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Stop default submit",
            "choices": [
              "preventDefault",
              "localStorage",
              "map"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u64-practice",
        "type": "practice",
        "title": "Form validation flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Stop navigate/reload?",
            "accept": [
              "preventDefault"
            ],
            "explain": "preventDefault"
          },
          {
            "prompt": "Form event name?",
            "accept": [
              "submit"
            ],
            "explain": "submit"
          },
          {
            "prompt": "Strip edges?",
            "accept": [
              "trim"
            ],
            "explain": "trim"
          },
          {
            "prompt": "Show problems…",
            "accept": [
              "inline",
              "near field"
            ],
            "explain": "near the field"
          },
          {
            "prompt": "Server must also?",
            "accept": [
              "validate",
              "check"
            ],
            "explain": "validate"
          }
        ]
      },
      {
        "id": "u64-chest",
        "type": "chest",
        "title": "Form Validation chest",
        "minutes": 2
      },
      {
        "id": "u64-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Validate + preventDefault. Next: debounce/throttle.",
        "knowledgeCard": "Next: Debounce & Throttle Idea",
        "steps": [
          {
            "type": "teach",
            "text": "Check inputs on submit; block bad sends; message clearly."
          },
          {
            "type": "teach",
            "text": "Next: don’t spam handlers on every keystroke/scroll."
          },
          {
            "type": "tf",
            "prompt": "preventDefault is key when a form is invalid.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u65",
    "section": "Build Sites",
    "title": "Debounce & Throttle Idea",
    "blurb": "Don’t spam handlers.",
    "nodes": [
      {
        "id": "u65-concept",
        "type": "concept",
        "title": "Slow the flood of events",
        "minutes": 7,
        "summary": "Debounce waits for a pause; throttle runs at most every N ms.",
        "knowledgeCard": "debounce: wait until quiet; throttle: at most once per interval",
        "steps": [
          {
            "type": "teach",
            "text": "input, scroll, and resize can fire dozens of times per second."
          },
          {
            "type": "teach",
            "text": "Debounce: wait until the user pauses (e.g. 300ms) then run once — great for search boxes."
          },
          {
            "type": "teach",
            "text": "Throttle: run at most every N ms during continuous activity — useful for scroll handlers."
          },
          {
            "type": "teach",
            "text": "Both cut wasted work and API calls."
          },
          {
            "type": "teach",
            "text": "Idea first: clearTimeout + setTimeout is a classic debounce sketch."
          },
          {
            "type": "mcq",
            "prompt": "Debounce typically runs…",
            "choices": [
              "After a quiet pause",
              "Every animation frame forever unchecked",
              "Only on FTP",
              "Before the page exists"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Throttle limits how often a handler runs during activity.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Search-as-you-type often uses",
            "choices": [
              "debounce",
              "innerHTML",
              "float"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Scroll position UI often uses…",
            "choices": [
              "throttle",
              "JSON only",
              "export default CSS",
              "clearInterval HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Uncontrolled input handlers can spam fetch.",
            "answer": true
          }
        ]
      },
      {
        "id": "u65-memory",
        "type": "memory",
        "title": "Sketch a debounce",
        "minutes": 6,
        "summary": "Clear the old timer; start a new one on each event.",
        "knowledgeCard": "let t; el.oninput = () => { clearTimeout(t); t = setTimeout(run, 300); };",
        "steps": [
          {
            "type": "teach",
            "text": "Each keystroke resets the timer; only the last pause fires run()."
          },
          {
            "type": "teach",
            "text": "Pick delays that feel responsive — 200–400ms is common for search."
          },
          {
            "type": "teach",
            "text": "Cancel pending timers when the component/page goes away if you can."
          },
          {
            "type": "mcq",
            "prompt": "Debounce reset tool?",
            "choices": [
              "clearTimeout",
              "querySelectorAll",
              "JSON.parse",
              "classList"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Debounce and throttle solve different timing needs.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Schedule delayed run",
            "choices": [
              "setTimeout",
              "trim",
              "map"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u65-practice",
        "type": "practice",
        "title": "Debounce/throttle flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Wait for pause?",
            "accept": [
              "debounce"
            ],
            "explain": "debounce"
          },
          {
            "prompt": "Cap rate while active?",
            "accept": [
              "throttle"
            ],
            "explain": "throttle"
          },
          {
            "prompt": "Reset delay with?",
            "accept": [
              "clearTimeout"
            ],
            "explain": "clearTimeout"
          },
          {
            "prompt": "Search typing helper?",
            "accept": [
              "debounce"
            ],
            "explain": "debounce"
          },
          {
            "prompt": "Scroll helper often?",
            "accept": [
              "throttle"
            ],
            "explain": "throttle"
          }
        ]
      },
      {
        "id": "u65-chest",
        "type": "chest",
        "title": "Debounce & Throttle Idea chest",
        "minutes": 2
      },
      {
        "id": "u65-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Debounce vs throttle for noisy events. Next: a11y.",
        "knowledgeCard": "Next: Accessibility Basics for JS",
        "steps": [
          {
            "type": "teach",
            "text": "Don’t run heavy work on every raw event."
          },
          {
            "type": "teach",
            "text": "Next: focus, labels, and keyboard basics for JS UI."
          },
          {
            "type": "tf",
            "prompt": "Debounce waits for quiet; throttle caps frequency.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u66",
    "section": "Build Sites",
    "title": "Accessibility Basics for JS",
    "blurb": "Focus, labels, and keyboard.",
    "nodes": [
      {
        "id": "u66-concept",
        "type": "concept",
        "title": "UI that more people can use",
        "minutes": 7,
        "summary": "Labels, focus, keyboard — JS must not break them.",
        "knowledgeCard": "button (not div), label↔input, focus(), Escape to close",
        "steps": [
          {
            "type": "teach",
            "text": "Prefer real <button> and <a> over clickable divs — keyboard and semantics come free."
          },
          {
            "type": "teach",
            "text": "Inputs need labels (for/id or wrap) so assistive tech can name them."
          },
          {
            "type": "teach",
            "text": "Manage focus when opening modals/menus; return focus when closing."
          },
          {
            "type": "teach",
            "text": "Support Escape to dismiss overlays when that’s the pattern."
          },
          {
            "type": "teach",
            "text": "Don’t remove outline without a clear replacement focus style."
          },
          {
            "type": "mcq",
            "prompt": "A clickable control should usually be…",
            "choices": [
              "button or link",
              "a plain div only",
              "a CSS comment",
              "localStorage"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Labels help screen reader users understand inputs.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Dismiss overlay key often",
            "choices": [
              "Escape",
              "CapsLock",
              "ScrollLock"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Opening a modal, you should often…",
            "choices": [
              "Move focus into it",
              "Delete the tab order",
              "Disable all CSS",
              "Remove buttons forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Keyboard use matters for accessibility.",
            "answer": true
          }
        ]
      },
      {
        "id": "u66-memory",
        "type": "memory",
        "title": "Announce state changes",
        "minutes": 6,
        "summary": "aria-* and live regions when visuals aren’t enough.",
        "knowledgeCard": "aria-expanded, aria-hidden, role=\"dialog\" (when appropriate)",
        "steps": [
          {
            "type": "teach",
            "text": "aria-expanded on disclosure buttons reflects open/closed."
          },
          {
            "type": "teach",
            "text": "If you must use a non-button, add role and tabindex carefully — prefer real controls."
          },
          {
            "type": "teach",
            "text": "Visible error text near fields helps everyone, not only screen readers."
          },
          {
            "type": "mcq",
            "prompt": "aria-expanded tells…",
            "choices": [
              "Open vs collapsed",
              "JSON types",
              "FTP status",
              "CSS specificity"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Focus styles should remain visible somehow.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Programmatic focus method",
            "choices": [
              "focus",
              "fetch",
              "stringify"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u66-practice",
        "type": "practice",
        "title": "Accessibility flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Prefer control tag?",
            "accept": [
              "button"
            ],
            "explain": "button"
          },
          {
            "prompt": "Input needs a…",
            "accept": [
              "label"
            ],
            "explain": "label"
          },
          {
            "prompt": "Move keyboard focus?",
            "accept": [
              "focus"
            ],
            "explain": "focus()"
          },
          {
            "prompt": "Close overlay key?",
            "accept": [
              "Escape",
              "Esc"
            ],
            "explain": "Escape"
          },
          {
            "prompt": "Open state attr?",
            "accept": [
              "aria-expanded",
              "aria"
            ],
            "explain": "aria-expanded"
          }
        ]
      },
      {
        "id": "u66-chest",
        "type": "chest",
        "title": "Accessibility Basics for JS chest",
        "minutes": 2
      },
      {
        "id": "u66-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Buttons, labels, focus, keyboard. Next: small motion.",
        "knowledgeCard": "Next: Small Animations",
        "steps": [
          {
            "type": "teach",
            "text": "JS UI must stay keyboard-friendly and clearly labeled."
          },
          {
            "type": "teach",
            "text": "Next: drive small animations with CSS classes."
          },
          {
            "type": "tf",
            "prompt": "Accessibility is part of building real sites.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u67",
    "section": "Build Sites",
    "title": "Small Animations",
    "blurb": "CSS classes driven by JS.",
    "nodes": [
      {
        "id": "u67-concept",
        "type": "concept",
        "title": "Let CSS move; let JS decide when",
        "minutes": 7,
        "summary": "Add/remove classes; transitions/animations do the motion.",
        "knowledgeCard": "el.classList.add(\"enter\"); // CSS transition handles the rest",
        "steps": [
          {
            "type": "teach",
            "text": "JS flips state; CSS transition/animation creates the motion."
          },
          {
            "type": "teach",
            "text": "Add a class like .open or .enter; remove it to reverse."
          },
          {
            "type": "teach",
            "text": "Prefer transform and opacity for smoother motion."
          },
          {
            "type": "teach",
            "text": "Respect users who prefer reduced motion when you can (matchMedia)."
          },
          {
            "type": "teach",
            "text": "Don’t animate everything — motion should guide attention, not distract."
          },
          {
            "type": "mcq",
            "prompt": "Common JS role in UI motion?",
            "choices": [
              "Toggle classes / state",
              "Replace CSS files over FTP each frame",
              "Hash passwords visually",
              "Delete transitions"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "transform and opacity are common animation-friendly properties.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Attach motion class with",
            "choices": [
              "classList",
              "JSON",
              "Map"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Too much animation can…",
            "choices": [
              "Distract / annoy",
              "Speed the network always",
              "Fix all bugs",
              "Replace HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "CSS can transition when a class appears.",
            "answer": true
          }
        ]
      },
      {
        "id": "u67-memory",
        "type": "memory",
        "title": "Enter and exit cleanly",
        "minutes": 6,
        "summary": "Wait for transitionend if you remove nodes after exit animations.",
        "knowledgeCard": "el.addEventListener(\"transitionend\", cleanup, { once: true });",
        "steps": [
          {
            "type": "teach",
            "text": "For exit animations, remove the element after transitionend."
          },
          {
            "type": "teach",
            "text": "once: true keeps the listener from stacking."
          },
          {
            "type": "teach",
            "text": "Keep durations short for UI chrome (150–300ms feels snappy)."
          },
          {
            "type": "mcq",
            "prompt": "After an exit animation you might listen for…",
            "choices": [
              "transitionend",
              "DOMContentLoaded only",
              "fetch",
              "submit forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Short UI motions often feel better than long ones.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Motion via class API",
            "choices": [
              "classList",
              "localStorage",
              "Promise"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u67-practice",
        "type": "practice",
        "title": "Animation flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "JS triggers with?",
            "accept": [
              "class",
              "classList"
            ],
            "explain": "classes / classList"
          },
          {
            "prompt": "Smooth props often?",
            "accept": [
              "transform",
              "opacity"
            ],
            "explain": "transform / opacity"
          },
          {
            "prompt": "Exit cleanup event?",
            "accept": [
              "transitionend"
            ],
            "explain": "transitionend"
          },
          {
            "prompt": "Prefer reduced…",
            "accept": [
              "motion"
            ],
            "explain": "motion"
          },
          {
            "prompt": "Motion should…",
            "accept": [
              "guide",
              "help"
            ],
            "explain": "guide attention"
          }
        ]
      },
      {
        "id": "u67-chest",
        "type": "chest",
        "title": "Small Animations chest",
        "minutes": 2
      },
      {
        "id": "u67-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Classes + CSS for small motion. Next: client routing idea.",
        "knowledgeCard": "Next: Client Routing Idea",
        "steps": [
          {
            "type": "teach",
            "text": "Toggle classes; CSS performs the animation."
          },
          {
            "type": "teach",
            "text": "Next: fake multi-page feel without a framework."
          },
          {
            "type": "tf",
            "prompt": "JS and CSS pair well for small UI animations.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u68",
    "section": "Build Sites",
    "title": "Client Routing Idea",
    "blurb": "Fake pages without a framework.",
    "nodes": [
      {
        "id": "u68-concept",
        "type": "concept",
        "title": "Views without full reloads",
        "minutes": 7,
        "summary": "Show/hide sections; sync the URL with history APIs.",
        "knowledgeCard": "history.pushState({}, \"\", \"#/about\"); showView(\"about\")",
        "steps": [
          {
            "type": "teach",
            "text": "SPAs feel like many pages but often swap views in one HTML document."
          },
          {
            "type": "teach",
            "text": "Simplest: hash routes (#/home, #/about) and listen to hashchange."
          },
          {
            "type": "teach",
            "text": "history.pushState + popstate is the modern path without hash."
          },
          {
            "type": "teach",
            "text": "A tiny router maps path → which section to show."
          },
          {
            "type": "teach",
            "text": "Frameworks add structure later — the idea stays the same."
          },
          {
            "type": "mcq",
            "prompt": "Client routing usually…",
            "choices": [
              "Swaps views without full reload",
              "Restarts the OS",
              "Deletes CSS",
              "Only works offline forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "hashchange can drive simple routers.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Add history entry",
            "choices": [
              "pushState",
              "setItem",
              "trim"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "A router maps…",
            "choices": [
              "URL → view",
              "CSS → FTP",
              "JSON → DNS",
              "button → GPU"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You can show/hide sections to simulate pages.",
            "answer": true
          }
        ]
      },
      {
        "id": "u68-memory",
        "type": "memory",
        "title": "Back button matters",
        "minutes": 6,
        "summary": "popstate/hashchange should restore the matching view.",
        "knowledgeCard": "window.addEventListener(\"popstate\", renderRoute);",
        "steps": [
          {
            "type": "teach",
            "text": "When users hit Back, update the visible view to match the URL."
          },
          {
            "type": "teach",
            "text": "On first load, read location and show the right view."
          },
          {
            "type": "teach",
            "text": "Keep titles in sync: document.title = \"About — Site\"."
          },
          {
            "type": "mcq",
            "prompt": "Back/forward should…",
            "choices": [
              "Match the URL to a view",
              "Ignore routing",
              "Clear all JS",
              "Only change fonts"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "document.title can update per view.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Hash change event",
            "choices": [
              "hashchange",
              "mouseover",
              "offline"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u68-practice",
        "type": "practice",
        "title": "Routing flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "No full reload nav?",
            "accept": [
              "client routing",
              "SPA"
            ],
            "explain": "client routing"
          },
          {
            "prompt": "Hash event?",
            "accept": [
              "hashchange"
            ],
            "explain": "hashchange"
          },
          {
            "prompt": "History API push?",
            "accept": [
              "pushState"
            ],
            "explain": "pushState"
          },
          {
            "prompt": "Back event?",
            "accept": [
              "popstate"
            ],
            "explain": "popstate"
          },
          {
            "prompt": "Map URL to…",
            "accept": [
              "view",
              "section"
            ],
            "explain": "view"
          }
        ]
      },
      {
        "id": "u68-chest",
        "type": "chest",
        "title": "Client Routing Idea chest",
        "minutes": 2
      },
      {
        "id": "u68-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "URL ↔ view without reloads. Next: deploy mindset.",
        "knowledgeCard": "Next: Deploy Mindset",
        "steps": [
          {
            "type": "teach",
            "text": "Routers show the right section for the current URL."
          },
          {
            "type": "teach",
            "text": "Next: what changes when you put a site on the internet."
          },
          {
            "type": "tf",
            "prompt": "Client routing keeps navigation feeling fast.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u69",
    "section": "Build Sites",
    "title": "Deploy Mindset",
    "blurb": "Static hosting and what breaks.",
    "nodes": [
      {
        "id": "u69-concept",
        "type": "concept",
        "title": "From laptop to the web",
        "minutes": 7,
        "summary": "Static files on a host; paths, HTTPS, and env differ.",
        "knowledgeCard": "Ship HTML/CSS/JS; fix paths; use HTTPS; configure the server/API.",
        "steps": [
          {
            "type": "teach",
            "text": "Static hosting serves your HTML/CSS/JS files to the world (Netlify, GitHub Pages, etc.)."
          },
          {
            "type": "teach",
            "text": "Relative paths that worked locally can break if the site isn’t at domain root."
          },
          {
            "type": "teach",
            "text": "HTTPS matters for secure cookies, fetch to secure APIs, and user trust."
          },
          {
            "type": "teach",
            "text": "APIs you called on localhost need a real URL and CORS configuration in production."
          },
          {
            "type": "teach",
            "text": "Never ship .env secrets in front-end bundles — they’re visible to users."
          },
          {
            "type": "mcq",
            "prompt": "Static hosts mainly serve…",
            "choices": [
              "Files like HTML/CSS/JS",
              "Your private .env to everyone safely",
              "Only FTP passwords",
              "CPU registers"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Production API URLs often differ from localhost.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Secure pages use",
            "choices": [
              "HTTPS",
              "FTP only",
              "file:// forever"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Front-end code can be…",
            "choices": [
              "Viewed by users",
              "Secret forever if minified",
              "Hidden from DevTools always",
              "Stored only in CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Broken asset paths are a common deploy bug.",
            "answer": true
          }
        ]
      },
      {
        "id": "u69-memory",
        "type": "memory",
        "title": "Checklist before you share the link",
        "minutes": 6,
        "summary": "Build, paths, env, smoke-test the live URL.",
        "knowledgeCard": "Open the live site in a private window and click the critical path.",
        "steps": [
          {
            "type": "teach",
            "text": "Click through signup/login/main flow on the deployed URL."
          },
          {
            "type": "teach",
            "text": "Check mobile width once — deploy often reveals layout issues."
          },
          {
            "type": "teach",
            "text": "Set a custom 404 page if your host allows — client routes need fallbacks sometimes."
          },
          {
            "type": "mcq",
            "prompt": "After deploy you should…",
            "choices": [
              "Smoke-test the live site",
              "Never open it",
              "Delete HTTPS",
              "Email the .env publicly"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Client-side routers may need host fallback to index.html.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Secret config file to keep private",
            "choices": [
              ".env",
              "index.html",
              "styles.css"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u69-practice",
        "type": "practice",
        "title": "Deploy flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Host static files?",
            "accept": [
              "static hosting",
              "static host"
            ],
            "explain": "static hosting"
          },
          {
            "prompt": "Secure protocol?",
            "accept": [
              "HTTPS"
            ],
            "explain": "HTTPS"
          },
          {
            "prompt": "Don’t ship?",
            "accept": [
              ".env",
              "secrets"
            ],
            "explain": ".env / secrets"
          },
          {
            "prompt": "Common break?",
            "accept": [
              "paths",
              "asset paths"
            ],
            "explain": "paths"
          },
          {
            "prompt": "Verify on…",
            "accept": [
              "live URL",
              "production"
            ],
            "explain": "the live URL"
          }
        ]
      },
      {
        "id": "u69-chest",
        "type": "chest",
        "title": "Deploy Mindset chest",
        "minutes": 2
      },
      {
        "id": "u69-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Deploy = files + paths + HTTPS + no secrets. Next: capstone.",
        "knowledgeCard": "Next: Website Capstone",
        "steps": [
          {
            "type": "teach",
            "text": "Shipping means real URLs, real path rules, and smoke tests."
          },
          {
            "type": "teach",
            "text": "Next: combine structure, lists, state, and forms in a tiny site."
          },
          {
            "type": "tf",
            "prompt": "Front-end secrets are not secret.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u70",
    "section": "Build Sites",
    "title": "Website Capstone",
    "blurb": "Ship a tiny multi-section site.",
    "nodes": [
      {
        "id": "u70-concept",
        "type": "concept",
        "title": "Put the pieces together",
        "minutes": 7,
        "summary": "Structure, list UI, toggles, form check, maybe a hash route.",
        "knowledgeCard": "sections + render(list) + tabs + validate submit (+ optional #routes)",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone recipe: clear landmarks, one dynamic list, one toggle (tabs/menu), one validated form."
          },
          {
            "type": "teach",
            "text": "Keep state in variables/arrays; render functions paint the DOM."
          },
          {
            "type": "teach",
            "text": "Optional: hash routes between Home / List / About."
          },
          {
            "type": "teach",
            "text": "Handle empty and error messages so the UI never feels broken."
          },
          {
            "type": "teach",
            "text": "This is the bridge from exercises to “I can build a small site.”"
          },
          {
            "type": "mcq",
            "prompt": "A tiny site capstone should include…",
            "choices": [
              "Structure + interactivity pieces",
              "Only a blank page",
              "Server rack setup",
              "GPU drivers"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Render-from-state keeps UI consistent.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Form guard helper",
            "choices": [
              "preventDefault",
              "pushState",
              "throttle"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Multi-section feel can use…",
            "choices": [
              "tabs or simple routes",
              "Deleting main",
              "Only setInterval",
              "JSON without DOM"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Empty states and errors are part of polish.",
            "answer": true
          }
        ]
      },
      {
        "id": "u70-memory",
        "type": "memory",
        "title": "Ship checklist",
        "minutes": 6,
        "summary": "Works on click paths, keyboard basics, and a quick mobile glance.",
        "knowledgeCard": "Happy path + invalid form + resize once; then deploy mindset.",
        "steps": [
          {
            "type": "teach",
            "text": "Test: add to list, toggle UI, fail form, fix form, succeed."
          },
          {
            "type": "teach",
            "text": "Tab through controls once — buttons should be reachable."
          },
          {
            "type": "teach",
            "text": "Next section goes deeper on collections and craft (Map/Set, style, debugging)."
          },
          {
            "type": "mcq",
            "prompt": "Before calling it done…",
            "choices": [
              "Walk the critical user path",
              "Skip all testing",
              "Remove all buttons",
              "Disable JS forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Keyboard reachability matters in a real site.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "List data type",
            "choices": [
              "array",
              "float",
              "FTP"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u70-practice",
        "type": "practice",
        "title": "Website capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Paint UI from?",
            "accept": [
              "state",
              "data"
            ],
            "explain": "state/data"
          },
          {
            "prompt": "List container fill?",
            "accept": [
              "render",
              "createElement"
            ],
            "explain": "render / createElement"
          },
          {
            "prompt": "Bad form stops with?",
            "accept": [
              "preventDefault"
            ],
            "explain": "preventDefault"
          },
          {
            "prompt": "UI open class via?",
            "accept": [
              "classList"
            ],
            "explain": "classList"
          },
          {
            "prompt": "Optional no-reload nav?",
            "accept": [
              "routing",
              "hash"
            ],
            "explain": "routing"
          }
        ]
      },
      {
        "id": "u70-chest",
        "type": "chest",
        "title": "Website Capstone chest",
        "minutes": 2
      },
      {
        "id": "u70-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Small multi-section sites are in reach. Next: Collections.",
        "knowledgeCard": "Next section: Collections",
        "steps": [
          {
            "type": "teach",
            "text": "You can structure, render, toggle, validate, and think about deploy."
          },
          {
            "type": "teach",
            "text": "Next units: Map/Set, immutability habits, debugging, and style."
          },
          {
            "type": "tf",
            "prompt": "Building tiny real UIs cements JavaScript skills.",
            "answer": true
          }
        ]
      }
    ]
  }
];
