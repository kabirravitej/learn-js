/**
 * Curriculum batch 01 — Units 1–10 (Foundations)
 * Generated for Learn JS 90-unit path.
 */
window.LEARN_JS_BATCH_01 = [
  {
    "id": "u1",
    "section": "Foundations",
    "title": "How JavaScript Got Here",
    "blurb": "Why JS exists — story first, code later.",
    "nodes": [
      {
        "id": "u1-concept",
        "type": "concept",
        "title": "Where JS was born",
        "minutes": 6,
        "summary": "JS was created so web pages could react in the browser.",
        "knowledgeCard": "HTML structures, CSS styles, JavaScript behaves.",
        "steps": [
          {
            "type": "teach",
            "text": "Early websites were mostly static: text and images. People wanted buttons and forms that reacted without reloading the whole page."
          },
          {
            "type": "teach",
            "text": "JavaScript was invented so browsers could run instructions on the page — respond to clicks, check inputs, update what you see."
          },
          {
            "type": "teach",
            "text": "Remember the trio: HTML structures, CSS styles, and JavaScript behaves."
          },
          {
            "type": "mcq",
            "prompt": "What problem did early websites have before JS became common?",
            "choices": [
              "Pages could not display images",
              "Pages were mostly static and hard to make interactive",
              "Browsers could not show text",
              "CSS did not exist"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "JavaScript was meant to help pages react in the browser.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pick the behavior language of the web.",
            "choices": [
              "HTML",
              "CSS",
              "JavaScript",
              "SQL"
            ],
            "answer": 2
          },
          {
            "type": "mcq",
            "prompt": "Which is JS’s classic home?",
            "choices": [
              "Only on servers",
              "In the browser",
              "Only in databases",
              "Only in Photoshop"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "CSS is mainly for page behavior like clicks.",
            "answer": false
          }
        ]
      },
      {
        "id": "u1-memory",
        "type": "memory",
        "title": "How JS was born",
        "minutes": 6,
        "summary": "JS started in browsers and later spread everywhere.",
        "knowledgeCard": "Same language family powers browsers and many backends today.",
        "steps": [
          {
            "type": "teach",
            "text": "JS started in browsers, then grew into tools, apps, and servers (you’ll meet Node later)."
          },
          {
            "type": "teach",
            "text": "You don’t need every history date — you need the “why”: interactivity."
          },
          {
            "type": "mcq",
            "prompt": "JS was first widely used…",
            "choices": [
              "On paper",
              "In web browsers",
              "Only on phones in 1990",
              "As a database"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Learning browser JS still helps if you later learn Node or React.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Which pair is correct?",
            "choices": [
              "HTML behaves, JS structures",
              "JS behaves, HTML structures",
              "CSS behaves, HTML styles"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "“Static page” mostly means…",
            "choices": [
              "It never loads",
              "It doesn’t change much without a reload",
              "It has no text",
              "It is always broken"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Milo’s tip: story first, then code — Unit 1 stays light on typing.",
            "answer": true
          }
        ]
      },
      {
        "id": "u1-practice",
        "type": "practice",
        "title": "JS origin flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "What does JavaScript mainly add to a page?",
            "accept": [
              "behavior",
              "Behaviour",
              "interactivity"
            ],
            "explain": "A solid answer is “behavior”."
          },
          {
            "prompt": "HTML, CSS, or JS — which one behaves?",
            "accept": [
              "JS",
              "JavaScript",
              "js"
            ],
            "explain": "A solid answer is “JS”."
          },
          {
            "prompt": "Where did JS first become famous?",
            "accept": [
              "browser",
              "browsers",
              "the browser"
            ],
            "explain": "A solid answer is “browser”."
          }
        ]
      },
      {
        "id": "u1-chest",
        "type": "chest",
        "title": "How JavaScript Got Here chest",
        "minutes": 2
      },
      {
        "id": "u1-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "JS exists so pages can react. Next: write your first lines.",
        "knowledgeCard": "Next up: console.log and comments.",
        "steps": [
          {
            "type": "teach",
            "text": "Unit 1 recap: JS brings behavior to the web."
          },
          {
            "type": "teach",
            "text": "Next unit you’ll type real code: console.log."
          },
          {
            "type": "tf",
            "prompt": "You are ready to write a first line of JS.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "What’s next after the story?",
            "choices": [
              "Delete HTML",
              "Write first JS lines",
              "Learn only CSS forever",
              "Skip to React today"
            ],
            "answer": 1
          }
        ]
      }
    ]
  },
  {
    "id": "u2",
    "section": "Foundations",
    "title": "Your First Lines",
    "blurb": "console.log, comments, and running code.",
    "nodes": [
      {
        "id": "u2-concept",
        "type": "concept",
        "title": "The console sandbox",
        "minutes": 6,
        "summary": "console.log prints values so you can see what code did.",
        "knowledgeCard": "console.log(...) is your first debugging tool.",
        "steps": [
          {
            "type": "teach",
            "text": "The console is a place to see messages from your code. In Learn JS you’ll use an on-page runner too."
          },
          {
            "type": "teach",
            "text": "console.log(\"Hi\") prints the text Hi. Quotes mark a string (text)."
          },
          {
            "type": "teach",
            "text": "// starts a comment — notes for humans; JS ignores that line."
          },
          {
            "type": "mcq",
            "prompt": "What does console.log do?",
            "choices": [
              "Deletes files",
              "Prints a value to the console",
              "Styles the page",
              "Creates a database"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Quotes are used for text strings.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Which prints Hello?",
            "choices": [
              "console.log(Hello)",
              "console.log(\"Hello\")",
              "print Hello"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "// comments are…",
            "choices": [
              "Required",
              "Ignored by JS when running",
              "Only for CSS",
              "Illegal"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can log numbers without quotes: console.log(42).",
            "answer": true
          }
        ]
      },
      {
        "id": "u2-memory",
        "type": "memory",
        "title": "console.log & typos",
        "minutes": 6,
        "summary": "Typos break code — read errors calmly.",
        "knowledgeCard": "Spelling matters: console.log not consloe.log.",
        "steps": [
          {
            "type": "teach",
            "text": "Computers are picky. consloe.log is a typo — JS won’t guess."
          },
          {
            "type": "teach",
            "text": "Parentheses () wrap what you log. Semicolons ; end a statement (often optional, still fine to use)."
          },
          {
            "type": "mcq",
            "prompt": "Which is a string?",
            "choices": [
              "42",
              "\"42\"",
              "true",
              "console"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "console.log is a function you call with ().",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pick a valid comment.",
            "choices": [
              "# hi",
              "// hi",
              "<!-- hi",
              "-- hi"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "If nothing prints, a common cause is…",
            "choices": [
              "The sun",
              "A typo or the line never ran",
              "Too much RAM",
              "HTML is green"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u2-practice",
        "type": "practice",
        "title": "First lines flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "How do you print Hello?",
            "accept": [
              "console.log(\"Hello\")",
              "console.log('Hello')"
            ],
            "explain": "A solid answer is “console.log(\"Hello\")”."
          },
          {
            "prompt": "What starts a single-line comment?",
            "accept": [
              "//",
              "// comment"
            ],
            "explain": "A solid answer is “//”."
          },
          {
            "prompt": "Do number logs need quotes?",
            "accept": [
              "no",
              "No"
            ],
            "explain": "A solid answer is “no”."
          }
        ]
      },
      {
        "id": "u2-chest",
        "type": "chest",
        "title": "Your First Lines chest",
        "minutes": 2
      },
      {
        "id": "u2-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can print values. Next: store them in variables.",
        "knowledgeCard": "console.log shows; variables remember.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: log strings and numbers; use // comments."
          },
          {
            "type": "teach",
            "text": "Next: let and const — named boxes for values."
          },
          {
            "type": "tf",
            "prompt": "Logging helps you see what your code is doing.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u3",
    "section": "Foundations",
    "title": "Values & Variables",
    "blurb": "let, const, and named boxes for data.",
    "nodes": [
      {
        "id": "u3-concept",
        "type": "concept",
        "title": "What is a variable?",
        "minutes": 6,
        "summary": "Variables store values under a name.",
        "knowledgeCard": "let name = \"Milo\"; then use name later.",
        "steps": [
          {
            "type": "teach",
            "text": "A variable is a named box. You put a value in, then use the name later."
          },
          {
            "type": "teach",
            "text": "let score = 10; creates score holding 10. You can change it later with score = 11;"
          },
          {
            "type": "teach",
            "text": "const PI = 3.14; is for values you don’t plan to reassign."
          },
          {
            "type": "mcq",
            "prompt": "Which keyword makes a reassignable binding?",
            "choices": [
              "const",
              "let",
              "fixed",
              "static"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "const means you cannot reassign that binding.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pick valid code.",
            "choices": [
              "let 1x = 2",
              "let x = 2",
              "let x"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "After let n = 5; what is n?",
            "choices": [
              "A string \"5\"",
              "The number 5",
              "undefined always",
              "HTML"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u3-memory",
        "type": "memory",
        "title": "let, const, and names",
        "minutes": 6,
        "summary": "Names should be clear; camelCase is common.",
        "knowledgeCard": "Use clear names like userName, not x1.",
        "steps": [
          {
            "type": "teach",
            "text": "Use clear names: userName, totalScore. camelCase is common in JS."
          },
          {
            "type": "teach",
            "text": "You can’t start a name with a digit. let 2cool is illegal."
          },
          {
            "type": "mcq",
            "prompt": "Best name for a user’s age?",
            "choices": [
              "a",
              "userAge",
              "xxx",
              "2age"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "let age = 12; age = 13; is allowed.",
            "answer": true
          },
          {
            "type": "tf",
            "prompt": "const age = 12; age = 13; is allowed.",
            "answer": false
          },
          {
            "type": "tap",
            "prompt": "Which uses const well?",
            "choices": [
              "const count = 0; count = 1",
              "const MAX = 100",
              "const"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u3-practice",
        "type": "practice",
        "title": "Variables flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "Keyword for a reassignable variable?",
            "accept": [
              "let"
            ],
            "explain": "A solid answer is “let”."
          },
          {
            "prompt": "Keyword for a binding you won’t reassign?",
            "accept": [
              "const"
            ],
            "explain": "A solid answer is “const”."
          },
          {
            "prompt": "Store 10 in score with let",
            "accept": [
              "let score = 10",
              "let score = 10;"
            ],
            "explain": "A solid answer is “let score = 10”."
          }
        ]
      },
      {
        "id": "u3-chest",
        "type": "chest",
        "title": "Values & Variables chest",
        "minutes": 2
      },
      {
        "id": "u3-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Variables hold values. Next: numbers, strings, and operators.",
        "knowledgeCard": "let changes; const stays (for the binding).",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: let vs const, clear names."
          },
          {
            "type": "teach",
            "text": "Next unit: math and string joining."
          },
          {
            "type": "tf",
            "prompt": "Variables let you reuse values by name.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u4",
    "section": "Foundations",
    "title": "Numbers & Strings",
    "blurb": "Math, text, and joining messages.",
    "nodes": [
      {
        "id": "u4-concept",
        "type": "concept",
        "title": "Operators at a glance",
        "minutes": 6,
        "summary": "+ - * / for numbers; + can also join strings.",
        "knowledgeCard": "\"Hi\" + \" \" + \"Milo\" makes \"Hi Milo\".",
        "steps": [
          {
            "type": "teach",
            "text": "Numbers support + - * / and %. Example: 3 + 4 is 7."
          },
          {
            "type": "teach",
            "text": "Strings are text. \"Hi\" + \" \" + \"Milo\" becomes \"Hi Milo\"."
          },
          {
            "type": "teach",
            "text": "Mixing types can surprise you: \"5\" + 1 becomes \"51\" (joins as text). Prefer clear types."
          },
          {
            "type": "mcq",
            "prompt": "What is 3 * 4?",
            "choices": [
              "7",
              "12",
              "34",
              "1"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "\"a\" + \"b\" is \"ab\".",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Which is subtraction?",
            "choices": [
              "3 + 1",
              "3 - 1",
              "3 * 1"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "\"5\" + 1 often becomes…",
            "choices": [
              "6",
              "\"51\"",
              "5",
              "error always"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u4-memory",
        "type": "memory",
        "title": "Template ideas & length",
        "minutes": 6,
        "summary": "Strings have .length; templates use backticks later.",
        "knowledgeCard": "\"Milo\".length is 4.",
        "steps": [
          {
            "type": "teach",
            "text": "Every string has .length — how many characters."
          },
          {
            "type": "teach",
            "text": "You’ll later meet template strings with backticks `Hi ${name}` — same idea: build messages."
          },
          {
            "type": "mcq",
            "prompt": "What is \"JS\".length?",
            "choices": [
              "1",
              "2",
              "3",
              "0"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Numbers don’t use quotes.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Join Hello and !",
            "choices": [
              "\"Hello\" - \"!\"",
              "\"Hello\" + \"!\"",
              "Hello + !"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u4-practice",
        "type": "practice",
        "title": "Numbers & strings flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "What is 10 - 3?",
            "accept": [
              "7"
            ],
            "explain": "A solid answer is “7”."
          },
          {
            "prompt": "Join Hi and there with a space",
            "accept": [
              "\"Hi\" + \" \" + \"there\"",
              "\"Hi there\""
            ],
            "explain": "A solid answer is “\"Hi\" + \" \" + \"there\"”."
          },
          {
            "prompt": "Property for string size?",
            "accept": [
              "length",
              ".length"
            ],
            "explain": "A solid answer is “length”."
          }
        ]
      },
      {
        "id": "u4-chest",
        "type": "chest",
        "title": "Numbers & Strings chest",
        "minutes": 2
      },
      {
        "id": "u4-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can compute and join text. Next: true/false checks.",
        "knowledgeCard": "Next: booleans and ===.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: arithmetic and string +."
          },
          {
            "type": "teach",
            "text": "Next: comparisons that make true or false."
          },
          {
            "type": "tf",
            "prompt": "3 + 4 logs 7.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u5",
    "section": "Foundations",
    "title": "Booleans & Comparisons",
    "blurb": "true, false, and === checks.",
    "nodes": [
      {
        "id": "u5-concept",
        "type": "concept",
        "title": "true, false, and ===",
        "minutes": 6,
        "summary": "Comparisons produce booleans.",
        "knowledgeCard": "5 === 5 is true; \"5\" === 5 is false.",
        "steps": [
          {
            "type": "teach",
            "text": "Booleans are true or false — yes/no values."
          },
          {
            "type": "teach",
            "text": "=== checks equal value and type. 5 === 5 is true. \"5\" === 5 is false."
          },
          {
            "type": "teach",
            "text": "!== means not equal. < > <= >= compare order for numbers."
          },
          {
            "type": "mcq",
            "prompt": "What is 5 === 5?",
            "choices": [
              "false",
              "true",
              "\"5\"",
              "undefined"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "\"5\" === 5 is true.",
            "answer": false
          },
          {
            "type": "tap",
            "prompt": "Pick a boolean.",
            "choices": [
              "\"true\"",
              "true",
              "1"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Which checks inequality?",
            "choices": [
              "===",
              "!==",
              "++",
              "//"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u5-memory",
        "type": "memory",
        "title": "Avoid == for now",
        "minutes": 6,
        "summary": "Prefer === as a beginner.",
        "knowledgeCard": "Beginners: use === not ==.",
        "steps": [
          {
            "type": "teach",
            "text": "== tries to convert types (can confuse). Prefer === while learning."
          },
          {
            "type": "teach",
            "text": "You can store a comparison: let ok = score >= 10;"
          },
          {
            "type": "mcq",
            "prompt": "Best beginner equality check?",
            "choices": [
              "=",
              "==",
              "===",
              "===="
            ],
            "answer": 2
          },
          {
            "type": "tf",
            "prompt": "true and false are boolean values.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "10 > 3 is…",
            "choices": [
              "false",
              "true",
              "\"true\""
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u5-practice",
        "type": "practice",
        "title": "Booleans flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "Strict equality operator?",
            "accept": [
              "==="
            ],
            "explain": "A solid answer is “===”."
          },
          {
            "prompt": "Result type of 3 > 1?",
            "accept": [
              "boolean",
              "Boolean",
              "true/false"
            ],
            "explain": "A solid answer is “boolean”."
          },
          {
            "prompt": "Is \"5\" === 5 ?",
            "accept": [
              "false",
              "False"
            ],
            "explain": "A solid answer is “false”."
          }
        ]
      },
      {
        "id": "u5-chest",
        "type": "chest",
        "title": "Booleans & Comparisons chest",
        "minutes": 2
      },
      {
        "id": "u5-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Booleans feed decisions. Next: if statements.",
        "knowledgeCard": "Comparisons → true/false → if.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: ===, !==, and ordering."
          },
          {
            "type": "teach",
            "text": "Next: if (condition) { ... }"
          },
          {
            "type": "tf",
            "prompt": "Comparisons create booleans.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u6",
    "section": "Foundations",
    "title": "Decisions with if",
    "blurb": "Code that chooses a path.",
    "nodes": [
      {
        "id": "u6-concept",
        "type": "concept",
        "title": "If this, then that",
        "minutes": 6,
        "summary": "if runs a block when a condition is true.",
        "knowledgeCard": "if (ready) { console.log(\"Go\"); }",
        "steps": [
          {
            "type": "teach",
            "text": "if (condition) { ... } runs the block only when condition is true."
          },
          {
            "type": "teach",
            "text": "Curly braces { } group the lines that belong to the if."
          },
          {
            "type": "teach",
            "text": "You can put any boolean expression in the condition: score >= 10."
          },
          {
            "type": "mcq",
            "prompt": "When does the if block run?",
            "choices": [
              "Always",
              "When the condition is true",
              "When it’s false",
              "Never"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Braces group the code under if.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pick a valid start.",
            "choices": [
              "if score > 1",
              "if (score > 1) {",
              "if { score"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u6-memory",
        "type": "memory",
        "title": "else and else if",
        "minutes": 6,
        "summary": "else covers the other path; else if adds more forks.",
        "knowledgeCard": "if / else if / else chain choices.",
        "steps": [
          {
            "type": "teach",
            "text": "else runs when the if condition was false."
          },
          {
            "type": "teach",
            "text": "else if checks another condition when earlier ones failed."
          },
          {
            "type": "mcq",
            "prompt": "else runs when…",
            "choices": [
              "if was true",
              "if was false",
              "always",
              "never"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You can chain else if for more cases.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Fill: if (ok) ... ____ { ... }",
            "choices": [
              "while",
              "else",
              "for"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u6-practice",
        "type": "practice",
        "title": "Decisions flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "Keyword for a conditional branch?",
            "accept": [
              "if"
            ],
            "explain": "A solid answer is “if”."
          },
          {
            "prompt": "Keyword for the other branch?",
            "accept": [
              "else"
            ],
            "explain": "A solid answer is “else”."
          },
          {
            "prompt": "Wrap conditions in…",
            "accept": [
              "()",
              "parentheses",
              "parens"
            ],
            "explain": "A solid answer is “()”."
          }
        ]
      },
      {
        "id": "u6-chest",
        "type": "chest",
        "title": "Decisions with if chest",
        "minutes": 2
      },
      {
        "id": "u6-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Your code can choose. Next: lists with arrays.",
        "knowledgeCard": "if/else makes programs smart.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: if, else, else if."
          },
          {
            "type": "teach",
            "text": "Next: arrays — ordered lists."
          },
          {
            "type": "tf",
            "prompt": "Conditions should evaluate to true/false.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u7",
    "section": "Foundations",
    "title": "Arrays Basics",
    "blurb": "Lists of values and indexes.",
    "nodes": [
      {
        "id": "u7-concept",
        "type": "concept",
        "title": "Square brackets lists",
        "minutes": 6,
        "summary": "Arrays hold ordered values.",
        "knowledgeCard": "Indexes start at 0: fruits[0] is the first item.",
        "steps": [
          {
            "type": "teach",
            "text": "An array is a list: let fruits = [\"apple\", \"mango\"];"
          },
          {
            "type": "teach",
            "text": "Indexes start at 0. fruits[0] is \"apple\". fruits[1] is \"mango\"."
          },
          {
            "type": "teach",
            "text": "fruits.length is how many items are in the list."
          },
          {
            "type": "mcq",
            "prompt": "First index in an array is…",
            "choices": [
              "1",
              "0",
              "-1",
              "2"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "[\"a\",\"b\"].length is 2.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Get first of let nums = [9,8]",
            "choices": [
              "nums[1]",
              "nums[0]",
              "nums.first"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u7-memory",
        "type": "memory",
        "title": "Push & change items",
        "minutes": 6,
        "summary": "You can update slots and add items.",
        "knowledgeCard": "push adds to the end of an array.",
        "steps": [
          {
            "type": "teach",
            "text": "nums[1] = 100; changes the second item."
          },
          {
            "type": "teach",
            "text": "push adds to the end: nums.push(4)."
          },
          {
            "type": "mcq",
            "prompt": "push usually adds…",
            "choices": [
              "At the start",
              "At the end",
              "In the middle only",
              "Nothing"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Arrays can hold numbers, strings, or mixed values.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Length of [1,2,3]",
            "choices": [
              "2",
              "3",
              "4"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u7-practice",
        "type": "practice",
        "title": "Arrays flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "First index?",
            "accept": [
              "0"
            ],
            "explain": "A solid answer is “0”."
          },
          {
            "prompt": "Property for item count?",
            "accept": [
              "length",
              ".length"
            ],
            "explain": "A solid answer is “length”."
          },
          {
            "prompt": "Add to end method?",
            "accept": [
              "push",
              ".push"
            ],
            "explain": "A solid answer is “push”."
          }
        ]
      },
      {
        "id": "u7-chest",
        "type": "chest",
        "title": "Arrays Basics chest",
        "minutes": 2
      },
      {
        "id": "u7-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Lists are ready. Next: loop through them.",
        "knowledgeCard": "Arrays + loops = power.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: [], indexes, length, push."
          },
          {
            "type": "teach",
            "text": "Next: for loops."
          },
          {
            "type": "tf",
            "prompt": "Indexes start at 0.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u8",
    "section": "Foundations",
    "title": "Loops with for",
    "blurb": "Repeat work without copy-paste.",
    "nodes": [
      {
        "id": "u8-concept",
        "type": "concept",
        "title": "for loop shape",
        "minutes": 6,
        "summary": "for (start; condition; step) repeats a block.",
        "knowledgeCard": "for (let i = 0; i < 3; i++) { ... }",
        "steps": [
          {
            "type": "teach",
            "text": "Loops repeat code. A classic for loop has start, condition, and step."
          },
          {
            "type": "teach",
            "text": "for (let i = 0; i < 3; i++) { console.log(i); } prints 0, then 1, then 2."
          },
          {
            "type": "teach",
            "text": "i++ means add 1 to i each time."
          },
          {
            "type": "mcq",
            "prompt": "How many times does i go 0,1,2?",
            "choices": [
              "2",
              "3",
              "1",
              "0"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "The loop stops when the condition becomes false.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Step that adds one:",
            "choices": [
              "i--",
              "i++",
              "i**"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u8-memory",
        "type": "memory",
        "title": "Looping arrays",
        "minutes": 6,
        "summary": "Use i < array.length to visit each item.",
        "knowledgeCard": "for (let i = 0; i < arr.length; i++)",
        "steps": [
          {
            "type": "teach",
            "text": "To visit each item: for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }"
          },
          {
            "type": "teach",
            "text": "Off-by-one bugs happen if you use <= length — usually you want < length."
          },
          {
            "type": "mcq",
            "prompt": "Visit all items with…",
            "choices": [
              "i <= arr.length",
              "i < arr.length",
              "i === arr.length"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Loops help avoid copy-pasting the same line.",
            "answer": true
          }
        ]
      },
      {
        "id": "u8-practice",
        "type": "practice",
        "title": "Loops flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "Keyword for a counted loop?",
            "accept": [
              "for"
            ],
            "explain": "A solid answer is “for”."
          },
          {
            "prompt": "Operator that adds 1?",
            "accept": [
              "++",
              "i++"
            ],
            "explain": "A solid answer is “++”."
          },
          {
            "prompt": "Stop before length with…",
            "accept": [
              "<",
              "i < arr.length"
            ],
            "explain": "A solid answer is “<”."
          }
        ]
      },
      {
        "id": "u8-chest",
        "type": "chest",
        "title": "Loops with for chest",
        "minutes": 2
      },
      {
        "id": "u8-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "You can repeat work. Next: package code into functions.",
        "knowledgeCard": "Loops + arrays = list processing.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: for (let i = 0; i < n; i++)."
          },
          {
            "type": "teach",
            "text": "Next: functions — reusable blocks."
          },
          {
            "type": "tf",
            "prompt": "i++ increases i by 1.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u9",
    "section": "Foundations",
    "title": "Functions Basics",
    "blurb": "Reusable blocks you can call.",
    "nodes": [
      {
        "id": "u9-concept",
        "type": "concept",
        "title": "Declaring & calling",
        "minutes": 6,
        "summary": "Functions package steps you can reuse.",
        "knowledgeCard": "function greet() { ... } then greet();",
        "steps": [
          {
            "type": "teach",
            "text": "A function packages steps under a name."
          },
          {
            "type": "teach",
            "text": "function greet() { console.log(\"Hi\"); } defines it. greet(); runs it."
          },
          {
            "type": "teach",
            "text": "Parentheses () are for inputs (parameters). Even with none, you still call with ()."
          },
          {
            "type": "mcq",
            "prompt": "What runs a function named greet?",
            "choices": [
              "greet",
              "greet()",
              "function greet",
              "call greet"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Defining a function is different from calling it.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keyword to declare a classic function",
            "choices": [
              "fun",
              "function",
              "def"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u9-memory",
        "type": "memory",
        "title": "Parameters & return",
        "minutes": 6,
        "summary": "Parameters are inputs; return sends a value out.",
        "knowledgeCard": "return hands a value back to the caller.",
        "steps": [
          {
            "type": "teach",
            "text": "function add(a, b) { return a + b; } — a and b are parameters."
          },
          {
            "type": "teach",
            "text": "return sends a value back. let x = add(2, 3); makes x 5."
          },
          {
            "type": "mcq",
            "prompt": "What does return do?",
            "choices": [
              "Deletes a variable",
              "Sends a value back to the caller",
              "Loops forever",
              "Styles HTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "add(2, 3) passes inputs into parameters.",
            "answer": true
          }
        ]
      },
      {
        "id": "u9-practice",
        "type": "practice",
        "title": "Functions flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "Keyword to declare a function?",
            "accept": [
              "function"
            ],
            "explain": "A solid answer is “function”."
          },
          {
            "prompt": "How do you call greet?",
            "accept": [
              "greet()",
              "greet();"
            ],
            "explain": "A solid answer is “greet()”."
          },
          {
            "prompt": "Keyword to send a value out?",
            "accept": [
              "return"
            ],
            "explain": "A solid answer is “return”."
          }
        ]
      },
      {
        "id": "u9-chest",
        "type": "chest",
        "title": "Functions Basics chest",
        "minutes": 2
      },
      {
        "id": "u9-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Functions reuse logic. Next: mix skills in a mini capstone.",
        "knowledgeCard": "Define, call, return.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: function, call, parameters, return."
          },
          {
            "type": "teach",
            "text": "Next: Foundation Capstone — combine the toolkit."
          },
          {
            "type": "tf",
            "prompt": "Functions help you reuse code.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u10",
    "section": "Foundations",
    "title": "Foundation Capstone",
    "blurb": "Mix variables, if, arrays, and functions.",
    "nodes": [
      {
        "id": "u10-concept",
        "type": "concept",
        "title": "Build a tiny program mind",
        "minutes": 6,
        "summary": "Real programs combine the tools you learned.",
        "knowledgeCard": "Data → decisions → reuse with functions.",
        "steps": [
          {
            "type": "teach",
            "text": "You’ve learned values, decisions, lists, loops, and functions. Real apps combine them."
          },
          {
            "type": "teach",
            "text": "Example idea: store scores in an array, loop them, if score >= 10 log \"Pass\"."
          },
          {
            "type": "teach",
            "text": "Wrap reuse in a function like function average(nums) { ... }."
          },
          {
            "type": "mcq",
            "prompt": "A good capstone mix is…",
            "choices": [
              "Only comments",
              "Variables + if + arrays + functions",
              "Only CSS",
              "Deleting JS"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Functions can use arrays and if inside their body.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "To visit each score use a…",
            "choices": [
              "string",
              "loop",
              "color"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u10-memory",
        "type": "memory",
        "title": "Read code in order",
        "minutes": 6,
        "summary": "Trace values step by step.",
        "knowledgeCard": "Trace: what is each variable after each line?",
        "steps": [
          {
            "type": "teach",
            "text": "When code confuses you, trace on paper: after each line, what is each variable?"
          },
          {
            "type": "teach",
            "text": "This foundation unlocks objects, DOM, and later Node/React — same thinking."
          },
          {
            "type": "mcq",
            "prompt": "Best debug habit?",
            "choices": [
              "Guess randomly",
              "Trace values step by step",
              "Delete everything",
              "Ignore errors"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "You’re building habits that transfer to other courses.",
            "answer": true
          }
        ]
      },
      {
        "id": "u10-practice",
        "type": "practice",
        "title": "Capstone flashcards",
        "minutes": 5,
        "cards": [
          {
            "prompt": "List type with []?",
            "accept": [
              "array",
              "Array"
            ],
            "explain": "A solid answer is “array”."
          },
          {
            "prompt": "Branch keyword?",
            "accept": [
              "if"
            ],
            "explain": "A solid answer is “if”."
          },
          {
            "prompt": "Reusable block keyword?",
            "accept": [
              "function"
            ],
            "explain": "A solid answer is “function”."
          }
        ]
      },
      {
        "id": "u10-chest",
        "type": "chest",
        "title": "Foundation Capstone chest",
        "minutes": 2
      },
      {
        "id": "u10-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Foundations done. Scroll to Unit 11 when we unlock Objects (batch 02).",
        "knowledgeCard": "Next path: objects, DOM, classes, async, then Node/React bridges.",
        "steps": [
          {
            "type": "teach",
            "text": "Foundations complete: you’re ready for objects and the DOM in upcoming units."
          },
          {
            "type": "teach",
            "text": "Keep scrolling the path — locked units open as you finish each lesson in order."
          },
          {
            "type": "tf",
            "prompt": "Finishing foundations prepares you for objects and page interactivity.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "A later topic on this path is…",
            "choices": [
              "Only paint",
              "DOM & innerHTML",
              "Only Excel",
              "Ignoring JS"
            ],
            "answer": 1
          }
        ]
      }
    ]
  }
];
