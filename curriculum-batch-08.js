/**
 * Curriculum batch 08 — Units 71–80 (Collections)
 */
window.LEARN_JS_BATCH_08 = [
  {
    "id": "u71",
    "section": "Collections",
    "title": "Map Deep Dive",
    "blurb": "Key/value when keys aren’t only strings.",
    "nodes": [
      {
        "id": "u71-concept",
        "type": "concept",
        "title": "Maps remember any keys",
        "minutes": 7,
        "summary": "Map holds key/value pairs; keys can be objects, not only strings.",
        "knowledgeCard": "const m = new Map(); m.set(key, value); m.get(key);",
        "steps": [
          {
            "type": "teach",
            "text": "Object keys are mostly strings (and symbols). Map keys can be any value — including objects."
          },
          {
            "type": "teach",
            "text": "new Map() creates an empty map; set, get, has, delete, clear are the core methods."
          },
          {
            "type": "teach",
            "text": "m.size tells you how many entries you have (unlike objects’ awkward key counting)."
          },
          {
            "type": "teach",
            "text": "Maps iterate in insertion order: for (const [k, v] of map) { ... }"
          },
          {
            "type": "teach",
            "text": "Use Map when you need a real dictionary — especially non-string keys or frequent add/remove."
          },
          {
            "type": "mcq",
            "prompt": "Map keys can be…",
            "choices": [
              "Almost any value, including objects",
              "Only CSS class names",
              "Only numbers 0–9",
              "Only HTML tags"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "map.set(k, v) stores a value under key k.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Read a Map value with",
            "choices": [
              "get",
              "fetch",
              "trim"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "map.size is…",
            "choices": [
              "The entry count",
              "Always 100",
              "A CSS length",
              "undefined forever"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Maps iterate in insertion order.",
            "answer": true
          }
        ]
      },
      {
        "id": "u71-memory",
        "type": "memory",
        "title": "Map vs plain object",
        "minutes": 6,
        "summary": "Objects are fine for simple string-key records; Map shines as a flexible dictionary.",
        "knowledgeCard": "Object: JSON-friendly records. Map: dynamic keys & size.",
        "steps": [
          {
            "type": "teach",
            "text": "Plain objects are great for structured records you’ll JSON.stringify."
          },
          {
            "type": "teach",
            "text": "Maps don’t inherit Object.prototype quirks on keys the same way."
          },
          {
            "type": "teach",
            "text": "If the key is a DOM node or object identity matters — reach for Map."
          },
          {
            "type": "mcq",
            "prompt": "Prefer Map when…",
            "choices": [
              "Keys aren’t just strings / need size & churn",
              "You only need a CSS color",
              "You delete JavaScript",
              "You avoid all methods"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "has(key) checks whether a key exists.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Create with",
            "choices": [
              "new Map",
              "new Set",
              "JSON.parse"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u71-practice",
        "type": "practice",
        "title": "Map flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Create map?",
            "accept": [
              "new Map"
            ],
            "explain": "new Map()"
          },
          {
            "prompt": "Write entry?",
            "accept": [
              "set"
            ],
            "explain": "set"
          },
          {
            "prompt": "Read entry?",
            "accept": [
              "get"
            ],
            "explain": "get"
          },
          {
            "prompt": "Entry count?",
            "accept": [
              "size"
            ],
            "explain": "size"
          },
          {
            "prompt": "Key types?",
            "accept": [
              "any",
              "any value"
            ],
            "explain": "almost any value"
          }
        ]
      },
      {
        "id": "u71-chest",
        "type": "chest",
        "title": "Map Deep Dive chest",
        "minutes": 2
      },
      {
        "id": "u71-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Map = flexible key/value. Next: Set.",
        "knowledgeCard": "Next: Set Deep Dive",
        "steps": [
          {
            "type": "teach",
            "text": "set/get/has/size — Map is your general dictionary."
          },
          {
            "type": "teach",
            "text": "Next: Set for unique values."
          },
          {
            "type": "tf",
            "prompt": "Map keys are not limited to strings.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u72",
    "section": "Collections",
    "title": "Set Deep Dive",
    "blurb": "Unique values only.",
    "nodes": [
      {
        "id": "u72-concept",
        "type": "concept",
        "title": "Membership without duplicates",
        "minutes": 7,
        "summary": "Set stores unique values; add/has/delete are the core.",
        "knowledgeCard": "const s = new Set([1, 2, 2]); // size 2",
        "steps": [
          {
            "type": "teach",
            "text": "A Set holds unique values — adding the same value again is a no-op."
          },
          {
            "type": "teach",
            "text": "new Set(array) dedupes an array quickly."
          },
          {
            "type": "teach",
            "text": "s.add(v), s.has(v), s.delete(v), s.size cover most use."
          },
          {
            "type": "teach",
            "text": "Sets are great for “have I seen this id?” checks."
          },
          {
            "type": "teach",
            "text": "Iteration works: for (const v of set) { ... }"
          },
          {
            "type": "mcq",
            "prompt": "new Set([1,1,2]).size is…",
            "choices": [
              "2",
              "3",
              "0",
              "1 always"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "set.has(v) tests membership.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Insert into a Set",
            "choices": [
              "add",
              "push",
              "setItem"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Sets shine when you need…",
            "choices": [
              "Unique membership",
              "CSS grids only",
              "FTP uploads",
              "Password hashing in CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Adding a duplicate to a Set grows size by 1.",
            "answer": false
          }
        ]
      },
      {
        "id": "u72-memory",
        "type": "memory",
        "title": "Dedupe and filter patterns",
        "minutes": 6,
        "summary": "[...new Set(arr)] is a classic unique-array trick.",
        "knowledgeCard": "const unique = [...new Set(arr)];",
        "steps": [
          {
            "type": "teach",
            "text": "Spread a Set back into an array when you need array methods."
          },
          {
            "type": "teach",
            "text": "Use a Set while looping to skip work you’ve already done."
          },
          {
            "type": "teach",
            "text": "Object keys can fake uniqueness for strings — Set is clearer for values."
          },
          {
            "type": "mcq",
            "prompt": "[...new Set([\"a\",\"a\"])] yields…",
            "choices": [
              "[\"a\"]",
              "[\"a\",\"a\"]",
              "[]",
              "null"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Sets can store object references as values.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Unique collection type",
            "choices": [
              "Set",
              "float",
              "submit"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u72-practice",
        "type": "practice",
        "title": "Set flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Create set?",
            "accept": [
              "new Set"
            ],
            "explain": "new Set()"
          },
          {
            "prompt": "Insert value?",
            "accept": [
              "add"
            ],
            "explain": "add"
          },
          {
            "prompt": "Check membership?",
            "accept": [
              "has"
            ],
            "explain": "has"
          },
          {
            "prompt": "Count?",
            "accept": [
              "size"
            ],
            "explain": "size"
          },
          {
            "prompt": "Dedupe array idea?",
            "accept": [
              "Set",
              "new Set"
            ],
            "explain": "new Set(arr)"
          }
        ]
      },
      {
        "id": "u72-chest",
        "type": "chest",
        "title": "Set Deep Dive chest",
        "minutes": 2
      },
      {
        "id": "u72-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Set = unique values. Next: weak collections.",
        "knowledgeCard": "Next: WeakMap / WeakSet Idea",
        "steps": [
          {
            "type": "teach",
            "text": "add/has/delete — Sets track uniqueness."
          },
          {
            "type": "teach",
            "text": "Next: why WeakMap/WeakSet exist."
          },
          {
            "type": "tf",
            "prompt": "Sets ignore duplicate adds.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u73",
    "section": "Collections",
    "title": "WeakMap / WeakSet Idea",
    "blurb": "Why weak collections exist.",
    "nodes": [
      {
        "id": "u73-concept",
        "type": "concept",
        "title": "Keys that don’t keep objects alive",
        "minutes": 7,
        "summary": "WeakMap/WeakSet hold weak refs to objects — good for metadata.",
        "knowledgeCard": "WeakMap: object keys only; not iterable; GC-friendly metadata",
        "steps": [
          {
            "type": "teach",
            "text": "WeakMap keys must be objects; values can be anything."
          },
          {
            "type": "teach",
            "text": "If nothing else references the key object, it can be garbage-collected — the entry goes away."
          },
          {
            "type": "teach",
            "text": "WeakSet stores objects weakly — membership without pinning them in memory."
          },
          {
            "type": "teach",
            "text": "You can’t iterate WeakMap/WeakSet or read a .size — they’re not for listing everything."
          },
          {
            "type": "teach",
            "text": "Use case: private metadata on DOM nodes or objects without leaking memory."
          },
          {
            "type": "mcq",
            "prompt": "WeakMap keys must be…",
            "choices": [
              "Objects",
              "Only strings",
              "Only numbers",
              "CSS selectors"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Weak collections help avoid memory leaks from leftover metadata.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Weak sibling of Map",
            "choices": [
              "WeakMap",
              "Array",
              "JSON"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "WeakMap is…",
            "choices": [
              "Not iterable like Map",
              "A CSS file",
              "Always size 100",
              "Only for strings"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "WeakSet holds object membership weakly.",
            "answer": true
          }
        ]
      },
      {
        "id": "u73-memory",
        "type": "memory",
        "title": "When plain Map is enough",
        "minutes": 6,
        "summary": "If you need iteration or non-object keys, use Map/Set.",
        "knowledgeCard": "Need .size or loops? Use Map/Set. Metadata on objects? Consider Weak*.",
        "steps": [
          {
            "type": "teach",
            "text": "Beginners rarely need WeakMap first — know why it exists."
          },
          {
            "type": "teach",
            "text": "Libraries sometimes use WeakMap for per-object caches."
          },
          {
            "type": "teach",
            "text": "If you must list all entries, WeakMap is the wrong tool."
          },
          {
            "type": "mcq",
            "prompt": "To loop all entries prefer…",
            "choices": [
              "Map",
              "WeakMap",
              "float",
              "FTP"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "WeakMap has no public size.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Weak membership set",
            "choices": [
              "WeakSet",
              "localStorage",
              "trim"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u73-practice",
        "type": "practice",
        "title": "Weak collections flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Weak key/value type?",
            "accept": [
              "WeakMap"
            ],
            "explain": "WeakMap"
          },
          {
            "prompt": "Weak membership?",
            "accept": [
              "WeakSet"
            ],
            "explain": "WeakSet"
          },
          {
            "prompt": "WeakMap keys?",
            "accept": [
              "objects"
            ],
            "explain": "objects"
          },
          {
            "prompt": "Iterable?",
            "accept": [
              "no",
              "not really"
            ],
            "explain": "no"
          },
          {
            "prompt": "Main benefit idea?",
            "accept": [
              "GC",
              "memory",
              "no leak"
            ],
            "explain": "GC-friendly metadata"
          }
        ]
      },
      {
        "id": "u73-chest",
        "type": "chest",
        "title": "WeakMap / WeakSet Idea chest",
        "minutes": 2
      },
      {
        "id": "u73-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Weak* = metadata without pinning. Next: sorting.",
        "knowledgeCard": "Next: Sorting & Comparing",
        "steps": [
          {
            "type": "teach",
            "text": "WeakMap/WeakSet exist for object-tied data without leaks."
          },
          {
            "type": "teach",
            "text": "Next: sort arrays with compare functions."
          },
          {
            "type": "tf",
            "prompt": "WeakMap keys are objects and aren’t meant for full iteration.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u74",
    "section": "Collections",
    "title": "Sorting & Comparing",
    "blurb": "sort with compare functions.",
    "nodes": [
      {
        "id": "u74-concept",
        "type": "concept",
        "title": "Tell sort how to order",
        "minutes": 7,
        "summary": "array.sort(compareFn) — return negative, 0, or positive.",
        "knowledgeCard": "nums.sort((a, b) => a - b); // ascending numbers",
        "steps": [
          {
            "type": "teach",
            "text": "sort mutates the array in place and returns it."
          },
          {
            "type": "teach",
            "text": "Default sort converts to strings — bad for numbers (10 before 2)."
          },
          {
            "type": "teach",
            "text": "compare(a, b): negative if a before b, 0 if equal, positive if a after b."
          },
          {
            "type": "teach",
            "text": "Numbers ascending: (a, b) => a - b; descending: (a, b) => b - a."
          },
          {
            "type": "teach",
            "text": "Objects: sort by a field — (a, b) => a.name.localeCompare(b.name)."
          },
          {
            "type": "mcq",
            "prompt": "Default sort on numbers is risky because…",
            "choices": [
              "It sorts as strings",
              "It deletes the array",
              "It uses FTP",
              "It only works in CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "sort mutates the original array.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Ascending number compare idea",
            "choices": [
              "a - b",
              "a + b",
              "a * b"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "compare returning 0 means…",
            "choices": [
              "Treat as equal",
              "Delete both",
              "Swap forever",
              "Skip JS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "localeCompare helps sort strings.",
            "answer": true
          }
        ]
      },
      {
        "id": "u74-memory",
        "type": "memory",
        "title": "Copy then sort when needed",
        "minutes": 6,
        "summary": "[...arr].sort(...) keeps the original order intact.",
        "knowledgeCard": "const sorted = [...arr].sort((a, b) => a - b);",
        "steps": [
          {
            "type": "teach",
            "text": "If callers still need the old order, copy before sorting."
          },
          {
            "type": "teach",
            "text": "Stable-enough habits: sort a copy for display; keep source data separate."
          },
          {
            "type": "teach",
            "text": "Be explicit — never assume default sort does what you want for numbers."
          },
          {
            "type": "mcq",
            "prompt": "Keep original order by…",
            "choices": [
              "Copying before sort",
              "Sorting twice randomly",
              "Using WeakSet",
              "Deleting compare"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "(a, b) => b - a sorts numbers descending.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "In-place order method",
            "choices": [
              "sort",
              "fetch",
              "trim"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u74-practice",
        "type": "practice",
        "title": "Sorting flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Order method?",
            "accept": [
              "sort"
            ],
            "explain": "sort"
          },
          {
            "prompt": "Number ascending?",
            "accept": [
              "a - b",
              "a-b"
            ],
            "explain": "a - b"
          },
          {
            "prompt": "Mutates array?",
            "accept": [
              "yes",
              "true"
            ],
            "explain": "yes"
          },
          {
            "prompt": "String compare helper?",
            "accept": [
              "localeCompare"
            ],
            "explain": "localeCompare"
          },
          {
            "prompt": "Safe copy then sort?",
            "accept": [
              "spread",
              "[...]"
            ],
            "explain": "[...arr].sort"
          }
        ]
      },
      {
        "id": "u74-chest",
        "type": "chest",
        "title": "Sorting & Comparing chest",
        "minutes": 2
      },
      {
        "id": "u74-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Compare functions drive sort. Next: immutability.",
        "knowledgeCard": "Next: Immutability Habits",
        "steps": [
          {
            "type": "teach",
            "text": "Provide compareFn; copy first if you need the original."
          },
          {
            "type": "teach",
            "text": "Next: copy instead of accidental mutation."
          },
          {
            "type": "tf",
            "prompt": "Default sort is string-based and surprises with numbers.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u75",
    "section": "Collections",
    "title": "Immutability Habits",
    "blurb": "Copy, don’t mutate by accident.",
    "nodes": [
      {
        "id": "u75-concept",
        "type": "concept",
        "title": "Change by creating new data",
        "minutes": 7,
        "summary": "Spread/slice/map to avoid surprising shared mutations.",
        "knowledgeCard": "const next = [...arr, item]; const obj2 = { ...obj, ok: true };",
        "steps": [
          {
            "type": "teach",
            "text": "Objects and arrays are references — two variables can point at the same data."
          },
          {
            "type": "teach",
            "text": "Mutating a shared array/object can break other parts of your program."
          },
          {
            "type": "teach",
            "text": "Immutable-style updates: build a new array/object instead of editing in place."
          },
          {
            "type": "teach",
            "text": "Spread copies shallowly: [...arr], { ...obj } — nested objects are still shared."
          },
          {
            "type": "teach",
            "text": "Libraries and React lean on this habit — learning it early pays off."
          },
          {
            "type": "mcq",
            "prompt": "arr2 = arr means…",
            "choices": [
              "Same reference (usually)",
              "A deep clone always",
              "A CSS copy",
              "JSON deleted"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Spread can make a shallow array copy.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Shallow object copy",
            "choices": [
              "{...obj}",
              "WeakMap",
              "sort"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Why avoid surprise mutation?",
            "choices": [
              "Shared references break elsewhere",
              "JS forbids arrays",
              "HTTPS fails",
              "Maps disappear"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Shallow copies nest still share inner objects.",
            "answer": true
          }
        ]
      },
      {
        "id": "u75-memory",
        "type": "memory",
        "title": "Update patterns",
        "minutes": 6,
        "summary": "Add/remove/update via new arrays/objects.",
        "knowledgeCard": "items.filter(i => i.id !== id); items.map(i => i.id===id ? {...i, done:true} : i)",
        "steps": [
          {
            "type": "teach",
            "text": "Remove: filter. Update one: map with a changed copy. Add: [...items, newItem]."
          },
          {
            "type": "teach",
            "text": "const and immutability habits work well together — rebind next state."
          },
          {
            "type": "teach",
            "text": "Deep clones are rarer; know when nested updates need more care."
          },
          {
            "type": "mcq",
            "prompt": "Remove without mutate often uses…",
            "choices": [
              "filter",
              "FTP",
              "innerHTML",
              "clearInterval"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "map can return updated copies of items.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Add item immutably",
            "choices": [
              "spread",
              "push only",
              "delete"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u75-practice",
        "type": "practice",
        "title": "Immutability flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Array shallow copy?",
            "accept": [
              "spread",
              "[...]"
            ],
            "explain": "[...arr]"
          },
          {
            "prompt": "Object shallow copy?",
            "accept": [
              "{...}",
              "spread"
            ],
            "explain": "{ ...obj }"
          },
          {
            "prompt": "Shared by default?",
            "accept": [
              "reference",
              "refs"
            ],
            "explain": "references"
          },
          {
            "prompt": "Remove immutably?",
            "accept": [
              "filter"
            ],
            "explain": "filter"
          },
          {
            "prompt": "Nested still shared after shallow copy?",
            "accept": [
              "yes",
              "true"
            ],
            "explain": "yes"
          }
        ]
      },
      {
        "id": "u75-chest",
        "type": "chest",
        "title": "Immutability Habits chest",
        "minutes": 2
      },
      {
        "id": "u75-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Copy on write habits. Next: pure functions.",
        "knowledgeCard": "Next: Pure Functions",
        "steps": [
          {
            "type": "teach",
            "text": "Prefer new data over silent mutation of shared structures."
          },
          {
            "type": "teach",
            "text": "Next: pure functions — same in, same out."
          },
          {
            "type": "tf",
            "prompt": "Accidental mutation is a common bug source.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u76",
    "section": "Collections",
    "title": "Pure Functions",
    "blurb": "Same in → same out.",
    "nodes": [
      {
        "id": "u76-concept",
        "type": "concept",
        "title": "Predictable building blocks",
        "minutes": 7,
        "summary": "Pure: no side effects; output depends only on inputs.",
        "knowledgeCard": "function add(a, b) { return a + b; } // pure",
        "steps": [
          {
            "type": "teach",
            "text": "A pure function always returns the same result for the same arguments."
          },
          {
            "type": "teach",
            "text": "It doesn’t change outside variables, DOM, or storage as a side effect."
          },
          {
            "type": "teach",
            "text": "Pure helpers are easier to test and reason about."
          },
          {
            "type": "teach",
            "text": "Impure examples: Math.random(), Date.now(), touching DOM, writing localStorage."
          },
          {
            "type": "teach",
            "text": "Real apps mix both — push impurity to the edges; keep core logic pure when you can."
          },
          {
            "type": "mcq",
            "prompt": "Pure functions…",
            "choices": [
              "Same inputs → same output, no side effects",
              "Must use fetch",
              "Must edit the DOM",
              "Never return"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "add(1,2) returning 3 with no outside changes is pure.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Impure example",
            "choices": [
              "Math.random()",
              "a+b",
              "return x"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Why purity helps…",
            "choices": [
              "Testing & reasoning",
              "Faster CSS only",
              "Hides all bugs",
              "Replaces HTML"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Reading and writing the DOM is a side effect.",
            "answer": true
          }
        ]
      },
      {
        "id": "u76-memory",
        "type": "memory",
        "title": "Split calculate vs apply",
        "minutes": 6,
        "summary": "Compute values purely; apply to UI/storage separately.",
        "knowledgeCard": "const next = pureUpdate(state, action); render(next);",
        "steps": [
          {
            "type": "teach",
            "text": "Pattern: pure function returns next state; another function applies it."
          },
          {
            "type": "teach",
            "text": "map/filter/reduce callbacks are often kept pure."
          },
          {
            "type": "teach",
            "text": "Logging can be a mild side effect — still keep core math/transforms pure."
          },
          {
            "type": "mcq",
            "prompt": "filter callbacks should ideally…",
            "choices": [
              "Not mutate outside data",
              "Always fetch",
              "Clear the page",
              "Use WeakSet only"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "You can use pure functions inside impure apps.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Same in same out",
            "choices": [
              "pure",
              "random",
              "DOM"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u76-practice",
        "type": "practice",
        "title": "Pure functions flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Same in → same out?",
            "accept": [
              "pure"
            ],
            "explain": "pure"
          },
          {
            "prompt": "Outside change called?",
            "accept": [
              "side effect",
              "side-effect"
            ],
            "explain": "side effect"
          },
          {
            "prompt": "DOM write is…",
            "accept": [
              "impure",
              "side effect"
            ],
            "explain": "impure / side effect"
          },
          {
            "prompt": "Easy to test if…",
            "accept": [
              "pure"
            ],
            "explain": "pure"
          },
          {
            "prompt": "Keep core logic…",
            "accept": [
              "pure",
              "predictable"
            ],
            "explain": "pure when possible"
          }
        ]
      },
      {
        "id": "u76-chest",
        "type": "chest",
        "title": "Pure Functions chest",
        "minutes": 2
      },
      {
        "id": "u76-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Purity = predictability. Next: DevTools debugging.",
        "knowledgeCard": "Next: Debugging with DevTools",
        "steps": [
          {
            "type": "teach",
            "text": "Prefer pure transforms; isolate side effects."
          },
          {
            "type": "teach",
            "text": "Next: breakpoints and console skills."
          },
          {
            "type": "tf",
            "prompt": "Pure functions don’t rely on hidden outside state.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u77",
    "section": "Collections",
    "title": "Debugging with DevTools",
    "blurb": "Breakpoints and console skills.",
    "nodes": [
      {
        "id": "u77-concept",
        "type": "concept",
        "title": "See what the code is doing",
        "minutes": 7,
        "summary": "console, breakpoints, and the call stack are your friends.",
        "knowledgeCard": "console.log / console.table / debugger; Sources breakpoints",
        "steps": [
          {
            "type": "teach",
            "text": "console.log still works — log shapes of objects right before a bug."
          },
          {
            "type": "teach",
            "text": "console.table helps scan arrays of objects."
          },
          {
            "type": "teach",
            "text": "Breakpoints in DevTools Sources pause on a line so you can inspect variables."
          },
          {
            "type": "teach",
            "text": "debugger; in code pauses if DevTools is open."
          },
          {
            "type": "teach",
            "text": "Read the call stack and error line numbers — they point at the path that failed."
          },
          {
            "type": "mcq",
            "prompt": "Breakpoints…",
            "choices": [
              "Pause code so you can inspect state",
              "Delete bugs automatically",
              "Deploy sites",
              "Minify CSS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Error messages often include a file and line number.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Pause keyword",
            "choices": [
              "debugger",
              "float",
              "trim"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "console.table is handy for…",
            "choices": [
              "Arrays of objects",
              "Only fonts",
              "DNS only",
              "HTTPS certs"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "The call stack shows which functions led to the current pause/error.",
            "answer": true
          }
        ]
      },
      {
        "id": "u77-memory",
        "type": "memory",
        "title": "Reproduce, then narrow",
        "minutes": 6,
        "summary": "Make the bug happen reliably; bisect where values go wrong.",
        "knowledgeCard": "Reproduce → log/breakpoint near suspect → fix → confirm",
        "steps": [
          {
            "type": "teach",
            "text": "A reproducible case beats guessing."
          },
          {
            "type": "teach",
            "text": "Change one thing at a time when testing a fix."
          },
          {
            "type": "teach",
            "text": "Watch expressions / scope pane beat scattering 50 logs forever."
          },
          {
            "type": "mcq",
            "prompt": "First debugging step is often…",
            "choices": [
              "Reproduce the bug",
              "Rewrite the OS",
              "Delete node_modules randomly",
              "Disable HTTPS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "DevTools can inspect variables while paused.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Quick inspect tool",
            "choices": [
              "console.log",
              "WeakMap",
              "sort"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u77-practice",
        "type": "practice",
        "title": "Debugging flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Pause in DevTools?",
            "accept": [
              "breakpoint",
              "debugger"
            ],
            "explain": "breakpoint / debugger"
          },
          {
            "prompt": "Log helper?",
            "accept": [
              "console.log"
            ],
            "explain": "console.log"
          },
          {
            "prompt": "Tabular log?",
            "accept": [
              "console.table"
            ],
            "explain": "console.table"
          },
          {
            "prompt": "Error points to…",
            "accept": [
              "line",
              "stack"
            ],
            "explain": "line / stack"
          },
          {
            "prompt": "First step?",
            "accept": [
              "reproduce",
              "repro"
            ],
            "explain": "reproduce"
          }
        ]
      },
      {
        "id": "u77-chest",
        "type": "chest",
        "title": "Debugging with DevTools chest",
        "minutes": 2
      },
      {
        "id": "u77-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Log, break, inspect, fix. Next: common bugs.",
        "knowledgeCard": "Next: Common Bugs Catalog",
        "steps": [
          {
            "type": "teach",
            "text": "DevTools turns mysteries into inspectable state."
          },
          {
            "type": "teach",
            "text": "Next: classic bug patterns to watch for."
          },
          {
            "type": "tf",
            "prompt": "Reading stack traces saves time.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u78",
    "section": "Collections",
    "title": "Common Bugs Catalog",
    "blurb": "Off-by-one, undefined, typos.",
    "nodes": [
      {
        "id": "u78-concept",
        "type": "concept",
        "title": "Bugs you’ll meet early",
        "minutes": 7,
        "summary": "undefined access, off-by-one, == surprises, async order.",
        "knowledgeCard": "Watch: undefined.x, i <= length, ==, missing await",
        "steps": [
          {
            "type": "teach",
            "text": "Reading property of undefined/null → runtime TypeError."
          },
          {
            "type": "teach",
            "text": "Off-by-one: loops with <= arr.length or wrong slice ends."
          },
          {
            "type": "teach",
            "text": "== coerces types; prefer === unless you truly want coercion."
          },
          {
            "type": "teach",
            "text": "Async: using a value before await finishes."
          },
          {
            "type": "teach",
            "text": "Typos in property names silently yield undefined."
          },
          {
            "type": "mcq",
            "prompt": "undefined.foo usually throws…",
            "choices": [
              "TypeError",
              "CSSError",
              "HTTPSError",
              "FTPError"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "=== avoids most type-coercion surprises.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Loop past last index risk",
            "choices": [
              "off-by-one",
              "Map",
              "Set"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Silent wrong field names often give…",
            "choices": [
              "undefined",
              "a new computer",
              "automatic fix",
              "HTTPS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Forgetting await is a common async bug.",
            "answer": true
          }
        ]
      },
      {
        "id": "u78-memory",
        "type": "memory",
        "title": "Defensive habits",
        "minutes": 6,
        "summary": "Optional chaining, guards, and clear names reduce footguns.",
        "knowledgeCard": "obj?.user?.name; if (!arr.length) return;",
        "steps": [
          {
            "type": "teach",
            "text": "Optional chaining (?.) safely reads nested fields."
          },
          {
            "type": "teach",
            "text": "Guard clauses at the top of functions catch bad input early."
          },
          {
            "type": "teach",
            "text": "Log the actual value when it’s “wrong” — don’t only guess."
          },
          {
            "type": "mcq",
            "prompt": "obj?.x helps when…",
            "choices": [
              "obj might be null/undefined",
              "You need FTP",
              "CSS is missing",
              "Maps sort themselves"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Guard clauses clarify failure cases.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Strict equality",
            "choices": [
              "===",
              "==",
              "="
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u78-practice",
        "type": "practice",
        "title": "Bugs catalog flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Null read error?",
            "accept": [
              "TypeError"
            ],
            "explain": "TypeError"
          },
          {
            "prompt": "Prefer equality?",
            "accept": [
              "==="
            ],
            "explain": "==="
          },
          {
            "prompt": "Loop boundary bug?",
            "accept": [
              "off-by-one",
              "off by one"
            ],
            "explain": "off-by-one"
          },
          {
            "prompt": "Safe nest read?",
            "accept": [
              "?.",
              "optional chaining"
            ],
            "explain": "?."
          },
          {
            "prompt": "Async forgot?",
            "accept": [
              "await"
            ],
            "explain": "await"
          }
        ]
      },
      {
        "id": "u78-chest",
        "type": "chest",
        "title": "Common Bugs Catalog chest",
        "minutes": 2
      },
      {
        "id": "u78-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Know the usual suspects. Next: code style.",
        "knowledgeCard": "Next: Code Style Basics",
        "steps": [
          {
            "type": "teach",
            "text": "undefined, off-by-one, ==, and missing await show up constantly."
          },
          {
            "type": "teach",
            "text": "Next: naming and small clear functions."
          },
          {
            "type": "tf",
            "prompt": "Many bugs are patterns you can learn to spot.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u79",
    "section": "Collections",
    "title": "Code Style Basics",
    "blurb": "Names, small functions, clarity.",
    "nodes": [
      {
        "id": "u79-concept",
        "type": "concept",
        "title": "Write for humans (including future you)",
        "minutes": 7,
        "summary": "Clear names, small functions, consistent formatting.",
        "knowledgeCard": "name by purpose; keep functions short; format consistently",
        "steps": [
          {
            "type": "teach",
            "text": "Names should say what something is or does: totalPrice, not x1."
          },
          {
            "type": "teach",
            "text": "Functions that do one job are easier to test and reuse."
          },
          {
            "type": "teach",
            "text": "Consistent quotes, indentation, and semicolons reduce noise in diffs."
          },
          {
            "type": "teach",
            "text": "Comments explain why — not restatements of obvious what."
          },
          {
            "type": "teach",
            "text": "Lint/format tools later enforce style; habits start now."
          },
          {
            "type": "mcq",
            "prompt": "Better variable name for a total?",
            "choices": [
              "totalPrice",
              "x",
              "asdf",
              "temp2final"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Small focused functions beat giant do-everything ones.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Comments should explain",
            "choices": [
              "why",
              "noise",
              "random"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Style consistency helps…",
            "choices": [
              "Reading and reviewing code",
              "Network speed magically",
              "GPU clocks",
              "DNS"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Clear names are part of style.",
            "answer": true
          }
        ]
      },
      {
        "id": "u79-memory",
        "type": "memory",
        "title": "Readable > clever",
        "minutes": 6,
        "summary": "Prefer obvious code over tricky one-liners when learning.",
        "knowledgeCard": "Clarity first; optimize/clever later only if needed.",
        "steps": [
          {
            "type": "teach",
            "text": "Clever tricks impress less than correct, readable code."
          },
          {
            "type": "teach",
            "text": "Match the style of the file you’re editing."
          },
          {
            "type": "teach",
            "text": "Delete dead code — don’t comment-out museums."
          },
          {
            "type": "mcq",
            "prompt": "When learning, prefer…",
            "choices": [
              "Clear code",
              "Maximum tricks always",
              "One-letter names only",
              "No functions"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Dead commented code piles should be cleaned up.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Name by",
            "choices": [
              "purpose",
              "random",
              "color"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u79-practice",
        "type": "practice",
        "title": "Style flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Name by…",
            "accept": [
              "purpose"
            ],
            "explain": "purpose"
          },
          {
            "prompt": "Functions should be…",
            "accept": [
              "small",
              "focused"
            ],
            "explain": "small / focused"
          },
          {
            "prompt": "Comments explain…",
            "accept": [
              "why"
            ],
            "explain": "why"
          },
          {
            "prompt": "Prefer readable over…",
            "accept": [
              "clever"
            ],
            "explain": "clever"
          },
          {
            "prompt": "Match existing…",
            "accept": [
              "style"
            ],
            "explain": "style"
          }
        ]
      },
      {
        "id": "u79-chest",
        "type": "chest",
        "title": "Code Style Basics chest",
        "minutes": 2
      },
      {
        "id": "u79-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Clarity is a feature. Next: collections capstone.",
        "knowledgeCard": "Next: Collections Capstone",
        "steps": [
          {
            "type": "teach",
            "text": "Good names and small functions make everything else easier."
          },
          {
            "type": "teach",
            "text": "Next: put Map/Set to work in a mini indexing task."
          },
          {
            "type": "tf",
            "prompt": "Readable code is kinder to teammates and future you.",
            "answer": true
          }
        ]
      }
    ]
  },
  {
    "id": "u80",
    "section": "Collections",
    "title": "Collections Capstone",
    "blurb": "Index data with Map/Set.",
    "nodes": [
      {
        "id": "u80-concept",
        "type": "concept",
        "title": "Build a tiny index",
        "minutes": 7,
        "summary": "Use Map for lookups and Set for uniqueness together.",
        "knowledgeCard": "id → item Map; tag Set; sort a copy for display",
        "steps": [
          {
            "type": "teach",
            "text": "Capstone pattern: array of records + Map by id for O(1)-ish lookup."
          },
          {
            "type": "teach",
            "text": "Track selected ids or tags in a Set."
          },
          {
            "type": "teach",
            "text": "When displaying, copy + sort without mutating the source."
          },
          {
            "type": "teach",
            "text": "Keep update helpers pure when you can; render separately."
          },
          {
            "type": "teach",
            "text": "You’ve got tools for real app data shaping — not only toy arrays."
          },
          {
            "type": "mcq",
            "prompt": "Fast lookup by id often uses…",
            "choices": [
              "Map",
              "random floats",
              "only CSS",
              "document.title"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Set is useful for selected ids without duplicates.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Order a display copy with",
            "choices": [
              "sort",
              "WeakMap",
              "debugger"
            ],
            "answer": 0
          },
          {
            "type": "mcq",
            "prompt": "Capstone data flow…",
            "choices": [
              "index + unique sets + render",
              "mutate everything blindly",
              "skip all structures",
              "FTP the DOM"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Copy before sort protects source order.",
            "answer": true
          }
        ]
      },
      {
        "id": "u80-memory",
        "type": "memory",
        "title": "Checklist",
        "minutes": 6,
        "summary": "Map for index, Set for membership, immutable updates, clear names.",
        "knowledgeCard": "byId.get(id); selected.has(id); next = [...items];",
        "steps": [
          {
            "type": "teach",
            "text": "Verify: add item → map updates; select id → set has it; sort view ≠ mutate source."
          },
          {
            "type": "teach",
            "text": "Log with console.table when structures get confusing."
          },
          {
            "type": "teach",
            "text": "Next section: bridge toward Node, React, and what to learn after."
          },
          {
            "type": "mcq",
            "prompt": "selected.has(id) suggests…",
            "choices": [
              "a Set of ids",
              "a CSS rule",
              "an HTTP verb",
              "a deploy host"
            ],
            "answer": 0
          },
          {
            "type": "tf",
            "prompt": "Maps and Sets often appear together in apps.",
            "answer": true
          },
          {
            "type": "tap",
            "prompt": "Lookup method",
            "choices": [
              "get",
              "trim",
              "await"
            ],
            "answer": 0
          }
        ]
      },
      {
        "id": "u80-practice",
        "type": "practice",
        "title": "Collections capstone flashcards",
        "minutes": 6,
        "cards": [
          {
            "prompt": "Id index structure?",
            "accept": [
              "Map"
            ],
            "explain": "Map"
          },
          {
            "prompt": "Unique ids structure?",
            "accept": [
              "Set"
            ],
            "explain": "Set"
          },
          {
            "prompt": "Lookup method?",
            "accept": [
              "get"
            ],
            "explain": "get"
          },
          {
            "prompt": "Membership method?",
            "accept": [
              "has"
            ],
            "explain": "has"
          },
          {
            "prompt": "Sort without mutate?",
            "accept": [
              "copy",
              "spread"
            ],
            "explain": "copy first"
          }
        ]
      },
      {
        "id": "u80-chest",
        "type": "chest",
        "title": "Collections Capstone chest",
        "minutes": 2
      },
      {
        "id": "u80-overview",
        "type": "overview",
        "title": "Recap & what’s next",
        "minutes": 5,
        "summary": "Map + Set index patterns. Next: Next Steps bridge.",
        "knowledgeCard": "Next section: Next Steps",
        "steps": [
          {
            "type": "teach",
            "text": "You can index, dedupe, sort safely, and keep logic clear."
          },
          {
            "type": "teach",
            "text": "Next units: how JS runs, Node, npm, React ideas, and graduation."
          },
          {
            "type": "tf",
            "prompt": "Collections skills transfer into real app state design.",
            "answer": true
          }
        ]
      }
    ]
  }
];
