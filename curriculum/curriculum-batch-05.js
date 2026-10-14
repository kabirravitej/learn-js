/**
 * Curriculum batch 05 — Units 41–50 (Classes)
 */
window.LEARN_JS_BATCH_05 = [
  {
    "id": "u41",
    "section": "Classes",
    "title": "Constructor Functions Legacy",
    "blurb": "Old-school object blueprints.",
    "nodes": [
      {
        "id": "u41-concept",
        "type": "concept",
        "title": "Functions that build objects",
        "minutes": 7,
        "summary": "Constructor functions create similar objects with new.",
        "knowledgeCard": "function User(name){ this.name = name; } new User(\"Milo\")",
        "steps": [
          {
            "type": "teach",
            "text": "Before class syntax, JS used constructor functions as blueprints."
          },
          {
            "type": "teach",
            "text": "Name them with a Capital letter by convention: function User(name) { this.name = name; }"
          },
          {
            "type": "teach",
            "text": "Call with new: const u = new User(\"Milo\"); — creates an object and sets this to it."
          },
          {
            "type": "teach",
            "text": "Inside, this.property = ... attaches fields to the new instance."
          },
          {
            "type": "teach",
            "text": "You’ll still see this pattern in older code and explanations of how class works underneath."
          },
          {
            "type": "mcq",
            "prompt": "new User(\"Ada\") creates…",
            "choices": [
              "A CSS rule",
              "A new object instance",
              "A global string only",
              "An HTML file"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Constructor names are often Capitalized.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keyword that makes an instance",
            "choices": [
              "typeof",
              "new",
              "delete"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "this inside a constructor (with new) refers to…",
            "choices": [
              "The window always",
              "The new object being built",
              "A random array",
              "null forever"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Legacy constructors help you understand class.",
            "answer": true
          }
        ]
      },
      {
        "id": "u41-memory",
        "type": "memory",
        "title": "new matters",
        "minutes": 7,
        "summary": "Forgetting new can break this.",
        "knowledgeCard": "Always use new with constructor functions.",
        "steps": [
          {
            "type": "teach",
            "text": "If you call a constructor without new, this may not be a fresh object — bugs follow."
          },
          {
            "type": "teach",
            "text": "Methods were often put on Constructor.prototype so instances share them."
          },
          {
            "type": "teach",
            "text": "Modern code prefers class, but the ideas match: blueprint → instances."
          },
          {
            "type": "mcq",
            "prompt": "Shared methods often lived on…",
            "choices": [
              "prototype",
              "innerHTML",
              "localStorage only",
              "JSON.parse"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "new is part of the constructor call pattern.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Blueprint function style",
            "choices": [
              "constructor function",
              "constructor",
              "function User"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u41-practice",
        "type": "practice",
        "title": "Constructors flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Create instance with…",
            "accept": [
              "new"
            ],
            "explain": "A solid answer is “new”."
          },
          {
            "prompt": "Inside blueprint, fields use…",
            "accept": [
              "this",
              "this."
            ],
            "explain": "A solid answer is “this”."
          },
          {
            "prompt": "Capitalized name means…",
            "accept": [
              "constructor",
              "constructor convention"
            ],
            "explain": "A solid answer is “constructor”."
          },
          {
            "prompt": "Shared methods on…",
            "accept": [
              "prototype"
            ],
            "explain": "A solid answer is “prototype”."
          },
          {
            "prompt": "Modern replacement syntax?",
            "accept": [
              "class"
            ],
            "explain": "A solid answer is “class”."
          }
        ]
      },
      {
        "id": "u41-chest",
        "type": "chest",
        "title": "Constructor Functions Legacy chest",
        "minutes": 2
      },
      {
        "id": "u41-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Legacy constructors use new + this. Next: class syntax.",
        "knowledgeCard": "Next: class { }",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: Capital name, new, this fields."
          },
          {
            "type": "teach",
            "text": "Next: cleaner class syntax for the same idea."
          },
          {
            "type": "tf",
            "prompt": "Constructors are blueprints for objects.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u42",
    "section": "Classes",
    "title": "class Syntax",
    "blurb": "Modern blueprints with class.",
    "nodes": [
      {
        "id": "u42-concept",
        "type": "concept",
        "title": "class is a clearer blueprint",
        "minutes": 7,
        "summary": "class declares a type of object with cleaner syntax.",
        "knowledgeCard": "class Player { constructor(name){ this.name = name; } }",
        "steps": [
          {
            "type": "teach",
            "text": "class Player { ... } declares a modern blueprint."
          },
          {
            "type": "teach",
            "text": "You still create instances with new Player(\"Milo\")."
          },
          {
            "type": "teach",
            "text": "Methods go inside the class body without the function keyword."
          },
          {
            "type": "teach",
            "text": "class is mostly nicer syntax over prototypes — same runtime ideas."
          },
          {
            "type": "teach",
            "text": "One class → many instances that share the method definitions."
          },
          {
            "type": "mcq",
            "prompt": "Instances are created with…",
            "choices": [
              "Player()",
              "new Player()",
              "class Player()",
              "typeof Player"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "class bodies hold methods for instances.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Modern blueprint keyword",
            "choices": [
              "object",
              "class",
              "struct"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Many objects from one class are called…",
            "choices": [
              "Servers",
              "Instances",
              "Stylesheets",
              "Tokens"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u42-memory",
        "type": "memory",
        "title": "Shape of a class",
        "minutes": 7,
        "summary": "constructor sets up; methods define behavior.",
        "knowledgeCard": "constructor runs when you new the class.",
        "steps": [
          {
            "type": "teach",
            "text": "constructor() is a special method that runs on new."
          },
          {
            "type": "teach",
            "text": "Put setup there: assign this.name, this.hp, etc."
          },
          {
            "type": "teach",
            "text": "Other methods use those fields later: heal() { this.hp += 1; }"
          },
          {
            "type": "mcq",
            "prompt": "constructor runs…",
            "choices": [
              "Never",
              "When you use new",
              "Only on page scroll",
              "Only in CSS"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Methods can read this fields set in constructor.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Setup method name",
            "choices": [
              "constructor",
              "setup()",
              "initHTML"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u42-practice",
        "type": "practice",
        "title": "class syntax flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Blueprint keyword?",
            "accept": [
              "class"
            ],
            "explain": "A solid answer is “class”."
          },
          {
            "prompt": "Make an instance?",
            "accept": [
              "new",
              "new ClassName()"
            ],
            "explain": "A solid answer is “new”."
          },
          {
            "prompt": "Setup method?",
            "accept": [
              "constructor"
            ],
            "explain": "A solid answer is “constructor”."
          },
          {
            "prompt": "Fields often on…",
            "accept": [
              "this",
              "this."
            ],
            "explain": "A solid answer is “this”."
          },
          {
            "prompt": "Many objects from one class?",
            "accept": [
              "instances"
            ],
            "explain": "A solid answer is “instances”."
          }
        ]
      },
      {
        "id": "u42-chest",
        "type": "chest",
        "title": "class Syntax chest",
        "minutes": 2
      },
      {
        "id": "u42-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "class + new creates instances. Next: this & constructor details.",
        "knowledgeCard": "Next: constructor & this.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: class, new, constructor, methods."
          },
          {
            "type": "teach",
            "text": "Next: focus on this and building state."
          },
          {
            "type": "tf",
            "prompt": "class is the everyday blueprint syntax now.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u43",
    "section": "Classes",
    "title": "constructor & this",
    "blurb": "Setup and the current instance.",
    "nodes": [
      {
        "id": "u43-concept",
        "type": "concept",
        "title": "this means this instance",
        "minutes": 7,
        "summary": "Inside methods, this refers to the object you called the method on.",
        "knowledgeCard": "p.greet() → inside greet, this is p",
        "steps": [
          {
            "type": "teach",
            "text": "this is the current instance when you call a method like player.heal()."
          },
          {
            "type": "teach",
            "text": "In constructor, this is the brand-new object being created."
          },
          {
            "type": "teach",
            "text": "Store unique data per instance: this.score = 0;"
          },
          {
            "type": "teach",
            "text": "Don’t confuse this with a fixed global — it depends on how the function is called."
          },
          {
            "type": "teach",
            "text": "While learning classes, call methods on instances: hero.speak()."
          },
          {
            "type": "mcq",
            "prompt": "In hero.speak(), this usually is…",
            "choices": [
              "hero",
              "document",
              "a random string",
              "CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "constructor assigns starting state onto this.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Per-instance data lives on…",
            "choices": [
              "this",
              "window only",
              "JSON only"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Two Players each have their own…",
            "choices": [
              "Shared this forever only",
              "Own this fields",
              "One HTML element only",
              "No names"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u43-memory",
        "type": "memory",
        "title": "Build solid constructors",
        "minutes": 7,
        "summary": "Validate inputs lightly; set defaults.",
        "knowledgeCard": "this.hp = hp ?? 10;",
        "steps": [
          {
            "type": "teach",
            "text": "Give sensible defaults when arguments are missing."
          },
          {
            "type": "teach",
            "text": "Keep constructors short — heavy work can be methods."
          },
          {
            "type": "teach",
            "text": "Log this in experiments to see your instance shape."
          },
          {
            "type": "mcq",
            "prompt": "Long messy constructors…",
            "choices": [
              "Are required",
              "Can be simplified with defaults + small methods",
              "Must use eval",
              "Break new"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Each instance can have different field values.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Call method on instance",
            "choices": [
              "Class.method()",
              "instance.method()",
              "this()"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u43-practice",
        "type": "practice",
        "title": "this flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Current instance keyword?",
            "accept": [
              "this"
            ],
            "explain": "A solid answer is “this”."
          },
          {
            "prompt": "Runs on new?",
            "accept": [
              "constructor"
            ],
            "explain": "A solid answer is “constructor”."
          },
          {
            "prompt": "Set field example?",
            "accept": [
              "this.name = name",
              "this.x = ..."
            ],
            "explain": "A solid answer is “this.name = name”."
          },
          {
            "prompt": "Call style?",
            "accept": [
              "instance.method()",
              "obj.method()"
            ],
            "explain": "A solid answer is “instance.method()”."
          },
          {
            "prompt": "Own data per object?",
            "accept": [
              "yes",
              "instance fields"
            ],
            "explain": "A solid answer is “yes”."
          }
        ]
      },
      {
        "id": "u43-chest",
        "type": "chest",
        "title": "constructor & this chest",
        "minutes": 2
      },
      {
        "id": "u43-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "this + constructor set up instances. Next: methods & prototypes idea.",
        "knowledgeCard": "Next: shared behavior.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: this is the instance; constructor initializes."
          },
          {
            "type": "teach",
            "text": "Next: how methods are shared across instances."
          },
          {
            "type": "tf",
            "prompt": "this depends on the call site.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u44",
    "section": "Classes",
    "title": "Methods & Prototypes Idea",
    "blurb": "Shared behavior.",
    "nodes": [
      {
        "id": "u44-concept",
        "type": "concept",
        "title": "One method, many instances",
        "minutes": 7,
        "summary": "Method definitions are shared; data on this is per instance.",
        "knowledgeCard": "All Dogs share bark(); each has its own name.",
        "steps": [
          {
            "type": "teach",
            "text": "Methods defined on a class are shared by instances — efficient and consistent."
          },
          {
            "type": "teach",
            "text": "Under the hood, JS links instances to a prototype chain."
          },
          {
            "type": "teach",
            "text": "You don’t need every prototype detail day one — remember: shared behavior, personal data."
          },
          {
            "type": "teach",
            "text": "instance.method() looks up the method via that chain if needed."
          },
          {
            "type": "teach",
            "text": "Avoid copying the same function onto every object manually when a class method will do."
          },
          {
            "type": "mcq",
            "prompt": "Class methods are typically…",
            "choices": [
              "Duplicated as unique copies always",
              "Shared via the prototype idea",
              "Only CSS animations",
              "Stored in localStorage"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Each instance still has its own this fields.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Personal vs shared",
            "choices": [
              "data vs methods",
              "fields vs methods",
              "this data / shared methods"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "prototype chain helps with…",
            "choices": [
              "Only images",
              "Method lookup",
              "Deleting JS",
              "DNS"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u44-memory",
        "type": "memory",
        "title": "Add useful methods",
        "minutes": 7,
        "summary": "Name methods as verbs: heal, jump, save.",
        "knowledgeCard": "describe() { return this.name + \" ready\"; }",
        "steps": [
          {
            "type": "teach",
            "text": "Methods should do something clear: toggle, reset, describe."
          },
          {
            "type": "teach",
            "text": "Return values from methods when other code needs the result."
          },
          {
            "type": "teach",
            "text": "Keep side effects obvious — mutating this is fine when intentional."
          },
          {
            "type": "mcq",
            "prompt": "A good method name is often a…",
            "choices": [
              "Random UUID",
              "Verb",
              "CSS color",
              "File path"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Methods can return strings for display.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Shared behavior lives in…",
            "choices": [
              "class methods",
              "methods",
              "the class"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u44-practice",
        "type": "practice",
        "title": "Methods/prototype flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Shared behavior via…",
            "accept": [
              "methods",
              "prototype",
              "class methods"
            ],
            "explain": "A solid answer is “methods”."
          },
          {
            "prompt": "Per-instance data on…",
            "accept": [
              "this"
            ],
            "explain": "A solid answer is “this”."
          },
          {
            "prompt": "Method naming style?",
            "accept": [
              "verbs",
              "verb"
            ],
            "explain": "A solid answer is “verbs”."
          },
          {
            "prompt": "Lookup idea?",
            "accept": [
              "prototype chain",
              "prototype"
            ],
            "explain": "A solid answer is “prototype chain”."
          },
          {
            "prompt": "Call methods how?",
            "accept": [
              "instance.method()"
            ],
            "explain": "A solid answer is “instance.method()”."
          }
        ]
      },
      {
        "id": "u44-chest",
        "type": "chest",
        "title": "Methods & Prototypes Idea chest",
        "minutes": 2
      },
      {
        "id": "u44-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Methods are shared; data is personal. Next: getters & setters.",
        "knowledgeCard": "Next: get/set.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: shared methods, instance fields."
          },
          {
            "type": "teach",
            "text": "Next: controlled properties with get/set."
          },
          {
            "type": "tf",
            "prompt": "Prototypes explain shared methods.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u45",
    "section": "Classes",
    "title": "Getters & Setters",
    "blurb": "Controlled properties.",
    "nodes": [
      {
        "id": "u45-concept",
        "type": "concept",
        "title": "get and set",
        "minutes": 7,
        "summary": "Getters/setters look like properties but run code.",
        "knowledgeCard": "get label() { return this.name.toUpperCase(); }",
        "steps": [
          {
            "type": "teach",
            "text": "A getter runs code when you read a property: obj.label"
          },
          {
            "type": "teach",
            "text": "A setter runs code when you assign: obj.label = \"x\""
          },
          {
            "type": "teach",
            "text": "Use them to validate, format, or compute values."
          },
          {
            "type": "teach",
            "text": "Syntax inside class: get score() { ... } set score(v) { ... }"
          },
          {
            "type": "teach",
            "text": "Don’t overuse — simple public fields are fine when control isn’t needed."
          },
          {
            "type": "mcq",
            "prompt": "Reading obj.hp runs…",
            "choices": [
              "A setter",
              "A getter (if defined)",
              "JSON.parse always",
              "querySelector"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Setters can reject bad values.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keyword for read control",
            "choices": [
              "get",
              "fetch",
              "read"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Assigning obj.hp = 3 may run…",
            "choices": [
              "constructor only",
              "a setter",
              "addEventListener",
              "map"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u45-memory",
        "type": "memory",
        "title": "Practical uses",
        "minutes": 7,
        "summary": "Clamp values, sync derived fields, friendly APIs.",
        "knowledgeCard": "set hp(v){ this._hp = Math.max(0, v); }",
        "steps": [
          {
            "type": "teach",
            "text": "Example: clamp health so it never goes below 0."
          },
          {
            "type": "teach",
            "text": "Backing fields are sometimes named with an underscore by convention: this._hp."
          },
          {
            "type": "teach",
            "text": "Getters can expose computed values like fullName from first+last."
          },
          {
            "type": "mcq",
            "prompt": "Computed fullName fits a…",
            "choices": [
              "getter",
              "for loop only",
              "CSS grid",
              "Set"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Getters/setters keep a property-like API.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Write control keyword",
            "choices": [
              "set",
              "put",
              "write"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u45-practice",
        "type": "practice",
        "title": "get/set flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Read control?",
            "accept": [
              "get",
              "getter"
            ],
            "explain": "A solid answer is “get”."
          },
          {
            "prompt": "Write control?",
            "accept": [
              "set",
              "setter"
            ],
            "explain": "A solid answer is “set”."
          },
          {
            "prompt": "Looks like a…",
            "accept": [
              "property"
            ],
            "explain": "A solid answer is “property”."
          },
          {
            "prompt": "Clamp in…",
            "accept": [
              "setter",
              "set"
            ],
            "explain": "A solid answer is “setter”."
          },
          {
            "prompt": "Computed value in…",
            "accept": [
              "getter",
              "get"
            ],
            "explain": "A solid answer is “getter”."
          }
        ]
      },
      {
        "id": "u45-chest",
        "type": "chest",
        "title": "Getters & Setters chest",
        "minutes": 2
      },
      {
        "id": "u45-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "get/set control access. Next: inheritance with extends.",
        "knowledgeCard": "Next: extends & super.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: get on read, set on write."
          },
          {
            "type": "teach",
            "text": "Next: subclasses with extends and super."
          },
          {
            "type": "tf",
            "prompt": "Getters can compute values on the fly.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u46",
    "section": "Classes",
    "title": "extends & super",
    "blurb": "Inheritance without fear.",
    "nodes": [
      {
        "id": "u46-concept",
        "type": "concept",
        "title": "Child classes",
        "minutes": 7,
        "summary": "extends creates a subclass; super calls the parent.",
        "knowledgeCard": "class Admin extends User { constructor(n){ super(n); } }",
        "steps": [
          {
            "type": "teach",
            "text": "class Dog extends Animal means Dog inherits Animal’s setup/methods."
          },
          {
            "type": "teach",
            "text": "In the child constructor, call super(...) before using this."
          },
          {
            "type": "teach",
            "text": "super.method() calls the parent version of a method."
          },
          {
            "type": "teach",
            "text": "Use inheritance when there’s a clear “is-a” relationship — not for everything."
          },
          {
            "type": "teach",
            "text": "Prefer simple hierarchies; deep trees get confusing."
          },
          {
            "type": "mcq",
            "prompt": "extends means…",
            "choices": [
              "Delete parent",
              "Inherit from another class",
              "Only CSS",
              "Parse JSON"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Call super before using this in a subclass constructor.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Parent call keyword",
            "choices": [
              "super",
              "parent()",
              "base!"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Best inheritance case?",
            "choices": [
              "Random unrelated objects",
              "Clear is-a relationship",
              "Every variable",
              "Only strings"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u46-memory",
        "type": "memory",
        "title": "Override carefully",
        "minutes": 7,
        "summary": "Child methods can replace parent methods.",
        "knowledgeCard": "speak(){ super.speak(); console.log(\"woof\"); }",
        "steps": [
          {
            "type": "teach",
            "text": "Override: define the same method name in the child."
          },
          {
            "type": "teach",
            "text": "You can still reuse parent behavior with super.speak()."
          },
          {
            "type": "teach",
            "text": "Composition (has-a) is often clearer than forced inheritance."
          },
          {
            "type": "mcq",
            "prompt": "Reuse parent method with…",
            "choices": [
              "super.method()",
              "delete method",
              "innerHTML",
              "typeof"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Not every shared idea needs extends.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Child class keyword pair",
            "choices": [
              "extends",
              "class Child extends Parent"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u46-practice",
        "type": "practice",
        "title": "extends flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Inherit with…",
            "accept": [
              "extends"
            ],
            "explain": "A solid answer is “extends”."
          },
          {
            "prompt": "Call parent ctor?",
            "accept": [
              "super",
              "super()"
            ],
            "explain": "A solid answer is “super”."
          },
          {
            "prompt": "Before this in child ctor?",
            "accept": [
              "super",
              "call super"
            ],
            "explain": "A solid answer is “super”."
          },
          {
            "prompt": "is-a means…",
            "accept": [
              "inheritance fit",
              "good extends case"
            ],
            "explain": "A solid answer is “inheritance fit”."
          },
          {
            "prompt": "Parent method call?",
            "accept": [
              "super.method()",
              "super.x()"
            ],
            "explain": "A solid answer is “super.method()”."
          }
        ]
      },
      {
        "id": "u46-chest",
        "type": "chest",
        "title": "extends & super chest",
        "minutes": 2
      },
      {
        "id": "u46-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "extends + super build hierarchies. Next: static methods.",
        "knowledgeCard": "Next: static.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: extends, super(), overrides."
          },
          {
            "type": "teach",
            "text": "Next: methods on the class itself."
          },
          {
            "type": "tf",
            "prompt": "super connects child to parent.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u47",
    "section": "Classes",
    "title": "Static Methods",
    "blurb": "Helpers on the class itself.",
    "nodes": [
      {
        "id": "u47-concept",
        "type": "concept",
        "title": "static belongs to the class",
        "minutes": 7,
        "summary": "static methods are called on the class, not an instance.",
        "knowledgeCard": "User.isEmail(str) // not user.isEmail()",
        "steps": [
          {
            "type": "teach",
            "text": "static createId() { ... } defines a method on the class itself."
          },
          {
            "type": "teach",
            "text": "Call it as User.createId(), not on a particular user instance."
          },
          {
            "type": "teach",
            "text": "Great for helpers that don’t need instance data: parsing, validation, factories."
          },
          {
            "type": "teach",
            "text": "Inside static methods, this usually refers to the class (advanced details aside)."
          },
          {
            "type": "teach",
            "text": "Don’t put per-player state in static unless you truly want one shared value."
          },
          {
            "type": "mcq",
            "prompt": "static methods are called on…",
            "choices": [
              "Only document",
              "The class",
              "A random instance required",
              "CSSOM only"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Factories can be static methods that return new instances.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Keyword for class-level method",
            "choices": [
              "static",
              "shared",
              "global"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Per-instance hp should be…",
            "choices": [
              "static",
              "on this",
              "only JSON",
              "a CSS var"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u47-memory",
        "type": "memory",
        "title": "Static vs instance",
        "minutes": 7,
        "summary": "Ask: does this need a particular object’s data?",
        "knowledgeCard": "Needs this.name → instance method. Pure helper → static.",
        "steps": [
          {
            "type": "teach",
            "text": "Decision: needs this fields? → instance method. Otherwise static is fine."
          },
          {
            "type": "teach",
            "text": "Math-like utilities often static: Vector.distance(a,b)."
          },
          {
            "type": "teach",
            "text": "Overusing static can become a junk drawer — keep it intentional."
          },
          {
            "type": "mcq",
            "prompt": "Validate email format fits…",
            "choices": [
              "static helper",
              "only constructor forever",
              "innerHTML",
              "addEventListener required"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Instance methods use instance data via this.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Call static",
            "choices": [
              "Class.method()",
              "instance.method() only",
              "new method()"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u47-practice",
        "type": "practice",
        "title": "static flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Class-level keyword?",
            "accept": [
              "static"
            ],
            "explain": "A solid answer is “static”."
          },
          {
            "prompt": "Call style?",
            "accept": [
              "Class.method()",
              "Class.staticMethod()"
            ],
            "explain": "A solid answer is “Class.method()”."
          },
          {
            "prompt": "Needs this data?",
            "accept": [
              "instance method"
            ],
            "explain": "A solid answer is “instance method”."
          },
          {
            "prompt": "Good static use?",
            "accept": [
              "helper",
              "factory",
              "validation"
            ],
            "explain": "A solid answer is “helper”."
          },
          {
            "prompt": "Shared junk drawer risk?",
            "accept": [
              "too many statics",
              "overusing static"
            ],
            "explain": "A solid answer is “too many statics”."
          }
        ]
      },
      {
        "id": "u47-chest",
        "type": "chest",
        "title": "Static Methods chest",
        "minutes": 2
      },
      {
        "id": "u47-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "static helpers live on the class. Next: private fields preview.",
        "knowledgeCard": "Next: #private fields.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: static vs instance methods."
          },
          {
            "type": "teach",
            "text": "Next: hiding internals with private fields."
          },
          {
            "type": "tf",
            "prompt": "static is for class-level behavior.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u48",
    "section": "Classes",
    "title": "Private Fields Preview",
    "blurb": "Hiding internals (#fields).",
    "nodes": [
      {
        "id": "u48-concept",
        "type": "concept",
        "title": "Hash means private",
        "minutes": 7,
        "summary": "#field is only usable inside the class body.",
        "knowledgeCard": "class Bank { #balance = 0; }",
        "steps": [
          {
            "type": "teach",
            "text": "Private fields start with #: #balance."
          },
          {
            "type": "teach",
            "text": "Outside code cannot read instance.#balance — it stays internal."
          },
          {
            "type": "teach",
            "text": "Expose safe access via public methods or getters."
          },
          {
            "type": "teach",
            "text": "Privacy prevents accidental tinkering and clarifies the public API."
          },
          {
            "type": "teach",
            "text": "Older code used _balance as a “please don’t touch” convention — # is stronger."
          },
          {
            "type": "mcq",
            "prompt": "#field is…",
            "choices": [
              "A CSS id",
              "A private class field",
              "A JSON key required",
              "A DOM tag"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Private fields support encapsulation.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Private prefix",
            "choices": [
              "_",
              "#",
              "$"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Outside access to #secret…",
            "choices": [
              "Always works",
              "Is not allowed",
              "Only via CSS",
              "Needs Map"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u48-memory",
        "type": "memory",
        "title": "Design a small API",
        "minutes": 7,
        "summary": "Public methods; private data.",
        "knowledgeCard": "deposit(n){ this.#balance += n; }",
        "steps": [
          {
            "type": "teach",
            "text": "Keep raw data private; let methods enforce rules (no negative deposits)."
          },
          {
            "type": "teach",
            "text": "Your public surface is what other code should use."
          },
          {
            "type": "teach",
            "text": "You’ll see similar ideas in TypeScript private/protected later."
          },
          {
            "type": "mcq",
            "prompt": "Enforce rules in…",
            "choices": [
              "Random globals",
              "Public methods around private fields",
              "Only alerts",
              "innerHTML"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "_name was a soft convention; # is real privacy.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Hide balance with…",
            "choices": [
              "#balance",
              "balance#",
              "private balance()"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u48-practice",
        "type": "practice",
        "title": "Private fields flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Private field mark?",
            "accept": [
              "#"
            ],
            "explain": "A solid answer is “#”."
          },
          {
            "prompt": "Outside read #field?",
            "accept": [
              "no",
              "not allowed"
            ],
            "explain": "A solid answer is “no”."
          },
          {
            "prompt": "Expose via…",
            "accept": [
              "methods",
              "getters",
              "public methods"
            ],
            "explain": "A solid answer is “methods”."
          },
          {
            "prompt": "Goal?",
            "accept": [
              "encapsulation",
              "hide internals"
            ],
            "explain": "A solid answer is “encapsulation”."
          },
          {
            "prompt": "Old soft privacy?",
            "accept": [
              "_field",
              "underscore"
            ],
            "explain": "A solid answer is “_field”."
          }
        ]
      },
      {
        "id": "u48-chest",
        "type": "chest",
        "title": "Private Fields Preview chest",
        "minutes": 2
      },
      {
        "id": "u48-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Private fields hide internals. Next: when classes help.",
        "knowledgeCard": "Next: when to use classes.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: #fields + public methods."
          },
          {
            "type": "teach",
            "text": "Next: choose classes vs plain objects wisely."
          },
          {
            "type": "tf",
            "prompt": "# creates true private fields.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u49",
    "section": "Classes",
    "title": "When to Use Classes",
    "blurb": "Objects vs classes in practice.",
    "nodes": [
      {
        "id": "u49-concept",
        "type": "concept",
        "title": "Pick the right tool",
        "minutes": 7,
        "summary": "Plain objects for simple data; classes when you have behavior + many instances.",
        "knowledgeCard": "Config object ≠ Player class with methods.",
        "steps": [
          {
            "type": "teach",
            "text": "Use a plain object for simple records: { title, price }."
          },
          {
            "type": "teach",
            "text": "Use a class when many instances share behavior and evolving state."
          },
          {
            "type": "teach",
            "text": "Don’t class-wrap everything — unnecessary ceremony slows you down."
          },
          {
            "type": "teach",
            "text": "Functions + modules can organize code without classes."
          },
          {
            "type": "teach",
            "text": "In UI frameworks later, “components” play a similar “blueprint” role with different syntax."
          },
          {
            "type": "mcq",
            "prompt": "A one-off config blob fits…",
            "choices": [
              "A deep class hierarchy",
              "A plain object",
              "private # everything mandatory",
              "extends Document"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Classes shine with repeated instances + methods.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Simple data often…",
            "choices": [
              "class required",
              "plain object",
              "static only"
            ],
            "answer": 1
          },
          {
            "type": "mcq",
            "prompt": "Overusing classes can…",
            "choices": [
              "Always speed apps 100x",
              "Add needless complexity",
              "Remove JS",
              "Fix CSS alone"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "u49-memory",
        "type": "memory",
        "title": "Practical guidelines",
        "minutes": 7,
        "summary": "Start simple; refactor to a class when patterns repeat.",
        "knowledgeCard": "Three similar objects with same methods? Consider a class.",
        "steps": [
          {
            "type": "teach",
            "text": "Start with functions/objects. Introduce a class when duplication hurts."
          },
          {
            "type": "teach",
            "text": "Prefer composition: a Game has a Board, rather than giant inheritance trees."
          },
          {
            "type": "teach",
            "text": "Readability for your team-of-one (future you) beats dogma."
          },
          {
            "type": "mcq",
            "prompt": "Repeated behavior across instances →",
            "choices": [
              "Maybe a class",
              "Always more globals",
              "Only JSON",
              "Delete methods"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Composition means has-a relationships.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Refactor trigger",
            "choices": [
              "duplication",
              "repeated patterns",
              "same methods many times"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u49-practice",
        "type": "practice",
        "title": "When classes flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Simple record?",
            "accept": [
              "object",
              "plain object"
            ],
            "explain": "A solid answer is “object”."
          },
          {
            "prompt": "Many instances + behavior?",
            "accept": [
              "class"
            ],
            "explain": "A solid answer is “class”."
          },
          {
            "prompt": "has-a style?",
            "accept": [
              "composition"
            ],
            "explain": "A solid answer is “composition”."
          },
          {
            "prompt": "Avoid…",
            "accept": [
              "class everything",
              "overusing classes"
            ],
            "explain": "A solid answer is “class everything”."
          },
          {
            "prompt": "Start simple then…",
            "accept": [
              "refactor",
              "refactor to class"
            ],
            "explain": "A solid answer is “refactor”."
          }
        ]
      },
      {
        "id": "u49-chest",
        "type": "chest",
        "title": "When to Use Classes chest",
        "minutes": 2
      },
      {
        "id": "u49-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Choose classes intentionally. Next: classes capstone.",
        "knowledgeCard": "Next: build a small model with a class.",
        "steps": [
          {
            "type": "teach",
            "text": "Recap: objects for data, classes for behavior-heavy instances."
          },
          {
            "type": "teach",
            "text": "Next: capstone modeling with class."
          },
          {
            "type": "tf",
            "prompt": "Not everything needs to be a class.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u50",
    "section": "Classes",
    "title": "Classes Capstone",
    "blurb": "Model players, carts, or todos.",
    "nodes": [
      {
        "id": "u50-concept",
        "type": "concept",
        "title": "Design a small class",
        "minutes": 7,
        "summary": "Pick fields, constructor, methods; maybe a static helper.",
        "knowledgeCard": "class TodoList { constructor(){ this.items=[]; } add(t){...} }",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone: model a Player, Cart, or TodoList with a class."
          },
          {
            "type": "teach",
            "text": "List fields (state), constructor defaults, and 2–3 methods."
          },
          {
            "type": "teach",
            "text": "Optional: static helper or a simple subclass if it truly fits."
          },
          {
            "type": "teach",
            "text": "Keep the public API tiny and obvious."
          },
          {
            "type": "teach",
            "text": "You’re ready next for async — timers, promises, fetch."
          },
          {
            "type": "mcq",
            "prompt": "A cart’s items field is often…",
            "choices": [
              "A boolean",
              "An array",
              "A CSS file",
              "typeof"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Methods should match user actions: add, remove, total.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Create instance",
            "choices": [
              "new ClassName()",
              "ClassName.new",
              "class()"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "After classes, a natural next topic is…",
            "choices": [
              "Async / promises / fetch",
              "Only Photoshop",
              "Ignoring functions",
              "Deleting objects"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u50-memory",
        "type": "memory",
        "title": "Wire it mentally to the DOM",
        "minutes": 7,
        "summary": "Class holds state; DOM shows it.",
        "knowledgeCard": "list.add(item); render(list.items);",
        "steps": [
          {
            "type": "teach",
            "text": "Pattern: class manages data; separate functions/DOM code render it."
          },
          {
            "type": "teach",
            "text": "That separation scales toward frameworks."
          },
          {
            "type": "teach",
            "text": "Celebrate: you can blueprint real features now."
          },
          {
            "type": "mcq",
            "prompt": "Render should usually…",
            "choices": [
              "Live deep inside private fields only",
              "Read class state and update DOM",
              "Delete the class",
              "Use only alerts"
            ],
            "answer": 1
          },
          {
            "type": "tf",
            "prompt": "Small finished models beat unfinished mega-classes.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Next section theme",
            "choices": [
              "Async",
              "async",
              "promises"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u50-practice",
        "type": "practice",
        "title": "Classes capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Make instance?",
            "accept": [
              "new"
            ],
            "explain": "A solid answer is “new”."
          },
          {
            "prompt": "Setup?",
            "accept": [
              "constructor"
            ],
            "explain": "A solid answer is “constructor”."
          },
          {
            "prompt": "Instance data?",
            "accept": [
              "this"
            ],
            "explain": "A solid answer is “this”."
          },
          {
            "prompt": "Inherit?",
            "accept": [
              "extends"
            ],
            "explain": "A solid answer is “extends”."
          },
          {
            "prompt": "Next path section?",
            "accept": [
              "Async",
              "async"
            ],
            "explain": "A solid answer is “Async”."
          }
        ]
      },
      {
        "id": "u50-chest",
        "type": "chest",
        "title": "Classes Capstone chest",
        "minutes": 2
      },
      {
        "id": "u50-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Classes section done. Next: async (Unit 51+).",
        "knowledgeCard": "Next batch: sync vs async, promises, fetch.",
        "steps": [
          {
            "type": "teach",
            "text": "Classes complete: constructors, class, this, methods, get/set, extends, static, privacy, judgment."
          },
          {
            "type": "teach",
            "text": "Next: asynchronous JS — waiting without freezing."
          },
          {
            "type": "tf",
            "prompt": "Classes help model repeated stateful things.",
            "answer": true
          },
          {
            "type": "mcq",
            "prompt": "fetch is related to…",
            "choices": [
              "Async networking in the browser",
              "Only CSS fonts",
              "SQL joins only",
              "PNG compression only"
            ],
            "answer": 0
          }
        ]
      }
    ]
  }
];
