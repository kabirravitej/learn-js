/**
 * Curriculum batch 06 — Units 51–60 (Async)
 */
window.LEARN_JS_BATCH_06 = [
  {
    "id": "u51",
    "section": "Async",
    "title": "Sync vs Async",
    "blurb": "Why waiting matters.",
    "nodes": [
      {
        "id": "u51-concept",
        "type": "concept",
        "title": "Not everything finishes right away",
        "minutes": 7,
        "summary": "Sync code runs top to bottom now; async work finishes later.",
        "knowledgeCard": "Sync: now. Async: later (timers, network, files).",
        "steps": [
          {
            "type": "teach",
            "text": "Synchronous code runs line by line and waits for each line to finish before the next."
          },
          {
            "type": "teach",
            "text": "Asynchronous work starts now but finishes later — network requests, timers, reading big files."
          },
          {
            "type": "teach",
            "text": "If everything waited for the network, the page would freeze until the server replied."
          },
          {
            "type": "teach",
            "text": "Browsers keep the UI responsive by scheduling async callbacks when results are ready."
          },
          {
            "type": "teach",
            "text": "You’ll use async tools (timers, Promises, fetch) so “wait” doesn’t mean “freeze.”"
          },
          {
            "type": "mcq",
            "prompt": "Async work finishes…",
            "choices": [
              "Always before the next line",
              "Later, when ready",
              "Only in CSS",
              "Never"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Sync code runs in order without pausing the engine for later work.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Waiting without freezing the page is…",
            "choices": [
              "sync only",
              "async",
              "HTML"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "A long network wait in sync style would…",
            "choices": [
              "Freeze the UI",
              "Speed up CSS",
              "Delete cookies",
              "Rename files"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Timers and fetch are common async entry points.",
            "answer": true
          }
        ]
      },
      {
        "id": "u51-memory",
        "type": "memory",
        "title": "Order can surprise you",
        "minutes": 6,
        "summary": "Later callbacks can log after “later” sync lines.",
        "knowledgeCard": "Async callbacks run after the current sync stack clears.",
        "steps": [
          {
            "type": "teach",
            "text": "console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); console.log(\"C\"); often prints A, C, then B."
          },
          {
            "type": "teach",
            "text": "The timer callback is queued; sync work finishes first."
          },
          {
            "type": "teach",
            "text": "Thinking in “now vs later” prevents bugs when mixing UI updates and network."
          },
          {
            "type": "mcq",
            "prompt": "With setTimeout(..., 0) between two logs, the timeout usually runs…",
            "choices": [
              "Before both logs",
              "After the sync logs",
              "Instead of JS",
              "Only on servers"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Async means the browser must freeze until done.",
            "answer": false
          },
          {
            "type": "tap",
            "prompt": "Word for “finishes later”",
            "choices": [
              "async",
              "float",
              "margin"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u51-practice",
        "type": "practice",
        "title": "Sync vs async flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Finishes later without freezing?",
            "accept": [
              "async"
            ],
            "explain": "async"
          },
          {
            "prompt": "Runs line-by-line now?",
            "accept": [
              "sync"
            ],
            "explain": "sync / synchronous"
          },
          {
            "prompt": "Network requests are usually…",
            "accept": [
              "async"
            ],
            "explain": "async"
          },
          {
            "prompt": "UI stays usable because work is…",
            "accept": [
              "async",
              "asynchronous"
            ],
            "explain": "async"
          },
          {
            "prompt": "Timers schedule work for…",
            "accept": [
              "later"
            ],
            "explain": "later"
          }
        ]
      },
      {
        "id": "u51-chest",
        "type": "chest",
        "title": "Sync vs Async chest",
        "minutes": 2
      },
      {
        "id": "u51-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Sync is now; async is later. Next: timers.",
        "knowledgeCard": "Next: setTimeout & setInterval",
        "steps": [
          {
            "type": "teach",
            "text": "You can start work now and handle the result later — that’s async."
          },
          {
            "type": "teach",
            "text": "Next unit: schedule code with setTimeout and setInterval."
          },
          {
            "type": "tf",
            "prompt": "Async helps keep pages responsive while waiting.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u52",
    "section": "Async",
    "title": "setTimeout & setInterval",
    "blurb": "Timers in the browser.",
    "nodes": [
      {
        "id": "u52-concept",
        "type": "concept",
        "title": "Schedule code for later",
        "minutes": 7,
        "summary": "setTimeout runs once after a delay; setInterval repeats.",
        "knowledgeCard": "setTimeout(fn, ms); setInterval(fn, ms); clearTimeout / clearInterval",
        "steps": [
          {
            "type": "teach",
            "text": "setTimeout(fn, ms) runs fn once after about ms milliseconds."
          },
          {
            "type": "teach",
            "text": "setInterval(fn, ms) keeps calling fn every ms until you clear it."
          },
          {
            "type": "teach",
            "text": "Both return an id you can pass to clearTimeout or clearInterval to cancel."
          },
          {
            "type": "teach",
            "text": "Delay 0 still means “soon after sync code,” not “before the next line.”"
          },
          {
            "type": "teach",
            "text": "Use timers for UI delays, polling demos, and practicing async order — prefer clearer tools for real data."
          },
          {
            "type": "mcq",
            "prompt": "setTimeout(fn, 1000) runs fn…",
            "choices": [
              "Every 1s forever",
              "Once after ~1s",
              "Before any sync code",
              "Only in Node"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "setInterval repeats until cleared.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Cancel a timeout with…",
            "choices": [
              "clearTimeout",
              "deleteTimer",
              "stop.html"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "clearInterval needs…",
            "choices": [
              "The id from setInterval",
              "A CSS selector",
              "A password",
              "JSON only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Delay 0 guarantees running before the next sync line.",
            "answer": false
          }
        ]
      },
      {
        "id": "u52-memory",
        "type": "memory",
        "title": "Cancel when you’re done",
        "minutes": 6,
        "summary": "Store timer ids; clear them to avoid leaks and surprise calls.",
        "knowledgeCard": "const id = setInterval(...); clearInterval(id);",
        "steps": [
          {
            "type": "teach",
            "text": "Save the return value: const id = setTimeout(() => {}, 500);"
          },
          {
            "type": "teach",
            "text": "Leaving intervals running after a page “closes” a view wastes work and can update removed UI."
          },
          {
            "type": "teach",
            "text": "For one-shot delays, setTimeout is enough; for repeats, remember to clearInterval."
          },
          {
            "type": "mcq",
            "prompt": "Why clear an interval?",
            "choices": [
              "To stop repeats",
              "To minify CSS",
              "To hash passwords",
              "To rename HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Timer functions receive a callback to run later.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Repeating timer API",
            "choices": [
              "setInterval",
              "setOnce",
              "forLoop"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u52-practice",
        "type": "practice",
        "title": "Timers flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Run once after delay?",
            "accept": [
              "setTimeout"
            ],
            "explain": "setTimeout"
          },
          {
            "prompt": "Run repeatedly?",
            "accept": [
              "setInterval"
            ],
            "explain": "setInterval"
          },
          {
            "prompt": "Cancel timeout?",
            "accept": [
              "clearTimeout"
            ],
            "explain": "clearTimeout"
          },
          {
            "prompt": "Cancel interval?",
            "accept": [
              "clearInterval"
            ],
            "explain": "clearInterval"
          },
          {
            "prompt": "Delay unit?",
            "accept": [
              "ms",
              "milliseconds"
            ],
            "explain": "milliseconds"
          }
        ]
      },
      {
        "id": "u52-chest",
        "type": "chest",
        "title": "setTimeout & setInterval chest",
        "minutes": 2
      },
      {
        "id": "u52-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Timers schedule later work. Next: Promises.",
        "knowledgeCard": "Next: Promise then/catch",
        "steps": [
          {
            "type": "teach",
            "text": "setTimeout / setInterval put callbacks on a timer."
          },
          {
            "type": "teach",
            "text": "Next: Promises — a standard way to represent “value later.”"
          },
          {
            "type": "tf",
            "prompt": "You should clear intervals you no longer need.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u53",
    "section": "Async",
    "title": "Promises Intro",
    "blurb": "then, catch, and states.",
    "nodes": [
      {
        "id": "u53-concept",
        "type": "concept",
        "title": "A value that arrives later",
        "minutes": 7,
        "summary": "A Promise is pending, then fulfilled or rejected.",
        "knowledgeCard": "promise.then(onOk).catch(onErr) — pending → fulfilled | rejected",
        "steps": [
          {
            "type": "teach",
            "text": "A Promise represents a future result: pending until it settles."
          },
          {
            "type": "teach",
            "text": "Fulfilled means success (you get a value); rejected means failure (you get a reason/error)."
          },
          {
            "type": "teach",
            "text": "promise.then(fn) runs fn with the fulfilled value."
          },
          {
            "type": "teach",
            "text": "promise.catch(fn) runs fn when something rejects."
          },
          {
            "type": "teach",
            "text": "You can chain: fetch(...).then(...).then(...).catch(...)."
          },
          {
            "type": "mcq",
            "prompt": "Before it settles, a Promise is…",
            "choices": [
              "pending",
              "CSS",
              "HTMLOnly",
              "number"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "then handles a fulfilled value.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Handle failure with…",
            "choices": [
              "catch",
              "margin",
              "float"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Rejected means…",
            "choices": [
              "Success value ready",
              "Failure / error path",
              "Sync forever",
              "No JS"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Promises only work for CSS animations.",
            "answer": false
          }
        ]
      },
      {
        "id": "u53-memory",
        "type": "memory",
        "title": "Chain the happy path",
        "minutes": 6,
        "summary": "Each then can return a value (or another Promise) for the next step.",
        "knowledgeCard": "p.then(v => v * 2).then(console.log).catch(console.error)",
        "steps": [
          {
            "type": "teach",
            "text": "Returning a value from then passes it to the next then."
          },
          {
            "type": "teach",
            "text": "Returning a Promise waits for that Promise before continuing the chain."
          },
          {
            "type": "teach",
            "text": "One catch at the end can handle rejections from earlier steps."
          },
          {
            "type": "mcq",
            "prompt": "then callbacks run when the Promise is…",
            "choices": [
              "fulfilled",
              "deleted",
              "CSS",
              "pending forever only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You can attach catch after then.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Success handler method",
            "choices": [
              "then",
              "html",
              "css"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u53-practice",
        "type": "practice",
        "title": "Promises flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Waiting state?",
            "accept": [
              "pending"
            ],
            "explain": "pending"
          },
          {
            "prompt": "Success state?",
            "accept": [
              "fulfilled",
              "resolved"
            ],
            "explain": "fulfilled"
          },
          {
            "prompt": "Failure state?",
            "accept": [
              "rejected"
            ],
            "explain": "rejected"
          },
          {
            "prompt": "Success callback via…",
            "accept": [
              "then"
            ],
            "explain": "then"
          },
          {
            "prompt": "Error callback via…",
            "accept": [
              "catch"
            ],
            "explain": "catch"
          }
        ]
      },
      {
        "id": "u53-chest",
        "type": "chest",
        "title": "Promises Intro chest",
        "minutes": 2
      },
      {
        "id": "u53-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Promises model later success/failure. Next: async/await.",
        "knowledgeCard": "Next: async / await",
        "steps": [
          {
            "type": "teach",
            "text": "then/catch attach handlers to a future result."
          },
          {
            "type": "teach",
            "text": "Next unit: async/await — clearer syntax over Promises."
          },
          {
            "type": "tf",
            "prompt": "A Promise settles to fulfilled or rejected.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u54",
    "section": "Async",
    "title": "async / await",
    "blurb": "Write async code that reads clearly.",
    "nodes": [
      {
        "id": "u54-concept",
        "type": "concept",
        "title": "Pause a function until a Promise settles",
        "minutes": 7,
        "summary": "async functions return Promises; await waits inside them.",
        "knowledgeCard": "async function load() { const data = await fetch(...); }",
        "steps": [
          {
            "type": "teach",
            "text": "Mark a function async to use await inside it."
          },
          {
            "type": "teach",
            "text": "await expression pauses that function until the Promise settles, then gives you the value."
          },
          {
            "type": "teach",
            "text": "async functions always return a Promise (even if you return a plain value)."
          },
          {
            "type": "teach",
            "text": "Code with await often reads top-to-bottom like sync — easier than long then chains."
          },
          {
            "type": "teach",
            "text": "await only works inside async functions (or at the top level in modules in modern environments)."
          },
          {
            "type": "mcq",
            "prompt": "await works inside…",
            "choices": [
              "Any random object",
              "async functions",
              "CSS files only",
              "HTML comments"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "async functions return Promises.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keyword to wait for a Promise",
            "choices": [
              "await",
              "sleepHtml",
              "var"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "await fetch(...) gives you…",
            "choices": [
              "The Response when ready",
              "A CSS rule",
              "undefined always",
              "A file path only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You must write async before a function that uses await.",
            "answer": true
          }
        ]
      },
      {
        "id": "u54-memory",
        "type": "memory",
        "title": "Errors become throws",
        "minutes": 6,
        "summary": "Rejected awaits throw; use try/catch around them.",
        "knowledgeCard": "try { const x = await p; } catch (err) { ... }",
        "steps": [
          {
            "type": "teach",
            "text": "If the awaited Promise rejects, await throws — catch it with try/catch."
          },
          {
            "type": "teach",
            "text": "You can still use .catch on the Promise returned by calling an async function."
          },
          {
            "type": "teach",
            "text": "Prefer async/await for sequential steps; Promise.all when you want parallel waits later."
          },
          {
            "type": "mcq",
            "prompt": "A rejected await…",
            "choices": [
              "Throws in the async function",
              "Fixes CSS",
              "Deletes then",
              "Ignores errors always"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "try/catch pairs well with await.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Function modifier for await",
            "choices": [
              "async",
              "static",
              "private"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u54-practice",
        "type": "practice",
        "title": "async/await flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Mark function for await?",
            "accept": [
              "async"
            ],
            "explain": "async"
          },
          {
            "prompt": "Wait for Promise keyword?",
            "accept": [
              "await"
            ],
            "explain": "await"
          },
          {
            "prompt": "async functions return?",
            "accept": [
              "Promise"
            ],
            "explain": "a Promise"
          },
          {
            "prompt": "Rejected await acts like?",
            "accept": [
              "throw",
              "throws"
            ],
            "explain": "throw"
          },
          {
            "prompt": "Handle with?",
            "accept": [
              "try/catch",
              "try catch"
            ],
            "explain": "try/catch"
          }
        ]
      },
      {
        "id": "u54-chest",
        "type": "chest",
        "title": "async / await chest",
        "minutes": 2
      },
      {
        "id": "u54-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "async/await clarifies Promise code. Next: fetch.",
        "knowledgeCard": "Next: fetch Basics",
        "steps": [
          {
            "type": "teach",
            "text": "await pauses an async function until a Promise settles."
          },
          {
            "type": "teach",
            "text": "Next: talk to servers with fetch."
          },
          {
            "type": "tf",
            "prompt": "await needs an async function (in classic scripts).",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u55",
    "section": "Async",
    "title": "fetch Basics",
    "blurb": "Talk to APIs from the browser.",
    "nodes": [
      {
        "id": "u55-concept",
        "type": "concept",
        "title": "Request data from a URL",
        "minutes": 7,
        "summary": "fetch(url) returns a Promise for a Response.",
        "knowledgeCard": "const res = await fetch(url); // Response",
        "steps": [
          {
            "type": "teach",
            "text": "fetch(url) starts a network request and returns a Promise."
          },
          {
            "type": "teach",
            "text": "When it fulfills, you get a Response object (not the final JSON yet)."
          },
          {
            "type": "teach",
            "text": "Check res.ok or res.status before trusting the body."
          },
          {
            "type": "teach",
            "text": "Common pattern: const res = await fetch(url); if (!res.ok) throw new Error(...);"
          },
          {
            "type": "teach",
            "text": "fetch is for browser (and modern runtimes) HTTP — perfect for public APIs and your own server."
          },
          {
            "type": "mcq",
            "prompt": "fetch(url) returns…",
            "choices": [
              "A Promise",
              "A CSS file always",
              "null only",
              "An HTMLElement"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "The fulfilled value of fetch is a Response.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "HTTP helper in browsers",
            "choices": [
              "fetch",
              "innerHTML",
              "float"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "res.ok being false usually means…",
            "choices": [
              "HTTP error status",
              "Perfect success",
              "CSS loaded",
              "Timer cleared"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You still need to read the body after fetch.",
            "answer": true
          }
        ]
      },
      {
        "id": "u55-memory",
        "type": "memory",
        "title": "Method and headers later",
        "minutes": 6,
        "summary": "Second argument configures method, headers, body.",
        "knowledgeCard": "fetch(url, { method: \"POST\", headers: {...}, body: ... })",
        "steps": [
          {
            "type": "teach",
            "text": "Default method is GET — good for reading data."
          },
          {
            "type": "teach",
            "text": "POST/PUT/PATCH often send a body (often JSON.stringify(...))."
          },
          {
            "type": "teach",
            "text": "Never put secrets in front-end code; APIs you call from the browser are visible to users."
          },
          {
            "type": "mcq",
            "prompt": "Default fetch method is…",
            "choices": [
              "GET",
              "DELETE always",
              "FTP",
              "CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "fetch options can include method and headers.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Success-ish flag on Response",
            "choices": [
              "ok",
              "css",
              "proto"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u55-practice",
        "type": "practice",
        "title": "fetch flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Browser HTTP helper?",
            "accept": [
              "fetch"
            ],
            "explain": "fetch"
          },
          {
            "prompt": "fetch returns?",
            "accept": [
              "Promise"
            ],
            "explain": "Promise"
          },
          {
            "prompt": "Fulfilled type?",
            "accept": [
              "Response"
            ],
            "explain": "Response"
          },
          {
            "prompt": "Check success with?",
            "accept": [
              "ok",
              "res.ok"
            ],
            "explain": "res.ok"
          },
          {
            "prompt": "Default method?",
            "accept": [
              "GET"
            ],
            "explain": "GET"
          }
        ]
      },
      {
        "id": "u55-chest",
        "type": "chest",
        "title": "fetch Basics chest",
        "minutes": 2
      },
      {
        "id": "u55-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "fetch gets a Response. Next: read JSON bodies.",
        "knowledgeCard": "Next: JSON Responses",
        "steps": [
          {
            "type": "teach",
            "text": "await fetch(url) → Response; then read the body."
          },
          {
            "type": "teach",
            "text": "Next unit: JSON.parse path via res.json()."
          },
          {
            "type": "tf",
            "prompt": "fetch alone does not give you parsed JSON yet.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u56",
    "section": "Async",
    "title": "JSON Responses",
    "blurb": "Parse what the server sends.",
    "nodes": [
      {
        "id": "u56-concept",
        "type": "concept",
        "title": "Turn response body into data",
        "minutes": 7,
        "summary": "res.json() parses JSON into objects/arrays.",
        "knowledgeCard": "const data = await res.json();",
        "steps": [
          {
            "type": "teach",
            "text": "Many APIs send JSON — text that looks like JS objects/arrays."
          },
          {
            "type": "teach",
            "text": "await res.json() reads the body and parses JSON into a value."
          },
          {
            "type": "teach",
            "text": "JSON keys are strings; values are objects, arrays, numbers, strings, booleans, or null."
          },
          {
            "type": "teach",
            "text": "JSON.stringify(obj) goes the other way — object to string for sending."
          },
          {
            "type": "teach",
            "text": "If the body isn’t valid JSON, res.json() rejects — handle errors."
          },
          {
            "type": "mcq",
            "prompt": "await res.json() gives…",
            "choices": [
              "Parsed JS value",
              "Raw TCP only",
              "A CSS stylesheet",
              "undefined always"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "JSON.stringify turns a value into a JSON string.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Parse Response JSON with…",
            "choices": [
              "json()",
              "css()",
              "map()"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "JSON cannot contain…",
            "choices": [
              "Strings",
              "Functions as real functions",
              "Numbers",
              "null"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "APIs often respond with JSON.",
            "answer": true
          }
        ]
      },
      {
        "id": "u56-memory",
        "type": "memory",
        "title": "Shape what you expect",
        "minutes": 6,
        "summary": "Check fields after parsing before using them in the UI.",
        "knowledgeCard": "const data = await res.json(); console.log(data.title);",
        "steps": [
          {
            "type": "teach",
            "text": "After parsing, treat data like a normal object/array."
          },
          {
            "type": "teach",
            "text": "Optional chaining helps: data?.user?.name"
          },
          {
            "type": "teach",
            "text": "Show loading UI before fetch; replace it after you have data."
          },
          {
            "type": "mcq",
            "prompt": "After res.json(), you typically…",
            "choices": [
              "Use fields on the value",
              "Delete JS",
              "Only write CSS",
              "Disable JSON forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Invalid JSON makes res.json() fail.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Object → JSON string",
            "choices": [
              "stringify",
              "parse",
              "fetch"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u56-practice",
        "type": "practice",
        "title": "JSON flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Parse body helper?",
            "accept": [
              "json()",
              "res.json()"
            ],
            "explain": "res.json()"
          },
          {
            "prompt": "Object to string?",
            "accept": [
              "JSON.stringify"
            ],
            "explain": "JSON.stringify"
          },
          {
            "prompt": "String to value?",
            "accept": [
              "JSON.parse"
            ],
            "explain": "JSON.parse"
          },
          {
            "prompt": "Common API format?",
            "accept": [
              "JSON"
            ],
            "explain": "JSON"
          },
          {
            "prompt": "json() returns?",
            "accept": [
              "Promise"
            ],
            "explain": "a Promise"
          }
        ]
      },
      {
        "id": "u56-chest",
        "type": "chest",
        "title": "JSON Responses chest",
        "minutes": 2
      },
      {
        "id": "u56-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "res.json() yields usable data. Next: errors.",
        "knowledgeCard": "Next: Error Handling Patterns",
        "steps": [
          {
            "type": "teach",
            "text": "Parse JSON from Response, then use the object/array."
          },
          {
            "type": "teach",
            "text": "Next: try/catch and failure paths around awaits."
          },
          {
            "type": "tf",
            "prompt": "JSON is a common API response format.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u57",
    "section": "Async",
    "title": "Error Handling Patterns",
    "blurb": "try/catch around awaits.",
    "nodes": [
      {
        "id": "u57-concept",
        "type": "concept",
        "title": "Expect failure; recover kindly",
        "minutes": 7,
        "summary": "Network and parse errors need try/catch (or .catch).",
        "knowledgeCard": "try { const res = await fetch(url); ... } catch (err) { showError(err); }",
        "steps": [
          {
            "type": "teach",
            "text": "Networks fail, servers return 500s, JSON can be invalid — plan for it."
          },
          {
            "type": "teach",
            "text": "Wrap await chains in try/catch inside async functions."
          },
          {
            "type": "teach",
            "text": "Throw your own Error when res.ok is false so catch can handle bad HTTP statuses."
          },
          {
            "type": "teach",
            "text": "Show a friendly message in the UI; log details for yourself."
          },
          {
            "type": "teach",
            "text": ".catch on Promises is the then-chain cousin of try/catch."
          },
          {
            "type": "mcq",
            "prompt": "try/catch around await catches…",
            "choices": [
              "Thrown/rejected failures",
              "Only CSS typos",
              "Successful JSON only",
              "HTML comments"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You should check res.ok before trusting the body.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Friendly failure path tool",
            "choices": [
              "try/catch",
              "float",
              "proto"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Bad HTTP status is often handled by…",
            "choices": [
              "throwing after checking ok",
              "Ignoring forever",
              "Deleting fetch",
              "Using alert only for CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Users deserve a clear error message.",
            "answer": true
          }
        ]
      },
      {
        "id": "u57-memory",
        "type": "memory",
        "title": "Don’t leave the UI hanging",
        "minutes": 6,
        "summary": "Clear loading states in both success and failure paths.",
        "knowledgeCard": "finally { hideSpinner(); }",
        "steps": [
          {
            "type": "teach",
            "text": "Use finally (or shared cleanup) to hide spinners whether you succeed or fail."
          },
          {
            "type": "teach",
            "text": "Avoid empty catch blocks — at least log or show something."
          },
          {
            "type": "teach",
            "text": "Retry can help flaky networks, but don’t infinite-loop retries."
          },
          {
            "type": "mcq",
            "prompt": "finally is useful to…",
            "choices": [
              "Always run cleanup",
              "Skip JS",
              "Parse CSS",
              "Rename JSON"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Empty catch {} hides bugs.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "HTTP failure check",
            "choices": [
              "ok",
              "var",
              "let"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u57-practice",
        "type": "practice",
        "title": "Error handling flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Wrap awaits with?",
            "accept": [
              "try/catch",
              "try catch"
            ],
            "explain": "try/catch"
          },
          {
            "prompt": "Promise error method?",
            "accept": [
              "catch"
            ],
            "explain": "catch"
          },
          {
            "prompt": "Bad status often if not?",
            "accept": [
              "ok",
              "res.ok"
            ],
            "explain": "res.ok"
          },
          {
            "prompt": "Cleanup block?",
            "accept": [
              "finally"
            ],
            "explain": "finally"
          },
          {
            "prompt": "Show users?",
            "accept": [
              "message",
              "error message"
            ],
            "explain": "a clear message"
          }
        ]
      },
      {
        "id": "u57-chest",
        "type": "chest",
        "title": "Error Handling Patterns chest",
        "minutes": 2
      },
      {
        "id": "u57-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Handle rejects and bad statuses. Next: localStorage.",
        "knowledgeCard": "Next: localStorage",
        "steps": [
          {
            "type": "teach",
            "text": "try/catch + res.ok keeps async UIs honest."
          },
          {
            "type": "teach",
            "text": "Next: save small data in the browser with localStorage."
          },
          {
            "type": "tf",
            "prompt": "Ignoring async errors makes debugging harder.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u58",
    "section": "Async",
    "title": "localStorage",
    "blurb": "Save small data in the browser.",
    "nodes": [
      {
        "id": "u58-concept",
        "type": "concept",
        "title": "Key/value that survives refresh",
        "minutes": 7,
        "summary": "localStorage stores strings per origin until cleared.",
        "knowledgeCard": "localStorage.setItem(key, value); localStorage.getItem(key);",
        "steps": [
          {
            "type": "teach",
            "text": "localStorage saves string key/value pairs in the browser for your site’s origin."
          },
          {
            "type": "teach",
            "text": "setItem(key, value) writes; getItem(key) reads (or null if missing); removeItem deletes."
          },
          {
            "type": "teach",
            "text": "Values must be strings — use JSON.stringify / JSON.parse for objects."
          },
          {
            "type": "teach",
            "text": "Data persists across refreshes until the user clears site data (or you remove it)."
          },
          {
            "type": "teach",
            "text": "Only store non-sensitive preferences — not passwords or secret tokens you must protect."
          },
          {
            "type": "mcq",
            "prompt": "localStorage values are…",
            "choices": [
              "Strings",
              "Functions",
              "TCP sockets",
              "CSS rules only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "getItem returns null when the key is missing.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Write API",
            "choices": [
              "setItem",
              "push",
              "appendChild"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Store an object by…",
            "choices": [
              "JSON.stringify first",
              "Saving the function itself",
              "Using float",
              "innerHTML only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "localStorage is a good place for passwords.",
            "answer": false
          }
        ]
      },
      {
        "id": "u58-memory",
        "type": "memory",
        "title": "Same origin, small data",
        "minutes": 6,
        "summary": "Quota is limited; don’t treat it like a database.",
        "knowledgeCard": "Prefer small prefs: theme, last tab — not huge datasets.",
        "steps": [
          {
            "type": "teach",
            "text": "Each site origin has its own storage; other sites can’t read yours."
          },
          {
            "type": "teach",
            "text": "There’s a size limit — fine for settings, bad for giant caches."
          },
          {
            "type": "teach",
            "text": "sessionStorage is similar but clears when the tab session ends."
          },
          {
            "type": "mcq",
            "prompt": "localStorage is scoped by…",
            "choices": [
              "Origin (site)",
              "All websites shared",
              "CSS only",
              "CPU brand"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "JSON helps store objects in localStorage.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Read API",
            "choices": [
              "getItem",
              "querySelector",
              "fetch"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u58-practice",
        "type": "practice",
        "title": "localStorage flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Save value?",
            "accept": [
              "setItem"
            ],
            "explain": "setItem"
          },
          {
            "prompt": "Read value?",
            "accept": [
              "getItem"
            ],
            "explain": "getItem"
          },
          {
            "prompt": "Remove key?",
            "accept": [
              "removeItem"
            ],
            "explain": "removeItem"
          },
          {
            "prompt": "Object → string?",
            "accept": [
              "JSON.stringify"
            ],
            "explain": "JSON.stringify"
          },
          {
            "prompt": "Store passwords?",
            "accept": [
              "no",
              "never"
            ],
            "explain": "no"
          }
        ]
      },
      {
        "id": "u58-chest",
        "type": "chest",
        "title": "localStorage chest",
        "minutes": 2
      },
      {
        "id": "u58-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "localStorage keeps small string data. Next: modules.",
        "knowledgeCard": "Next: Modules Preview (ESM)",
        "steps": [
          {
            "type": "teach",
            "text": "setItem/getItem with JSON for objects; never secrets."
          },
          {
            "type": "teach",
            "text": "Next: split code with import/export."
          },
          {
            "type": "tf",
            "prompt": "localStorage persists across page refreshes.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u59",
    "section": "Async",
    "title": "Modules Preview (ESM)",
    "blurb": "import and export ideas.",
    "nodes": [
      {
        "id": "u59-concept",
        "type": "concept",
        "title": "Split code into files",
        "minutes": 7,
        "summary": "export shares values; import brings them in.",
        "knowledgeCard": "export function add(){}; import { add } from \"./math.js\";",
        "steps": [
          {
            "type": "teach",
            "text": "ES modules let you split programs into files that export and import values."
          },
          {
            "type": "teach",
            "text": "Named export: export const PI = 3.14; import { PI } from \"./math.js\";"
          },
          {
            "type": "teach",
            "text": "Default export: export default function(){}; import greet from \"./greet.js\";"
          },
          {
            "type": "teach",
            "text": "In HTML: <script type=\"module\" src=\"app.js\"> enables import/export."
          },
          {
            "type": "teach",
            "text": "Modules are deferred by default and use strict mode — cleaner than giant one-file scripts."
          },
          {
            "type": "mcq",
            "prompt": "To use import/export in the browser, scripts often need…",
            "choices": [
              "type=\"module\"",
              "type=\"text/css\"",
              "async=\"html\"",
              "language=\"java\""
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "export shares a value from a file.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Bring a binding in with…",
            "choices": [
              "import",
              "include",
              "require.css"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "import { add } from \"./math.js\" is a…",
            "choices": [
              "Named import",
              "CSS rule",
              "HTTP DELETE",
              "localStorage key"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Modules help organize larger apps.",
            "answer": true
          }
        ]
      },
      {
        "id": "u59-memory",
        "type": "memory",
        "title": "Paths and defaults",
        "minutes": 6,
        "summary": "Know named vs default; keep paths correct.",
        "knowledgeCard": "import helpers from \"./helpers.js\"; import { x } from \"./x.js\";",
        "steps": [
          {
            "type": "teach",
            "text": "Relative paths like \"./utils.js\" are common in front-end modules."
          },
          {
            "type": "teach",
            "text": "A file can mix one default export with several named exports."
          },
          {
            "type": "teach",
            "text": "Bundlers (later, with React tooling) still rest on these ESM ideas."
          },
          {
            "type": "mcq",
            "prompt": "export default is imported…",
            "choices": [
              "Without required braces (default import)",
              "Only via CSS",
              "As localStorage",
              "Never"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "type=\"module\" enables ESM in classic pages.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Share from a file",
            "choices": [
              "export",
              "alert",
              "cookie"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u59-practice",
        "type": "practice",
        "title": "Modules flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Share from file?",
            "accept": [
              "export"
            ],
            "explain": "export"
          },
          {
            "prompt": "Use from elsewhere?",
            "accept": [
              "import"
            ],
            "explain": "import"
          },
          {
            "prompt": "HTML attribute for ESM?",
            "accept": [
              "type=\"module\"",
              "module"
            ],
            "explain": "type=\"module\""
          },
          {
            "prompt": "import { x } is?",
            "accept": [
              "named",
              "named import"
            ],
            "explain": "named"
          },
          {
            "prompt": "export default pairs with?",
            "accept": [
              "default import",
              "import x from"
            ],
            "explain": "default import"
          }
        ]
      },
      {
        "id": "u59-chest",
        "type": "chest",
        "title": "Modules Preview (ESM) chest",
        "minutes": 2
      },
      {
        "id": "u59-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "import/export split programs. Next: async capstone.",
        "knowledgeCard": "Next: Async Capstone",
        "steps": [
          {
            "type": "teach",
            "text": "Modules export what others import — with type=\"module\"."
          },
          {
            "type": "teach",
            "text": "Next: combine fetch + show data in a mini capstone."
          },
          {
            "type": "tf",
            "prompt": "ESM is the modern standard module system in JS.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u60",
    "section": "Async",
    "title": "Async Capstone",
    "blurb": "Fetch + show data on a page.",
    "nodes": [
      {
        "id": "u60-concept",
        "type": "concept",
        "title": "Wire the full happy path",
        "minutes": 7,
        "summary": "fetch → check ok → json → update the DOM (and handle errors).",
        "knowledgeCard": "async function load(){ try { const res=await fetch(url); ... el.textContent = data.title; } catch(e){...} }",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone pattern: show loading → fetch → check ok → await res.json() → update the page → catch errors."
          },
          {
            "type": "teach",
            "text": "Keep network code in an async function you call from a button or on page load."
          },
          {
            "type": "teach",
            "text": "Prefer textContent for plain text from APIs; be careful if you ever use innerHTML with remote data."
          },
          {
            "type": "teach",
            "text": "Disable the button while loading so users don’t double-fetch."
          },
          {
            "type": "teach",
            "text": "You’ve got the spine of many real apps: request, parse, render, recover."
          },
          {
            "type": "mcq",
            "prompt": "Typical order?",
            "choices": [
              "fetch → json → update UI",
              "update UI → invent JSON → fetch never",
              "CSS → FTP → await var",
              "only localStorage"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Capstones should include an error path.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Parse API JSON with",
            "choices": [
              "json()",
              "setInterval",
              "classList"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Safe-ish for plain API text in the DOM?",
            "choices": [
              "textContent",
              "eval",
              "document.write always",
              "innerHTML of raw secrets"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Loading state improves perceived quality.",
            "answer": true
          }
        ]
      },
      {
        "id": "u60-memory",
        "type": "memory",
        "title": "Checklist before you ship",
        "minutes": 6,
        "summary": "Loading, success, failure, and no secret keys in the client.",
        "knowledgeCard": "Loading + data + error UI; secrets stay on a server.",
        "steps": [
          {
            "type": "teach",
            "text": "Three UI states: loading, success, error."
          },
          {
            "type": "teach",
            "text": "If an API needs a secret key, call it from a server you control — not from public front-end code."
          },
          {
            "type": "teach",
            "text": "Next section shifts toward building fuller website behaviors with these tools."
          },
          {
            "type": "mcq",
            "prompt": "Secret API keys belong…",
            "choices": [
              "On a server you control",
              "In every HTML file",
              "In localStorage forever",
              "In CSS variables public"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Disable repeat clicks while fetching.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Future result type",
            "choices": [
              "Promise",
              "float",
              "margin"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u60-practice",
        "type": "practice",
        "title": "Async capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "HTTP helper?",
            "accept": [
              "fetch"
            ],
            "explain": "fetch"
          },
          {
            "prompt": "Wait keyword?",
            "accept": [
              "await"
            ],
            "explain": "await"
          },
          {
            "prompt": "Parse JSON?",
            "accept": [
              "json()",
              "res.json()"
            ],
            "explain": "res.json()"
          },
          {
            "prompt": "Failure wrap?",
            "accept": [
              "try/catch",
              "catch"
            ],
            "explain": "try/catch"
          },
          {
            "prompt": "Plain text to DOM?",
            "accept": [
              "textContent"
            ],
            "explain": "textContent"
          }
        ]
      },
      {
        "id": "u60-chest",
        "type": "chest",
        "title": "Async Capstone chest",
        "minutes": 2
      },
      {
        "id": "u60-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Fetch, parse, render, catch. Next: Build Sites.",
        "knowledgeCard": "Next section: Build Sites",
        "steps": [
          {
            "type": "teach",
            "text": "You can load remote data and show it without freezing the page."
          },
          {
            "type": "teach",
            "text": "Next units: turn JS skills into fuller website UI patterns."
          },
          {
            "type": "tf",
            "prompt": "Async skills unlock real API-driven pages.",
            "answer": true
          }
        ]
      }
    ]
  }
];
