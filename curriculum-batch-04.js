/**
 * Curriculum batch 04 — Units 31–40 (Functions+)
 */
window.LEARN_JS_BATCH_04 = [
  {
    "id": "u31",
    "section": "Functions+",
    "title": "Parameters & Returns",
    "blurb": "Inputs and outputs of functions.",
    "nodes": [
      {
        "id": "u31-concept",
        "type": "concept",
        "title": "Inputs in, values out",
        "minutes": 7,
        "summary": "Parameters receive arguments; return sends a result back.",
        "knowledgeCard": "function add(a, b) { return a + b; }",
        "steps": [
          {
            "type": "teach",
            "text": "Parameters are placeholder names in the function definition: function greet(name) { ... }"
          },
          {
            "type": "teach",
            "text": "Arguments are the real values you pass when calling: greet(\"Milo\")."
          },
          {
            "type": "teach",
            "text": "return hands a value back to the caller. let x = add(2, 3); stores 5 in x."
          },
          {
            "type": "teach",
            "text": "Without return, a function returns undefined."
          },
          {
            "type": "teach",
            "text": "Keep functions focused: take inputs, compute, return — easier to test and reuse."
          },
          {
            "type": "mcq",
            "prompt": "In greet(\"Ada\"), \"Ada\" is…",
            "choices": [
              "A parameter name",
              "An argument",
              "A CSS class",
              "undefined always"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "return exits the function and sends a value out.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Missing return yields…",
            "choices": [
              "0",
              "undefined",
              "null always"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Parameters live in the…",
            "choices": [
              "HTML file only",
              "Function definition",
              "Browser URL bar",
              "CSS file"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can return strings, numbers, objects, arrays…",
            "answer": true
          }
        ]
      },
      {
        "id": "u31-memory",
        "type": "memory",
        "title": "Multiple params & early return",
        "minutes": 7,
        "summary": "Order matters; return can stop early.",
        "knowledgeCard": "if (!n) return 0; // early exit",
        "steps": [
          {
            "type": "teach",
            "text": "Arguments match parameters by order: format(first, last)."
          },
          {
            "type": "teach",
            "text": "Early return: leave the function as soon as you know the answer."
          },
          {
            "type": "teach",
            "text": "Example idea: if (n < 0) return 0; before heavier work."
          },
          {
            "type": "mcq",
            "prompt": "Early return is useful to…",
            "choices": [
              "Delete variables",
              "Bail out cleanly when a case is done",
              "Skip learning",
              "Break HTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Parameter order should match call order.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Send value to caller",
            "choices": [
              "console.log only",
              "return",
              "typeof"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u31-practice",
        "type": "practice",
        "title": "Params & return flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Values passed in are…",
            "accept": [
              "arguments",
              "args"
            ],
            "explain": "A solid answer is “arguments”."
          },
          {
            "prompt": "Names in the definition are…",
            "accept": [
              "parameters",
              "params"
            ],
            "explain": "A solid answer is “parameters”."
          },
          {
            "prompt": "Send a result with…",
            "accept": [
              "return"
            ],
            "explain": "A solid answer is “return”."
          },
          {
            "prompt": "No return means…",
            "accept": [
              "undefined"
            ],
            "explain": "A solid answer is “undefined”."
          },
          {
            "prompt": "Match args by…",
            "accept": [
              "order",
              "position"
            ],
            "explain": "A solid answer is “order”."
          }
        ]
      },
      {
        "id": "u31-chest",
        "type": "chest",
        "title": "Parameters & Returns chest",
        "minutes": 2
      },
      {
        "id": "u31-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Functions take inputs and can return outputs. Next: scope.",
        "knowledgeCard": "Next: where variables are visible.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: parameters, arguments, return, undefined."
          },
          {
            "type": "teach",
            "text": "Next: scope — what code can see which variables."
          },
          {
            "type": "tf",
            "prompt": "return is how functions give answers back.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u32",
    "section": "Functions+",
    "title": "Scope",
    "blurb": "Where variables are visible.",
    "nodes": [
      {
        "id": "u32-concept",
        "type": "concept",
        "title": "Local vs outer",
        "minutes": 7,
        "summary": "let/const inside a block stay inside that block.",
        "knowledgeCard": "Variables declared inside a function are local to it.",
        "steps": [
          {
            "type": "teach",
            "text": "Scope is “where a name can be used.”"
          },
          {
            "type": "teach",
            "text": "A variable declared with let/const inside a function is local — outer code can’t see it."
          },
          {
            "type": "teach",
            "text": "Outer (global) variables can be read inside functions — but avoid overusing globals."
          },
          {
            "type": "teach",
            "text": "Blocks { } with let/const also create block scope (like inside if or for)."
          },
          {
            "type": "teach",
            "text": "Shadowing: an inner let x hides an outer x for that inner region."
          },
          {
            "type": "mcq",
            "prompt": "A let inside a function is usually…",
            "choices": [
              "Global forever",
              "Local to the function",
              "A CSS variable",
              "HTML-only"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Outer code cannot read a function’s local variables.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Scope means…",
            "choices": [
              "Font size",
              "Where a name is visible",
              "Network speed"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Prefer…",
            "choices": [
              "Everything global",
              "Locals + clear returns",
              "No functions",
              "Only alerts"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u32-memory",
        "type": "memory",
        "title": "Why scope matters",
        "minutes": 7,
        "summary": "Local variables prevent accidental collisions.",
        "knowledgeCard": "Small scopes = fewer bugs.",
        "steps": [
          {
            "type": "teach",
            "text": "If everything is global, names clash and bugs hide."
          },
          {
            "type": "teach",
            "text": "Pass data in via parameters; send data out via return — clear pipes."
          },
          {
            "type": "teach",
            "text": "Closures (soon) rely on functions remembering outer variables — scope is the foundation."
          },
          {
            "type": "mcq",
            "prompt": "Best way to share a result out?",
            "choices": [
              "Hope globals update",
              "return it",
              "Delete scope",
              "Use only HTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Block scope applies to let/const in { }.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Inner x hiding outer x is…",
            "choices": [
              "hoisting delete",
              "shadowing",
              "bubbling"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u32-practice",
        "type": "practice",
        "title": "Scope flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Visibility of a name?",
            "accept": [
              "scope"
            ],
            "explain": "A solid answer is “scope”."
          },
          {
            "prompt": "Inside-function variable?",
            "accept": [
              "local",
              "local variable"
            ],
            "explain": "A solid answer is “local”."
          },
          {
            "prompt": "Avoid too many…",
            "accept": [
              "globals",
              "global variables"
            ],
            "explain": "A solid answer is “globals”."
          },
          {
            "prompt": "Share result with…",
            "accept": [
              "return"
            ],
            "explain": "A solid answer is “return”."
          },
          {
            "prompt": "Inner name hides outer?",
            "accept": [
              "shadowing"
            ],
            "explain": "A solid answer is “shadowing”."
          }
        ]
      },
      {
        "id": "u32-chest",
        "type": "chest",
        "title": "Scope chest",
        "minutes": 2
      },
      {
        "id": "u32-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Scope keeps data tidy. Next: arrow functions.",
        "knowledgeCard": "Next: => arrows.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: local vs outer, block scope, prefer params/return."
          },
          {
            "type": "teach",
            "text": "Next: arrow function syntax."
          },
          {
            "type": "tf",
            "prompt": "Locals beat sprawling globals.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u33",
    "section": "Functions+",
    "title": "Arrow Functions",
    "blurb": "The => shortcut.",
    "nodes": [
      {
        "id": "u33-concept",
        "type": "concept",
        "title": "Concise function syntax",
        "minutes": 7,
        "summary": "Arrow functions are a shorter way to write many functions.",
        "knowledgeCard": "const double = (n) => n * 2;",
        "steps": [
          {
            "type": "teach",
            "text": "Arrow functions use =>. Example: const add = (a, b) => a + b;"
          },
          {
            "type": "teach",
            "text": "One parameter can drop parentheses: n => n * 2 — but beginners can keep (n) => for clarity."
          },
          {
            "type": "teach",
            "text": "With a single expression body, the value is returned automatically (implicit return)."
          },
          {
            "type": "teach",
            "text": "With a block body { }, you need an explicit return."
          },
          {
            "type": "teach",
            "text": "Arrows are common for short callbacks in map/filter (next units)."
          },
          {
            "type": "mcq",
            "prompt": "const f = (x) => x + 1; f(2) is…",
            "choices": [
              "1",
              "3",
              "undefined",
              "\"2+1\""
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Block-body arrows need return for a value.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Arrow symbol",
            "choices": [
              "->",
              "=>",
              "::"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Implicit return works with…",
            "choices": [
              "Only class methods",
              "A single expression body",
              "HTML comments",
              "JSON only"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u33-memory",
        "type": "memory",
        "title": "When to use arrows",
        "minutes": 7,
        "summary": "Great for short callbacks; know this differences later.",
        "knowledgeCard": "Prefer clear names: const isReady = (n) => n > 0;",
        "steps": [
          {
            "type": "teach",
            "text": "Use arrows for short “worker” functions and callbacks."
          },
          {
            "type": "teach",
            "text": "For object methods / constructors, classic function or method syntax is often clearer (this behaves differently with arrows — advanced topic)."
          },
          {
            "type": "teach",
            "text": "Readable beats clever: if an arrow gets long, expand it."
          },
          {
            "type": "mcq",
            "prompt": "Long complex logic in an arrow…",
            "choices": [
              "Is required",
              "Can be rewritten as a named function for clarity",
              "Must use eval",
              "Breaks JS"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "(a, b) => a * b multiplies two numbers.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Needs return in { } body",
            "choices": [
              "yes",
              "true",
              "explicit return"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u33-practice",
        "type": "practice",
        "title": "Arrow flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Arrow token?",
            "accept": [
              "=>"
            ],
            "explain": "A solid answer is “=>”."
          },
          {
            "prompt": "Implicit return means…",
            "accept": [
              "auto return expression",
              "returns the expression"
            ],
            "explain": "A solid answer is “auto return expression”."
          },
          {
            "prompt": "Block body needs…",
            "accept": [
              "return"
            ],
            "explain": "A solid answer is “return”."
          },
          {
            "prompt": "Common use?",
            "accept": [
              "callbacks",
              "short callbacks"
            ],
            "explain": "A solid answer is “callbacks”."
          },
          {
            "prompt": "Example double?",
            "accept": [
              "(n) => n * 2",
              "n => n * 2"
            ],
            "explain": "A solid answer is “(n) => n * 2”."
          }
        ]
      },
      {
        "id": "u33-chest",
        "type": "chest",
        "title": "Arrow Functions chest",
        "minutes": 2
      },
      {
        "id": "u33-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Arrows shorten function syntax. Next: callbacks.",
        "knowledgeCard": "Next: functions as values.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: =>, implicit vs explicit return."
          },
          {
            "type": "teach",
            "text": "Next: passing functions into other functions."
          },
          {
            "type": "tf",
            "prompt": "Arrows are still functions you can call.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u34",
    "section": "Functions+",
    "title": "Callbacks",
    "blurb": "Functions passed to functions.",
    "nodes": [
      {
        "id": "u34-concept",
        "type": "concept",
        "title": "Functions as values",
        "minutes": 7,
        "summary": "A callback is a function you pass in to be called later.",
        "knowledgeCard": "doWork(onDone) — onDone is a callback.",
        "steps": [
          {
            "type": "teach",
            "text": "In JS, functions are values — you can store them and pass them around."
          },
          {
            "type": "teach",
            "text": "A callback is a function argument meant to be called later."
          },
          {
            "type": "teach",
            "text": "Example: setTimeout(() => console.log(\"hi\"), 0); — the arrow runs later."
          },
          {
            "type": "teach",
            "text": "array methods like map use callbacks for each item (next lessons)."
          },
          {
            "type": "teach",
            "text": "Name callbacks when they help: items.forEach(printItem)."
          },
          {
            "type": "mcq",
            "prompt": "A callback is…",
            "choices": [
              "A CSS file",
              "A function passed to be called later",
              "A database",
              "An HTML tag"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can pass a function as an argument.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Who calls the callback?",
            "choices": [
              "Usually the outer function",
              "Only CSS",
              "Only the OS kernel"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "forEach takes…",
            "choices": [
              "Only numbers",
              "A callback for each item",
              "Only strings named HTML",
              "A server URL required"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u34-memory",
        "type": "memory",
        "title": "Read the call shape",
        "minutes": 7,
        "summary": "Outer function controls when your callback runs.",
        "knowledgeCard": "runTwice(fn) { fn(); fn(); }",
        "steps": [
          {
            "type": "teach",
            "text": "The outer function decides when/how often to call your callback."
          },
          {
            "type": "teach",
            "text": "Your callback focuses on “what to do with each piece.”"
          },
          {
            "type": "teach",
            "text": "This separation powers events, timers, and array tools."
          },
          {
            "type": "mcq",
            "prompt": "In btn.addEventListener(\"click\", handler), handler is…",
            "choices": [
              "HTML",
              "A callback/listener",
              "A SQL table",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Callbacks keep “when” and “what” separated.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pass fn without calling it",
            "choices": [
              "fn",
              "fn()",
              "new fn"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u34-practice",
        "type": "practice",
        "title": "Callbacks flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Function passed in?",
            "accept": [
              "callback"
            ],
            "explain": "A solid answer is “callback”."
          },
          {
            "prompt": "Functions are…",
            "accept": [
              "values",
              "first-class values"
            ],
            "explain": "A solid answer is “values”."
          },
          {
            "prompt": "Call later means…",
            "accept": [
              "callback",
              "invoke later"
            ],
            "explain": "A solid answer is “callback”."
          },
          {
            "prompt": "Pass reference how?",
            "accept": [
              "fn not fn()",
              "without ()"
            ],
            "explain": "A solid answer is “fn not fn()”."
          },
          {
            "prompt": "Array tools use…",
            "accept": [
              "callbacks"
            ],
            "explain": "A solid answer is “callbacks”."
          }
        ]
      },
      {
        "id": "u34-chest",
        "type": "chest",
        "title": "Callbacks chest",
        "minutes": 2
      },
      {
        "id": "u34-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Callbacks unlock array methods. Next: map.",
        "knowledgeCard": "Next: Array.map",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: pass functions, call later."
          },
          {
            "type": "teach",
            "text": "Next: map — transform every item."
          },
          {
            "type": "tf",
            "prompt": "Events use callback-style listeners.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u35",
    "section": "Functions+",
    "title": "Array map",
    "blurb": "Transform every item.",
    "nodes": [
      {
        "id": "u35-concept",
        "type": "concept",
        "title": "Build a new array",
        "minutes": 7,
        "summary": "map runs a callback on each item and returns a new array.",
        "knowledgeCard": "nums.map(n => n * 2)",
        "steps": [
          {
            "type": "teach",
            "text": "array.map(callback) transforms each element and returns a new array."
          },
          {
            "type": "teach",
            "text": "[1,2,3].map(n => n * 2) → [2,4,6]."
          },
          {
            "type": "teach",
            "text": "The original array is not replaced unless you assign the result."
          },
          {
            "type": "teach",
            "text": "Callback gets (item, index, array) — usually you need item."
          },
          {
            "type": "teach",
            "text": "Use map when output length matches input length, item-by-item."
          },
          {
            "type": "mcq",
            "prompt": "map returns…",
            "choices": [
              "A single number always",
              "A new array",
              "A DOM node",
              "undefined only"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "map is great for transforming lists.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "[1,1].map(x => x+1) →",
            "choices": [
              "[1,1]",
              "[2,2]",
              "[0,0]"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Prefer map when…",
            "choices": [
              "You need one summary number",
              "You need one result per input item",
              "You only sort",
              "You delete JS"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u35-memory",
        "type": "memory",
        "title": "map vs for loop",
        "minutes": 7,
        "summary": "map expresses “transform” clearly.",
        "knowledgeCard": "Same idea as pushing into a new array in a loop — shorter.",
        "steps": [
          {
            "type": "teach",
            "text": "A for-loop can build a new array manually; map states the intent."
          },
          {
            "type": "teach",
            "text": "Keep the callback pure when you can: don’t sneakily mutate outer state."
          },
          {
            "type": "teach",
            "text": "Chain later: filter then map — readable pipelines."
          },
          {
            "type": "mcq",
            "prompt": "Mutating the original inside map…",
            "choices": [
              "Is the goal of map",
              "Is usually a smell",
              "Is required by JS",
              "Deletes map"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can map strings to lengths: [\"a\",\"hi\"].map(s => s.length).",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Double each with map",
            "choices": [
              "map(n => n*2)",
              "filter",
              "Set"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u35-practice",
        "type": "practice",
        "title": "map flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Transform each item?",
            "accept": [
              "map",
              ".map"
            ],
            "explain": "A solid answer is “map”."
          },
          {
            "prompt": "map returns a…",
            "accept": [
              "new array",
              "array"
            ],
            "explain": "A solid answer is “new array”."
          },
          {
            "prompt": "Callback input often…",
            "accept": [
              "item",
              "element",
              "n"
            ],
            "explain": "A solid answer is “item”."
          },
          {
            "prompt": "Length of result vs input?",
            "accept": [
              "same",
              "equal length"
            ],
            "explain": "A solid answer is “same”."
          },
          {
            "prompt": "Double recipe?",
            "accept": [
              "n => n * 2"
            ],
            "explain": "A solid answer is “n => n * 2”."
          }
        ]
      },
      {
        "id": "u35-chest",
        "type": "chest",
        "title": "Array map chest",
        "minutes": 2
      },
      {
        "id": "u35-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "map transforms lists. Next: filter & find.",
        "knowledgeCard": "Next: keep or locate items.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: map → new array of same length."
          },
          {
            "type": "teach",
            "text": "Next: filter (keep some) and find (get one)."
          },
          {
            "type": "tf",
            "prompt": "map builds a new array from a callback.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u36",
    "section": "Functions+",
    "title": "Array filter & find",
    "blurb": "Keep or locate items.",
    "nodes": [
      {
        "id": "u36-concept",
        "type": "concept",
        "title": "Keep matches / find one",
        "minutes": 7,
        "summary": "filter keeps items that pass a test; find returns the first match.",
        "knowledgeCard": "nums.filter(n => n > 2); nums.find(n => n > 2);",
        "steps": [
          {
            "type": "teach",
            "text": "filter(callback) returns a new array of items where the callback returned true."
          },
          {
            "type": "teach",
            "text": "[1,2,3,4].filter(n => n > 2) → [3,4]."
          },
          {
            "type": "teach",
            "text": "find(callback) returns the first matching item, or undefined if none."
          },
          {
            "type": "teach",
            "text": "Use filter for “all that match.” Use find for “the first that matches.”"
          },
          {
            "type": "teach",
            "text": "Callbacks should return a boolean test for filter/find."
          },
          {
            "type": "mcq",
            "prompt": "filter returns…",
            "choices": [
              "One item only",
              "A (possibly shorter) new array",
              "A string always",
              "document"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "find can return undefined.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "All even numbers use…",
            "choices": [
              "find",
              "filter",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "First user with id 5 →",
            "choices": [
              "filter",
              "find",
              "map only",
              "Set only"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u36-memory",
        "type": "memory",
        "title": "Combine with map",
        "minutes": 7,
        "summary": "filter then map is a common pipeline.",
        "knowledgeCard": "items.filter(...).map(...)",
        "steps": [
          {
            "type": "teach",
            "text": "Often: filter the list, then map the survivors into UI strings or new shapes."
          },
          {
            "type": "teach",
            "text": "Don’t confuse filter (keep items) with map (change items)."
          },
          {
            "type": "teach",
            "text": "For “does any match?” you may later meet some/every — related boolean helpers."
          },
          {
            "type": "mcq",
            "prompt": "Change shape of each kept item after filter →",
            "choices": [
              "filter again only",
              "map",
              "createElement required",
              "JSON.stringify only"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "filter does not rename map.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "No find match →",
            "choices": [
              "[]",
              "undefined",
              "0"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u36-practice",
        "type": "practice",
        "title": "filter & find flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Keep matching items?",
            "accept": [
              "filter"
            ],
            "explain": "A solid answer is “filter”."
          },
          {
            "prompt": "First match?",
            "accept": [
              "find"
            ],
            "explain": "A solid answer is “find”."
          },
          {
            "prompt": "filter callback returns…",
            "accept": [
              "boolean",
              "true/false"
            ],
            "explain": "A solid answer is “boolean”."
          },
          {
            "prompt": "find miss?",
            "accept": [
              "undefined"
            ],
            "explain": "A solid answer is “undefined”."
          },
          {
            "prompt": "filter then…",
            "accept": [
              "map",
              "often map"
            ],
            "explain": "A solid answer is “map”."
          }
        ]
      },
      {
        "id": "u36-chest",
        "type": "chest",
        "title": "Array filter & find chest",
        "minutes": 2
      },
      {
        "id": "u36-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "filter/find select items. Next: reduce.",
        "knowledgeCard": "Next: fold a list into one value.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: filter many, find one."
          },
          {
            "type": "teach",
            "text": "Next: reduce — combine into a single result."
          },
          {
            "type": "tf",
            "prompt": "filter returns an array; find returns one item or undefined.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u37",
    "section": "Functions+",
    "title": "Array reduce Intro",
    "blurb": "Fold a list into one value.",
    "nodes": [
      {
        "id": "u37-concept",
        "type": "concept",
        "title": "Running total pattern",
        "minutes": 7,
        "summary": "reduce combines items into one accumulated result.",
        "knowledgeCard": "nums.reduce((sum, n) => sum + n, 0)",
        "steps": [
          {
            "type": "teach",
            "text": "reduce walks the array and carries an accumulator."
          },
          {
            "type": "teach",
            "text": "[1,2,3].reduce((sum, n) => sum + n, 0) → 6."
          },
          {
            "type": "teach",
            "text": "The 0 is the starting accumulator (initial value)."
          },
          {
            "type": "teach",
            "text": "Callback shape: (acc, item) => nextAcc"
          },
          {
            "type": "teach",
            "text": "Use reduce for totals, max, building objects — start with sums."
          },
          {
            "type": "mcq",
            "prompt": "Initial value in sum example is often…",
            "choices": [
              "HTML",
              "0",
              "document",
              "null forever"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "reduce can produce a single number from many.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Accumulator nickname",
            "choices": [
              "acc",
              "sum",
              "both common"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "reduce is best when…",
            "choices": [
              "You need same-length transform only",
              "You need one combined result",
              "You only toggle CSS",
              "You avoid functions"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u37-memory",
        "type": "memory",
        "title": "Read it slow",
        "minutes": 7,
        "summary": "Trace acc after each item.",
        "knowledgeCard": "On paper: acc starts 0 → +1 → +2 → +3.",
        "steps": [
          {
            "type": "teach",
            "text": "Trace reduce on paper until it feels natural."
          },
          {
            "type": "teach",
            "text": "If you forget the initial value, JS may use the first item — be explicit while learning."
          },
          {
            "type": "teach",
            "text": "Prefer map/filter when they fit; reach for reduce when combining."
          },
          {
            "type": "mcq",
            "prompt": "Prefer map when…",
            "choices": [
              "Summing a total",
              "One output per input item",
              "Finding max only",
              "Deleting arrays"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Explicit initial value is friendlier for beginners.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Sum pattern uses…",
            "choices": [
              "reduce",
              "querySelector",
              "innerHTML"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u37-practice",
        "type": "practice",
        "title": "reduce flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Fold to one value?",
            "accept": [
              "reduce"
            ],
            "explain": "A solid answer is “reduce”."
          },
          {
            "prompt": "Running value called…",
            "accept": [
              "accumulator",
              "acc"
            ],
            "explain": "A solid answer is “accumulator”."
          },
          {
            "prompt": "Sum start often…",
            "accept": [
              "0"
            ],
            "explain": "A solid answer is “0”."
          },
          {
            "prompt": "Callback returns…",
            "accept": [
              "next acc",
              "new accumulator"
            ],
            "explain": "A solid answer is “next acc”."
          },
          {
            "prompt": "Trace reduce…",
            "accept": [
              "step by step",
              "on paper"
            ],
            "explain": "A solid answer is “step by step”."
          }
        ]
      },
      {
        "id": "u37-chest",
        "type": "chest",
        "title": "Array reduce Intro chest",
        "minutes": 2
      },
      {
        "id": "u37-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "reduce combines lists. Next: forEach vs for...of.",
        "knowledgeCard": "Next: walking arrays for side effects.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: acc + item → new acc."
          },
          {
            "type": "teach",
            "text": "Next: forEach and for...of for simple iteration."
          },
          {
            "type": "tf",
            "prompt": "reduce is for combining, not always for transforming.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u38",
    "section": "Functions+",
    "title": "forEach vs for...of",
    "blurb": "Ways to walk a list.",
    "nodes": [
      {
        "id": "u38-concept",
        "type": "concept",
        "title": "Iterate for side effects",
        "minutes": 7,
        "summary": "forEach/for...of visit items; use map when you need a new array.",
        "knowledgeCard": "for (const n of nums) { console.log(n); }",
        "steps": [
          {
            "type": "teach",
            "text": "forEach(callback) runs a function for each item — great for logging or DOM appends."
          },
          {
            "type": "teach",
            "text": "for (const item of array) { ... } is a clear loop over values."
          },
          {
            "type": "teach",
            "text": "Use map when you need a transformed array result. Use forEach/for...of for “do something.”"
          },
          {
            "type": "teach",
            "text": "for...of works on many iterables, not only arrays."
          },
          {
            "type": "teach",
            "text": "You can still use classic for (let i = 0; ...) when you need the index heavily."
          },
          {
            "type": "mcq",
            "prompt": "Need a new transformed array →",
            "choices": [
              "forEach only",
              "map",
              "reduce sum only",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "for...of loops values directly.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Side-effect each item",
            "choices": [
              "map for result",
              "forEach",
              "JSON.parse"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Index-heavy work may use…",
            "choices": [
              "only Set",
              "a classic for loop",
              "only CSS",
              "innerHTML required"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u38-memory",
        "type": "memory",
        "title": "Pick the tool",
        "minutes": 7,
        "summary": "map/filter/reduce for data; forEach/for...of for actions.",
        "knowledgeCard": "Ask: new array? one value? or just do work?",
        "steps": [
          {
            "type": "teach",
            "text": "Decision tree: new array → map/filter. One value → reduce/find. Just act → forEach/for...of."
          },
          {
            "type": "teach",
            "text": "Readable code beats forcing everything through reduce."
          },
          {
            "type": "teach",
            "text": "Consistency in a codebase matters — match nearby style."
          },
          {
            "type": "mcq",
            "prompt": "Log every tag →",
            "choices": [
              "map to nowhere",
              "forEach or for...of",
              "JSON.stringify document",
              "querySelectorAll only without loop"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "forEach’s return value is less important than its side effects.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Values loop keyword pair",
            "choices": [
              "for...of",
              "for of"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u38-practice",
        "type": "practice",
        "title": "Iteration flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Action per item?",
            "accept": [
              "forEach",
              "for...of"
            ],
            "explain": "A solid answer is “forEach”."
          },
          {
            "prompt": "Transform to new array?",
            "accept": [
              "map"
            ],
            "explain": "A solid answer is “map”."
          },
          {
            "prompt": "Loop values with…",
            "accept": [
              "for...of",
              "for of"
            ],
            "explain": "A solid answer is “for...of”."
          },
          {
            "prompt": "Need index control?",
            "accept": [
              "for",
              "classic for"
            ],
            "explain": "A solid answer is “for”."
          },
          {
            "prompt": "Ask first…",
            "accept": [
              "map filter or act",
              "what result do I need"
            ],
            "explain": "A solid answer is “map filter or act”."
          }
        ]
      },
      {
        "id": "u38-chest",
        "type": "chest",
        "title": "forEach vs for...of chest",
        "minutes": 2
      },
      {
        "id": "u38-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can choose iteration tools wisely. Next: closures preview.",
        "knowledgeCard": "Next: functions that remember.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: forEach / for...of vs map."
          },
          {
            "type": "teach",
            "text": "Next: closures — functions remembering outer variables."
          },
          {
            "type": "tf",
            "prompt": "Pick iteration based on the result you need.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u39",
    "section": "Functions+",
    "title": "Closures Preview",
    "blurb": "Functions that remember.",
    "nodes": [
      {
        "id": "u39-concept",
        "type": "concept",
        "title": "Remembering outer vars",
        "minutes": 7,
        "summary": "A closure is a function that closes over variables from its outer scope.",
        "knowledgeCard": "function makeCounter(){ let n=0; return () => ++n; }",
        "steps": [
          {
            "type": "teach",
            "text": "A closure happens when an inner function uses variables from an outer function."
          },
          {
            "type": "teach",
            "text": "Those outer variables stay alive for the inner function even after the outer call finished."
          },
          {
            "type": "teach",
            "text": "Classic demo: a counter function that keeps private n."
          },
          {
            "type": "teach",
            "text": "Event handlers and callbacks often form closures over surrounding data."
          },
          {
            "type": "teach",
            "text": "You don’t need the word “closure” daily — but the idea unlocks real patterns."
          },
          {
            "type": "mcq",
            "prompt": "A closure can…",
            "choices": [
              "Only style CSS",
              "Remember outer variables",
              "Delete the DOM always",
              "Replace HTML specs"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Inner functions may use outer lets.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Private counter often uses…",
            "choices": [
              "closure",
              "only global n",
              "innerHTML"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "After makeCounter returns, n is…",
            "choices": [
              "Always gone forever",
              "Still kept for the returned function",
              "Moved to CSS",
              "Converted to HTML"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u39-memory",
        "type": "memory",
        "title": "Useful mental model",
        "minutes": 7,
        "summary": "Factory functions return specialized functions.",
        "knowledgeCard": "makeGreeter(name) returns a function that greets that name.",
        "steps": [
          {
            "type": "teach",
            "text": "Factories: outer function configures, inner function does the work later."
          },
          {
            "type": "teach",
            "text": "Closures can cause surprises if many handlers share a loop variable — prefer let in modern loops / const item of list."
          },
          {
            "type": "teach",
            "text": "You’ll see closures constantly in React hooks and Node callbacks later."
          },
          {
            "type": "mcq",
            "prompt": "Factory returns…",
            "choices": [
              "Only a number",
              "Often a new function",
              "A CSS stylesheet",
              "A SQL row"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Closures are common with callbacks.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Outer data remembered by…",
            "choices": [
              "inner function",
              "closure"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u39-practice",
        "type": "practice",
        "title": "Closures flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Inner uses outer vars?",
            "accept": [
              "closure"
            ],
            "explain": "A solid answer is “closure”."
          },
          {
            "prompt": "Keeps private state?",
            "accept": [
              "yes",
              "closure",
              "closed-over variable"
            ],
            "explain": "A solid answer is “yes”."
          },
          {
            "prompt": "Factory returns…",
            "accept": [
              "function",
              "a function"
            ],
            "explain": "A solid answer is “function”."
          },
          {
            "prompt": "Common with…",
            "accept": [
              "callbacks",
              "handlers"
            ],
            "explain": "A solid answer is “callbacks”."
          },
          {
            "prompt": "Counter n stays via…",
            "accept": [
              "closure"
            ],
            "explain": "A solid answer is “closure”."
          }
        ]
      },
      {
        "id": "u39-chest",
        "type": "chest",
        "title": "Closures Preview chest",
        "minutes": 2
      },
      {
        "id": "u39-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Closures remember outer state. Next: functions capstone.",
        "knowledgeCard": "Next: build a tiny toolkit.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: inner functions + outer variables."
          },
          {
            "type": "teach",
            "text": "Next: capstone mixing map/filter/arrows/callbacks."
          },
          {
            "type": "tf",
            "prompt": "Closures power counters and configured handlers.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u40",
    "section": "Functions+",
    "title": "Functions Capstone",
    "blurb": "Build a small toolkit of helpers.",
    "nodes": [
      {
        "id": "u40-concept",
        "type": "concept",
        "title": "Compose small tools",
        "minutes": 7,
        "summary": "Combine pure helpers with map/filter for readable data pipelines.",
        "knowledgeCard": "const active = users.filter(u => u.ok).map(u => u.name);",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone mindset: write small named helpers, then compose them."
          },
          {
            "type": "teach",
            "text": "Example pipeline: filter active users → map to names → maybe join for display."
          },
          {
            "type": "teach",
            "text": "Prefer return values over hidden globals."
          },
          {
            "type": "teach",
            "text": "Arrows for short predicates; named functions when logic grows."
          },
          {
            "type": "teach",
            "text": "This style transfers to React/Node: transform data cleanly before UI."
          },
          {
            "type": "mcq",
            "prompt": "Readable list processing often uses…",
            "choices": [
              "Only alert",
              "map/filter pipelines",
              "document.write forever",
              "one 200-line reduce always"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Small pure helpers are easier to test.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keep → then transform",
            "choices": [
              "map then filter",
              "filter then map",
              "typeof then CSS"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "After Functions+ you’re ready for…",
            "choices": [
              "Classes & blueprints",
              "Giving up JS",
              "Only FTP",
              "Ignoring arrays"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u40-memory",
        "type": "memory",
        "title": "Toolkit checklist",
        "minutes": 7,
        "summary": "params/return, scope, arrows, callbacks, map/filter/reduce, iteration, closures.",
        "knowledgeCard": "Ask what result you need, then pick the tool.",
        "steps": [
          {
            "type": "teach",
            "text": "Checklist: clear inputs/outputs, locals, callbacks, array tools, closures when state must remember."
          },
          {
            "type": "teach",
            "text": "If stuck, write a slow for...of first, then refactor to map/filter."
          },
          {
            "type": "teach",
            "text": "Next section: classes — blueprints for objects."
          },
          {
            "type": "mcq",
            "prompt": "Stuck on map?",
            "choices": [
              "Quit coding",
              "Write a loop first then refactor",
              "Delete the array",
              "Use only innerHTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Composition beats one giant function.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Next roadmap section",
            "choices": [
              "Classes",
              "classes",
              "class syntax"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u40-practice",
        "type": "practice",
        "title": "Functions capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Transform each?",
            "accept": [
              "map"
            ],
            "explain": "A solid answer is “map”."
          },
          {
            "prompt": "Keep some?",
            "accept": [
              "filter"
            ],
            "explain": "A solid answer is “filter”."
          },
          {
            "prompt": "Combine to one?",
            "accept": [
              "reduce"
            ],
            "explain": "A solid answer is “reduce”."
          },
          {
            "prompt": "Short fn syntax?",
            "accept": [
              "=>",
              "arrow"
            ],
            "explain": "A solid answer is “=>”."
          },
          {
            "prompt": "Fn that remembers?",
            "accept": [
              "closure"
            ],
            "explain": "A solid answer is “closure”."
          }
        ]
      },
      {
        "id": "u40-chest",
        "type": "chest",
        "title": "Functions Capstone chest",
        "minutes": 2
      },
      {
        "id": "u40-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Functions+ complete. Next: classes (Unit 41+).",
        "knowledgeCard": "Next batch: class syntax, this, extends.",
        "steps": [
          {
            "type": "teach",
            "text": "You leveled up functions: params, scope, arrows, callbacks, map/filter/reduce, iteration, closures."
          },
          {
            "type": "teach",
            "text": "Next on the path: classes — structured object blueprints."
          },
          {
            "type": "tf",
            "prompt": "Array tools + clear functions unlock real apps.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "A class is closest to…",
            "choices": [
              "A CSS color",
              "A blueprint for objects",
              "A SQL join only",
              "A PNG file"
            ],
            "answer": 1
          }
        ]
      }
    ]
  }
];
