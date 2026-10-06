/**
 * 90-unit Learn JS roadmap (titles + blurbs).
 * Full lesson bodies ship in curriculum-batch-XX.js files.
 */
window.LEARN_JS_ROADMAP = [
  // —— Batch 01 (Units 1–10): Foundations ——
  { id: "u1", section: "Foundations", title: "How JavaScript Got Here", blurb: "Why JS exists — story first, code later." },
  { id: "u2", section: "Foundations", title: "Your First Lines", blurb: "console.log, comments, and running code." },
  { id: "u3", section: "Foundations", title: "Values & Variables", blurb: "let, const, and named boxes for data." },
  { id: "u4", section: "Foundations", title: "Numbers & Strings", blurb: "Math, text, and joining messages." },
  { id: "u5", section: "Foundations", title: "Booleans & Comparisons", blurb: "true, false, and === checks." },
  { id: "u6", section: "Foundations", title: "Decisions with if", blurb: "Code that chooses a path." },
  { id: "u7", section: "Foundations", title: "Arrays Basics", blurb: "Lists of values and indexes." },
  { id: "u8", section: "Foundations", title: "Loops with for", blurb: "Repeat work without copy-paste." },
  { id: "u9", section: "Foundations", title: "Functions Basics", blurb: "Reusable blocks you can call." },
  { id: "u10", section: "Foundations", title: "Foundation Capstone", blurb: "Mix variables, if, arrays, and functions." },

  // —— Batch 02 (11–20): Objects & deeper data ——
  { id: "u11", section: "Data & Objects", title: "Objects Intro", blurb: "Curly braces, keys, and values." },
  { id: "u12", section: "Data & Objects", title: "Object Properties", blurb: "Dot notation and brackets." },
  { id: "u13", section: "Data & Objects", title: "Methods on Objects", blurb: "Functions that live on objects." },
  { id: "u14", section: "Data & Objects", title: "Nesting Data", blurb: "Objects in arrays, arrays in objects." },
  { id: "u15", section: "Data & Objects", title: "Destructuring Basics", blurb: "Pull values out cleanly." },
  { id: "u16", section: "Data & Objects", title: "JSON Ideas", blurb: "Data shapes you will see everywhere." },
  { id: "u17", section: "Data & Objects", title: "Map & Set Preview", blurb: "When arrays/objects aren’t enough." },
  { id: "u18", section: "Data & Objects", title: "null, undefined, typeof", blurb: "Empty values and type checks." },
  { id: "u19", section: "Data & Objects", title: "Reference vs Copy", blurb: "Why objects surprise beginners." },
  { id: "u20", section: "Data & Objects", title: "Objects Capstone", blurb: "Model a small real-world thing." },

  // —— Batch 03 (21–30): DOM start ——
  { id: "u21", section: "The DOM", title: "What is the DOM?", blurb: "The page as a tree of nodes." },
  { id: "u22", section: "The DOM", title: "querySelector", blurb: "Find one element on the page." },
  { id: "u23", section: "The DOM", title: "textContent vs innerHTML", blurb: "Safe text vs HTML injection." },
  { id: "u24", section: "The DOM", title: "Changing Styles", blurb: "classList and style basics." },
  { id: "u25", section: "The DOM", title: "Creating Elements", blurb: "createElement and append." },
  { id: "u26", section: "The DOM", title: "Forms & Values", blurb: "Read inputs the user typed." },
  { id: "u27", section: "The DOM", title: "Events: click", blurb: "addEventListener for clicks." },
  { id: "u28", section: "The DOM", title: "Events: input & submit", blurb: "Live typing and forms." },
  { id: "u29", section: "The DOM", title: "Event Bubbling Basics", blurb: "How events travel up the tree." },
  { id: "u30", section: "The DOM", title: "DOM Capstone", blurb: "A tiny interactive page." },

  // —— Batch 04 (31–40): Functions deeper ——
  { id: "u31", section: "Functions+", title: "Parameters & Returns", blurb: "Inputs and outputs of functions." },
  { id: "u32", section: "Functions+", title: "Scope", blurb: "Where variables are visible." },
  { id: "u33", section: "Functions+", title: "Arrow Functions", blurb: "The => shortcut." },
  { id: "u34", section: "Functions+", title: "Callbacks", blurb: "Functions passed to functions." },
  { id: "u35", section: "Functions+", title: "Array map", blurb: "Transform every item." },
  { id: "u36", section: "Functions+", title: "Array filter & find", blurb: "Keep or locate items." },
  { id: "u37", section: "Functions+", title: "Array reduce Intro", blurb: "Fold a list into one value." },
  { id: "u38", section: "Functions+", title: "forEach vs for...of", blurb: "Ways to walk a list." },
  { id: "u39", section: "Functions+", title: "Closures Preview", blurb: "Functions that remember." },
  { id: "u40", section: "Functions+", title: "Functions Capstone", blurb: "Build a small toolkit of helpers." },

  // —— Batch 05 (41–50): Classes & modern objects ——
  { id: "u41", section: "Classes", title: "Constructor Functions Legacy", blurb: "Old-school object blueprints." },
  { id: "u42", section: "Classes", title: "class Syntax", blurb: "Modern blueprints with class." },
  { id: "u43", section: "Classes", title: "constructor & this", blurb: "Setup and the current instance." },
  { id: "u44", section: "Classes", title: "Methods & Prototypes Idea", blurb: "Shared behavior." },
  { id: "u45", section: "Classes", title: "Getters & Setters", blurb: "Controlled properties." },
  { id: "u46", section: "Classes", title: "extends & super", blurb: "Inheritance without fear." },
  { id: "u47", section: "Classes", title: "Static Methods", blurb: "Helpers on the class itself." },
  { id: "u48", section: "Classes", title: "Private Fields Preview", blurb: "Hiding internals (#fields)." },
  { id: "u49", section: "Classes", title: "When to Use Classes", blurb: "Objects vs classes in practice." },
  { id: "u50", section: "Classes", title: "Classes Capstone", blurb: "Model players, carts, or todos." },

  // —— Batch 06 (51–60): Async & browser APIs ——
  { id: "u51", section: "Async", title: "Sync vs Async", blurb: "Why waiting matters." },
  { id: "u52", section: "Async", title: "setTimeout & setInterval", blurb: "Timers in the browser." },
  { id: "u53", section: "Async", title: "Promises Intro", blurb: "then, catch, and states." },
  { id: "u54", section: "Async", title: "async / await", blurb: "Write async code that reads clearly." },
  { id: "u55", section: "Async", title: "fetch Basics", blurb: "Talk to APIs from the browser." },
  { id: "u56", section: "Async", title: "JSON Responses", blurb: "Parse what the server sends." },
  { id: "u57", section: "Async", title: "Error Handling Patterns", blurb: "try/catch around awaits." },
  { id: "u58", section: "Async", title: "localStorage", blurb: "Save small data in the browser." },
  { id: "u59", section: "Async", title: "Modules Preview (ESM)", blurb: "import and export ideas." },
  { id: "u60", section: "Async", title: "Async Capstone", blurb: "Fetch + show data on a page." },

  // —— Batch 07 (61–70): Real website skills ——
  { id: "u61", section: "Build Sites", title: "Page Structure Review", blurb: "HTML landmarks JS will touch." },
  { id: "u62", section: "Build Sites", title: "Dynamic Lists in the DOM", blurb: "Render arrays as UI." },
  { id: "u63", section: "Build Sites", title: "Toggle UI State", blurb: "Menus, tabs, and active classes." },
  { id: "u64", section: "Build Sites", title: "Form Validation", blurb: "Stop bad input before submit." },
  { id: "u65", section: "Build Sites", title: "Debounce & Throttle Idea", blurb: "Don’t spam handlers." },
  { id: "u66", section: "Build Sites", title: "Accessibility Basics for JS", blurb: "Focus, labels, and keyboard." },
  { id: "u67", section: "Build Sites", title: "Small Animations", blurb: "CSS classes driven by JS." },
  { id: "u68", section: "Build Sites", title: "Client Routing Idea", blurb: "Fake pages without a framework." },
  { id: "u69", section: "Build Sites", title: "Deploy Mindset", blurb: "Static hosting and what breaks." },
  { id: "u70", section: "Build Sites", title: "Website Capstone", blurb: "Ship a tiny multi-section site." },

  // —— Batch 08 (71–80): Maps, sets, patterns ——
  { id: "u71", section: "Collections", title: "Map Deep Dive", blurb: "Key/value when keys aren’t only strings." },
  { id: "u72", section: "Collections", title: "Set Deep Dive", blurb: "Unique values only." },
  { id: "u73", section: "Collections", title: "WeakMap / WeakSet Idea", blurb: "Why weak collections exist." },
  { id: "u74", section: "Collections", title: "Sorting & Comparing", blurb: "sort with compare functions." },
  { id: "u75", section: "Collections", title: "Immutability Habits", blurb: "Copy, don’t mutate by accident." },
  { id: "u76", section: "Collections", title: "Pure Functions", blurb: "Same in → same out." },
  { id: "u77", section: "Collections", title: "Debugging with DevTools", blurb: "Breakpoints and console skills." },
  { id: "u78", section: "Collections", title: "Common Bugs Catalog", blurb: "Off-by-one, undefined, typos." },
  { id: "u79", section: "Collections", title: "Code Style Basics", blurb: "Names, small functions, clarity." },
  { id: "u80", section: "Collections", title: "Collections Capstone", blurb: "Index data with Map/Set." },

  // —— Batch 09 (81–90): Bridge to Node, React, more ——
  { id: "u81", section: "Next Steps", title: "How Browsers Run JS", blurb: "Engine, event loop sketch." },
  { id: "u82", section: "Next Steps", title: "Node.js: What & Why", blurb: "JS outside the browser." },
  { id: "u83", section: "Next Steps", title: "npm & packages Idea", blurb: "Reuse other people’s code." },
  { id: "u84", section: "Next Steps", title: "React: What Problem It Solves", blurb: "UI as components (concepts only)." },
  { id: "u85", section: "Next Steps", title: "Components vs DOM Scripts", blurb: "Mental model for frameworks." },
  { id: "u86", section: "Next Steps", title: "TypeScript Peek", blurb: "Types as guardrails." },
  { id: "u87", section: "Next Steps", title: "Other Languages After JS", blurb: "Python, etc. — transfer skills." },
  { id: "u88", section: "Next Steps", title: "APIs & Full-Stack Sketch", blurb: "Front talks to back." },
  { id: "u89", section: "Next Steps", title: "Portfolio Project Ideas", blurb: "What to build next." },
  { id: "u90", section: "Next Steps", title: "Graduation Capstone", blurb: "You’re ready for Node, React, and beyond." },
];
