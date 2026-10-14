/**
 * Curriculum batch 02 — Units 11–20 (Data & Objects)
 */
window.LEARN_JS_BATCH_02 = [
  {
    "id": "u11",
    "section": "Data & Objects",
    "title": "Objects Intro",
    "blurb": "Curly braces, keys, and values.",
    "nodes": [
      {
        "id": "u11-concept",
        "type": "concept",
        "title": "Objects as labeled bags",
        "minutes": 7,
        "summary": "Objects store related data as key/value pairs.",
        "knowledgeCard": "let user = { name: \"Milo\", xp: 10 };",
        "steps": [
          {
            "type": "teach",
            "text": "An object groups related facts under one name. Think of a backpack with labeled pockets."
          },
          {
            "type": "teach",
            "text": "You write objects with curly braces: let user = { name: \"Milo\", xp: 10 };"
          },
          {
            "type": "teach",
            "text": "Each piece is a key (label) and a value (what’s inside). name is a key; \"Milo\" is its value."
          },
          {
            "type": "teach",
            "text": "Keys are usually written without quotes when they’re simple names. Values can be strings, numbers, booleans, arrays, even other objects."
          },
          {
            "type": "teach",
            "text": "Arrays are ordered lists. Objects are labeled bags — order of keys matters less than the names."
          },
          {
            "type": "mcq",
            "prompt": "What do curly braces { } create here?",
            "choices": [
              "A loop",
              "An object",
              "A comment",
              "A function call"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "In { name: \"Milo\" }, what is name?",
            "choices": [
              "A value",
              "A key (label)",
              "A CSS class",
              "An error"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Objects group related data under one variable.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pick an object literal.",
            "choices": [
              "[1, 2]",
              "{ xp: 10 }",
              "\"xp: 10\""
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Best use of an object?",
            "choices": [
              "Store one number only",
              "Store related fields like name and score together",
              "Replace HTML",
              "Delete variables"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Arrays and objects are the same thing.",
            "answer": false
          }
        ]
      },
      {
        "id": "u11-memory",
        "type": "memory",
        "title": "Reading object values",
        "minutes": 7,
        "summary": "Use dot notation: user.name",
        "knowledgeCard": "user.name reads the name property.",
        "steps": [
          {
            "type": "teach",
            "text": "After let user = { name: \"Milo\", xp: 10 }; you read values with a dot: user.name → \"Milo\"."
          },
          {
            "type": "teach",
            "text": "You can also log the whole object: console.log(user); to see all keys at once."
          },
          {
            "type": "teach",
            "text": "If you ask for a key that doesn’t exist, you get undefined — not an automatic crash."
          },
          {
            "type": "mcq",
            "prompt": "How do you read the xp field?",
            "choices": [
              "user->xp",
              "user.xp",
              "user[xp.]",
              "xp.user"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Missing keys usually give undefined.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "user.name for { name: \"Ada\" } is…",
            "choices": [
              "Ada",
              "\"name\"",
              "undefined"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Objects are great when data has…",
            "choices": [
              "No names",
              "Named fields",
              "Only colors",
              "Only one item forever"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "console.log(user) can show the whole object.",
            "answer": true
          }
        ]
      },
      {
        "id": "u11-practice",
        "type": "practice",
        "title": "Objects intro flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Symbol for an object literal?",
            "accept": [
              "{}",
              "{ }",
              "curly braces"
            ],
            "explain": "A solid answer is “{}”."
          },
          {
            "prompt": "Label in a key/value pair?",
            "accept": [
              "key",
              "keys",
              "property name"
            ],
            "explain": "A solid answer is “key”."
          },
          {
            "prompt": "Read name from user?",
            "accept": [
              "user.name",
              "user[\"name\"]"
            ],
            "explain": "A solid answer is “user.name”."
          },
          {
            "prompt": "Array vs object in one word each?",
            "accept": [
              "list vs labels",
              "ordered list vs labeled bag",
              "list / bag"
            ],
            "explain": "A solid answer is “list vs labels”."
          },
          {
            "prompt": "Missing property returns?",
            "accept": [
              "undefined"
            ],
            "explain": "A solid answer is “undefined”."
          }
        ]
      },
      {
        "id": "u11-chest",
        "type": "chest",
        "title": "Objects Intro chest",
        "minutes": 2
      },
      {
        "id": "u11-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Objects store labeled data. Next: change and access properties in more ways.",
        "knowledgeCard": "Next: dot vs bracket notation.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: { key: value }, read with object.key."
          },
          {
            "type": "teach",
            "text": "Next unit: adding, changing, and bracket access like user[\"name\"]."
          },
          {
            "type": "tf",
            "prompt": "Objects use keys to label values.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "What’s next?",
            "choices": [
              "Only CSS",
              "Object properties in depth",
              "Delete JS",
              "Skip to React"
            ],
            "answer": 1
          }
        ]
      }
    ]
  },
  {
    "id": "u12",
    "section": "Data & Objects",
    "title": "Object Properties",
    "blurb": "Dot notation and brackets.",
    "nodes": [
      {
        "id": "u12-concept",
        "type": "concept",
        "title": "Dot vs brackets",
        "minutes": 7,
        "summary": "Dot for fixed names; brackets when the key is in a variable.",
        "knowledgeCard": "user[\"name\"] and user.name often match; brackets unlock dynamic keys.",
        "steps": [
          {
            "type": "teach",
            "text": "Dot notation is the everyday style: pet.type = \"cat\";"
          },
          {
            "type": "teach",
            "text": "Bracket notation uses quotes: pet[\"type\"]. Same value when the key is a normal name."
          },
          {
            "type": "teach",
            "text": "Brackets shine when the key is stored in a variable: let k = \"type\"; pet[k]."
          },
          {
            "type": "teach",
            "text": "You can add a new property anytime: pet.age = 2; — objects are expandable."
          },
          {
            "type": "teach",
            "text": "You can overwrite too: pet.age = 3; replaces the old value."
          },
          {
            "type": "mcq",
            "prompt": "Which reads a key held in variable k?",
            "choices": [
              "pet.k",
              "pet[k]",
              "pet->k",
              "k.pet"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "pet.age = 2; can add a new property.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Equivalent to pet.color when color is fixed?",
            "choices": [
              "pet[color]",
              "pet[\"color\"]",
              "pet.color[]"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Dot notation needs…",
            "choices": [
              "A simple fixed property name",
              "A random number",
              "HTML only",
              "A server"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Bracket keys are strings (or expressions that become keys).",
            "answer": true
          }
        ]
      },
      {
        "id": "u12-memory",
        "type": "memory",
        "title": "Updating & deleting",
        "minutes": 7,
        "summary": "Assign to change; delete removes a property.",
        "knowledgeCard": "delete user.temp; removes that key.",
        "steps": [
          {
            "type": "teach",
            "text": "Assigning to an existing key updates it. Assigning to a new key creates it."
          },
          {
            "type": "teach",
            "text": "delete user.temp; removes the temp property from user."
          },
          {
            "type": "teach",
            "text": "After delete, user.temp is undefined."
          },
          {
            "type": "mcq",
            "prompt": "delete obj.x does what?",
            "choices": [
              "Deletes the whole program",
              "Removes property x",
              "Logs x",
              "Locks the object"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can add properties after the object is created.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Set score to 50 on player",
            "choices": [
              "player.score = 50",
              "player = 50",
              "score.player = 50"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "player[\"level\"] = 2 is…",
            "choices": [
              "Illegal",
              "Valid bracket assignment",
              "Only for arrays",
              "CSS"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u12-practice",
        "type": "practice",
        "title": "Properties flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Dynamic key access uses…",
            "accept": [
              "brackets",
              "[]",
              "bracket notation"
            ],
            "explain": "A solid answer is “brackets”."
          },
          {
            "prompt": "Fixed name access often uses…",
            "accept": [
              "dot",
              "dot notation",
              "."
            ],
            "explain": "A solid answer is “dot”."
          },
          {
            "prompt": "Remove a property keyword?",
            "accept": [
              "delete"
            ],
            "explain": "A solid answer is “delete”."
          },
          {
            "prompt": "Add xp: 1 to obj?",
            "accept": [
              "obj.xp = 1",
              "obj[\"xp\"] = 1"
            ],
            "explain": "A solid answer is “obj.xp = 1”."
          },
          {
            "prompt": "obj[k] needs k to be…",
            "accept": [
              "the key name",
              "a key",
              "string key"
            ],
            "explain": "A solid answer is “the key name”."
          }
        ]
      },
      {
        "id": "u12-chest",
        "type": "chest",
        "title": "Object Properties chest",
        "minutes": 2
      },
      {
        "id": "u12-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can read, write, and delete properties. Next: functions on objects.",
        "knowledgeCard": "Next: methods.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: dot, brackets, assign, delete."
          },
          {
            "type": "teach",
            "text": "Next: methods — functions stored on objects."
          },
          {
            "type": "tf",
            "prompt": "Brackets help when the key is in a variable.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u13",
    "section": "Data & Objects",
    "title": "Methods on Objects",
    "blurb": "Functions that live on objects.",
    "nodes": [
      {
        "id": "u13-concept",
        "type": "concept",
        "title": "Functions as values",
        "minutes": 7,
        "summary": "A method is a function stored as an object property.",
        "knowledgeCard": "obj.greet = function () { ... }; then obj.greet();",
        "steps": [
          {
            "type": "teach",
            "text": "Values on objects can be functions. A function property is called a method."
          },
          {
            "type": "teach",
            "text": "Example: let dog = { name: \"Rex\", speak() { console.log(\"Woof\"); } };"
          },
          {
            "type": "teach",
            "text": "Call it with dog.speak(); — note the ()."
          },
          {
            "type": "teach",
            "text": "Inside a method, this often refers to the object itself (you’ll use this more soon)."
          },
          {
            "type": "teach",
            "text": "Methods keep behavior next to the data they belong to — dog.speak near dog.name."
          },
          {
            "type": "mcq",
            "prompt": "A method is…",
            "choices": [
              "A CSS file",
              "A function stored on an object",
              "A browser tab",
              "A password"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You call a method with parentheses.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Call speak on dog",
            "choices": [
              "dog.speak",
              "dog.speak()",
              "speak.dog()"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Why put functions on objects?",
            "choices": [
              "To hide HTML",
              "To keep related behavior with related data",
              "To delete arrays",
              "To stop logging"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u13-memory",
        "type": "memory",
        "title": "this in short",
        "minutes": 7,
        "summary": "this usually means “this object” inside a method.",
        "knowledgeCard": "Inside speak(), this.name can mean the object’s name.",
        "steps": [
          {
            "type": "teach",
            "text": "Inside many methods, this points at the object that owns the method."
          },
          {
            "type": "teach",
            "text": "Example idea: greet() { console.log(\"Hi \" + this.name); } uses the object’s name."
          },
          {
            "type": "teach",
            "text": "If you tear the function off the object carelessly, this can get weird — for now, call methods on the object: user.greet()."
          },
          {
            "type": "mcq",
            "prompt": "In user.greet(), this inside greet often means…",
            "choices": [
              "window only",
              "user",
              "a string",
              "CSS"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Call methods as object.method().",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "this is most useful for…",
            "choices": [
              "Comments",
              "Referring to the current object",
              "Fonts"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "dog.speak without () …",
            "choices": [
              "Calls it",
              "References the function but doesn’t run it",
              "Deletes dog"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u13-practice",
        "type": "practice",
        "title": "Methods flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Function on an object is a…",
            "accept": [
              "method"
            ],
            "explain": "A solid answer is “method”."
          },
          {
            "prompt": "Run obj.hi how?",
            "accept": [
              "obj.hi()",
              "obj.hi();"
            ],
            "explain": "A solid answer is “obj.hi()”."
          },
          {
            "prompt": "Inside a method, this often means…",
            "accept": [
              "the object",
              "this object",
              "the owner object"
            ],
            "explain": "A solid answer is “the object”."
          },
          {
            "prompt": "Keep behavior next to…",
            "accept": [
              "data",
              "related data"
            ],
            "explain": "A solid answer is “data”."
          }
        ]
      },
      {
        "id": "u13-chest",
        "type": "chest",
        "title": "Methods on Objects chest",
        "minutes": 2
      },
      {
        "id": "u13-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Methods attach behavior to data. Next: nest objects and arrays.",
        "knowledgeCard": "Next: nesting.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: methods are callable properties."
          },
          {
            "type": "teach",
            "text": "Next: objects inside arrays and arrays inside objects."
          },
          {
            "type": "tf",
            "prompt": "Methods are functions living on objects.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u14",
    "section": "Data & Objects",
    "title": "Nesting Data",
    "blurb": "Objects in arrays, arrays in objects.",
    "nodes": [
      {
        "id": "u14-concept",
        "type": "concept",
        "title": "Trees of data",
        "minutes": 7,
        "summary": "Real apps nest lists and objects together.",
        "knowledgeCard": "team.players[0].name reaches into nested data.",
        "steps": [
          {
            "type": "teach",
            "text": "Objects can hold arrays: let team = { name: \"JS\", players: [\"Ada\", \"Lin\"] };"
          },
          {
            "type": "teach",
            "text": "Arrays can hold objects: let users = [{ id: 1 }, { id: 2 }];"
          },
          {
            "type": "teach",
            "text": "You chain access: team.players[0] → \"Ada\". users[0].id → 1."
          },
          {
            "type": "teach",
            "text": "Read left to right: start at the outer name, then step inward."
          },
          {
            "type": "teach",
            "text": "This shape mirrors real apps: a cart with items[], each item with price and title."
          },
          {
            "type": "mcq",
            "prompt": "team.players[0] needs players to be…",
            "choices": [
              "A number",
              "An array",
              "A boolean",
              "A comment"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Arrays of objects are common.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Get id from users[0]",
            "choices": [
              "users.id[0]",
              "users[0].id",
              "users0.id"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Nesting means…",
            "choices": [
              "Deleting keys",
              "Putting structures inside structures",
              "Only using strings",
              "Avoiding objects"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u14-memory",
        "type": "memory",
        "title": "Safe mental tracing",
        "minutes": 7,
        "summary": "Check each step exists before going deeper.",
        "knowledgeCard": "If users[0] is missing, users[0].id will fail.",
        "steps": [
          {
            "type": "teach",
            "text": "If an outer piece is undefined, deeper access crashes: users[0].id when users is empty."
          },
          {
            "type": "teach",
            "text": "Trace: what is users? what is users[0]? then .id."
          },
          {
            "type": "teach",
            "text": "Start small in the console: log the middle values while learning."
          },
          {
            "type": "mcq",
            "prompt": "Best first debug log for users[0].name?",
            "choices": [
              "Only the final name",
              "Log users, then users[0]",
              "Delete users",
              "Ignore errors"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Empty arrays have no [0] item.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "cart.items is likely…",
            "choices": [
              "A string always",
              "An array of items",
              "A boolean"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u14-practice",
        "type": "practice",
        "title": "Nesting flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Array of people often looks like…",
            "accept": [
              "[{...},{...}]",
              "array of objects"
            ],
            "explain": "A solid answer is “[{...},{...}]”."
          },
          {
            "prompt": "Access first player name?",
            "accept": [
              "players[0].name",
              "team.players[0].name"
            ],
            "explain": "A solid answer is “players[0].name”."
          },
          {
            "prompt": "Read left to…",
            "accept": [
              "right",
              "inward"
            ],
            "explain": "A solid answer is “right”."
          },
          {
            "prompt": "Risk of deep access?",
            "accept": [
              "undefined crash",
              "crash if missing",
              "missing middle value"
            ],
            "explain": "A solid answer is “undefined crash”."
          }
        ]
      },
      {
        "id": "u14-chest",
        "type": "chest",
        "title": "Nesting Data chest",
        "minutes": 2
      },
      {
        "id": "u14-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Nested data models real apps. Next: pull fields out with destructuring.",
        "knowledgeCard": "Next: destructuring.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: chain . and [] carefully."
          },
          {
            "type": "teach",
            "text": "Next: destructuring — cleaner unpacking."
          },
          {
            "type": "tf",
            "prompt": "Objects and arrays nest freely.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u15",
    "section": "Data & Objects",
    "title": "Destructuring Basics",
    "blurb": "Pull values out cleanly.",
    "nodes": [
      {
        "id": "u15-concept",
        "type": "concept",
        "title": "Unpack objects",
        "minutes": 7,
        "summary": "Destructuring copies properties into local variables.",
        "knowledgeCard": "const { name, xp } = user;",
        "steps": [
          {
            "type": "teach",
            "text": "Destructuring pulls properties into variables in one line."
          },
          {
            "type": "teach",
            "text": "const { name, xp } = user; makes name and xp from user.name and user.xp."
          },
          {
            "type": "teach",
            "text": "Same idea for arrays: const [first, second] = list; uses positions."
          },
          {
            "type": "teach",
            "text": "It’s sugar — clearer when you need a few fields from a bigger object."
          },
          {
            "type": "teach",
            "text": "You can rename: const { name: userName } = user;"
          },
          {
            "type": "mcq",
            "prompt": "const { xp } = user means…",
            "choices": [
              "Delete xp",
              "Create xp from user.xp",
              "Loop xp",
              "xp is HTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Array destructuring uses square brackets.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Unpack name from user",
            "choices": [
              "const name = {user}",
              "const { name } = user",
              "const user = { name }"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "const [a, b] = [10, 20]; b is…",
            "choices": [
              "10",
              "20",
              "[10,20]",
              "undefined"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u15-memory",
        "type": "memory",
        "title": "Defaults & care",
        "minutes": 7,
        "summary": "Missing fields become undefined unless you set defaults.",
        "knowledgeCard": "const { role = \"guest\" } = user;",
        "steps": [
          {
            "type": "teach",
            "text": "If a property is missing, the variable becomes undefined."
          },
          {
            "type": "teach",
            "text": "Defaults help: const { role = \"guest\" } = user;"
          },
          {
            "type": "teach",
            "text": "Don’t destructure null/undefined — that throws. Make sure the object exists."
          },
          {
            "type": "mcq",
            "prompt": "Default in destructuring looks like…",
            "choices": [
              "role == guest",
              "role = \"guest\"",
              "role: guest()",
              "default role"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Destructuring null throws an error.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Array unpack first item",
            "choices": [
              "const {0} = arr",
              "const [first] = arr",
              "const first[] = arr"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u15-practice",
        "type": "practice",
        "title": "Destructuring flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Object unpack syntax?",
            "accept": [
              "const { a } = obj",
              "{ a } = obj"
            ],
            "explain": "A solid answer is “const { a } = obj”."
          },
          {
            "prompt": "Array unpack syntax?",
            "accept": [
              "const [a] = arr",
              "[a] = arr"
            ],
            "explain": "A solid answer is “const [a] = arr”."
          },
          {
            "prompt": "Rename name to userName?",
            "accept": [
              "name: userName",
              "const { name: userName } = user"
            ],
            "explain": "A solid answer is “name: userName”."
          },
          {
            "prompt": "Missing field without default?",
            "accept": [
              "undefined"
            ],
            "explain": "A solid answer is “undefined”."
          }
        ]
      },
      {
        "id": "u15-chest",
        "type": "chest",
        "title": "Destructuring Basics chest",
        "minutes": 2
      },
      {
        "id": "u15-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Destructuring unpacks cleanly. Next: JSON — data on the wire.",
        "knowledgeCard": "Next: JSON ideas.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: { } unpack objects, [ ] unpack arrays."
          },
          {
            "type": "teach",
            "text": "Next: JSON — the text format APIs love."
          },
          {
            "type": "tf",
            "prompt": "Destructuring creates local variables from structures.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u16",
    "section": "Data & Objects",
    "title": "JSON Ideas",
    "blurb": "Data shapes you will see everywhere.",
    "nodes": [
      {
        "id": "u16-concept",
        "type": "concept",
        "title": "JSON is text-shaped data",
        "minutes": 7,
        "summary": "JSON looks like JS objects/arrays but is a text format.",
        "knowledgeCard": "JSON.stringify / JSON.parse move between object and text.",
        "steps": [
          {
            "type": "teach",
            "text": "JSON stands for JavaScript Object Notation — a common text format for data."
          },
          {
            "type": "teach",
            "text": "It looks similar to object/array literals, but it’s a string when stored or sent over the network."
          },
          {
            "type": "teach",
            "text": "JSON.stringify(obj) turns an object into a JSON string."
          },
          {
            "type": "teach",
            "text": "JSON.parse(text) turns a JSON string back into a real object/array."
          },
          {
            "type": "teach",
            "text": "APIs, config files, and localStorage often use JSON."
          },
          {
            "type": "mcq",
            "prompt": "JSON.parse does what?",
            "choices": [
              "Styles CSS",
              "Turns JSON text into a value",
              "Deletes keys",
              "Opens Photoshop"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "JSON.stringify makes a string.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Sendable form of data is often…",
            "choices": [
              "A live function",
              "JSON text",
              "A DOM node only"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Which is legal JSON key style?",
            "choices": [
              "Unquoted keys always",
              "Keys in double quotes in JSON text",
              "Keys must be numbers",
              "No keys"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u16-memory",
        "type": "memory",
        "title": "JSON limits",
        "minutes": 7,
        "summary": "Functions and undefined don’t survive JSON well.",
        "knowledgeCard": "JSON keeps data values — not functions.",
        "steps": [
          {
            "type": "teach",
            "text": "JSON is for data: strings, numbers, booleans, null, arrays, objects."
          },
          {
            "type": "teach",
            "text": "Functions disappear when you stringify — JSON isn’t for methods."
          },
          {
            "type": "teach",
            "text": "Always parse carefully: bad text throws. Use try/catch later when you fetch."
          },
          {
            "type": "mcq",
            "prompt": "What doesn’t belong in JSON data?",
            "choices": [
              "\"name\"",
              "42",
              "function () {}",
              "true"
            ],
            "answer": 2
          },
          {
            "type": "tf",
            "prompt": "localStorage often stores strings (including JSON text).",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Object → text",
            "choices": [
              "JSON.parse",
              "JSON.stringify",
              "JSON.object"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u16-practice",
        "type": "practice",
        "title": "JSON flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Text → value?",
            "accept": [
              "JSON.parse",
              "parse"
            ],
            "explain": "A solid answer is “JSON.parse”."
          },
          {
            "prompt": "Value → text?",
            "accept": [
              "JSON.stringify",
              "stringify"
            ],
            "explain": "A solid answer is “JSON.stringify”."
          },
          {
            "prompt": "JSON is mainly for…",
            "accept": [
              "data",
              "data exchange",
              "structured data"
            ],
            "explain": "A solid answer is “data”."
          },
          {
            "prompt": "Functions in JSON?",
            "accept": [
              "no",
              "No",
              "not really"
            ],
            "explain": "A solid answer is “no”."
          }
        ]
      },
      {
        "id": "u16-chest",
        "type": "chest",
        "title": "JSON Ideas chest",
        "minutes": 2
      },
      {
        "id": "u16-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "JSON moves data as text. Next: Map and Set collections.",
        "knowledgeCard": "Next: Map & Set preview.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: stringify / parse."
          },
          {
            "type": "teach",
            "text": "Next: when plain objects aren’t the best tool — Map and Set."
          },
          {
            "type": "tf",
            "prompt": "JSON is widely used for APIs.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u17",
    "section": "Data & Objects",
    "title": "Map & Set Preview",
    "blurb": "When arrays/objects aren’t enough.",
    "nodes": [
      {
        "id": "u17-concept",
        "type": "concept",
        "title": "Set = unique values",
        "minutes": 7,
        "summary": "Set stores unique items; Map stores key/value with any key type.",
        "knowledgeCard": "new Set([1,1,2]) keeps 1 and 2 once.",
        "steps": [
          {
            "type": "teach",
            "text": "A Set holds unique values. Duplicates are ignored."
          },
          {
            "type": "teach",
            "text": "let s = new Set([1, 1, 2]); s has 1 and 2 only. s.size is 2."
          },
          {
            "type": "teach",
            "text": "s.add(3); s.has(1); s.delete(2); — handy unique-list tools."
          },
          {
            "type": "teach",
            "text": "A Map holds key/value pairs like objects, but keys can be any type (even objects)."
          },
          {
            "type": "teach",
            "text": "let m = new Map(); m.set(\"xp\", 10); m.get(\"xp\");"
          },
          {
            "type": "mcq",
            "prompt": "Set focuses on…",
            "choices": [
              "Duplicates welcome",
              "Unique values",
              "CSS only",
              "HTML tags"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Map.get reads a value by key.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Create a Set",
            "choices": [
              "Set()",
              "new Set()",
              "new Array.Set()"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "m.set(\"a\", 1) is for…",
            "choices": [
              "Set",
              "Map",
              "String",
              "if"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u17-memory",
        "type": "memory",
        "title": "When to pick which",
        "minutes": 7,
        "summary": "Objects for simple records; Map/Set for special collection needs.",
        "knowledgeCard": "Use Set to dedupe; Map when keys aren’t only strings.",
        "steps": [
          {
            "type": "teach",
            "text": "Prefer plain objects for simple records: { name, xp }."
          },
          {
            "type": "teach",
            "text": "Use Set when you care about uniqueness (tags, ids you’ve seen)."
          },
          {
            "type": "teach",
            "text": "Use Map when keys might not be plain strings, or you want clear .get/.set habits."
          },
          {
            "type": "mcq",
            "prompt": "Dedupe a list of tags →",
            "choices": [
              "Set",
              "only console.log",
              "CSS grid",
              "innerHTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Objects are still the everyday choice for records.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Map method to write",
            "choices": [
              "add",
              "set",
              "push"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u17-practice",
        "type": "practice",
        "title": "Map & Set flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Unique collection?",
            "accept": [
              "Set",
              "new Set"
            ],
            "explain": "A solid answer is “Set”."
          },
          {
            "prompt": "Map write method?",
            "accept": [
              "set",
              ".set"
            ],
            "explain": "A solid answer is “set”."
          },
          {
            "prompt": "Map read method?",
            "accept": [
              "get",
              ".get"
            ],
            "explain": "A solid answer is “get”."
          },
          {
            "prompt": "Set size property?",
            "accept": [
              "size",
              ".size"
            ],
            "explain": "A solid answer is “size”."
          },
          {
            "prompt": "Everyday record shape?",
            "accept": [
              "object",
              "{}",
              "plain object"
            ],
            "explain": "A solid answer is “object”."
          }
        ]
      },
      {
        "id": "u17-chest",
        "type": "chest",
        "title": "Map & Set Preview chest",
        "minutes": 2
      },
      {
        "id": "u17-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Map/Set extend your toolkit. Next: empty values and typeof.",
        "knowledgeCard": "Next: null, undefined, typeof.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: Set uniqueness, Map get/set."
          },
          {
            "type": "teach",
            "text": "Next: understanding empty values and checking types."
          },
          {
            "type": "tf",
            "prompt": "Set ignores duplicate values.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u18",
    "section": "Data & Objects",
    "title": "null, undefined, typeof",
    "blurb": "Empty values and type checks.",
    "nodes": [
      {
        "id": "u18-concept",
        "type": "concept",
        "title": "Two kinds of empty",
        "minutes": 7,
        "summary": "undefined means not assigned; null is an intentional empty.",
        "knowledgeCard": "typeof \"hi\" is \"string\"; typeof null is a famous quirk: \"object\".",
        "steps": [
          {
            "type": "teach",
            "text": "undefined usually means “no value assigned yet” — like a missing property."
          },
          {
            "type": "teach",
            "text": "null is an intentional empty value you can assign: let user = null;"
          },
          {
            "type": "teach",
            "text": "typeof tells you a type tag: typeof 3 is \"number\"; typeof \"a\" is \"string\"."
          },
          {
            "type": "teach",
            "text": "Quirk to remember: typeof null is \"object\" (legacy weirdness). Check null with === null."
          },
          {
            "type": "teach",
            "text": "typeof [] is also \"object\" — arrays are objects. Use Array.isArray(x) for arrays."
          },
          {
            "type": "mcq",
            "prompt": "Missing property usually yields…",
            "choices": [
              "null",
              "undefined",
              "0",
              "false"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "null means “empty on purpose” more often than undefined.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Check intentional empty",
            "choices": [
              "x === undefined always",
              "x === null",
              "typeof x"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Array.isArray([]) is…",
            "choices": [
              "false",
              "true",
              "\"object\"",
              "null"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u18-memory",
        "type": "memory",
        "title": "Guarding empties",
        "minutes": 7,
        "summary": "Check before you dig into nested data.",
        "knowledgeCard": "if (user) { ... } skips null/undefined.",
        "steps": [
          {
            "type": "teach",
            "text": "Before user.name, make sure user exists."
          },
          {
            "type": "teach",
            "text": "Loose checks: if (user) treats null/undefined as false."
          },
          {
            "type": "teach",
            "text": "Prefer clear checks while learning: if (user !== null && user !== undefined)."
          },
          {
            "type": "mcq",
            "prompt": "typeof undefined is…",
            "choices": [
              "\"null\"",
              "\"undefined\"",
              "\"object\"",
              "\"empty\""
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "typeof null === \"object\" is a known JS quirk.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Best array test",
            "choices": [
              "typeof x === \"array\"",
              "Array.isArray(x)",
              "x === []"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u18-practice",
        "type": "practice",
        "title": "Empty & typeof flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Not assigned yet often is…",
            "accept": [
              "undefined"
            ],
            "explain": "A solid answer is “undefined”."
          },
          {
            "prompt": "Intentional empty?",
            "accept": [
              "null"
            ],
            "explain": "A solid answer is “null”."
          },
          {
            "prompt": "typeof \"hi\"?",
            "accept": [
              "string",
              "\"string\""
            ],
            "explain": "A solid answer is “string”."
          },
          {
            "prompt": "typeof null quirk?",
            "accept": [
              "object",
              "\"object\""
            ],
            "explain": "A solid answer is “object”."
          },
          {
            "prompt": "Test for array?",
            "accept": [
              "Array.isArray",
              "Array.isArray(x)"
            ],
            "explain": "A solid answer is “Array.isArray”."
          }
        ]
      },
      {
        "id": "u18-chest",
        "type": "chest",
        "title": "null, undefined, typeof chest",
        "minutes": 2
      },
      {
        "id": "u18-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can spot empty values and types. Next: why objects copy strangely.",
        "knowledgeCard": "Next: reference vs copy.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: undefined vs null, typeof, Array.isArray."
          },
          {
            "type": "teach",
            "text": "Next: copying objects — references vs clones."
          },
          {
            "type": "tf",
            "prompt": "Check null with === null, not typeof.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u19",
    "section": "Data & Objects",
    "title": "Reference vs Copy",
    "blurb": "Why objects surprise beginners.",
    "nodes": [
      {
        "id": "u19-concept",
        "type": "concept",
        "title": "Objects are references",
        "minutes": 7,
        "summary": "Assigning objects copies the reference, not a full clone.",
        "knowledgeCard": "let b = a; for objects means both names point at the same data.",
        "steps": [
          {
            "type": "teach",
            "text": "Numbers and strings copy by value. Objects and arrays copy by reference."
          },
          {
            "type": "teach",
            "text": "let a = { n: 1 }; let b = a; then b.n = 2; also changes a.n — same object."
          },
          {
            "type": "teach",
            "text": "That surprise causes many bugs: “I only changed b!”"
          },
          {
            "type": "teach",
            "text": "A shallow copy: let b = { ...a }; or Object.assign({}, a); — top-level keys copy, nested objects still shared."
          },
          {
            "type": "teach",
            "text": "Arrays: let b = [...a]; makes a shallow array copy."
          },
          {
            "type": "mcq",
            "prompt": "After let b = a for objects, b and a…",
            "choices": [
              "Are always different objects",
              "Often point to the same object",
              "Delete each other",
              "Become numbers"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Changing b.n can change a.n when they share a reference.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Shallow object copy",
            "choices": [
              "let b = a",
              "let b = { ...a }",
              "let b = a.n"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Spread copy {...a} is…",
            "choices": [
              "Deep forever",
              "Shallow",
              "Illegal",
              "Only for DOM"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u19-memory",
        "type": "memory",
        "title": "Avoid accidental sharing",
        "minutes": 7,
        "summary": "Clone when you need independence.",
        "knowledgeCard": "If two variables should stay independent, copy first.",
        "steps": [
          {
            "type": "teach",
            "text": "If two parts of your app shouldn’t affect each other, don’t assign the same object around."
          },
          {
            "type": "teach",
            "text": "Mutating nested fields in a shallow copy can still affect the original nested object."
          },
          {
            "type": "teach",
            "text": "For learning, prefer clear new objects: { name: user.name, xp: user.xp }."
          },
          {
            "type": "mcq",
            "prompt": "let b = a for numbers (let a = 3)…",
            "choices": [
              "Shares a reference forever",
              "Copies the value",
              "Makes an object",
              "Throws"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "[...arr] shallow-copies an array.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Shared reference risk",
            "choices": [
              "objects/arrays",
              "only strings",
              "only booleans"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u19-practice",
        "type": "practice",
        "title": "Reference flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Object assign copies…",
            "accept": [
              "reference",
              "a reference",
              "the reference"
            ],
            "explain": "A solid answer is “reference”."
          },
          {
            "prompt": "Shallow object clone?",
            "accept": [
              "{...obj}",
              "spread",
              "Object.assign"
            ],
            "explain": "A solid answer is “{...obj}”."
          },
          {
            "prompt": "Shallow array clone?",
            "accept": [
              "[...arr]",
              "spread array"
            ],
            "explain": "A solid answer is “[...arr]”."
          },
          {
            "prompt": "Primitives copy by…",
            "accept": [
              "value"
            ],
            "explain": "A solid answer is “value”."
          }
        ]
      },
      {
        "id": "u19-chest",
        "type": "chest",
        "title": "Reference vs Copy chest",
        "minutes": 2
      },
      {
        "id": "u19-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "References explain object surprises. Next: build a small model.",
        "knowledgeCard": "Next: Objects Capstone.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: shared references vs shallow copies."
          },
          {
            "type": "teach",
            "text": "Next: capstone — model something real with objects."
          },
          {
            "type": "tf",
            "prompt": "Objects are assigned by reference.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u20",
    "section": "Data & Objects",
    "title": "Objects Capstone",
    "blurb": "Model a small real-world thing.",
    "nodes": [
      {
        "id": "u20-concept",
        "type": "concept",
        "title": "Design a mini model",
        "minutes": 7,
        "summary": "Combine objects, arrays, methods, and careful copies.",
        "knowledgeCard": "A cart: { items: [], add(item) { ... } }",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone idea: model a cart, player, or library book with an object."
          },
          {
            "type": "teach",
            "text": "Example shape: let cart = { items: [], add(item) { this.items.push(item); } };"
          },
          {
            "type": "teach",
            "text": "Each item can be an object: { title: \"JS\", price: 10 }."
          },
          {
            "type": "teach",
            "text": "Use methods for actions, properties for data, arrays for lists."
          },
          {
            "type": "teach",
            "text": "When saving later, JSON.stringify(cart) — remember methods won’t survive JSON."
          },
          {
            "type": "mcq",
            "prompt": "items in a cart is usually…",
            "choices": [
              "A boolean",
              "An array",
              "A CSS rule",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Methods store behavior next to cart data.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Add to items array",
            "choices": [
              "items.add",
              "items.push",
              "items++"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Good capstone habit?",
            "choices": [
              "One giant global string",
              "Clear object shape + small methods",
              "Only alerts",
              "No properties"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u20-memory",
        "type": "memory",
        "title": "Trace a feature",
        "minutes": 7,
        "summary": "Say data and actions out loud before coding.",
        "knowledgeCard": "Data first, then methods that change it.",
        "steps": [
          {
            "type": "teach",
            "text": "Before coding: what fields? what actions? Example: player has hp; action heal()."
          },
          {
            "type": "teach",
            "text": "Keep updates in methods so you don’t scatter player.hp = ... everywhere."
          },
          {
            "type": "teach",
            "text": "You’re ready for the DOM next — showing this data on a real page."
          },
          {
            "type": "mcq",
            "prompt": "After objects, a natural next skill is…",
            "choices": [
              "Ignoring HTML",
              "DOM: putting data on the page",
              "Only Photoshop",
              "Deleting JSON"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Clear shapes beat mystery variables.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "JSON keeps…",
            "choices": [
              "methods",
              "data fields",
              "DOM nodes"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u20-practice",
        "type": "practice",
        "title": "Objects capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "List field often is an…",
            "accept": [
              "array"
            ],
            "explain": "A solid answer is “array”."
          },
          {
            "prompt": "Action on an object is a…",
            "accept": [
              "method"
            ],
            "explain": "A solid answer is “method”."
          },
          {
            "prompt": "Push item onto items?",
            "accept": [
              "items.push",
              "this.items.push"
            ],
            "explain": "A solid answer is “items.push”."
          },
          {
            "prompt": "Next big section on the path?",
            "accept": [
              "DOM",
              "the DOM",
              "DOM units"
            ],
            "explain": "A solid answer is “DOM”."
          },
          {
            "prompt": "Shared object assign risk?",
            "accept": [
              "reference",
              "same reference"
            ],
            "explain": "A solid answer is “reference”."
          }
        ]
      },
      {
        "id": "u20-chest",
        "type": "chest",
        "title": "Objects Capstone chest",
        "minutes": 2
      },
      {
        "id": "u20-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Objects section complete. Scroll into DOM units next (21+).",
        "knowledgeCard": "Next batch: The DOM — querySelector, innerHTML, events.",
        "steps": [
          {
            "type": "teach",
            "text": "Data & Objects done: literals, properties, methods, nesting, JSON, Map/Set, empties, references."
          },
          {
            "type": "teach",
            "text": "Next on the path: the DOM — make pages change on screen."
          },
          {
            "type": "tf",
            "prompt": "You can model real things with objects + arrays + methods.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "DOM is about…",
            "choices": [
              "Only servers",
              "The page document tree in the browser",
              "Only SQL",
              "Only CSS files on disk"
            ],
            "answer": 1
          }
        ]
      }
    ]
  }
];
