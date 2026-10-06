/**
 * Curriculum batch 03 — Units 21–30 (The DOM)
 */
window.LEARN_JS_BATCH_03 = [
  {
    "id": "u21",
    "section": "The DOM",
    "title": "What is the DOM?",
    "blurb": "The page as a tree of nodes.",
    "nodes": [
      {
        "id": "u21-concept",
        "type": "concept",
        "title": "Document Object Model",
        "minutes": 7,
        "summary": "The DOM is the browser’s live tree of the page that JS can read and change.",
        "knowledgeCard": "document is the entry to the page tree.",
        "steps": [
          {
            "type": "teach",
            "text": "HTML is the source code of a page. The DOM is the live tree the browser builds from that HTML."
          },
          {
            "type": "teach",
            "text": "JavaScript can walk that tree: find nodes, change text, add buttons, listen for clicks."
          },
          {
            "type": "teach",
            "text": "Think: document is the whole page object. Elements are nodes in a parent/child tree."
          },
          {
            "type": "teach",
            "text": "When you “change the DOM,” you’re changing what the user sees without rewriting the .html file by hand."
          },
          {
            "type": "teach",
            "text": "DevTools Elements panel shows the DOM — great for peeking while you learn."
          },
          {
            "type": "mcq",
            "prompt": "The DOM is…",
            "choices": [
              "Only CSS colors",
              "A live tree of the page in the browser",
              "A database table",
              "A Node.js server"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "JS can update the page by changing DOM nodes.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Entry object for the page tree",
            "choices": [
              "window.css",
              "document",
              "localStorage only"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "HTML vs DOM?",
            "choices": [
              "They are identical forever",
              "HTML is source; DOM is the live model",
              "DOM is only images",
              "HTML runs the server"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Parent/child describes how elements nest.",
            "answer": true
          }
        ]
      },
      {
        "id": "u21-memory",
        "type": "memory",
        "title": "Nodes & elements",
        "minutes": 7,
        "summary": "Elements are the tags you usually care about; text can be nodes too.",
        "knowledgeCard": "An element node is like a <p> or <button> in the tree.",
        "steps": [
          {
            "type": "teach",
            "text": "Most of the time you work with element nodes: p, button, div, input…"
          },
          {
            "type": "teach",
            "text": "The tree has parents (containers) and children (inside)."
          },
          {
            "type": "teach",
            "text": "document.body is the body element — a common root for page content."
          },
          {
            "type": "mcq",
            "prompt": "document.body refers to…",
            "choices": [
              "The <head>",
              "The <body> element",
              "A CSS file",
              "A cookie"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Changing the DOM can change what users see.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Panel for inspecting the DOM",
            "choices": [
              "Network only",
              "Elements / Inspector",
              " exclusively Terminal"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Why learn the DOM?",
            "choices": [
              "To avoid all JS",
              "To make pages interactive in the browser",
              "To replace electricity",
              "To delete HTML"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u21-practice",
        "type": "practice",
        "title": "DOM intro flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "DOM stands for?",
            "accept": [
              "Document Object Model",
              "document object model"
            ],
            "explain": "A solid answer is “Document Object Model”."
          },
          {
            "prompt": "Live page tree is the…",
            "accept": [
              "DOM",
              "dom"
            ],
            "explain": "A solid answer is “DOM”."
          },
          {
            "prompt": "JS entry to the page?",
            "accept": [
              "document"
            ],
            "explain": "A solid answer is “document”."
          },
          {
            "prompt": "HTML is source; DOM is…",
            "accept": [
              "live model",
              "the live tree",
              "live"
            ],
            "explain": "A solid answer is “live model”."
          },
          {
            "prompt": "Common content root?",
            "accept": [
              "document.body",
              "body"
            ],
            "explain": "A solid answer is “document.body”."
          }
        ]
      },
      {
        "id": "u21-chest",
        "type": "chest",
        "title": "What is the DOM? chest",
        "minutes": 2
      },
      {
        "id": "u21-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "DOM = live page tree. Next: find elements with querySelector.",
        "knowledgeCard": "Next: querySelector.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: document tree, elements, change = update UI."
          },
          {
            "type": "teach",
            "text": "Next: document.querySelector to grab one element."
          },
          {
            "type": "tf",
            "prompt": "The DOM lets JS talk to the page.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u22",
    "section": "The DOM",
    "title": "querySelector",
    "blurb": "Find one element on the page.",
    "nodes": [
      {
        "id": "u22-concept",
        "type": "concept",
        "title": "Find with CSS selectors",
        "minutes": 7,
        "summary": "querySelector returns the first match for a CSS selector.",
        "knowledgeCard": "document.querySelector(\"#title\") finds id=\"title\".",
        "steps": [
          {
            "type": "teach",
            "text": "document.querySelector(selector) finds the first element that matches a CSS selector."
          },
          {
            "type": "teach",
            "text": "Examples: \"h1\", \".card\", \"#app\", \"button.primary\"."
          },
          {
            "type": "teach",
            "text": "If nothing matches, you get null — check before you use it."
          },
          {
            "type": "teach",
            "text": "querySelectorAll returns a list-like collection of all matches."
          },
          {
            "type": "teach",
            "text": "Prefer clear ids/classes in HTML so selectors stay simple."
          },
          {
            "type": "mcq",
            "prompt": "querySelector returns…",
            "choices": [
              "Always every node",
              "The first match (or null)",
              "Only CSS files",
              "A string always"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "#id selects by id.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Class selector starts with…",
            "choices": [
              "#",
              ".",
              "/"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "No match →",
            "choices": [
              "undefined always",
              "null",
              "window",
              "true"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "querySelectorAll gets many matches.",
            "answer": true
          }
        ]
      },
      {
        "id": "u22-memory",
        "type": "memory",
        "title": "Safe use after find",
        "minutes": 7,
        "summary": "Store the result, null-check, then change it.",
        "knowledgeCard": "const el = document.querySelector(\".msg\"); if (el) ...",
        "steps": [
          {
            "type": "teach",
            "text": "const el = document.querySelector(\".msg\"); then use el."
          },
          {
            "type": "teach",
            "text": "If el is null, skip changes — otherwise you get errors."
          },
          {
            "type": "teach",
            "text": "You can search inside an element: panel.querySelector(\"button\")."
          },
          {
            "type": "mcq",
            "prompt": "Best habit after querySelector?",
            "choices": [
              "Assume it always works",
              "Null-check before use",
              "Delete the HTML",
              "Only use alert"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can query within a subtree.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Id selector",
            "choices": [
              ".title",
              "#title",
              "title#"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u22-practice",
        "type": "practice",
        "title": "querySelector flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Find first match method?",
            "accept": [
              "querySelector",
              "document.querySelector"
            ],
            "explain": "A solid answer is “querySelector”."
          },
          {
            "prompt": "Find all matches?",
            "accept": [
              "querySelectorAll"
            ],
            "explain": "A solid answer is “querySelectorAll”."
          },
          {
            "prompt": "Id selector prefix?",
            "accept": [
              "#"
            ],
            "explain": "A solid answer is “#”."
          },
          {
            "prompt": "Class selector prefix?",
            "accept": [
              "."
            ],
            "explain": "A solid answer is “.”."
          },
          {
            "prompt": "No match returns?",
            "accept": [
              "null"
            ],
            "explain": "A solid answer is “null”."
          }
        ]
      },
      {
        "id": "u22-chest",
        "type": "chest",
        "title": "querySelector chest",
        "minutes": 2
      },
      {
        "id": "u22-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can find nodes. Next: change their text with textContent / innerHTML.",
        "knowledgeCard": "Next: textContent vs innerHTML.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: selectors, first match, null."
          },
          {
            "type": "teach",
            "text": "Next: putting text (and HTML) into elements."
          },
          {
            "type": "tf",
            "prompt": "querySelector uses CSS selector strings.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u23",
    "section": "The DOM",
    "title": "textContent vs innerHTML",
    "blurb": "Safe text vs HTML injection.",
    "nodes": [
      {
        "id": "u23-concept",
        "type": "concept",
        "title": "Writing into elements",
        "minutes": 7,
        "summary": "textContent sets plain text; innerHTML parses HTML.",
        "knowledgeCard": "Prefer textContent for user text — safer.",
        "steps": [
          {
            "type": "teach",
            "text": "el.textContent = \"Hi\"; sets the visible text as plain characters."
          },
          {
            "type": "teach",
            "text": "el.innerHTML = \"<strong>Hi</strong>\"; interprets HTML tags inside."
          },
          {
            "type": "teach",
            "text": "User-provided strings + innerHTML can be dangerous (XSS). Prefer textContent for untrusted text."
          },
          {
            "type": "teach",
            "text": "Reading: el.textContent gives text; el.innerHTML gives markup string."
          },
          {
            "type": "teach",
            "text": "Rule of thumb: display data → textContent. Build known safe markup yourself → innerHTML carefully."
          },
          {
            "type": "mcq",
            "prompt": "Safer for random user text?",
            "choices": [
              "innerHTML",
              "textContent",
              "eval",
              "document.write always"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "innerHTML can create real elements from tags.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Set plain Hello",
            "choices": [
              "el.innerHTML = Hello",
              "el.textContent = \"Hello\"",
              "el.css = Hello"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "XSS risk is highest with…",
            "choices": [
              "textContent of your own string",
              "innerHTML of untrusted input",
              "const",
              "==="
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u23-memory",
        "type": "memory",
        "title": "Practice the difference",
        "minutes": 7,
        "summary": "Same goal, different safety and power.",
        "knowledgeCard": "textContent ≠ HTML parsing.",
        "steps": [
          {
            "type": "teach",
            "text": "If you assign \"<b>x</b>\" to textContent, users see the angle brackets as text."
          },
          {
            "type": "teach",
            "text": "If you assign that string to innerHTML, they see bold x."
          },
          {
            "type": "teach",
            "text": "Clear a node: el.textContent = \"\" is a simple wipe."
          },
          {
            "type": "mcq",
            "prompt": "Clear text safely with…",
            "choices": [
              "el = null only",
              "el.textContent = \"\"",
              "delete document",
              "typeof el"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "textContent does not parse tags as HTML.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Bold via HTML string uses…",
            "choices": [
              "textContent",
              "innerHTML",
              "typeof"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u23-practice",
        "type": "practice",
        "title": "textContent / innerHTML flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Plain text property?",
            "accept": [
              "textContent"
            ],
            "explain": "A solid answer is “textContent”."
          },
          {
            "prompt": "HTML-parsing property?",
            "accept": [
              "innerHTML"
            ],
            "explain": "A solid answer is “innerHTML”."
          },
          {
            "prompt": "Safer for user input?",
            "accept": [
              "textContent"
            ],
            "explain": "A solid answer is “textContent”."
          },
          {
            "prompt": "Risk name for bad HTML inject?",
            "accept": [
              "XSS",
              "xss"
            ],
            "explain": "A solid answer is “XSS”."
          },
          {
            "prompt": "Clear element text?",
            "accept": [
              "textContent = \"\"",
              "el.textContent = \"\""
            ],
            "explain": "A solid answer is “textContent = \"\"”."
          }
        ]
      },
      {
        "id": "u23-chest",
        "type": "chest",
        "title": "textContent vs innerHTML chest",
        "minutes": 2
      },
      {
        "id": "u23-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can change content. Next: classes and styles.",
        "knowledgeCard": "Next: classList & style.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: textContent vs innerHTML safety."
          },
          {
            "type": "teach",
            "text": "Next: make things look different with classes."
          },
          {
            "type": "tf",
            "prompt": "Prefer textContent for untrusted strings.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u24",
    "section": "The DOM",
    "title": "Changing Styles",
    "blurb": "classList and style basics.",
    "nodes": [
      {
        "id": "u24-concept",
        "type": "concept",
        "title": "Classes over inline soup",
        "minutes": 7,
        "summary": "classList toggles CSS classes; style sets inline CSS.",
        "knowledgeCard": "el.classList.add(\"active\");",
        "steps": [
          {
            "type": "teach",
            "text": "CSS classes are the clean way to change looks. JS can add/remove them."
          },
          {
            "type": "teach",
            "text": "el.classList.add(\"open\"); el.classList.remove(\"open\"); el.classList.toggle(\"open\");"
          },
          {
            "type": "teach",
            "text": "el.classList.contains(\"open\") checks if a class is present."
          },
          {
            "type": "teach",
            "text": "el.style.color = \"red\"; sets inline style — fine for quick demos, messy at scale."
          },
          {
            "type": "teach",
            "text": "Prefer preparing CSS classes, then toggle them from JS."
          },
          {
            "type": "mcq",
            "prompt": "Best for on/off UI states?",
            "choices": [
              "Only alerts",
              "classList toggle",
              "Deleting CSS files",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "classList.add adds a class name.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Check class present",
            "choices": [
              "classList.has",
              "classList.contains",
              "style.contains"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "el.style.fontSize sets…",
            "choices": [
              "A JS variable only",
              "Inline CSS",
              "HTML id",
              "JSON"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u24-memory",
        "type": "memory",
        "title": "camelCase in style",
        "minutes": 7,
        "summary": "style.backgroundColor maps to background-color.",
        "knowledgeCard": "CSS background-color → style.backgroundColor",
        "steps": [
          {
            "type": "teach",
            "text": "Inline style properties use camelCase: backgroundColor, fontSize, marginTop."
          },
          {
            "type": "teach",
            "text": "toggle is perfect for menus and dark-mode switches."
          },
          {
            "type": "teach",
            "text": "Don’t fight CSS specificity wars with endless inline styles — classes scale better."
          },
          {
            "type": "mcq",
            "prompt": "CSS font-size in JS style is…",
            "choices": [
              "font-size",
              "fontSize",
              "Font_Size",
              "sizeFont"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "toggle adds the class if missing, removes if present.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Remove class \"hide\"",
            "choices": [
              "classList.delete",
              "classList.remove(\"hide\")",
              "style.remove"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u24-practice",
        "type": "practice",
        "title": "Styles flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Add a class?",
            "accept": [
              "classList.add",
              "el.classList.add"
            ],
            "explain": "A solid answer is “classList.add”."
          },
          {
            "prompt": "Toggle a class?",
            "accept": [
              "classList.toggle"
            ],
            "explain": "A solid answer is “classList.toggle”."
          },
          {
            "prompt": "Inline color?",
            "accept": [
              "style.color",
              "el.style.color"
            ],
            "explain": "A solid answer is “style.color”."
          },
          {
            "prompt": "background-color in JS?",
            "accept": [
              "backgroundColor"
            ],
            "explain": "A solid answer is “backgroundColor”."
          },
          {
            "prompt": "Check class?",
            "accept": [
              "contains",
              "classList.contains"
            ],
            "explain": "A solid answer is “contains”."
          }
        ]
      },
      {
        "id": "u24-chest",
        "type": "chest",
        "title": "Changing Styles chest",
        "minutes": 2
      },
      {
        "id": "u24-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can restyle via classes. Next: create elements from scratch.",
        "knowledgeCard": "Next: createElement & append.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: classList + light style use."
          },
          {
            "type": "teach",
            "text": "Next: build new DOM nodes in code."
          },
          {
            "type": "tf",
            "prompt": "classList is the usual tool for UI state.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u25",
    "section": "The DOM",
    "title": "Creating Elements",
    "blurb": "createElement and append.",
    "nodes": [
      {
        "id": "u25-concept",
        "type": "concept",
        "title": "Build nodes in JS",
        "minutes": 7,
        "summary": "createElement makes a tag; append puts it in the tree.",
        "knowledgeCard": "const li = document.createElement(\"li\"); parent.append(li);",
        "steps": [
          {
            "type": "teach",
            "text": "document.createElement(\"button\") creates a button element in memory."
          },
          {
            "type": "teach",
            "text": "Set content: btn.textContent = \"Save\";"
          },
          {
            "type": "teach",
            "text": "Put it on the page: parent.append(btn); or parent.appendChild(btn);"
          },
          {
            "type": "teach",
            "text": "You can create many nodes in a loop — great for lists from arrays."
          },
          {
            "type": "teach",
            "text": "Order matters: create → configure → append."
          },
          {
            "type": "mcq",
            "prompt": "createElement returns…",
            "choices": [
              "A string",
              "A new element node",
              "A CSS rule",
              "null always"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "append adds a node into the document tree under a parent.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "First step to make a div",
            "choices": [
              "append(\"div\")",
              "document.createElement(\"div\")",
              "new Div()"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Configure before…",
            "choices": [
              "Deleting JS",
              "Appending to the page",
              "Closing the laptop",
              "typeof"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u25-memory",
        "type": "memory",
        "title": "Lists from data",
        "minutes": 7,
        "summary": "Map array items to elements.",
        "knowledgeCard": "For each item → createElement → textContent → append.",
        "steps": [
          {
            "type": "teach",
            "text": "Pattern: for (const item of items) { const li = document.createElement(\"li\"); li.textContent = item; list.append(li); }"
          },
          {
            "type": "teach",
            "text": "Clear old children first if re-rendering: list.textContent = \"\";"
          },
          {
            "type": "teach",
            "text": "Prefer this over giant innerHTML strings when learning — clearer and safer."
          },
          {
            "type": "mcq",
            "prompt": "Re-render a list often starts by…",
            "choices": [
              "Ignoring the parent",
              "Clearing old children",
              "Deleting querySelector",
              "Using only alerts"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can append multiple nodes over time.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Add child to parent",
            "choices": [
              "parent.append(child)",
              "child.append(parent)",
              "append.parent"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u25-practice",
        "type": "practice",
        "title": "createElement flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Create a tag?",
            "accept": [
              "createElement",
              "document.createElement"
            ],
            "explain": "A solid answer is “createElement”."
          },
          {
            "prompt": "Attach to parent?",
            "accept": [
              "append",
              "appendChild",
              "parent.append"
            ],
            "explain": "A solid answer is “append”."
          },
          {
            "prompt": "Set plain label?",
            "accept": [
              "textContent"
            ],
            "explain": "A solid answer is “textContent”."
          },
          {
            "prompt": "Loop data into UI?",
            "accept": [
              "createElement per item",
              "for...of + createElement"
            ],
            "explain": "A solid answer is “createElement per item”."
          },
          {
            "prompt": "Clear children simply?",
            "accept": [
              "textContent = \"\""
            ],
            "explain": "A solid answer is “textContent = \"\"”."
          }
        ]
      },
      {
        "id": "u25-chest",
        "type": "chest",
        "title": "Creating Elements chest",
        "minutes": 2
      },
      {
        "id": "u25-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can build UI nodes. Next: read form values.",
        "knowledgeCard": "Next: inputs & values.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: createElement → set → append."
          },
          {
            "type": "teach",
            "text": "Next: forms and .value."
          },
          {
            "type": "tf",
            "prompt": "Dynamic lists often use createElement in a loop.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u26",
    "section": "The DOM",
    "title": "Forms & Values",
    "blurb": "Read inputs the user typed.",
    "nodes": [
      {
        "id": "u26-concept",
        "type": "concept",
        "title": "input.value",
        "minutes": 7,
        "summary": "Form controls expose their current value to JS.",
        "knowledgeCard": "const name = inputEl.value;",
        "steps": [
          {
            "type": "teach",
            "text": "Text inputs and textareas store what the user typed in .value."
          },
          {
            "type": "teach",
            "text": "const email = document.querySelector(\"#email\").value;"
          },
          {
            "type": "teach",
            "text": "Checkboxes use .checked (true/false). Selects use .value for the chosen option."
          },
          {
            "type": "teach",
            "text": "Always trim when it matters: value.trim()."
          },
          {
            "type": "teach",
            "text": "Empty string \"\" means the field is blank — validate before trusting it."
          },
          {
            "type": "mcq",
            "prompt": "Read typed text via…",
            "choices": [
              ".textContent only",
              ".value",
              ".innerHTML only",
              ".css"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "checkbox.checked is boolean.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Blank input value",
            "choices": [
              "null always",
              "\"\"",
              "undefined always"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Useful cleanup method?",
            "choices": [
              "explode()",
              "trim()",
              "dom()",
              "paint()"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u26-memory",
        "type": "memory",
        "title": "Write back to inputs",
        "minutes": 7,
        "summary": "You can set .value to prefill or clear fields.",
        "knowledgeCard": "input.value = \"\"; clears a text field.",
        "steps": [
          {
            "type": "teach",
            "text": "Setting input.value updates what the user sees in the field."
          },
          {
            "type": "teach",
            "text": "Clear after submit: input.value = \"\";"
          },
          {
            "type": "teach",
            "text": "Don’t confuse .value (forms) with .textContent (most other elements)."
          },
          {
            "type": "mcq",
            "prompt": "Prefill an input with…",
            "choices": [
              "input.value = \"Ada\"",
              "input.textContent = \"Ada\" only",
              "input.append",
              "typeof input"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "select.value reflects the chosen option value.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Boolean for checkbox",
            "choices": [
              "value",
              "checked",
              "selectedIndex always"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u26-practice",
        "type": "practice",
        "title": "Forms flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Text field property?",
            "accept": [
              "value",
              ".value"
            ],
            "explain": "A solid answer is “value”."
          },
          {
            "prompt": "Checkbox on/off?",
            "accept": [
              "checked",
              ".checked"
            ],
            "explain": "A solid answer is “checked”."
          },
          {
            "prompt": "Strip spaces?",
            "accept": [
              "trim",
              ".trim()"
            ],
            "explain": "A solid answer is “trim”."
          },
          {
            "prompt": "Clear text input?",
            "accept": [
              "value = \"\"",
              "input.value = \"\""
            ],
            "explain": "A solid answer is “value = \"\"”."
          },
          {
            "prompt": "Not for most non-inputs?",
            "accept": [
              "value",
              "use textContent instead"
            ],
            "explain": "A solid answer is “value”."
          }
        ]
      },
      {
        "id": "u26-chest",
        "type": "chest",
        "title": "Forms & Values chest",
        "minutes": 2
      },
      {
        "id": "u26-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can read forms. Next: react to clicks.",
        "knowledgeCard": "Next: click events.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: value, checked, trim, clear."
          },
          {
            "type": "teach",
            "text": "Next: addEventListener(\"click\", ...)."
          },
          {
            "type": "tf",
            "prompt": ".value is key for text inputs.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u27",
    "section": "The DOM",
    "title": "Events: click",
    "blurb": "addEventListener for clicks.",
    "nodes": [
      {
        "id": "u27-concept",
        "type": "concept",
        "title": "Listen for clicks",
        "minutes": 7,
        "summary": "addEventListener runs your function when an event happens.",
        "knowledgeCard": "btn.addEventListener(\"click\", handler);",
        "steps": [
          {
            "type": "teach",
            "text": "Pages are event-driven: clicks, typing, submits…"
          },
          {
            "type": "teach",
            "text": "element.addEventListener(\"click\", function () { ... }); runs the function on click."
          },
          {
            "type": "teach",
            "text": "You can pass a named function: btn.addEventListener(\"click\", onSave);"
          },
          {
            "type": "teach",
            "text": "Inside the handler, update the DOM: change text, toggle classes, push to a list."
          },
          {
            "type": "teach",
            "text": "One element can have multiple listeners."
          },
          {
            "type": "mcq",
            "prompt": "Register a click handler with…",
            "choices": [
              "querySelector only",
              "addEventListener",
              "innerHTML only",
              "JSON.parse"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "The handler runs when the event occurs, not at registration time (unless you call it).",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Event name for mouse click",
            "choices": [
              "tap",
              "click",
              "press"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "onSave in addEventListener(\"click\", onSave) should be…",
            "choices": [
              "A string of HTML",
              "A function",
              "A CSS file",
              "null forever"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u27-memory",
        "type": "memory",
        "title": "Handler habits",
        "minutes": 7,
        "summary": "Keep handlers small; update state then UI.",
        "knowledgeCard": "Click → change data → update DOM.",
        "steps": [
          {
            "type": "teach",
            "text": "Good pattern: click handler updates your data, then refreshes the UI."
          },
          {
            "type": "teach",
            "text": "Avoid huge anonymous handlers you can’t test — name them when they grow."
          },
          {
            "type": "teach",
            "text": "event.target is the thing that was clicked (more next units)."
          },
          {
            "type": "mcq",
            "prompt": "After a click you often…",
            "choices": [
              "Only reboot",
              "Update DOM based on new state",
              "Delete document",
              "Disable JS forever"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Multiple listeners can exist on one button.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Method to listen",
            "choices": [
              "onListen",
              "addEventListener",
              "waitFor"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u27-practice",
        "type": "practice",
        "title": "Click events flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Listen API?",
            "accept": [
              "addEventListener"
            ],
            "explain": "A solid answer is “addEventListener”."
          },
          {
            "prompt": "Click event name?",
            "accept": [
              "click"
            ],
            "explain": "A solid answer is “click”."
          },
          {
            "prompt": "Handler type?",
            "accept": [
              "function"
            ],
            "explain": "A solid answer is “function”."
          },
          {
            "prompt": "Pattern?",
            "accept": [
              "data then UI",
              "update data then DOM"
            ],
            "explain": "A solid answer is “data then UI”."
          },
          {
            "prompt": "Clicked node often via…",
            "accept": [
              "event.target",
              "target"
            ],
            "explain": "A solid answer is “event.target”."
          }
        ]
      },
      {
        "id": "u27-chest",
        "type": "chest",
        "title": "Events: click chest",
        "minutes": 2
      },
      {
        "id": "u27-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Clicks work. Next: input and submit events.",
        "knowledgeCard": "Next: input & submit.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: addEventListener(\"click\", handler)."
          },
          {
            "type": "teach",
            "text": "Next: react while typing and on form submit."
          },
          {
            "type": "tf",
            "prompt": "Events connect user actions to your code.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u28",
    "section": "The DOM",
    "title": "Events: input & submit",
    "blurb": "Live typing and forms.",
    "nodes": [
      {
        "id": "u28-concept",
        "type": "concept",
        "title": "input and submit",
        "minutes": 7,
        "summary": "input fires as the user types; submit fires when a form is sent.",
        "knowledgeCard": "form.addEventListener(\"submit\", (e) => { e.preventDefault(); ... });",
        "steps": [
          {
            "type": "teach",
            "text": "The \"input\" event fires when the value of an input/textarea changes (as the user types)."
          },
          {
            "type": "teach",
            "text": "Great for live search or enabling a button when the field isn’t empty."
          },
          {
            "type": "teach",
            "text": "The \"submit\" event fires on a <form> when the user submits."
          },
          {
            "type": "teach",
            "text": "Call event.preventDefault() to stop the browser’s full page reload on submit."
          },
          {
            "type": "teach",
            "text": "Then read .value fields and run your own logic."
          },
          {
            "type": "mcq",
            "prompt": "Stop form reload with…",
            "choices": [
              "preventDefault",
              "stopHTML",
              "delete form",
              "typeof"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "\"input\" events are useful for live feedback.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Listen on the form for send",
            "choices": [
              "click only",
              "submit",
              "scroll"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Typing into a field often triggers…",
            "choices": [
              "submit only",
              "input",
              "DOMContentLoaded only",
              "resize only"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u28-memory",
        "type": "memory",
        "title": "Wire a small form",
        "minutes": 7,
        "summary": "submit → preventDefault → read values → update UI.",
        "knowledgeCard": "e.preventDefault(); const q = input.value.trim();",
        "steps": [
          {
            "type": "teach",
            "text": "Recipe: form submit listener → preventDefault → trim values → validate → update DOM."
          },
          {
            "type": "teach",
            "text": "Disable submit until required fields aren’t empty (optional polish)."
          },
          {
            "type": "teach",
            "text": "Clear fields after success for a friendly UX."
          },
          {
            "type": "mcq",
            "prompt": "First call inside many submit handlers?",
            "choices": [
              "location.reload always",
              "e.preventDefault()",
              "JSON.stringify(document)",
              "removeEventListener all"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can combine input + submit listeners on related elements.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Live typing event",
            "choices": [
              "submit",
              "input",
              "load"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u28-practice",
        "type": "practice",
        "title": "input/submit flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Typing event?",
            "accept": [
              "input"
            ],
            "explain": "A solid answer is “input”."
          },
          {
            "prompt": "Form send event?",
            "accept": [
              "submit"
            ],
            "explain": "A solid answer is “submit”."
          },
          {
            "prompt": "Block reload?",
            "accept": [
              "preventDefault",
              "e.preventDefault()"
            ],
            "explain": "A solid answer is “preventDefault”."
          },
          {
            "prompt": "Read field?",
            "accept": [
              "value"
            ],
            "explain": "A solid answer is “value”."
          },
          {
            "prompt": "Trim before use?",
            "accept": [
              "yes",
              "trim",
              ".trim()"
            ],
            "explain": "A solid answer is “yes”."
          }
        ]
      },
      {
        "id": "u28-chest",
        "type": "chest",
        "title": "Events: input & submit chest",
        "minutes": 2
      },
      {
        "id": "u28-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Forms can be fully JS-driven. Next: how events bubble.",
        "knowledgeCard": "Next: bubbling.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: input, submit, preventDefault."
          },
          {
            "type": "teach",
            "text": "Next: event bubbling — events travel up the tree."
          },
          {
            "type": "tf",
            "prompt": "preventDefault is key for custom form handling.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u29",
    "section": "The DOM",
    "title": "Event Bubbling Basics",
    "blurb": "How events travel up the tree.",
    "nodes": [
      {
        "id": "u29-concept",
        "type": "concept",
        "title": "Bubble up the tree",
        "minutes": 7,
        "summary": "Most events start at the target and bubble to parents.",
        "knowledgeCard": "Click a button → also notifies parent listeners unless stopped.",
        "steps": [
          {
            "type": "teach",
            "text": "When you click a button inside a div, the event targets the button, then bubbles up to parents."
          },
          {
            "type": "teach",
            "text": "That’s why a listener on a parent can hear clicks from children."
          },
          {
            "type": "teach",
            "text": "event.target = the original element. event.currentTarget = the element whose listener is running."
          },
          {
            "type": "teach",
            "text": "event.stopPropagation() stops the bubble from going further up."
          },
          {
            "type": "teach",
            "text": "Event delegation: one parent listener handles many child clicks — powerful for lists."
          },
          {
            "type": "mcq",
            "prompt": "Bubbling means events…",
            "choices": [
              "Only go to CSS",
              "Travel upward to ancestors",
              "Delete parents",
              "Skip the target"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Parent listeners can hear child clicks.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Original clicked element",
            "choices": [
              "currentTarget",
              "target",
              "parentNode only"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "stopPropagation…",
            "choices": [
              "Stops bubbling upward",
              "Deletes JS",
              "Parses JSON",
              "Creates elements"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u29-memory",
        "type": "memory",
        "title": "Delegation sketch",
        "minutes": 7,
        "summary": "Listen once on a list; check event.target.",
        "knowledgeCard": "ul.addEventListener(\"click\", (e) => { if (e.target.matches(\"button\")) ... });",
        "steps": [
          {
            "type": "teach",
            "text": "For a todo list, put one click listener on the <ul>, not on every <li> button."
          },
          {
            "type": "teach",
            "text": "Inside, ask: did they click a button? e.target.matches(\"button\")."
          },
          {
            "type": "teach",
            "text": "Delegation scales when items are added later — new children still bubble to the parent."
          },
          {
            "type": "mcq",
            "prompt": "Delegation listens on…",
            "choices": [
              "Only window.alert",
              "A common parent",
              "Each future pixel",
              "JSON"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "New children can still trigger a parent delegated listener.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Stop bubble method",
            "choices": [
              "stopPropagation",
              "preventDefault only",
              "querySelector"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u29-practice",
        "type": "practice",
        "title": "Bubbling flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Events travel…",
            "accept": [
              "up",
              "upward",
              "bubble up"
            ],
            "explain": "A solid answer is “up”."
          },
          {
            "prompt": "Original element?",
            "accept": [
              "target",
              "event.target"
            ],
            "explain": "A solid answer is “target”."
          },
          {
            "prompt": "Listener element?",
            "accept": [
              "currentTarget"
            ],
            "explain": "A solid answer is “currentTarget”."
          },
          {
            "prompt": "Stop bubble?",
            "accept": [
              "stopPropagation"
            ],
            "explain": "A solid answer is “stopPropagation”."
          },
          {
            "prompt": "One parent for many kids?",
            "accept": [
              "delegation",
              "event delegation"
            ],
            "explain": "A solid answer is “delegation”."
          }
        ]
      },
      {
        "id": "u29-chest",
        "type": "chest",
        "title": "Event Bubbling Basics chest",
        "minutes": 2
      },
      {
        "id": "u29-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Bubbling enables delegation. Next: DOM capstone project patterns.",
        "knowledgeCard": "Next: DOM Capstone.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: target vs currentTarget, bubble, delegation."
          },
          {
            "type": "teach",
            "text": "Next: put find + text + events together."
          },
          {
            "type": "tf",
            "prompt": "Delegation uses bubbling on purpose.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u30",
    "section": "The DOM",
    "title": "DOM Capstone",
    "blurb": "A tiny interactive page.",
    "nodes": [
      {
        "id": "u30-concept",
        "type": "concept",
        "title": "Wire a mini feature",
        "minutes": 7,
        "summary": "Find nodes, update text, listen for events — one small feature.",
        "knowledgeCard": "querySelector + textContent + addEventListener = interactive UI.",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone recipe: select elements → listen for events → read values → update the DOM."
          },
          {
            "type": "teach",
            "text": "Example: a counter button, a note saver, or a show/hide FAQ."
          },
          {
            "type": "teach",
            "text": "Keep state in JS variables; reflect state into the DOM."
          },
          {
            "type": "teach",
            "text": "Name handlers; keep them short; null-check querySelector results."
          },
          {
            "type": "teach",
            "text": "This is the bridge to components in React later — same idea, different syntax."
          },
          {
            "type": "mcq",
            "prompt": "Interactive page loop?",
            "choices": [
              "Only CSS animations",
              "Event → update state → update DOM",
              "Never use events",
              "Only JSON.stringify"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "State in variables + DOM as the view is a solid mental model.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Find node tool",
            "choices": [
              "createElement only",
              "querySelector",
              "Map"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "After DOM foundations you’re closer to…",
            "choices": [
              "Avoiding all frameworks forever",
              "Learning React/UI libraries with less fear",
              "Skipping JS",
              "Only SQL"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u30-memory",
        "type": "memory",
        "title": "Checklist before you build",
        "minutes": 7,
        "summary": "HTML hooks, CSS states, JS listeners.",
        "knowledgeCard": "Ids/classes in HTML · classes for states · listeners in JS.",
        "steps": [
          {
            "type": "teach",
            "text": "Give elements ids/classes you can select."
          },
          {
            "type": "teach",
            "text": "Prepare CSS classes for states: .open, .active, .error."
          },
          {
            "type": "teach",
            "text": "Write listeners that toggle those classes and set textContent."
          },
          {
            "type": "mcq",
            "prompt": "UI state class example?",
            "choices": [
              ".active",
              "typeof",
              "===",
              "JSON"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Capstones should stay small and finishable.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Safer user text",
            "choices": [
              "innerHTML",
              "textContent",
              "eval"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u30-practice",
        "type": "practice",
        "title": "DOM capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Find element?",
            "accept": [
              "querySelector"
            ],
            "explain": "A solid answer is “querySelector”."
          },
          {
            "prompt": "Set plain text?",
            "accept": [
              "textContent"
            ],
            "explain": "A solid answer is “textContent”."
          },
          {
            "prompt": "Listen for click?",
            "accept": [
              "addEventListener"
            ],
            "explain": "A solid answer is “addEventListener”."
          },
          {
            "prompt": "Form reload stop?",
            "accept": [
              "preventDefault"
            ],
            "explain": "A solid answer is “preventDefault”."
          },
          {
            "prompt": "Next path section?",
            "accept": [
              "Functions+",
              "functions",
              "Functions plus"
            ],
            "explain": "A solid answer is “Functions+”."
          }
        ]
      },
      {
        "id": "u30-chest",
        "type": "chest",
        "title": "DOM Capstone chest",
        "minutes": 2
      },
      {
        "id": "u30-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "DOM section done. Next: deeper functions (map, filter, arrows…).",
        "knowledgeCard": "Next batch: Functions+ starting at Unit 31.",
        "steps": [
          {
            "type": "teach",
            "text": "DOM complete: tree, select, text/HTML, styles, create, forms, events, bubbling."
          },
          {
            "type": "teach",
            "text": "Next: level up functions — arrows, callbacks, map/filter."
          },
          {
            "type": "tf",
            "prompt": "You can make a page respond to users now.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "A later framework that builds on these ideas is…",
            "choices": [
              "React",
              "Microsoft Paint only",
              "CSS alone",
              "FTP"
            ],
            "answer": 0
          }
        ]
      }
    ]
  }
];
