/**
 * Learn JS curriculum — Duolingo-style micro-units.
 * Each unit: Concept → Memory → Practice → Chest → Overview
 * Lessons use many quick checks (~5–8 min). Pause anytime.
 */
window.LEARN_JS_CURRICULUM = {
  meta: {
    title: "Learn JS Path",
    pacing: "Short daily lessons with many quick checks. Pause anytime. Momentum rewards showing up.",
    speechNote: "Practice lessons use spoken answers via the Web Speech API (browser speech recognition).",
  },
  units: [
    {
      id: "u1",
      section: "Section 1",
      title: "How JavaScript Got Here",
      blurb: "The story of JS \u2014 no code yet.",
      nodes: [
        {
          id: "u1-concept",
          type: "concept",
          title: "Where JS was born",
          minutes: 6,
          summary: "Static pages needed behavior.",
          knowledgeCard: "JS was born in the browser era so websites could react.",
          steps: [
            {
              type: "teach",
              text: "In the early web, pages were mostly static \u2014 text and images. People wanted buttons, forms, and little reactions without reloading everything."
            },
            {
              type: "teach",
              text: "JavaScript was created so browsers could run instructions on the page: respond to clicks, check inputs, and update what you see."
            },
            {
              type: "teach",
              text: "For beginners, remember this: HTML structures, CSS styles, and JavaScript behaves."
            },
            {
              type: "mcq",
              prompt: "What problem did early websites have before JS became common?",
              choices: ["Pages could not display images", "Pages were mostly static and hard to make interactive", "Browsers could not show text", "CSS did not exist"],
              answer: 1
            },
            {
              type: "tf",
              prompt: "JavaScript was meant to help pages react in the browser.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Where does beginner JS usually run?",
              choices: ["Browser", "Printer", "Calculator only"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Which layer is mainly about behavior?",
              choices: ["HTML", "CSS", "JavaScript", "JPEG"],
              answer: 2
            },
            {
              type: "tf",
              prompt: "A static page never needs any interactivity.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Why was JS invented for the web?",
              choices: ["To replace electricity", "To make pages able to do things", "To invent Wi\u2011Fi", "To delete HTML"],
              answer: 1
            },
            {
              type: "tap",
              prompt: "HTML's main job is\u2026",
              choices: ["Structure", "Streaks", "Servers"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "CSS is mainly for\u2026",
              choices: ["Storing passwords", "Styling look and layout", "Compiling apps", "Naming files"],
              answer: 1
            },
            {
              type: "tf",
              prompt: "Milo's tip: JS is the 'do something' layer of a webpage.",
              answer: true
            }
          ]
        },
        {
          id: "u1-memory",
          type: "memory",
          title: "How JS was born",
          minutes: 7,
          summary: "Netscape, ECMAScript, not Java.",
          knowledgeCard: "JavaScript \u2260 Java. Same word family, different languages.",
          steps: [
            {
              type: "teach",
              text: "JS was created quickly at Netscape in the 1990s so the browser could run scripts."
            },
            {
              type: "teach",
              text: "It was later standardized as ECMAScript. The everyday name stayed JavaScript \u2014 and no, it is not the same as Java."
            },
            {
              type: "mcq",
              prompt: "Where was JavaScript first created for?",
              choices: ["Netscape browser", "A fridge", "Only phones", "Excel only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "JavaScript and Java are the same language.",
              answer: false
            },
            {
              type: "tap",
              prompt: "JS was later standardized as\u2026",
              choices: ["ECMAScript", "HTML5", "USB"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Why do people confuse JS with Java?",
              choices: ["Similar names", "Same inventor only", "Same syntax always", "Same company logo forever"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Browsers today still run JavaScript.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "A key beginner fact: JS powers\u2026",
              choices: ["Only PDFs", "Interactivity on many websites", "Only printers", "Only OS kernels"],
              answer: 1
            },
            {
              type: "tap",
              prompt: "Pick the true statement",
              choices: ["JS \u2260 Java", "JS = Java", "JS is CSS"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "ECMAScript is related to JavaScript's standard.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "JS spread because\u2026",
              choices: ["Every browser ignored it", "The web needed interactivity everywhere", "It banned HTML", "It removed CSS"],
              answer: 1
            },
            {
              type: "tf",
              prompt: "You must learn Java before JavaScript.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Best mental model for beginners?",
              choices: ["JS is browser instructions for pages", "JS is only for robots", "JS deletes the internet", "JS is a paint app"],
              answer: 0
            }
          ]
        },
        {
          id: "u1-practice",
          type: "practice",
          title: "JS origin flashcards",
          minutes: 7,
          summary: "Say answers out loud.",
          knowledgeCard: "Browser + interactivity = why JS exists.",
          cards: [
            {
              prompt: "Where does beginner JavaScript mainly run?",
              accept: ["browser", "the browser", "in the browser"]
            },
            {
              prompt: "Was JavaScript made to be the same as Java?",
              accept: ["no", "nope", "false"]
            },
            {
              prompt: "What kind of pages did early JS help create?",
              accept: ["interactive", "interactive pages", "pages that react"]
            },
            {
              prompt: "Name the styling language of the web",
              accept: ["css"]
            },
            {
              prompt: "Name the structure language of the web",
              accept: ["html"]
            },
            {
              prompt: "What is JavaScript's everyday job on a site?",
              accept: ["behavior", "interactivity", "make things interactive", "react"]
            },
            {
              prompt: "What standard name is related to JS?",
              accept: ["ecmascript", "ecma script"]
            },
            {
              prompt: "Which company browser first shipped JS ideas?",
              accept: ["netscape"]
            },
            {
              prompt: "True or false out loud: JS runs in browsers",
              accept: ["true", "yes"]
            },
            {
              prompt: "What should you say: JS equals Java?",
              accept: ["no", "false", "nope"]
            },
            {
              prompt: "One word: pages that respond are\u2026",
              accept: ["interactive"]
            },
            {
              prompt: "What trio makes a webpage? HTML, CSS, and\u2026",
              accept: ["javascript", "js"]
            }
          ]
        },
        {
          id: "u1-chest",
          type: "chest",
          title: "Unit 1 chest",
          minutes: 1,
          summary: "Open a reward."
        },
        {
          id: "u1-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          summary: "You know why JS exists.",
          knowledgeCard: "Next up: talking to the browser console.",
          steps: [
            {
              type: "teach",
              text: "Recap: JS was born so websites could react. It runs in the browser. It is not Java."
            },
            {
              type: "teach",
              text: "Next unit: you'll open the console and run your first real lines."
            },
            {
              type: "tf",
              prompt: "JavaScript helps pages become interactive.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Where will you practice next?",
              choices: ["Browser console", "Only paper", "A toaster", "CSS grid only"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "JS is mainly\u2026",
              choices: ["Behavior", "Wallpaper", "Electricity"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "JavaScript equals Java.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "HTML + CSS + JS means\u2026",
              choices: ["Structure, style, behavior", "Only three fonts", "Three operating systems", "Three passwords"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "It's okay to pause and come back tomorrow.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u2",
      section: "Section 1",
      title: "Your First Lines",
      blurb: "Meet the console and console.log.",
      nodes: [
        {
          id: "u2-concept",
          type: "concept",
          title: "The console sandbox",
          minutes: 6,
          knowledgeCard: "The console runs JS right now and shows results instantly.",
          steps: [
            {
              type: "teach",
              text: "The browser console is a sandbox: type JS and see results instantly."
            },
            {
              type: "teach",
              text: "Open DevTools, find Console, and treat it like a friendly notebook."
            },
            {
              type: "teach",
              text: "console.log(value) means show me this value."
            },
            {
              type: "mcq",
              prompt: "What is the console good for?",
              choices: ["Trying tiny JS safely", "Cooking", "Painting walls", "Sending mail only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "console.log prints a value for you to see.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Where do beginners first run JS?",
              choices: ["Console", "Fridge", "Printer"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "DevTools live in the\u2026",
              choices: ["Browser", "Microwave", "Shoes", "Only on paper"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You should be afraid of typos forever.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Quotes usually wrap\u2026",
              choices: ["Text/strings", "Only numbers forever", "CSS colors only", "Folders"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Pick the print tool",
              choices: ["console.log", "console.cry", "alert.sleep"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "The console can show errors that help you fix code.",
              answer: true
            }
          ]
        },
        {
          id: "u2-memory",
          type: "memory",
          title: "console.log & typos",
          minutes: 7,
          knowledgeCard: "console.log(value) means \u201cshow me this.\u201d",
          steps: [
            {
              type: "teach",
              text: "Strings use quotes. Numbers usually don't. Errors are clues, not shame."
            },
            {
              type: "teach",
              text: "Read the red message, fix one thing, try again."
            },
            {
              type: "mcq",
              prompt: "Which prints Hello?",
              choices: ["console.log(\"Hello\")", "console.log(Hello)", "print hello", "log:"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Missing quotes around text often causes errors.",
              answer: true
            },
            {
              type: "tap",
              prompt: "A failed run means\u2026",
              choices: ["A clue to fix", "Give up coding", "Delete browser"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Numbers are written like\u2026",
              choices: ["42", "\"forty two\" only", "number(42) always", "#42"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Comments with // are ignored by JS.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "// note means\u2026",
              choices: ["A comment", "A crash", "A virus", "A password"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Best reaction to an error?",
              choices: ["Read and retry", "Close laptop forever", "Blame Milo"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "console.log is only for experts.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "A string is\u2026",
              choices: ["Text data", "A shoe", "A GPU", "A server rack"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Trying small examples is a great habit.",
              answer: true
            }
          ]
        },
        {
          id: "u2-practice",
          type: "practice",
          title: "Your First Lines flashcards",
          minutes: 7,
          knowledgeCard: "The console runs JS right now and shows results instantly.",
          cards: [
            {
              prompt: "What method prints to the console?",
              accept: ["console.log", "console log", "log"]
            },
            {
              prompt: "Should text usually go inside quotes?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Are typos normal when learning?",
              accept: ["yes", "yeah", "of course", "true"]
            },
            {
              prompt: "Where do you open the console?",
              accept: ["devtools", "dev tools", "browser", "developer tools"]
            },
            {
              prompt: "What symbol starts a single-line comment?",
              accept: ["//", "slash slash", "double slash"]
            },
            {
              prompt: "Say the tool name: console\u2026",
              accept: ["log", "console.log"]
            },
            {
              prompt: "Is 42 a number literal?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Is Hello without quotes usually a string?",
              accept: ["no", "nope", "false"]
            },
            {
              prompt: "What should you do after an error?",
              accept: ["fix", "read and fix", "retry", "try again"]
            },
            {
              prompt: "DevTools are part of the\u2026",
              accept: ["browser"]
            },
            {
              prompt: "True or false: console shows output",
              accept: ["true", "yes"]
            },
            {
              prompt: "One word for text in quotes",
              accept: ["string", "strings"]
            }
          ]
        },
        {
          id: "u2-chest",
          type: "chest",
          title: "Your First Lines chest",
          minutes: 1
        },
        {
          id: "u2-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: values and variables.",
          steps: [
            {
              type: "teach",
              text: "You can run JS in the console. Next: store values with variables."
            },
            {
              type: "tf",
              prompt: "console.log shows values.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic is\u2026",
              choices: ["Variables", "Painting", "Baking", "Wi\u2011Fi law"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "JS in the console is\u2026",
              choices: ["Safe practice", "Illegal", "Only offline"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Quotes matter for text.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Errors are\u2026",
              choices: ["Clues", "The end", "Viruses", "CSS"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You earned the right to pause and return.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u3",
      section: "Section 1",
      title: "Values & Variables",
      blurb: "Named boxes for your data.",
      nodes: [
        {
          id: "u3-concept",
          type: "concept",
          title: "What is a variable?",
          minutes: 6,
          knowledgeCard: "Variables store values under a name.",
          steps: [
            {
              type: "teach",
              text: "A variable is a named box that holds a value you can reuse."
            },
            {
              type: "teach",
              text: "Common value types to start: string, number, boolean."
            },
            {
              type: "teach",
              text: "Clear names like userName beat mysterious x."
            },
            {
              type: "mcq",
              prompt: "A variable is\u2026",
              choices: ["A named storage for a value", "A CSS color", "A browser tab only", "A keyboard"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Strings hold text.",
              answer: true
            },
            {
              type: "tap",
              prompt: "true/false values are\u2026",
              choices: ["Booleans", "Loops", "Fonts"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Which is a number?",
              choices: ["7", "\"seven\" always", "true", "html"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can reuse a variable's value later.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Best name for a score?",
              choices: ["playerScore", "x", "asdf", "temp2final"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Text goes in a\u2026",
              choices: ["String", "Boolean only", "Loop"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Variables help avoid repeating the same value everywhere.",
              answer: true
            }
          ]
        },
        {
          id: "u3-memory",
          type: "memory",
          title: "let, const, and names",
          minutes: 7,
          knowledgeCard: "prefer clear names like playerScore.",
          steps: [
            {
              type: "teach",
              text: "Use let when the value may change. Use const when it should stay put."
            },
            {
              type: "teach",
              text: "Assignment with = means put this value into the name."
            },
            {
              type: "mcq",
              prompt: "Which keyword allows reassignment?",
              choices: ["let", "const", "html", "css"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "const is great for values that shouldn't be reassigned.",
              answer: true
            },
            {
              type: "tap",
              prompt: "= in JS often means\u2026",
              choices: ["Assign", "Compare always", "Delete"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Pick a clear name",
              choices: ["cityName", "a", "zz", "n"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "let score = 0; stores 0 in score.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Booleans are\u2026",
              choices: ["true or false", "only strings", "only arrays", "images"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Prefer\u2026",
              choices: ["Clear names", "One-letter chaos", "Emojis only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "const means the binding shouldn't be reassigned.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "userAge sounds like\u2026",
              choices: ["A number you might store", "A CSS file", "A server OS", "A font"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Naming clearly helps future you.",
              answer: true
            }
          ]
        },
        {
          id: "u3-practice",
          type: "practice",
          title: "Values & Variables flashcards",
          minutes: 7,
          knowledgeCard: "Variables store values under a name.",
          cards: [
            {
              prompt: "Keyword for a value that should not be reassigned?",
              accept: ["const"]
            },
            {
              prompt: "Keyword that allows a value to change?",
              accept: ["let"]
            },
            {
              prompt: "Is userName clearer than x?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "What do you call text in quotes?",
              accept: ["string", "a string"]
            },
            {
              prompt: "What type is true?",
              accept: ["boolean", "bool"]
            },
            {
              prompt: "What does = do in let n = 1?",
              accept: ["assign", "assignment", "puts the value", "stores"]
            },
            {
              prompt: "Name a numeric type",
              accept: ["number", "numbers"]
            },
            {
              prompt: "Say a good variable name for points",
              accept: ["score", "player score", "playerScore", "points"]
            },
            {
              prompt: "Can variables be reused?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "const or let for a changing counter?",
              accept: ["let"]
            },
            {
              prompt: "Is false a boolean?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Variables are named\u2026",
              accept: ["boxes", "storage", "containers", "placeholders"]
            }
          ]
        },
        {
          id: "u3-chest",
          type: "chest",
          title: "Values & Variables chest",
          minutes: 1
        },
        {
          id: "u3-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: operators and comparisons.",
          steps: [
            {
              type: "teach",
              text: "You can store data. Next: calculate and compare with operators."
            },
            {
              type: "tf",
              prompt: "let can change.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "const is for\u2026",
              choices: ["Stable bindings", "Only CSS", "Deleting pages", "Loops only"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Next up",
              choices: ["Operators", "Pottery", "Fishing"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Booleans are true/false.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "A string is\u2026",
              choices: ["Text", "A GPU", "A router", "A hammer"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Clear names help.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u4",
      section: "Section 2",
      title: "Working with Data",
      blurb: "Math, messages, and comparisons.",
      nodes: [
        {
          id: "u4-concept",
          type: "concept",
          title: "Operators at a glance",
          minutes: 6,
          knowledgeCard: "+ adds numbers or joins text in different contexts.",
          steps: [
            {
              type: "teach",
              text: "Operators combine or compare values: + - * / and more."
            },
            {
              type: "teach",
              text: "+ can add numbers or join strings depending on the values."
            },
            {
              type: "teach",
              text: "You can store a result: total = price * 2."
            },
            {
              type: "mcq",
              prompt: "What does * usually do with numbers?",
              choices: ["Multiply", "Delete", "Style", "Comment"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "+ can join two strings.",
              answer: true
            },
            {
              type: "tap",
              prompt: "3 + 4 is\u2026",
              choices: ["7", "\"34\" always", "true"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "score += 1 means\u2026",
              choices: ["Add one to score", "Delete score", "Print score", "Freeze score"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Operators never change values.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Store a calculation with\u2026",
              choices: ["Assignment to a variable", "Only CSS", "Only HTML tags", "A JPG"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Pick a math operator",
              choices: ["/", "html", "milo"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Joining text can build messages.",
              answer: true
            }
          ]
        },
        {
          id: "u4-memory",
          type: "memory",
          title: "Compare with ===",
          minutes: 7,
          knowledgeCard: "=== asks \u201care these the same?\u201d",
          steps: [
            {
              type: "teach",
              text: "=== checks whether values are the same (strict equality)."
            },
            {
              type: "teach",
              text: "Comparisons like < and > help you ask questions about numbers."
            },
            {
              type: "mcq",
              prompt: "Strict equality operator?",
              choices: ["===", "=", "++", "//"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "=== asks if values are the same.",
              answer: true
            },
            {
              type: "tap",
              prompt: "5 === 5 is\u2026",
              choices: ["true", "false", "maybe"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "\"hi\" === \"hi\" is\u2026",
              choices: ["true", "false", "7", "null"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "= and === mean the same thing.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Which compares greater than?",
              choices: [">", "===", "const", "let"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Use === to\u2026",
              choices: ["Compare", "Comment", "Style"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Comparisons produce boolean results.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "A message can be built by\u2026",
              choices: ["Joining strings", "Deleting JS", "Closing the tab", "Ignoring values"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can compare ages with >.",
              answer: true
            }
          ]
        },
        {
          id: "u4-practice",
          type: "practice",
          title: "Working with Data flashcards",
          minutes: 7,
          knowledgeCard: "+ adds numbers or joins text in different contexts.",
          cards: [
            {
              prompt: "Operator for strict equality?",
              accept: ["===", "triple equals", "three equals"]
            },
            {
              prompt: "What does score += 1 do?",
              accept: ["adds one", "add one", "increases by one", "plus one"]
            },
            {
              prompt: "Can + join text?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "What does * do with numbers?",
              accept: ["multiply", "multiplication", "times"]
            },
            {
              prompt: "Is = the same as === ?",
              accept: ["no", "nope", "false"]
            },
            {
              prompt: "What type do comparisons often give?",
              accept: ["boolean", "true or false", "bool"]
            },
            {
              prompt: "Say greater-than symbol name or symbol",
              accept: [">", "greater than"]
            },
            {
              prompt: "2 * 3 equals?",
              accept: ["6", "six"]
            },
            {
              prompt: "Join Hello and world with what operator?",
              accept: ["+", "plus"]
            },
            {
              prompt: "Strict equal true for 1 and 1?",
              accept: ["true", "yes"]
            },
            {
              prompt: "score = score + 1 is like\u2026",
              accept: ["score += 1", "+=", "increment"]
            },
            {
              prompt: "Operators help you\u2026",
              accept: ["calculate", "compare", "combine values"]
            }
          ]
        },
        {
          id: "u4-chest",
          type: "chest",
          title: "Working with Data chest",
          minutes: 1
        },
        {
          id: "u4-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: branching with if and else.",
          steps: [
            {
              type: "teach",
              text: "You can calculate and compare. Next: if/else decisions."
            },
            {
              type: "tf",
              prompt: "=== compares for equality.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["if / else", "Pottery", "DNS only", "Fonts only"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "+ can\u2026",
              choices: ["Add or join", "Only delete", "Only style"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "+= adds to a variable.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Comparisons often return\u2026",
              choices: ["Booleans", "Images", "CSS files", "Servers"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You're ready to branch with if.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u5",
      section: "Section 2",
      title: "Decisions",
      blurb: "Code that chooses a path.",
      nodes: [
        {
          id: "u5-concept",
          type: "concept",
          title: "If this, then that",
          minutes: 6,
          knowledgeCard: "if checks a yes/no question.",
          steps: [
            {
              type: "teach",
              text: "if checks a condition. If it's true, a block of code runs."
            },
            {
              type: "teach",
              text: "Conditions are yes/no questions built from comparisons and booleans."
            },
            {
              type: "teach",
              text: "Read code out loud: If this is true, do that."
            },
            {
              type: "mcq",
              prompt: "Which keyword starts a condition?",
              choices: ["if", "loop", "const", "css"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "if runs code when the condition is true.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Conditions answer\u2026",
              choices: ["Yes/no", "Only colors", "Only fonts"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "age >= 18 is a\u2026",
              choices: ["Condition expression", "CSS rule", "HTML tag", "File name"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You need Java before using if.",
              answer: false
            },
            {
              type: "mcq",
              prompt: "Best reading of if (ready)",
              choices: ["If ready is true\u2026", "Delete ready", "Style ready", "Ignore ready"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "if uses\u2026",
              choices: ["Conditions", "Only images", "Only PDFs"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Decisions let programs react differently.",
              answer: true
            }
          ]
        },
        {
          id: "u5-memory",
          type: "memory",
          title: "else and else if",
          minutes: 7,
          knowledgeCard: "else covers \u201cotherwise.\u201d",
          steps: [
            {
              type: "teach",
              text: "else covers the otherwise case. else if adds more branches."
            },
            {
              type: "teach",
              text: "Keep branches short so the path stays readable."
            },
            {
              type: "mcq",
              prompt: "What runs when if is false (with else)?",
              choices: ["else block", "Nothing ever", "CSS only", "HTML only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "else means otherwise.",
              answer: true
            },
            {
              type: "tap",
              prompt: "More than two paths? Use\u2026",
              choices: ["else if", "delete if", "ignore"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Too many nested ifs can be\u2026",
              choices: ["Hard to read", "Required always", "Faster CSS", "A font"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can combine checks with && for and.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "|| often means\u2026",
              choices: ["or", "only multiply", "comment", "assign"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "else pairs with\u2026",
              choices: ["if", "console", "img"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Branches should stay clear and short for beginners.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Access denied message belongs in\u2026",
              choices: ["An else/false path", "CSS animation only", "A filename", "A color picker"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Decisions use booleans under the hood.",
              answer: true
            }
          ]
        },
        {
          id: "u5-practice",
          type: "practice",
          title: "Decisions flashcards",
          minutes: 7,
          knowledgeCard: "if checks a yes/no question.",
          cards: [
            {
              prompt: "Keyword that starts a condition?",
              accept: ["if"]
            },
            {
              prompt: "Keyword for the false path?",
              accept: ["else"]
            },
            {
              prompt: "Do conditions use true/false?",
              accept: ["yes", "true or false", "booleans", "boolean", "true"]
            },
            {
              prompt: "What does else if add?",
              accept: ["more branches", "another branch", "extra conditions"]
            },
            {
              prompt: "&& means\u2026",
              accept: ["and"]
            },
            {
              prompt: "|| means\u2026",
              accept: ["or"]
            },
            {
              prompt: "Say it: if checks a\u2026",
              accept: ["condition"]
            },
            {
              prompt: "Is nesting lots of ifs always best?",
              accept: ["no", "nope", "false"]
            },
            {
              prompt: "age >= 18 is used in\u2026",
              accept: ["conditions", "if", "decisions"]
            },
            {
              prompt: "Otherwise in JS is often\u2026",
              accept: ["else"]
            },
            {
              prompt: "Decisions pick different\u2026",
              accept: ["paths", "actions", "branches"]
            },
            {
              prompt: "True or false: if needs a condition",
              accept: ["true", "yes"]
            }
          ]
        },
        {
          id: "u5-chest",
          type: "chest",
          title: "Decisions chest",
          minutes: 1
        },
        {
          id: "u5-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: arrays and loops.",
          steps: [
            {
              type: "teach",
              text: "You can branch. Next: lists and loops."
            },
            {
              type: "tf",
              prompt: "if/else choose paths.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["Loops & lists", "Cooking", "GPU drivers", "Only SVG"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "else means\u2026",
              choices: ["Otherwise", "Always true", "Delete code"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "&& means and.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Conditions are\u2026",
              choices: ["Yes/no checks", "Images", "Fonts", "Cables"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Great job \u2014 pause anytime.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u6",
      section: "Section 2",
      title: "Loops & Lists",
      blurb: "Repeat without copy-paste.",
      nodes: [
        {
          id: "u6-concept",
          type: "concept",
          title: "Meet arrays",
          minutes: 6,
          knowledgeCard: "Arrays hold multiple values in order.",
          steps: [
            {
              type: "teach",
              text: "An array is an ordered list of values in square brackets."
            },
            {
              type: "teach",
              text: "Index 0 is usually the first item. .length counts items."
            },
            {
              type: "teach",
              text: "Lists hold related things: todos, names, scores."
            },
            {
              type: "mcq",
              prompt: "Arrays store\u2026",
              choices: ["Ordered lists of values", "Only CSS", "Only files", "Only Wi\u2011Fi"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Index 0 is often the first item.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Write an array with\u2026",
              choices: ["[ ]", "{ } only for this", "< >"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: ".length tells you\u2026",
              choices: ["How many items", "Font size", "Screen brightness", "Battery %"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Arrays can hold strings.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "[\"a\",\"b\"] has length\u2026",
              choices: ["2", "0", "99", "a"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "First index is usually\u2026",
              choices: ["0", "1 always", "99"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Lists help group related values.",
              answer: true
            }
          ]
        },
        {
          id: "u6-memory",
          type: "memory",
          title: "Loop through a list",
          minutes: 7,
          knowledgeCard: "Loops do the same idea many times.",
          steps: [
            {
              type: "teach",
              text: "Loops repeat actions. for...of visits each item in an array."
            },
            {
              type: "teach",
              text: "Don't copy the same line ten times \u2014 loop it."
            },
            {
              type: "mcq",
              prompt: "Loops help you\u2026",
              choices: ["Repeat work", "Delete HTML forever", "Replace CSS", "Close tabs"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "for...of can walk through an array.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Avoid\u2026",
              choices: ["Copy-paste spam", "Learning", "Variables"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Each loop visit is often called an\u2026",
              choices: ["Iteration", "Opera", "Ethernet", "Emoji"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can log each item in a list with a loop.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Best tool to greet every name in a list?",
              choices: ["A loop", "Only const", "Only CSS", "A JPG"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "arrays + loops =",
              choices: ["Many items, one pattern", "No JS", "Only HTML"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Loops replace boring repetition.",
              answer: true
            },
            {
              type: "mcq",
              prompt: ".push can\u2026",
              choices: ["Add an item", "Style a page", "Compile C", "Draw circles only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Beginners can start with for...of.",
              answer: true
            }
          ]
        },
        {
          id: "u6-practice",
          type: "practice",
          title: "Loops & Lists flashcards",
          minutes: 7,
          knowledgeCard: "Arrays hold multiple values in order.",
          cards: [
            {
              prompt: "Structure for an ordered list?",
              accept: ["array", "an array", "arrays"]
            },
            {
              prompt: "Does index 0 mean first item?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "What do loops help you avoid?",
              accept: ["copy paste", "copying", "repeating code", "duplicate code"]
            },
            {
              prompt: "What property counts items?",
              accept: ["length", ".length"]
            },
            {
              prompt: "for...of loops through a\u2026",
              accept: ["array", "list"]
            },
            {
              prompt: "Square brackets make an\u2026",
              accept: ["array"]
            },
            {
              prompt: "One loop visit is an\u2026",
              accept: ["iteration"]
            },
            {
              prompt: "Can arrays hold numbers?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Say add-to-array method",
              accept: ["push", ".push"]
            },
            {
              prompt: "Repeat without copy-paste using a\u2026",
              accept: ["loop"]
            },
            {
              prompt: "First item index?",
              accept: ["0", "zero"]
            },
            {
              prompt: "Lists group\u2026",
              accept: ["related values", "items", "values"]
            }
          ]
        },
        {
          id: "u6-chest",
          type: "chest",
          title: "Loops & Lists chest",
          minutes: 1
        },
        {
          id: "u6-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: functions.",
          steps: [
            {
              type: "teach",
              text: "You can repeat work over lists. Next: functions."
            },
            {
              type: "tf",
              prompt: "Arrays are ordered lists.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["Functions", "Baking", "Routers only", "Only Markdown"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Index 0 is\u2026",
              choices: ["First item", "Last always", "CSS"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Loops repeat actions.",
              answer: true
            },
            {
              type: "mcq",
              prompt: ".length counts\u2026",
              choices: ["Items", "Pixels only", "Tabs only", "Fans"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You're doing great \u2014 take breaks.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u7",
      section: "Section 3",
      title: "Functions",
      blurb: "Reusable actions with a name.",
      nodes: [
        {
          id: "u7-concept",
          type: "concept",
          title: "What is a function?",
          minutes: 6,
          knowledgeCard: "Declare once, call many times.",
          steps: [
            {
              type: "teach",
              text: "A function packages steps under a name you can run anytime."
            },
            {
              type: "teach",
              text: "Declare it once, call it whenever you need that action."
            },
            {
              type: "teach",
              text: "One function should do one clear job."
            },
            {
              type: "mcq",
              prompt: "A function is\u2026",
              choices: ["A reusable named action", "A CSS color", "A server cable", "A font file"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can call a function many times.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Running a function is called\u2026",
              choices: ["Calling", "Painting", "Hosting"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Declare then\u2026",
              choices: ["Call", "Delete browser", "Ignore forever", "Export JPEG"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Functions reduce copy-paste of the same steps.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Best function job size?",
              choices: ["One clear job", "Entire OS", "All CSS forever", "Random chaos"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "greet() is a\u2026",
              choices: ["Call", "Comment", "Image"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Named actions make code easier to grow.",
              answer: true
            }
          ]
        },
        {
          id: "u7-memory",
          type: "memory",
          title: "Parameters and return",
          minutes: 7,
          knowledgeCard: "return gives an answer back to the caller.",
          steps: [
            {
              type: "teach",
              text: "Parameters are input slots. Arguments are values you pass in."
            },
            {
              type: "teach",
              text: "return sends a value back to the caller."
            },
            {
              type: "mcq",
              prompt: "Inputs to a function are\u2026",
              choices: ["Parameters/arguments", "Only CSS classes", "Only file paths", "Only emojis"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "return gives a value back.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Without return you might only\u2026",
              choices: ["Side effects/logs", "Create Wi\u2011Fi", "Invent HTML"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "double(n) probably\u2026",
              choices: ["Returns n*2", "Deletes n", "Styles n", "Hosts n"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Arguments fill parameter slots.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "return vs console.log",
              choices: ["return gives a value to use", "They are identical always", "return only styles", "log deletes data"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Parameters are\u2026",
              choices: ["Inputs", "Browsers", "Images"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Functions can take zero or more inputs.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "tip(price) might return\u2026",
              choices: ["A calculated tip", "A JPEG", "A router", "A font"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Clear parameter names help.",
              answer: true
            }
          ]
        },
        {
          id: "u7-practice",
          type: "practice",
          title: "Functions flashcards",
          minutes: 7,
          knowledgeCard: "Declare once, call many times.",
          cards: [
            {
              prompt: "What do you do to run a function?",
              accept: ["call it", "call", "invoke", "run it"]
            },
            {
              prompt: "Keyword that sends a value out?",
              accept: ["return"]
            },
            {
              prompt: "Are parameters inputs?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Declare once, then\u2026",
              accept: ["call", "call many times", "reuse"]
            },
            {
              prompt: "Values you pass in are\u2026",
              accept: ["arguments", "args"]
            },
            {
              prompt: "One function should have\u2026",
              accept: ["one job", "one clear job"]
            },
            {
              prompt: "return gives a value to the\u2026",
              accept: ["caller"]
            },
            {
              prompt: "Can you call a function twice?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "greet(name) uses a\u2026",
              accept: ["parameter", "argument", "input"]
            },
            {
              prompt: "console.log vs return: which gives a usable value?",
              accept: ["return"]
            },
            {
              prompt: "Reusable named action is a\u2026",
              accept: ["function"]
            },
            {
              prompt: "Inputs in, result\u2026",
              accept: ["out"]
            }
          ]
        },
        {
          id: "u7-chest",
          type: "chest",
          title: "Functions chest",
          minutes: 1
        },
        {
          id: "u7-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: the DOM.",
          steps: [
            {
              type: "teach",
              text: "You can reuse logic with functions. Next: the DOM."
            },
            {
              type: "tf",
              prompt: "Functions are reusable actions.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["DOM / the page", "Baking bread", "Only FTP", "Only JSON files forever"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "return sends\u2026",
              choices: ["A value back", "A virus", "A font"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Parameters are inputs.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Calling means\u2026",
              choices: ["Running the function", "Deleting it", "Hiding CSS", "Closing HTML"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Rest is part of learning.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u8",
      section: "Section 3",
      title: "Talking to the Page",
      blurb: "Find elements and update them.",
      nodes: [
        {
          id: "u8-concept",
          type: "concept",
          title: "DOM in plain words",
          minutes: 6,
          knowledgeCard: "DOM = the page as objects JS can touch.",
          steps: [
            {
              type: "teach",
              text: "The DOM is the live page as objects JavaScript can read and change."
            },
            {
              type: "teach",
              text: "HTML is structure; JS can update that structure's content after load."
            },
            {
              type: "teach",
              text: "Think: select something, then change it."
            },
            {
              type: "mcq",
              prompt: "DOM means the page as\u2026",
              choices: ["Objects JS can touch", "Only CSS files", "Only servers", "Only PDFs"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "JS can change text on the page.",
              answer: true
            },
            {
              type: "tap",
              prompt: "HTML provides\u2026",
              choices: ["Structure", "Streaks", "Batteries"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Behavior on the page is often\u2026",
              choices: ["JavaScript", "Only JPEG", "Only copper", "Only RAM"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "The DOM updates what users see.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "First step is usually\u2026",
              choices: ["Select an element", "Delete the site", "Close DevTools forever", "Disable JS"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "DOM is\u2026",
              choices: ["Live page model", "A fruit", "A charger"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Structure vs behavior: HTML vs JS.",
              answer: true
            }
          ]
        },
        {
          id: "u8-memory",
          type: "memory",
          title: "querySelector & textContent",
          minutes: 7,
          knowledgeCard: "document.querySelector finds an element.",
          steps: [
            {
              type: "teach",
              text: "document.querySelector finds an element."
            },
            {
              type: "teach",
              text: "textContent is a safe way to change visible text."
            },
            {
              type: "mcq",
              prompt: "Find an element with\u2026",
              choices: ["querySelector", "queryDestroy", "cssOnly", "htmlEat"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "textContent changes visible text.",
              answer: true
            },
            {
              type: "tap",
              prompt: "document.querySelector lives on\u2026",
              choices: ["document", "banana", "wifi"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Prefer textContent over reckless HTML injection when learning because\u2026",
              choices: ["It's safer/simpler for text", "It deletes CSS", "It bans JS", "It closes tabs"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can also toggle a CSS class to change style.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "After selecting, you\u2026",
              choices: ["Update the element", "Throw the PC", "Disable HTML", "Remove URLs always"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "textContent sets\u2026",
              choices: ["Text", "Wi\u2011Fi password", "GPU clock"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "querySelector uses a CSS-like selector string.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "\"h1\" selector finds\u2026",
              choices: ["A heading element", "A modem", "A cable", "A fridge"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Small demos can change text on load.",
              answer: true
            }
          ]
        },
        {
          id: "u8-practice",
          type: "practice",
          title: "Talking to the Page flashcards",
          minutes: 7,
          knowledgeCard: "DOM = the page as objects JS can touch.",
          cards: [
            {
              prompt: "Method that finds an element?",
              accept: ["queryselector", "document.queryselector", "query selector"]
            },
            {
              prompt: "Safe-ish property for visible text?",
              accept: ["textcontent", "text content"]
            },
            {
              prompt: "Does HTML structure while JS behaves?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "DOM stands for live page\u2026",
              accept: ["objects", "model", "document object model"]
            },
            {
              prompt: "querySelector is on\u2026",
              accept: ["document"]
            },
            {
              prompt: "Change text with\u2026",
              accept: ["textcontent", "text content"]
            },
            {
              prompt: "Select then\u2026",
              accept: ["update", "change"]
            },
            {
              prompt: "Can JS change the page after load?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Selector for headings often starts with\u2026",
              accept: ["h1", "h"]
            },
            {
              prompt: "Class toggle can change\u2026",
              accept: ["style", "styles", "look"]
            },
            {
              prompt: "DOM is the\u2026",
              accept: ["live page", "page model"]
            },
            {
              prompt: "Find, then change, then user\u2026",
              accept: ["sees it", "sees"]
            }
          ]
        },
        {
          id: "u8-chest",
          type: "chest",
          title: "Talking to the Page chest",
          minutes: 1
        },
        {
          id: "u8-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: events.",
          steps: [
            {
              type: "teach",
              text: "You can edit the page. Next: clicks and inputs."
            },
            {
              type: "tf",
              prompt: "querySelector finds elements.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["Events / clicks", "Plumbing", "Only Bluetooth", "Only Excel"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "textContent updates\u2026",
              choices: ["Text", "Electricity", "Rain"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "DOM is the live page model.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "HTML is mostly\u2026",
              choices: ["Structure", "Behavior only", "Streaks", "XP"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Interactive pages are close now.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u9",
      section: "Section 3",
      title: "Clicks & Inputs",
      blurb: "Make the page respond.",
      nodes: [
        {
          id: "u9-concept",
          type: "concept",
          title: "Events are signals",
          minutes: 6,
          knowledgeCard: "addEventListener waits for a user action.",
          steps: [
            {
              type: "teach",
              text: "Clicks and typing send events your code can listen for."
            },
            {
              type: "teach",
              text: "addEventListener waits for an action, then runs your function."
            },
            {
              type: "teach",
              text: "Use real <button> elements for clickable actions."
            },
            {
              type: "mcq",
              prompt: "addEventListener does what?",
              choices: ["Listens for events", "Deletes CSS", "Bakes bread", "Hides HTML forever"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "A click is an event.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Listen then\u2026",
              choices: ["Run a function", "Close Earth", "Remove Wi\u2011Fi"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Best clickable control?",
              choices: ["<button>", "<div> pretending always", "<span> only", "<hr>"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Events make pages feel alive.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Typing can trigger\u2026",
              choices: ["Input events", "Only rain", "Only GPU fans", "Only PDFs"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Signals from the user are\u2026",
              choices: ["Events", "Routers", "Fonts"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Your handler runs when the event happens.",
              answer: true
            }
          ]
        },
        {
          id: "u9-memory",
          type: "memory",
          title: "Buttons, values, updates",
          minutes: 7,
          knowledgeCard: "Listen \u2192 read \u2192 update the page.",
          steps: [
            {
              type: "teach",
              text: "Read input with .value. Update the UI after the click."
            },
            {
              type: "teach",
              text: "Keep a small bit of state (like a counter) and show it on the page."
            },
            {
              type: "mcq",
              prompt: "Read an input box with\u2026",
              choices: [".value", ".length only", ".CSS", ".wifi"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can increase a counter on each click.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Pattern:",
              choices: ["Listen \u2192 read \u2192 update", "Delete \u2192 cry \u2192 quit", "Ignore \u2192 hope"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Common beginner bug?",
              choices: ["Listening on the wrong element", "Using too much oxygen", "Owning too many socks", "Having a mascot"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Buttons should be real button elements.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Show new text with\u2026",
              choices: ["textContent / DOM update", "Only FTP", "Only HDMI", "Only RAM"],
              answer: 0
            },
            {
              type: "tap",
              prompt: ".value reads\u2026",
              choices: ["Input text", "Battery chemistry", "Cloud altitude"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "State can be a simple variable.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "After click you usually\u2026",
              choices: ["Update the page", "Unplug the monitor", "Disable JS forever", "Delete HTML"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Small interactive demos build confidence.",
              answer: true
            }
          ]
        },
        {
          id: "u9-practice",
          type: "practice",
          title: "Clicks & Inputs flashcards",
          minutes: 7,
          knowledgeCard: "addEventListener waits for a user action.",
          cards: [
            {
              prompt: "Method that attaches a click handler?",
              accept: ["addeventlistener", "add event listener"]
            },
            {
              prompt: "Property that reads input text?",
              accept: ["value", ".value"]
            },
            {
              prompt: "Should controls be real buttons?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "A click is an\u2026",
              accept: ["event"]
            },
            {
              prompt: "Listen, read, then\u2026",
              accept: ["update", "update the page"]
            },
            {
              prompt: "Counter state can be a\u2026",
              accept: ["variable"]
            },
            {
              prompt: "addEventListener waits for an\u2026",
              accept: ["event", "action"]
            },
            {
              prompt: "Typing into a box uses\u2026",
              accept: ["input", "value", "events"]
            },
            {
              prompt: "Wrong element listener is a\u2026",
              accept: ["bug", "common bug"]
            },
            {
              prompt: "Make pages feel\u2026",
              accept: ["alive", "interactive"]
            },
            {
              prompt: "Handler means the\u2026",
              accept: ["function", "callback", "listener function"]
            },
            {
              prompt: "User action \u2192 function\u2026",
              accept: ["runs"]
            }
          ]
        },
        {
          id: "u9-chest",
          type: "chest",
          title: "Clicks & Inputs chest",
          minutes: 1
        },
        {
          id: "u9-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Next: ship a mini project.",
          steps: [
            {
              type: "teach",
              text: "You can respond to users. Next: a tiny project."
            },
            {
              type: "tf",
              prompt: "Events power interactivity.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Next topic",
              choices: ["Tiny project", "Astrophysics final", "Only COBOL", "Only abacus"],
              answer: 0
            },
            {
              type: "tap",
              prompt: ".value reads\u2026",
              choices: ["Inputs", "Moons", "Cables"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "addEventListener listens.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Buttons should be\u2026",
              choices: ["Real buttons", "Invisible dreams", "Only images forever", "Only HR tags"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You're ready to build something small.",
              answer: true
            }
          ]
        }
      ]
    },
    {
      id: "u10",
      section: "Section 4",
      title: "Tiny Project",
      blurb: "One small interactive page.",
      nodes: [
        {
          id: "u10-concept",
          type: "concept",
          title: "Plan the mini build",
          minutes: 6,
          knowledgeCard: "Plan: data \u2192 logic \u2192 UI \u2192 events.",
          steps: [
            {
              type: "teach",
              text: "Pick a tiny goal: counter, quiz, or mood board."
            },
            {
              type: "teach",
              text: "Plan: data \u2192 logic \u2192 UI \u2192 events."
            },
            {
              type: "teach",
              text: "Small scope wins. Ship something you can show."
            },
            {
              type: "mcq",
              prompt: "A good first project is\u2026",
              choices: ["Tiny and clear", "A full social network", "An OS kernel", "A jet engine"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Planning order can be data, logic, UI, events.",
              answer: true
            },
            {
              type: "tap",
              prompt: "Pick a project type",
              choices: ["Counter", "Space elevator", "Nuclear plant"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Shipping small means\u2026",
              choices: ["Finish a minimal version", "Never start", "Only design logos", "Avoid buttons"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "A quiz can use if/else for scoring.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Mood board might change\u2026",
              choices: ["Colors/text classes", "Earth's orbit", "DNS root", "CPU silicon"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "First win should be\u2026",
              choices: ["Finishable", "Infinite", "Impossible"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Milo says celebrate tiny ships.",
              answer: true
            }
          ]
        },
        {
          id: "u10-memory",
          type: "memory",
          title: "Wire the pieces",
          minutes: 7,
          knowledgeCard: "Small functions keep projects readable.",
          steps: [
            {
              type: "teach",
              text: "Connect variables, functions, DOM updates, and listeners."
            },
            {
              type: "teach",
              text: "Keep functions small. Test after each change."
            },
            {
              type: "mcq",
              prompt: "Wiring means connecting\u2026",
              choices: ["Data, logic, UI, events", "Only CSS files", "Only chargers", "Only sprites"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Test after each small change.",
              answer: true
            },
            {
              type: "tap",
              prompt: "DOM updates change\u2026",
              choices: ["What users see", "The moon", "Ocean salt"],
              answer: 0
            },
            {
              type: "mcq",
              prompt: "Listeners handle\u2026",
              choices: ["User actions", "Rainfall", "Gravity", "Taxes"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Small functions stay readable.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "If something breaks\u2026",
              choices: ["Isolate and fix", "Delete the repo always", "Blame HTML forever", "Disable learning"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Variables hold\u2026",
              choices: ["State", "Clouds", "Bees"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "A working tiny page is a real portfolio win.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Edge case handling uses\u2026",
              choices: ["if / else", "Only paint", "Only copper", "Only vibes"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "You can add a short list with a loop later.",
              answer: true
            }
          ]
        },
        {
          id: "u10-practice",
          type: "practice",
          title: "Tiny Project flashcards",
          minutes: 7,
          knowledgeCard: "Plan: data \u2192 logic \u2192 UI \u2192 events.",
          cards: [
            {
              prompt: "Name one tiny project idea",
              accept: ["counter", "quiz", "mood board", "streak tracker", "click counter"]
            },
            {
              prompt: "Should you test after each small change?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Is finishing a tiny project a real win?",
              accept: ["yes", "yeah", "true"]
            },
            {
              prompt: "Plan order starts with\u2026",
              accept: ["data", "data logic ui events"]
            },
            {
              prompt: "UI updates use the\u2026",
              accept: ["dom"]
            },
            {
              prompt: "Clicks need\u2026",
              accept: ["events", "listeners", "addeventlistener"]
            },
            {
              prompt: "Keep functions\u2026",
              accept: ["small", "readable"]
            },
            {
              prompt: "Scoring a quiz uses\u2026",
              accept: ["if", "if else", "decisions"]
            },
            {
              prompt: "State can live in a\u2026",
              accept: ["variable"]
            },
            {
              prompt: "Ship means\u2026",
              accept: ["finish", "complete a minimal version"]
            },
            {
              prompt: "Mood board changes\u2026",
              accept: ["colors", "classes", "styles"]
            },
            {
              prompt: "Celebrate, then\u2026",
              accept: ["grow", "continue", "learn more"]
            }
          ]
        },
        {
          id: "u10-chest",
          type: "chest",
          title: "Tiny Project chest",
          minutes: 1
        },
        {
          id: "u10-overview",
          type: "overview",
          title: "Recap & what's next",
          minutes: 5,
          knowledgeCard: "Come back tomorrow for another short lesson.",
          steps: [
            {
              type: "teach",
              text: "Recap the path from JS history to an interactive page. Keep a daily Momentum habit."
            },
            {
              type: "tf",
              prompt: "You learned JS step by step.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Best habit now?",
              choices: ["Short daily practice", "Never open the path", "Only watch videos forever", "Skip basics"],
              answer: 0
            },
            {
              type: "tap",
              prompt: "Come back\u2026",
              choices: ["Tomorrow", "Never", "In 20 years only"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Momentum rewards showing up.",
              answer: true
            },
            {
              type: "mcq",
              prompt: "Knowledge cards help you\u2026",
              choices: ["Recap quickly", "Delete progress", "Break the browser", "Hide HTML"],
              answer: 0
            },
            {
              type: "tf",
              prompt: "Milo is proud \u2014 and you should be too.",
              answer: true
            }
          ]
        }
      ]
    }
  ],
};
