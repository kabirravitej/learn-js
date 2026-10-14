/**
 * Inject hands-on coding steps into Unit 2+ (skip Unit 1 history).
 */
(function injectCodingPractice() {
  const root = window.LEARN_JS_CURRICULUM;
  if (!root?.units) return;

  const BANK = {
    "u2-concept": [
      {
        type: "code",
        prompt: "Your turn: log the text Hello to the console.",
        starter: "// Type one line that prints Hello\n",
        expectLogs: ["Hello"],
        hint: "Hint from Milo: console.log(\"Hello\");",
        explain: "console.log(\"Hello\") prints the string Hello.",
      },
      {
        type: "code",
        prompt: "Log the number 42 (no quotes).",
        starter: "// Print the number 42\n",
        expectLogs: ["42"],
        hint: "Hint from Milo: console.log(42);",
        explain: "Numbers don’t need quotes: console.log(42).",
      },
    ],
    "u2-memory": [
      {
        type: "code",
        prompt: "Fix this idea: print Learn JS as a string.",
        starter: "// Print Learn JS with quotes\n",
        expectLogs: ["Learn JS"],
        hint: "Hint from Milo: console.log(\"Learn JS\");",
        explain: "Text needs quotes so JS treats it as a string.",
      },
      {
        type: "code",
        prompt: "Add a comment, then log Ready.",
        starter: "// write a comment above, then print Ready\n",
        expectLogs: ["Ready"],
        mustInclude: ["//"],
        hint: "Hint from Milo: start a line with // then console.log(\"Ready\");",
        explain: "// comments are ignored; console.log still runs.",
      },
    ],
    "u2-practice": [
      {
        type: "code",
        prompt: "Warm-up: log I am coding",
        starter: "",
        expectLogs: ["I am coding"],
        hint: "Hint from Milo: console.log(\"I am coding\");",
      },
    ],
    "u2-overview": [
      {
        type: "code",
        prompt: "Warm-up: log First lines done",
        starter: "",
        expectLogs: ["First lines done"],
        hint: "Hint from Milo: console.log(\"First lines done\");",
      },
    ],
    "u3-concept": [
      {
        type: "code",
        prompt: "Create a variable name with let, set it to Milo, then log name.",
        starter: "let name = \"Milo\";\n// log the variable\n",
        expectLogs: ["Milo"],
        mustInclude: ["let"],
        hint: "Hint from Milo: console.log(name);",
        explain: "Variables store values you can print by name.",
      },
      {
        type: "code",
        prompt: "Make age = 12 with let, then log age.",
        starter: "",
        expectLogs: ["12"],
        mustInclude: ["let"],
        hint: "Hint from Milo: let age = 12; console.log(age);",
      },
    ],
    "u3-memory": [
      {
        type: "code",
        prompt: "Use const for city = \"Jakarta\", then log city.",
        starter: "",
        expectLogs: ["Jakarta"],
        mustInclude: ["const"],
        hint: "Hint from Milo: const city = \"Jakarta\"; console.log(city);",
      },
      {
        type: "code",
        prompt: "let score = 0; then set score = 10; log score.",
        starter: "let score = 0;\n// change score, then log it\n",
        expectLogs: ["10"],
        hint: "Hint from Milo: score = 10; console.log(score);",
      },
    ],
    "u3-practice": [
      {
        type: "code",
        prompt: "Warm-up: let x = 5; log x",
        starter: "",
        expectLogs: ["5"],
        mustInclude: ["let"],
      },
    ],
    "u3-overview": [
      {
        type: "code",
        prompt: "let ready = true; log ready.",
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["let"],
        hint: "Hint from Milo: let ready = true; console.log(ready);",
      },
    ],
    "u4-concept": [
      {
        type: "code",
        prompt: "Log the result of 3 + 4.",
        starter: "// add 3 and 4, then log it\n",
        expectLogs: ["7"],
        hint: "Hint from Milo: console.log(3 + 4);",
      },
      {
        type: "code",
        prompt: "Log \"Hi\" + \" \" + \"Milo\" (should print Hi Milo).",
        starter: "",
        expectLogs: ["Hi Milo"],
        hint: "Hint from Milo: console.log(\"Hi\" + \" \" + \"Milo\");",
      },
    ],
    "u4-memory": [
      {
        type: "code",
        prompt: "Log whether 5 === 5 (should be true).",
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["==="],
        hint: "Hint from Milo: console.log(5 === 5);",
      },
      {
        type: "code",
        prompt: "Log whether \"5\" === 5 (should be false).",
        starter: "",
        expectLogs: ["false"],
        mustInclude: ["==="],
        hint: "Hint from Milo: console.log(\"5\" === 5);",
      },
    ],
    "u4-practice": [
      {
        type: "code",
        prompt: "Warm-up: log the result of 8 - 3.",
        starter: "",
        expectLogs: ["5"],
        hint: "Hint from Milo: console.log(8 - 3);",
      },
    ],
    "u4-overview": [
      {
        type: "code",
        prompt: "let a = 2; let b = 3; log a * b.",
        starter: "let a = 2;\nlet b = 3;\n",
        expectLogs: ["6"],
        hint: "Hint from Milo: console.log(a * b);",
      },
    ],
    "u5-concept": [
      {
        type: "code",
        prompt: "If score is 10, log Pass. (Use if)",
        starter: "let score = 10;\n// if score === 10, log Pass\n",
        expectLogs: ["Pass"],
        mustInclude: ["if"],
        hint: "Hint from Milo: if (score === 10) { console.log(\"Pass\"); }",
      },
      {
        type: "code",
        prompt: "hungry is true. If hungry, log Eat.",
        starter: "let hungry = true;\n",
        expectLogs: ["Eat"],
        mustInclude: ["if"],
        hint: "Hint from Milo: if (hungry) { console.log(\"Eat\"); }",
      },
    ],
    "u5-memory": [
      {
        type: "code",
        prompt: "temp = 30. If temp > 25 log Hot, else log Cool.",
        starter: "let temp = 30;\n",
        expectLogs: ["Hot"],
        mustInclude: ["else"],
        hint: "Hint from Milo: if (temp > 25) console.log(\"Hot\"); else console.log(\"Cool\");",
      },
      {
        type: "code",
        prompt: "n = 2. If n === 1 log One, else if n === 2 log Two.",
        starter: "let n = 2;\n",
        expectLogs: ["Two"],
        mustInclude: ["else if"],
        hint: "Hint from Milo: use else if (n === 2) console.log(\"Two\");",
      },
    ],
    "u5-practice": [
      {
        type: "code",
        prompt: "Warm-up: let on = true; if on, log Go.",
        starter: "let on = true;\n",
        expectLogs: ["Go"],
        mustInclude: ["if"],
        hint: "Hint from Milo: if (on) { console.log(\"Go\"); }",
      },
    ],
    "u5-overview": [
      {
        type: "code",
        prompt: "ok = false. If ok log Yes, else log No.",
        starter: "let ok = false;\n",
        expectLogs: ["No"],
        mustInclude: ["else"],
        hint: "Hint from Milo: if (ok) console.log(\"Yes\"); else console.log(\"No\");",
      },
    ],
    "u6-concept": [
      {
        type: "code",
        prompt: "Make an array fruits with \"apple\" and \"mango\", then log fruits[0].",
        starter: "",
        expectLogs: ["apple"],
        mustInclude: ["["],
        hint: "Hint from Milo: let fruits = [\"apple\", \"mango\"]; console.log(fruits[0]);",
      },
      {
        type: "code",
        prompt: "let nums = [1, 2, 3]; log nums.length",
        starter: "let nums = [1, 2, 3];\n",
        expectLogs: ["3"],
        hint: "Hint from Milo: console.log(nums.length);",
      },
    ],
    "u6-memory": [
      {
        type: "code",
        prompt: "Loop i from 0 to 2 and log i each time (0 then 1 then 2).",
        starter: "// for loop that logs 0, 1, 2\n",
        expectLogs: ["0", "1", "2"],
        mustInclude: ["for"],
        hint: "Hint from Milo: for (let i = 0; i < 3; i++) { console.log(i); }",
      },
      {
        type: "code",
        prompt: "let pets = [\"cat\", \"dog\"]; log each pet with a for loop.",
        starter: "let pets = [\"cat\", \"dog\"];\n",
        expectLogs: ["cat", "dog"],
        mustInclude: ["for"],
        hint: "Hint from Milo: for (let i = 0; i < pets.length; i++) console.log(pets[i]);",
      },
    ],
    "u6-practice": [
      {
        type: "code",
        prompt: "Warm-up: let items = [\"a\", \"b\"]; log items[0].",
        starter: "let items = [\"a\", \"b\"];\n",
        expectLogs: ["a"],
      },
    ],
    "u6-overview": [
      {
        type: "code",
        prompt: "let colors = [\"green\", \"lime\"]; log colors[1].",
        starter: "let colors = [\"green\", \"lime\"];\n",
        expectLogs: ["lime"],
      },
    ],
    "u7-concept": [
      {
        type: "code",
        prompt: "Write function greet() that logs Hi, then call greet().",
        starter: "// function greet ... then call it\n",
        expectLogs: ["Hi"],
        mustInclude: ["function"],
        hint: "Hint from Milo: function greet() { console.log(\"Hi\"); } greet();",
      },
      {
        type: "code",
        prompt: "function add(a, b) { return a + b; } log add(2, 3).",
        starter: "function add(a, b) {\n  return a + b;\n}\n",
        expectLogs: ["5"],
        hint: "Hint from Milo: console.log(add(2, 3));",
      },
    ],
    "u7-memory": [
      {
        type: "code",
        prompt: "function shout(word) { console.log(word); } Call it with Hello.",
        starter: "function shout(word) {\n  console.log(word);\n}\n",
        expectLogs: ["Hello"],
        hint: "Hint from Milo: shout(\"Hello\");",
      },
      {
        type: "code",
        prompt: "function double(n) { return n * 2; } log double(4).",
        starter: "function double(n) {\n  return n * 2;\n}\n",
        expectLogs: ["8"],
      },
    ],
    "u7-practice": [
      {
        type: "code",
        prompt: "Warm-up: function ping() { console.log(\"pong\"); } Call ping().",
        starter: "function ping() {\n  console.log(\"pong\");\n}\n",
        expectLogs: ["pong"],
      },
    ],
    "u7-overview": [
      {
        type: "code",
        prompt: "Make sayBye() log Bye and call it.",
        starter: "",
        expectLogs: ["Bye"],
        mustInclude: ["function"],
      },
    ],
    "u8-concept": [
      {
        type: "code",
        prompt: "Pretend document: create title = { textContent: \"\" }. Set textContent to Learn JS and log it.",
        starter:
          "const title = { textContent: \"\" };\n// set textContent, then console.log(title.textContent)\n",
        expectLogs: ["Learn JS"],
        mustInclude: ["textContent"],
        hint: "Hint from Milo: title.textContent = \"Learn JS\"; console.log(title.textContent);",
      },
    ],
    "u8-memory": [
      {
        type: "code",
        prompt: "button = { textContent: \"Go\" }. Change textContent to Clicked and log it.",
        starter: "const button = { textContent: \"Go\" };\n",
        expectLogs: ["Clicked"],
        mustInclude: ["textContent"],
      },
      {
        type: "code",
        prompt: "el = { id: \"hero\" }; log el.id",
        starter: "const el = { id: \"hero\" };\n",
        expectLogs: ["hero"],
      },
    ],
    "u8-practice": [
      {
        type: "code",
        prompt: "Warm-up: label = { textContent: \"\" }; set textContent to Done and log it.",
        starter: "const label = { textContent: \"\" };\n",
        expectLogs: ["Done"],
        mustInclude: ["textContent"],
      },
    ],
    "u8-overview": [
      {
        type: "code",
        prompt: "page = { textContent: \"Hi\" }; log page.textContent",
        starter: "const page = { textContent: \"Hi\" };\n",
        expectLogs: ["Hi"],
      },
    ],
    "u9-concept": [
      {
        type: "code",
        prompt: "Simulate a click handler: call onClick() which logs Clicked.",
        starter:
          "function onClick() {\n  console.log(\"Clicked\");\n}\n// call onClick\n",
        expectLogs: ["Clicked"],
        hint: "Hint from Milo: onClick();",
      },
    ],
    "u9-memory": [
      {
        type: "code",
        prompt: "input = { value: \"Milo\" }; log input.value",
        starter: "const input = { value: \"Milo\" };\n",
        expectLogs: ["Milo"],
      },
      {
        type: "code",
        prompt: "Write handle() that logs Saved, then call handle().",
        starter: "",
        expectLogs: ["Saved"],
        mustInclude: ["function"],
      },
    ],
    "u9-practice": [
      {
        type: "code",
        prompt: "Warm-up: function tap() { console.log(\"Tap\"); } Call tap().",
        starter: "function tap() {\n  console.log(\"Tap\");\n}\n",
        expectLogs: ["Tap"],
      },
    ],
    "u9-overview": [
      {
        type: "code",
        prompt: "value = \"ok\"; if value === \"ok\" log Ready",
        starter: "let value = \"ok\";\n",
        expectLogs: ["Ready"],
        mustInclude: ["if"],
      },
    ],
    "u10-concept": [
      {
        type: "code",
        prompt: "Mini build: let message = \"Ship it\"; log message.",
        starter: "",
        expectLogs: ["Ship it"],
        mustInclude: ["let"],
      },
    ],
    "u10-memory": [
      {
        type: "code",
        prompt: "function wire() { console.log(\"Wired\"); } Call wire().",
        starter: "function wire() {\n  console.log(\"Wired\");\n}\n",
        expectLogs: ["Wired"],
      },
      {
        type: "code",
        prompt: "parts = [\"plan\", \"code\", \"test\"]; log parts[2]",
        starter: "let parts = [\"plan\", \"code\", \"test\"];\n",
        expectLogs: ["test"],
      },
    ],
    "u10-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Built something",
        starter: "",
        expectLogs: ["Built something"],
      },
    ],
    "u10-overview": [
      {
        type: "code",
        prompt: "Final tap: log I can code",
        starter: "",
        expectLogs: ["I can code"],
      },
    ],
    "u11-concept": [
      {
        type: "code",
        prompt: 'Make let user = { name: "Milo" }; then log user.name',
        starter: 'let user = { name: "Milo" };\n',
        expectLogs: ["Milo"],
        mustInclude: ["{"],
        hint: 'Hint from Milo: console.log(user.name);',
      },
      {
        type: "code",
        prompt: "Create { xp: 10 } in a variable stats and log stats.xp",
        starter: "",
        expectLogs: ["10"],
        mustInclude: ["{"],
      },
    ],
    "u11-memory": [
      {
        type: "code",
        prompt: 'pet = { type: "cat" }; log pet.type',
        starter: 'let pet = { type: "cat" };\n',
        expectLogs: ["cat"],
      },
    ],
    "u11-practice": [
      {
        type: "code",
        prompt: 'Warm-up: let o = { ok: true }; log o.ok',
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["{"],
      },
    ],
    "u11-overview": [
      {
        type: "code",
        prompt: 'log the name from { name: "Ada" }',
        starter: 'let hero = { name: "Ada" };\n',
        expectLogs: ["Ada"],
      },
    ],
    "u12-concept": [
      {
        type: "code",
        prompt: 'let box = {}; set box.color = "green"; log box.color',
        starter: "let box = {};\n",
        expectLogs: ["green"],
      },
      {
        type: "code",
        prompt: 'Use brackets: let k = "title"; item[k] should be Learn; log it',
        starter: 'let item = { title: "Learn" };\nlet k = "title";\n',
        expectLogs: ["Learn"],
        mustInclude: ["["],
      },
    ],
    "u12-memory": [
      {
        type: "code",
        prompt: "player.score = 50; log player.score",
        starter: "let player = { score: 0 };\n",
        expectLogs: ["50"],
      },
    ],
    "u12-practice": [
      {
        type: "code",
        prompt: 'Warm-up: obj["n"] = 1; log obj.n',
        starter: "let obj = {};\n",
        expectLogs: ["1"],
      },
    ],
    "u12-overview": [
      {
        type: "code",
        prompt: "Add level: 2 to hero and log hero.level",
        starter: 'let hero = { name: "Milo" };\n',
        expectLogs: ["2"],
      },
    ],
    "u13-concept": [
      {
        type: "code",
        prompt: "dog.speak logs Woof. Call dog.speak()",
        starter:
          'let dog = {\n  speak() {\n    console.log("Woof");\n  },\n};\n',
        expectLogs: ["Woof"],
      },
    ],
    "u13-memory": [
      {
        type: "code",
        prompt: 'bot.hi logs Hi. Call bot.hi()',
        starter:
          'let bot = {\n  hi() {\n    console.log("Hi");\n  },\n};\n',
        expectLogs: ["Hi"],
      },
    ],
    "u13-practice": [
      {
        type: "code",
        prompt: "Warm-up: call ping() on obj that logs Pong",
        starter:
          'let obj = {\n  ping() {\n    console.log("Pong");\n  },\n};\n',
        expectLogs: ["Pong"],
      },
    ],
    "u13-overview": [
      {
        type: "code",
        prompt: "method yell logs Hey; call it",
        starter:
          'const voice = {\n  yell() {\n    console.log("Hey");\n  },\n};\n',
        expectLogs: ["Hey"],
      },
    ],
    "u14-concept": [
      {
        type: "code",
        prompt: 'team.players[0] should log Ada',
        starter: 'let team = { players: ["Ada", "Lin"] };\n',
        expectLogs: ["Ada"],
      },
      {
        type: "code",
        prompt: "users[0].id should log 1",
        starter: "let users = [{ id: 1 }, { id: 2 }];\n",
        expectLogs: ["1"],
      },
    ],
    "u14-memory": [
      {
        type: "code",
        prompt: 'cart.items[1] log mango',
        starter: 'let cart = { items: ["apple", "mango"] };\n',
        expectLogs: ["mango"],
      },
    ],
    "u14-practice": [
      {
        type: "code",
        prompt: "Warm-up: data.list[0] log 9",
        starter: "let data = { list: [9, 8] };\n",
        expectLogs: ["9"],
      },
    ],
    "u14-overview": [
      {
        type: "code",
        prompt: "log book.tags[0] → js",
        starter: 'let book = { tags: ["js", "web"] };\n',
        expectLogs: ["js"],
      },
    ],
    "u15-concept": [
      {
        type: "code",
        prompt: 'const { name } = user; log name',
        starter: 'let user = { name: "Milo", xp: 3 };\n',
        expectLogs: ["Milo"],
        mustInclude: ["{"],
      },
    ],
    "u15-memory": [
      {
        type: "code",
        prompt: "const [first] = nums; log first (should be 10)",
        starter: "let nums = [10, 20];\n",
        expectLogs: ["10"],
        mustInclude: ["["],
      },
    ],
    "u15-practice": [
      {
        type: "code",
        prompt: "Warm-up: unpack xp and log it",
        starter: "let stats = { xp: 42 };\n",
        expectLogs: ["42"],
      },
    ],
    "u15-overview": [
      {
        type: "code",
        prompt: "const [a, b] = [1, 2]; log b",
        starter: "",
        expectLogs: ["2"],
      },
    ],
    "u16-concept": [
      {
        type: "code",
        prompt: 'JSON.stringify({ a: 1 }) should log {"a":1}',
        starter: "let obj = { a: 1 };\n",
        expectLogs: ['{"a":1}'],
        mustInclude: ["JSON.stringify"],
      },
    ],
    "u16-memory": [
      {
        type: "code",
        prompt: 'Parse {"n":5} and log the n value',
        starter: 'let text = \'{"n":5}\';\n',
        expectLogs: ["5"],
        mustInclude: ["JSON.parse"],
      },
    ],
    "u16-practice": [
      {
        type: "code",
        prompt: "Warm-up: stringify { ok: true } and log it",
        starter: "",
        expectLogs: ['{"ok":true}'],
        mustInclude: ["JSON.stringify"],
      },
    ],
    "u16-overview": [
      {
        type: "code",
        prompt: 'parse {"x":2} and log x',
        starter: 'const text = \'{"x":2}\';\n',
        expectLogs: ["2"],
      },
    ],
    "u17-concept": [
      {
        type: "code",
        prompt: "let s = new Set([1,1,2]); log s.size",
        starter: "",
        expectLogs: ["2"],
        mustInclude: ["Set"],
      },
    ],
    "u17-memory": [
      {
        type: "code",
        prompt: 'm.set("xp", 10); log m.get("xp")',
        starter: "let m = new Map();\n",
        expectLogs: ["10"],
        mustInclude: ["Map"],
      },
    ],
    "u17-practice": [
      {
        type: "code",
        prompt: "Warm-up: new Set([3,3]).size log",
        starter: "",
        expectLogs: ["1"],
        mustInclude: ["Set"],
      },
    ],
    "u17-overview": [
      {
        type: "code",
        prompt: "Map get after set hi → there",
        starter: 'let m = new Map();\nm.set("hi", "there");\n',
        expectLogs: ["there"],
      },
    ],
    "u18-concept": [
      {
        type: "code",
        prompt: 'log typeof "hi"',
        starter: "",
        expectLogs: ["string"],
        mustInclude: ["typeof"],
      },
      {
        type: "code",
        prompt: "let x = null; log x === null",
        starter: "let x = null;\n",
        expectLogs: ["true"],
      },
    ],
    "u18-memory": [
      {
        type: "code",
        prompt: "log Array.isArray([1,2])",
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["Array.isArray"],
      },
    ],
    "u18-practice": [
      {
        type: "code",
        prompt: "Warm-up: typeof 3",
        starter: "",
        expectLogs: ["number"],
        mustInclude: ["typeof"],
      },
    ],
    "u18-overview": [
      {
        type: "code",
        prompt: "log typeof undefined",
        starter: "",
        expectLogs: ["undefined"],
      },
    ],
    "u19-concept": [
      {
        type: "code",
        prompt: "Show sharing: a and b same object; set b.n = 2; log a.n",
        starter: "let a = { n: 1 };\nlet b = a;\n",
        expectLogs: ["2"],
      },
    ],
    "u19-memory": [
      {
        type: "code",
        prompt: "Shallow copy with spread; change b.n; log a.n (should stay 1)",
        starter: "let a = { n: 1 };\nlet b = { ...a };\nb.n = 9;\n",
        expectLogs: ["1"],
        mustInclude: ["..."],
      },
    ],
    "u19-practice": [
      {
        type: "code",
        prompt: "Warm-up: copy [1,2] with spread and log copy[0]",
        starter: "let arr = [1, 2];\n",
        expectLogs: ["1"],
        mustInclude: ["..."],
      },
    ],
    "u19-overview": [
      {
        type: "code",
        prompt: "let b = { ...{ x: 5 } }; log b.x",
        starter: "",
        expectLogs: ["5"],
      },
    ],
    "u20-concept": [
      {
        type: "code",
        prompt: "cart.add pushes; add 'book'; log cart.items[0]",
        starter:
          "let cart = {\n  items: [],\n  add(item) {\n    this.items.push(item);\n  },\n};\n",
        expectLogs: ["book"],
      },
    ],
    "u20-memory": [
      {
        type: "code",
        prompt: "player.heal adds 5 hp; start 10; heal; log player.hp",
        starter:
          "let player = {\n  hp: 10,\n  heal() {\n    this.hp += 5;\n  },\n};\n",
        expectLogs: ["15"],
      },
    ],
    "u20-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Objects done",
        starter: "",
        expectLogs: ["Objects done"],
      },
    ],
    "u20-overview": [
      {
        type: "code",
        prompt: 'Mini model: lib = { title: "JS" }; log lib.title',
        starter: "",
        expectLogs: ["JS"],
        mustInclude: ["{"],
      },
    ],
    "u21-concept": [
      {
        type: "code",
        prompt: "Simulate document.body as an object with tagName BODY; log tagName",
        starter: 'const document = { body: { tagName: "BODY" } };\n',
        expectLogs: ["BODY"],
      },
    ],
    "u21-memory": [
      {
        type: "code",
        prompt: 'page = { title: "Learn JS" }; log page.title',
        starter: "",
        expectLogs: ["Learn JS"],
        mustInclude: ["{"],
      },
    ],
    "u21-practice": [
      {
        type: "code",
        prompt: "Warm-up: log DOM tree",
        starter: "",
        expectLogs: ["DOM tree"],
      },
    ],
    "u21-overview": [
      {
        type: "code",
        prompt: 'log document.kind from { kind: "tree" }',
        starter: 'const document = { kind: "tree" };\n',
        expectLogs: ["tree"],
      },
    ],
    "u22-concept": [
      {
        type: "code",
        prompt: "Fake querySelector: find #title in a map of elements; log its text",
        starter:
          'const nodes = { "#title": { text: "Hello" } };\nfunction querySelector(sel) { return nodes[sel] || null; }\n',
        expectLogs: ["Hello"],
      },
    ],
    "u22-memory": [
      {
        type: "code",
        prompt: "If querySelector returns null, log missing; else log ok",
        starter:
          "function querySelector() { return null; }\nconst el = querySelector();\n",
        expectLogs: ["missing"],
      },
    ],
    "u22-practice": [
      {
        type: "code",
        prompt: 'Warm-up: log #app as a selector string',
        starter: "",
        expectLogs: ["#app"],
      },
    ],
    "u22-overview": [
      {
        type: "code",
        prompt: 'nodes[".card"].id log card1',
        starter: 'const nodes = { ".card": { id: "card1" } };\n',
        expectLogs: ["card1"],
      },
    ],
    "u23-concept": [
      {
        type: "code",
        prompt: 'el.textContent = "Hi"; log el.textContent',
        starter: "const el = { textContent: \"\" };\n",
        expectLogs: ["Hi"],
        mustInclude: ["textContent"],
      },
      {
        type: "code",
        prompt: 'Prefer safe text: set textContent to <b>x</b> and log it (tags stay visible as text)',
        starter: "const el = { textContent: \"\" };\n",
        expectLogs: ["<b>x</b>"],
        mustInclude: ["textContent"],
      },
    ],
    "u23-memory": [
      {
        type: "code",
        prompt: 'Clear with textContent = ""; log empty string length 0',
        starter: 'const el = { textContent: "bye" };\nel.textContent = "";\n',
        expectLogs: ["0"],
      },
    ],
    "u23-practice": [
      {
        type: "code",
        prompt: "Warm-up: set textContent to Safe and log it",
        starter: "const el = { textContent: \"\" };\n",
        expectLogs: ["Safe"],
        mustInclude: ["textContent"],
      },
    ],
    "u23-overview": [
      {
        type: "code",
        prompt: 'el.innerHTML holds "<i>x</i>"; log el.innerHTML',
        starter: 'const el = { innerHTML: "<i>x</i>" };\n',
        expectLogs: ["<i>x</i>"],
      },
    ],
    "u24-concept": [
      {
        type: "code",
        prompt: "Fake classList: add open to a Set of classes; log has open true",
        starter:
          "const classList = new Set();\nfunction add(c) { classList.add(c); }\nfunction contains(c) { return classList.has(c); }\n",
        expectLogs: ["true"],
      },
    ],
    "u24-memory": [
      {
        type: "code",
        prompt: "el.style.color = red; log el.style.color",
        starter: "const el = { style: { color: \"\" } };\n",
        expectLogs: ["red"],
        mustInclude: ["style"],
      },
    ],
    "u24-practice": [
      {
        type: "code",
        prompt: "Warm-up: log active",
        starter: "",
        expectLogs: ["active"],
      },
    ],
    "u24-overview": [
      {
        type: "code",
        prompt: 'style.fontSize = "16px"; log it',
        starter: "const style = { fontSize: \"\" };\n",
        expectLogs: ["16px"],
      },
    ],
    "u25-concept": [
      {
        type: "code",
        prompt: "Simulate createElement + append: push a child into parent.children; log length",
        starter:
          'function createElement(tag) { return { tagName: tag }; }\nconst parent = { children: [] };\nfunction append(child) { parent.children.push(child); }\n',
        expectLogs: ["1"],
      },
    ],
    "u25-memory": [
      {
        type: "code",
        prompt: 'Create li with textContent Item; log textContent',
        starter:
          'const li = { textContent: "" };\nli.textContent = "Item";\n',
        expectLogs: ["Item"],
      },
    ],
    "u25-practice": [
      {
        type: "code",
        prompt: "Warm-up: log createElement",
        starter: "",
        expectLogs: ["createElement"],
      },
    ],
    "u25-overview": [
      {
        type: "code",
        prompt: "parent.children[0].tag log button",
        starter:
          'const parent = { children: [{ tag: "button" }] };\n',
        expectLogs: ["button"],
      },
    ],
    "u26-concept": [
      {
        type: "code",
        prompt: 'input.value = "Ada"; log input.value',
        starter: 'const input = { value: "" };\n',
        expectLogs: ["Ada"],
        mustInclude: ["value"],
      },
    ],
    "u26-memory": [
      {
        type: "code",
        prompt: 'Trim "  hi  " via value.trim(); log result',
        starter: 'const input = { value: "  hi  " };\n',
        expectLogs: ["hi"],
        mustInclude: ["trim"],
      },
    ],
    "u26-practice": [
      {
        type: "code",
        prompt: "Warm-up: checkbox.checked log true",
        starter: "const checkbox = { checked: true };\n",
        expectLogs: ["true"],
      },
    ],
    "u26-overview": [
      {
        type: "code",
        prompt: 'Clear field: value = ""; log value length 0',
        starter: 'const input = { value: "x" };\ninput.value = "";\n',
        expectLogs: ["0"],
      },
    ],
    "u27-concept": [
      {
        type: "code",
        prompt: "Simulate click: call the click handler that logs Clicked",
        starter:
          'function onClick() {\n  console.log("Clicked");\n}\nconst btn = { addEventListener(type, fn) { if (type === "click") fn(); } };\n',
        expectLogs: ["Clicked"],
      },
    ],
    "u27-memory": [
      {
        type: "code",
        prompt: "Handler save logs Saved; call save()",
        starter: "",
        expectLogs: ["Saved"],
        mustInclude: ["function"],
      },
    ],
    "u27-practice": [
      {
        type: "code",
        prompt: "Warm-up: log click",
        starter: "",
        expectLogs: ["click"],
      },
    ],
    "u27-overview": [
      {
        type: "code",
        prompt: "onTap logs Go; call onTap()",
        starter:
          'function onTap() {\n  console.log("Go");\n}\n',
        expectLogs: ["Go"],
      },
    ],
    "u28-concept": [
      {
        type: "code",
        prompt: "Fake submit: handler calls preventDefault then logs OK",
        starter:
          'function onSubmit(e) {\n  e.preventDefault();\n  console.log("OK");\n}\nconst e = { preventDefault() {} };\n',
        expectLogs: ["OK"],
      },
    ],
    "u28-memory": [
      {
        type: "code",
        prompt: 'On input event idea: log the value "ab"',
        starter: 'const input = { value: "ab" };\n',
        expectLogs: ["ab"],
      },
    ],
    "u28-practice": [
      {
        type: "code",
        prompt: "Warm-up: log submit",
        starter: "",
        expectLogs: ["submit"],
      },
    ],
    "u28-overview": [
      {
        type: "code",
        prompt: "preventDefault then log stopped",
        starter:
          "const e = {\n  preventDefault() {\n    console.log(\"stopped\");\n  },\n};\n",
        expectLogs: ["stopped"],
      },
    ],
    "u29-concept": [
      {
        type: "code",
        prompt: "event.target.id is btn; log it",
        starter: 'const event = { target: { id: "btn" }, currentTarget: { id: "list" } };\n',
        expectLogs: ["btn"],
      },
    ],
    "u29-memory": [
      {
        type: "code",
        prompt: "If target.matches button idea: tag===BUTTON → log yes",
        starter: 'const target = { tag: "BUTTON" };\n',
        expectLogs: ["yes"],
      },
    ],
    "u29-practice": [
      {
        type: "code",
        prompt: "Warm-up: log bubble",
        starter: "",
        expectLogs: ["bubble"],
      },
    ],
    "u29-overview": [
      {
        type: "code",
        prompt: "currentTarget.id log list",
        starter: 'const event = { currentTarget: { id: "list" } };\n',
        expectLogs: ["list"],
      },
    ],
    "u30-concept": [
      {
        type: "code",
        prompt: "Mini UI: click sets textContent to Done; log it",
        starter:
          'const el = { textContent: "Ready" };\nfunction onClick() {\n  el.textContent = "Done";\n}\nonClick();\n',
        expectLogs: ["Done"],
      },
    ],
    "u30-memory": [
      {
        type: "code",
        prompt: "Counter: n starts 0; click adds 1; log n",
        starter: "let n = 0;\nfunction click() {\n  n += 1;\n}\nclick();\n",
        expectLogs: ["1"],
      },
    ],
    "u30-practice": [
      {
        type: "code",
        prompt: "Warm-up: log DOM done",
        starter: "",
        expectLogs: ["DOM done"],
      },
    ],
    "u30-overview": [
      {
        type: "code",
        prompt: 'Show/hide idea: open=true; log open',
        starter: "let open = true;\n",
        expectLogs: ["true"],
      },
    ],
    "u31-concept": [
      {
        type: "code",
        prompt: "function add(a,b){return a+b;} log add(2,3)",
        starter:
          "function add(a, b) {\n  return a + b;\n}\n",
        expectLogs: ["5"],
        mustInclude: ["return"],
      },
      {
        type: "code",
        prompt: 'greet(name) returns Hi Name; log greet("Milo")',
        starter:
          'function greet(name) {\n  return "Hi " + name;\n}\n',
        expectLogs: ["Hi Milo"],
      },
    ],
    "u31-memory": [
      {
        type: "code",
        prompt: "If n < 0 return 0 else return n; test with -3 → 0",
        starter:
          "function clamp(n) {\n  // early return when negative\n}\n",
        expectLogs: ["0"],
        mustInclude: ["return"],
      },
    ],
    "u31-practice": [
      {
        type: "code",
        prompt: "Warm-up: function two(){return 2;} log two()",
        starter: "",
        expectLogs: ["2"],
        mustInclude: ["return"],
      },
    ],
    "u31-overview": [
      {
        type: "code",
        prompt: "triple(n) return n*3; log triple(4)",
        starter: "",
        expectLogs: ["12"],
      },
    ],
    "u32-concept": [
      {
        type: "code",
        prompt: "Inside function, let x=5; return x; log the call result",
        starter:
          "function localX() {\n  let x = 5;\n  return x;\n}\n",
        expectLogs: ["5"],
        mustInclude: ["let"],
      },
    ],
    "u32-memory": [
      {
        type: "code",
        prompt: "Outer let n=1; function read(){return n;} log read()",
        starter: "let n = 1;\nfunction read() {\n  return n;\n}\n",
        expectLogs: ["1"],
      },
    ],
    "u32-practice": [
      {
        type: "code",
        prompt: "Warm-up: log scope",
        starter: "",
        expectLogs: ["scope"],
      },
    ],
    "u32-overview": [
      {
        type: "code",
        prompt: "function f(){ let a=7; return a;} log f()",
        starter: "",
        expectLogs: ["7"],
      },
    ],
    "u33-concept": [
      {
        type: "code",
        prompt: "const double = (n) => n * 2; log double(6)",
        starter: "",
        expectLogs: ["12"],
        mustInclude: ["=>"],
      },
    ],
    "u33-memory": [
      {
        type: "code",
        prompt: "Arrow with block body returning n+1 for 4 → 5",
        starter: "const inc = (n) => {\n  // return n + 1\n};\n",
        expectLogs: ["5"],
        mustInclude: ["return"],
      },
    ],
    "u33-practice": [
      {
        type: "code",
        prompt: "Warm-up: const hi = () => \"Hi\"; log hi()",
        starter: "",
        expectLogs: ["Hi"],
        mustInclude: ["=>"],
      },
    ],
    "u33-overview": [
      {
        type: "code",
        prompt: "const add = (a,b) => a+b; log add(1,2)",
        starter: "",
        expectLogs: ["3"],
        mustInclude: ["=>"],
      },
    ],
    "u34-concept": [
      {
        type: "code",
        prompt: "run(fn) calls fn(); pass a fn that logs Go",
        starter:
          "function run(fn) {\n  fn();\n}\n",
        expectLogs: ["Go"],
      },
    ],
    "u34-memory": [
      {
        type: "code",
        prompt: "twice(fn) calls fn twice; log Hi twice",
        starter:
          "function twice(fn) {\n  fn();\n  fn();\n}\n",
        expectLogs: ["Hi", "Hi"],
      },
    ],
    "u34-practice": [
      {
        type: "code",
        prompt: "Warm-up: log callback",
        starter: "",
        expectLogs: ["callback"],
      },
    ],
    "u34-overview": [
      {
        type: "code",
        prompt: "callLater(fn){fn();} with log Now",
        starter:
          "function callLater(fn) {\n  fn();\n}\n",
        expectLogs: ["Now"],
      },
    ],
    "u35-concept": [
      {
        type: "code",
        prompt: "[1,2,3].map(n => n*2); log the array (as 2 4 6 lines or join)",
        starter: "const nums = [1, 2, 3];\n",
        expectLogs: ["2", "4", "6"],
        mustInclude: ["map"],
      },
    ],
    "u35-memory": [
      {
        type: "code",
        prompt: '["a","hi"].map(s => s.length); log each length',
        starter: 'const words = ["a", "hi"];\n',
        expectLogs: ["1", "2"],
        mustInclude: ["map"],
      },
    ],
    "u35-practice": [
      {
        type: "code",
        prompt: "Warm-up: [2,2].map(n=>n+1) log each",
        starter: "",
        expectLogs: ["3", "3"],
        mustInclude: ["map"],
      },
    ],
    "u35-overview": [
      {
        type: "code",
        prompt: "[10].map(n=>n/2); log 5",
        starter: "",
        expectLogs: ["5"],
        mustInclude: ["map"],
      },
    ],
    "u36-concept": [
      {
        type: "code",
        prompt: "[1,2,3,4].filter(n=>n>2); log each kept",
        starter: "const nums = [1, 2, 3, 4];\n",
        expectLogs: ["3", "4"],
        mustInclude: ["filter"],
      },
    ],
    "u36-memory": [
      {
        type: "code",
        prompt: "[5,1,9].find(n=>n>6); log the found value",
        starter: "const nums = [5, 1, 9];\n",
        expectLogs: ["9"],
        mustInclude: ["find"],
      },
    ],
    "u36-practice": [
      {
        type: "code",
        prompt: "Warm-up: filter evens from [1,2,3,4]; log them",
        starter: "",
        expectLogs: ["2", "4"],
        mustInclude: ["filter"],
      },
    ],
    "u36-overview": [
      {
        type: "code",
        prompt: 'find "b" in ["a","b"]; log it',
        starter: 'const letters = ["a", "b"];\n',
        expectLogs: ["b"],
        mustInclude: ["find"],
      },
    ],
    "u37-concept": [
      {
        type: "code",
        prompt: "[1,2,3].reduce((s,n)=>s+n,0); log sum",
        starter: "const nums = [1, 2, 3];\n",
        expectLogs: ["6"],
        mustInclude: ["reduce"],
      },
    ],
    "u37-memory": [
      {
        type: "code",
        prompt: "[2,2,2].reduce((s,n)=>s+n,0); log 6",
        starter: "",
        expectLogs: ["6"],
        mustInclude: ["reduce"],
      },
    ],
    "u37-practice": [
      {
        type: "code",
        prompt: "Warm-up: reduce [5,5] to 10",
        starter: "",
        expectLogs: ["10"],
        mustInclude: ["reduce"],
      },
    ],
    "u37-overview": [
      {
        type: "code",
        prompt: "[4].reduce((s,n)=>s+n,10); log 14",
        starter: "",
        expectLogs: ["14"],
        mustInclude: ["reduce"],
      },
    ],
    "u38-concept": [
      {
        type: "code",
        prompt: "for...of over [1,2] logging each",
        starter: "const nums = [1, 2];\n",
        expectLogs: ["1", "2"],
        mustInclude: ["for"],
      },
    ],
    "u38-memory": [
      {
        type: "code",
        prompt: "[3,3].forEach(n => console.log(n))",
        starter: "",
        expectLogs: ["3", "3"],
        mustInclude: ["forEach"],
      },
    ],
    "u38-practice": [
      {
        type: "code",
        prompt: "Warm-up: for...of log a then b",
        starter: 'const letters = ["a", "b"];\n',
        expectLogs: ["a", "b"],
        mustInclude: ["of"],
      },
    ],
    "u38-overview": [
      {
        type: "code",
        prompt: "forEach log Hi once on [0]",
        starter: "[0].forEach(() => console.log(\"Hi\"));\n",
        expectLogs: ["Hi"],
      },
    ],
    "u39-concept": [
      {
        type: "code",
        prompt: "makeCounter returns fn; call it twice; log second result 2",
        starter:
          "function makeCounter() {\n  let n = 0;\n  return function () {\n    n += 1;\n    return n;\n  };\n}\nconst c = makeCounter();\nc();\n",
        expectLogs: ["2"],
      },
    ],
    "u39-memory": [
      {
        type: "code",
        prompt: 'makeGreeter("Milo") returns fn that logs Hi Milo',
        starter:
          'function makeGreeter(name) {\n  return function () {\n    console.log("Hi " + name);\n  };\n}\n',
        expectLogs: ["Hi Milo"],
      },
    ],
    "u39-practice": [
      {
        type: "code",
        prompt: "Warm-up: log closure",
        starter: "",
        expectLogs: ["closure"],
      },
    ],
    "u39-overview": [
      {
        type: "code",
        prompt: "outer let x=9; inner returns x; log it",
        starter:
          "function outer() {\n  let x = 9;\n  return function () {\n    return x;\n  };\n}\n",
        expectLogs: ["9"],
      },
    ],
    "u40-concept": [
      {
        type: "code",
        prompt: "filter >2 then map *10 from [1,3,4]; log 30 and 40",
        starter: "const nums = [1, 3, 4];\n",
        expectLogs: ["30", "40"],
        mustInclude: ["filter"],
      },
    ],
    "u40-memory": [
      {
        type: "code",
        prompt: 'names from [{ok:true,name:"A"},{ok:false,name:"B"}] filter ok map name; log A',
        starter:
          'const users = [\n  { ok: true, name: "A" },\n  { ok: false, name: "B" },\n];\n',
        expectLogs: ["A"],
        mustInclude: ["filter"],
      },
    ],
    "u40-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Functions done",
        starter: "",
        expectLogs: ["Functions done"],
      },
    ],
    "u40-overview": [
      {
        type: "code",
        prompt: "[2,4].map(n=>n/2); log each",
        starter: "",
        expectLogs: ["1", "2"],
        mustInclude: ["map"],
      },
    ],
    "u41-concept": [
      {
        type: "code",
        prompt: 'function User(name){ this.name = name; } log new User("Milo").name',
        starter:
          "function User(name) {\n  this.name = name;\n}\n",
        expectLogs: ["Milo"],
        mustInclude: ["new"],
      },
    ],
    "u41-memory": [
      {
        type: "code",
        prompt: 'new Pet("cat").type log cat',
        starter:
          "function Pet(type) {\n  this.type = type;\n}\n",
        expectLogs: ["cat"],
        mustInclude: ["new"],
      },
    ],
    "u41-practice": [
      {
        type: "code",
        prompt: "Warm-up: log constructor",
        starter: "",
        expectLogs: ["constructor"],
      },
    ],
    "u41-overview": [
      {
        type: "code",
        prompt: 'new Point(1).x log 1',
        starter: "function Point(x) {\n  this.x = x;\n}\n",
        expectLogs: ["1"],
        mustInclude: ["new"],
      },
    ],
    "u42-concept": [
      {
        type: "code",
        prompt: 'class Player { constructor(name){ this.name = name; } } log new Player("Ada").name',
        starter: "",
        expectLogs: ["Ada"],
        mustInclude: ["class"],
      },
    ],
    "u42-memory": [
      {
        type: "code",
        prompt: "class Box{ constructor(){ this.n = 0; } } log new Box().n",
        starter: "",
        expectLogs: ["0"],
        mustInclude: ["constructor"],
      },
    ],
    "u42-practice": [
      {
        type: "code",
        prompt: "Warm-up: log class",
        starter: "",
        expectLogs: ["class"],
      },
    ],
    "u42-overview": [
      {
        type: "code",
        prompt: 'class Dog{ constructor(n){ this.n = n; } } log new Dog("Rex").n',
        starter: "",
        expectLogs: ["Rex"],
        mustInclude: ["class"],
      },
    ],
    "u43-concept": [
      {
        type: "code",
        prompt: "class Counter{ constructor(){ this.n=0; } bump(){ this.n++; } } bump twice; log n",
        starter:
          "class Counter {\n  constructor() {\n    this.n = 0;\n  }\n  bump() {\n    this.n += 1;\n  }\n}\nconst c = new Counter();\n",
        expectLogs: ["2"],
        mustInclude: ["this"],
      },
    ],
    "u43-memory": [
      {
        type: "code",
        prompt: 'class Hi{ constructor(name){ this.name=name; } greet(){ return "Hi "+this.name; } } log greet',
        starter:
          'class Hi {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return "Hi " + this.name;\n  }\n}\n',
        expectLogs: ["Hi Milo"],
      },
    ],
    "u43-practice": [
      {
        type: "code",
        prompt: "Warm-up: log this",
        starter: "",
        expectLogs: ["this"],
      },
    ],
    "u43-overview": [
      {
        type: "code",
        prompt: "class A{ constructor(){ this.ok=true; } } log new A().ok",
        starter: "",
        expectLogs: ["true"],
      },
    ],
    "u44-concept": [
      {
        type: "code",
        prompt: 'class Dog{ bark(){ console.log("Woof"); } } new Dog().bark()',
        starter: "",
        expectLogs: ["Woof"],
        mustInclude: ["class"],
      },
    ],
    "u44-memory": [
      {
        type: "code",
        prompt: 'class T{ tag(){ return "ok"; } } log new T().tag()',
        starter: "",
        expectLogs: ["ok"],
      },
    ],
    "u44-practice": [
      {
        type: "code",
        prompt: "Warm-up: log method",
        starter: "",
        expectLogs: ["method"],
      },
    ],
    "u44-overview": [
      {
        type: "code",
        prompt: "Two instances share bark idea: log Woof from d.bark()",
        starter:
          'class Dog {\n  bark() {\n    console.log("Woof");\n  }\n}\nconst d = new Dog();\n',
        expectLogs: ["Woof"],
      },
    ],
    "u45-concept": [
      {
        type: "code",
        prompt: 'class P{ constructor(n){ this._n=n; } get name(){ return this._n; } } log new P("Zed").name',
        starter: "",
        expectLogs: ["Zed"],
        mustInclude: ["get"],
      },
    ],
    "u45-memory": [
      {
        type: "code",
        prompt: "class H{ constructor(){ this._hp=0; } set hp(v){ this._hp=v; } get hp(){ return this._hp; } } set 5; log hp",
        starter:
          "class H {\n  constructor() {\n    this._hp = 0;\n  }\n  set hp(v) {\n    this._hp = v;\n  }\n  get hp() {\n    return this._hp;\n  }\n}\nconst h = new H();\n",
        expectLogs: ["5"],
        mustInclude: ["set"],
      },
    ],
    "u45-practice": [
      {
        type: "code",
        prompt: "Warm-up: log getter",
        starter: "",
        expectLogs: ["getter"],
      },
    ],
    "u45-overview": [
      {
        type: "code",
        prompt: 'get label returns HI; log it',
        starter:
          'class L {\n  get label() {\n    return "HI";\n  }\n}\n',
        expectLogs: ["HI"],
        mustInclude: ["get"],
      },
    ],
    "u46-concept": [
      {
        type: "code",
        prompt: 'class Animal{ constructor(n){ this.n=n; } } class Dog extends Animal{} log new Dog("Rex").n',
        starter: "",
        expectLogs: ["Rex"],
        mustInclude: ["extends"],
      },
    ],
    "u46-memory": [
      {
        type: "code",
        prompt: "Child ctor calls super(1); log this.x from child",
        starter:
          "class A {\n  constructor(x) {\n    this.x = x;\n  }\n}\nclass B extends A {\n  constructor() {\n    super(1);\n  }\n}\n",
        expectLogs: ["1"],
        mustInclude: ["super"],
      },
    ],
    "u46-practice": [
      {
        type: "code",
        prompt: "Warm-up: log extends",
        starter: "",
        expectLogs: ["extends"],
      },
    ],
    "u46-overview": [
      {
        type: "code",
        prompt: "class C extends A with A having hi() log Hi; call on C",
        starter:
          'class A {\n  hi() {\n    console.log("Hi");\n  }\n}\nclass C extends A {}\n',
        expectLogs: ["Hi"],
        mustInclude: ["extends"],
      },
    ],
    "u47-concept": [
      {
        type: "code",
        prompt: "class Mathy{ static twin(n){ return n*2; } } log Mathy.twin(4)",
        starter: "",
        expectLogs: ["8"],
        mustInclude: ["static"],
      },
    ],
    "u47-memory": [
      {
        type: "code",
        prompt: 'static id() returns "x1"; log Util.id()',
        starter:
          'class Util {\n  static id() {\n    return "x1";\n  }\n}\n',
        expectLogs: ["x1"],
        mustInclude: ["static"],
      },
    ],
    "u47-practice": [
      {
        type: "code",
        prompt: "Warm-up: log static",
        starter: "",
        expectLogs: ["static"],
      },
    ],
    "u47-overview": [
      {
        type: "code",
        prompt: "static ok() returns true; log it",
        starter:
          "class K {\n  static ok() {\n    return true;\n  }\n}\n",
        expectLogs: ["true"],
        mustInclude: ["static"],
      },
    ],
    "u48-concept": [
      {
        type: "code",
        prompt: "class S{ #n=3; value(){ return this.#n; } } log new S().value()",
        starter: "",
        expectLogs: ["3"],
        mustInclude: ["#"],
      },
    ],
    "u48-memory": [
      {
        type: "code",
        prompt: "Private #x starts 0; bump() adds 1; bump; log value()",
        starter:
          "class C {\n  #x = 0;\n  bump() {\n    this.#x += 1;\n  }\n  value() {\n    return this.#x;\n  }\n}\nconst c = new C();\n",
        expectLogs: ["1"],
        mustInclude: ["#"],
      },
    ],
    "u48-practice": [
      {
        type: "code",
        prompt: "Warm-up: log private",
        starter: "",
        expectLogs: ["private"],
      },
    ],
    "u48-overview": [
      {
        type: "code",
        prompt: "class B{ #v=9; getV(){ return this.#v; } } log getV()",
        starter: "",
        expectLogs: ["9"],
        mustInclude: ["#"],
      },
    ],
    "u49-concept": [
      {
        type: "code",
        prompt: "Plain object config {mode:\"dev\"}; log mode — classes not required",
        starter: "",
        expectLogs: ["dev"],
        mustInclude: ["{"],
      },
    ],
    "u49-memory": [
      {
        type: "code",
        prompt: "class when behavior: Counter with bump; log 1",
        starter:
          "class Counter {\n  constructor() {\n    this.n = 0;\n  }\n  bump() {\n    this.n += 1;\n  }\n}\nconst c = new Counter();\nc.bump();\n",
        expectLogs: ["1"],
        mustInclude: ["class"],
      },
    ],
    "u49-practice": [
      {
        type: "code",
        prompt: "Warm-up: log composition",
        starter: "",
        expectLogs: ["composition"],
      },
    ],
    "u49-overview": [
      {
        type: "code",
        prompt: 'Prefer object for { title: "JS" }; log title',
        starter: "",
        expectLogs: ["JS"],
      },
    ],
    "u50-concept": [
      {
        type: "code",
        prompt: "TodoList add pushes; add hi; log items[0]",
        starter:
          'class TodoList {\n  constructor() {\n    this.items = [];\n  }\n  add(t) {\n    this.items.push(t);\n  }\n}\nconst list = new TodoList();\n',
        expectLogs: ["hi"],
        mustInclude: ["class"],
      },
    ],
    "u50-memory": [
      {
        type: "code",
        prompt: "Cart total: items prices sum via method; log 6",
        starter:
          "class Cart {\n  constructor() {\n    this.items = [{ price: 2 }, { price: 4 }];\n  }\n  total() {\n    return this.items.reduce((s, i) => s + i.price, 0);\n  }\n}\n",
        expectLogs: ["6"],
      },
    ],
    "u50-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Classes done",
        starter: "",
        expectLogs: ["Classes done"],
      },
    ],
    "u50-overview": [
      {
        type: "code",
        prompt: 'new Player("Kai").name log Kai',
        starter:
          'class Player {\n  constructor(name) {\n    this.name = name;\n  }\n}\n',
        expectLogs: ["Kai"],
        mustInclude: ["new"],
      },
    ],
    "u51-concept": [
      {
        type: "code",
        prompt: 'Log "now" then "also now" — sync order',
        starter: "",
        expectLogs: ["now", "also now"],
      },
    ],
    "u51-memory": [
      {
        type: "code",
        prompt: 'Log A, schedule setTimeout 0 logging B, log C — expect A C B',
        starter: "",
        expectLogs: ["A", "C", "B"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u51-practice": [
      {
        type: "code",
        prompt: "Warm-up: log async",
        starter: "",
        expectLogs: ["async"],
      },
    ],
    "u51-overview": [
      {
        type: "code",
        prompt: 'Log "sync" then "done"',
        starter: "",
        expectLogs: ["sync", "done"],
      },
    ],
    "u52-concept": [
      {
        type: "code",
        prompt: 'setTimeout 0: log "tick"',
        starter: "",
        expectLogs: ["tick"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u52-memory": [
      {
        type: "code",
        prompt: "setTimeout 0 log later; also log go first — order go then later",
        starter: "",
        expectLogs: ["go", "later"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u52-practice": [
      {
        type: "code",
        prompt: "Warm-up: log setTimeout",
        starter: "",
        expectLogs: ["setTimeout"],
      },
    ],
    "u52-overview": [
      {
        type: "code",
        prompt: 'After timeout 0, log "ok"',
        starter: "",
        expectLogs: ["ok"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u53-concept": [
      {
        type: "code",
        prompt: 'Promise.resolve("hi").then(log it)',
        starter: "",
        expectLogs: ["hi"],
        mustInclude: ["Promise"],
      },
    ],
    "u53-memory": [
      {
        type: "code",
        prompt: "Promise.resolve(2).then(n => n*3).then(log)",
        starter: "",
        expectLogs: ["6"],
        mustInclude: ["then"],
      },
    ],
    "u53-practice": [
      {
        type: "code",
        prompt: "Warm-up: log then",
        starter: "",
        expectLogs: ["then"],
      },
    ],
    "u53-overview": [
      {
        type: "code",
        prompt: 'Promise.resolve("ok").then(console.log)',
        starter: "",
        expectLogs: ["ok"],
        mustInclude: ["then"],
      },
    ],
    "u54-concept": [
      {
        type: "code",
        prompt: 'async function; await Promise.resolve(5); log 5',
        starter: "",
        expectLogs: ["5"],
        mustInclude: ["await"],
      },
    ],
    "u54-memory": [
      {
        type: "code",
        prompt: 'await Promise.resolve("ready"); log ready',
        starter: "",
        expectLogs: ["ready"],
        mustInclude: ["async"],
      },
    ],
    "u54-practice": [
      {
        type: "code",
        prompt: "Warm-up: log await",
        starter: "",
        expectLogs: ["await"],
      },
    ],
    "u54-overview": [
      {
        type: "code",
        prompt: "async IIFE or async fn: await 1 via Promise.resolve; log 1",
        starter: "",
        expectLogs: ["1"],
        mustInclude: ["await"],
      },
    ],
    "u55-concept": [
      {
        type: "code",
        prompt: "Mock Response: const res = { ok: true, status: 200 }; log res.ok",
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["ok"],
      },
    ],
    "u55-memory": [
      {
        type: "code",
        prompt: 'Simulate fetch result: log "GET" as method default idea',
        starter: 'const options = { method: "GET" };\n',
        expectLogs: ["GET"],
        mustInclude: ["method"],
      },
    ],
    "u55-practice": [
      {
        type: "code",
        prompt: "Warm-up: log fetch",
        starter: "",
        expectLogs: ["fetch"],
      },
    ],
    "u55-overview": [
      {
        type: "code",
        prompt: "res.ok false → log error; else log ok — use ok true",
        starter: "const res = { ok: true };\n",
        expectLogs: ["ok"],
      },
    ],
    "u56-concept": [
      {
        type: "code",
        prompt: 'JSON.parse(\'{"n":3}\'); log n',
        starter: "",
        expectLogs: ["3"],
        mustInclude: ["JSON.parse"],
      },
    ],
    "u56-memory": [
      {
        type: "code",
        prompt: 'JSON.stringify({a:1}); log the string',
        starter: "",
        expectLogs: ['{"a":1}'],
        mustInclude: ["JSON.stringify"],
      },
    ],
    "u56-practice": [
      {
        type: "code",
        prompt: "Warm-up: log JSON",
        starter: "",
        expectLogs: ["JSON"],
      },
    ],
    "u56-overview": [
      {
        type: "code",
        prompt: "Fake res.json: async () => ({title:\"Hi\"}); await and log title",
        starter:
          "const res = {\n  async json() {\n    return { title: \"Hi\" };\n  },\n};\n",
        expectLogs: ["Hi"],
        mustInclude: ["json"],
      },
    ],
    "u57-concept": [
      {
        type: "code",
        prompt: 'try { throw new Error("nope"); } catch { log "handled" }',
        starter: "",
        expectLogs: ["handled"],
        mustInclude: ["catch"],
      },
    ],
    "u57-memory": [
      {
        type: "code",
        prompt: "try/finally: log work then done (finally)",
        starter:
          'try {\n  console.log("work");\n} finally {\n  console.log("done");\n}\n',
        expectLogs: ["work", "done"],
        mustInclude: ["finally"],
      },
    ],
    "u57-practice": [
      {
        type: "code",
        prompt: "Warm-up: log try",
        starter: "",
        expectLogs: ["try"],
      },
    ],
    "u57-overview": [
      {
        type: "code",
        prompt: 'await Promise.reject("x") in try/catch; log fail',
        starter: "",
        expectLogs: ["fail"],
        mustInclude: ["catch"],
      },
    ],
    "u58-concept": [
      {
        type: "code",
        prompt: 'store = {}; store.theme = "dark"; log theme (localStorage idea)',
        starter: "const store = {};\n",
        expectLogs: ["dark"],
      },
    ],
    "u58-memory": [
      {
        type: "code",
        prompt: "JSON.stringify prefs; parse back; log name",
        starter: 'const prefs = { name: "Milo" };\n',
        expectLogs: ["Milo"],
        mustInclude: ["JSON"],
      },
    ],
    "u58-practice": [
      {
        type: "code",
        prompt: "Warm-up: log setItem",
        starter: "",
        expectLogs: ["setItem"],
      },
    ],
    "u58-overview": [
      {
        type: "code",
        prompt: 'fake getItem: map.theme || null; set theme light; log it',
        starter: "const map = {};\nconst getItem = (k) => map[k] ?? null;\nconst setItem = (k, v) => {\n  map[k] = v;\n};\n",
        expectLogs: ["light"],
      },
    ],
    "u59-concept": [
      {
        type: "code",
        prompt: "Module idea: export-like object math.add(2,3); log 5",
        starter:
          "const math = {\n  add(a, b) {\n    return a + b;\n  },\n};\n",
        expectLogs: ["5"],
      },
    ],
    "u59-memory": [
      {
        type: "code",
        prompt: 'Log the string type="module" (required for ESM in HTML)',
        starter: "",
        expectLogs: ['type="module"'],
        mustInclude: ["module"],
      },
    ],
    "u59-practice": [
      {
        type: "code",
        prompt: "Warm-up: log import",
        starter: "",
        expectLogs: ["import"],
      },
    ],
    "u59-overview": [
      {
        type: "code",
        prompt: "Named binding style: const { x } = { x: 9 }; log x",
        starter: "",
        expectLogs: ["9"],
        mustInclude: ["{"],
      },
    ],
    "u60-concept": [
      {
        type: "code",
        prompt: "Capstone mock: await fakeFetch json; log title",
        starter:
          "async function fakeFetch() {\n  return {\n    ok: true,\n    async json() {\n      return { title: \"News\" };\n    },\n  };\n}\n",
        expectLogs: ["News"],
        mustInclude: ["await"],
      },
    ],
    "u60-memory": [
      {
        type: "code",
        prompt: 'try fake fail: throw; catch log "error"',
        starter: "",
        expectLogs: ["error"],
        mustInclude: ["catch"],
      },
    ],
    "u60-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Async done",
        starter: "",
        expectLogs: ["Async done"],
      },
    ],
    "u60-overview": [
      {
        type: "code",
        prompt: 'data.title from {title:"Go"}; log Go',
        starter: 'const data = { title: "Go" };\n',
        expectLogs: ["Go"],
      },
    ],
    "u61-concept": [
      {
        type: "code",
        prompt: 'page.main = "content"; log page.main (landmark idea)',
        starter: "const page = { header: \"top\", main: \"\", footer: \"end\" };\n",
        expectLogs: ["content"],
      },
    ],
    "u61-memory": [
      {
        type: "code",
        prompt: 'hooks["data-action"] = "save"; log save',
        starter: "const hooks = {};\n",
        expectLogs: ["save"],
      },
    ],
    "u61-practice": [
      {
        type: "code",
        prompt: "Warm-up: log main",
        starter: "",
        expectLogs: ["main"],
      },
    ],
    "u61-overview": [
      {
        type: "code",
        prompt: 'log "querySelector" (how JS finds landmarks)',
        starter: "",
        expectLogs: ["querySelector"],
      },
    ],
    "u62-concept": [
      {
        type: "code",
        prompt: 'items=["a","b"]; map to strings "[a]"; log joined with comma',
        starter: "const items = [\"a\", \"b\"];\n",
        expectLogs: ["[a],[b]"],
        mustInclude: ["map"],
      },
    ],
    "u62-memory": [
      {
        type: "code",
        prompt: "render: if length 0 log empty else log count",
        starter: "const items = [];\nfunction render(list) {\n  if (list.length === 0) console.log(\"empty\");\n  else console.log(list.length);\n}\n",
        expectLogs: ["empty"],
      },
    ],
    "u62-practice": [
      {
        type: "code",
        prompt: "Warm-up: log createElement",
        starter: "",
        expectLogs: ["createElement"],
      },
    ],
    "u62-overview": [
      {
        type: "code",
        prompt: "push hi then render last item",
        starter:
          "const items = [];\nfunction render(list) {\n  console.log(list[list.length - 1]);\n}\n",
        expectLogs: ["hi"],
        mustInclude: ["push"],
      },
    ],
    "u63-concept": [
      {
        type: "code",
        prompt: "fake classList.toggle open on {open:false} → log true",
        starter:
          "const el = {\n  open: false,\n  classList: {\n    toggle(name) {\n      if (name === \"open\") el.open = !el.open;\n    },\n  },\n};\n",
        expectLogs: ["true"],
        mustInclude: ["toggle"],
      },
    ],
    "u63-memory": [
      {
        type: "code",
        prompt: "panels all hidden; show #1 → log false true false",
        starter:
          "const panels = [{ hidden: true }, { hidden: true }, { hidden: true }];\n",
        expectLogs: ["false", "true", "false"],
      },
    ],
    "u63-practice": [
      {
        type: "code",
        prompt: "Warm-up: log classList",
        starter: "",
        expectLogs: ["classList"],
      },
    ],
    "u63-overview": [
      {
        type: "code",
        prompt: 'active = "home"; log active',
        starter: "",
        expectLogs: ["home"],
      },
    ],
    "u64-concept": [
      {
        type: "code",
        prompt: 'name = "  "; if trim empty log invalid else log ok',
        starter: 'const name = "  ";\n',
        expectLogs: ["invalid"],
        mustInclude: ["trim"],
      },
    ],
    "u64-memory": [
      {
        type: "code",
        prompt: 'email without @ → log bad',
        starter: 'const email = "milo.example";\n',
        expectLogs: ["bad"],
        mustInclude: ["@"],
      },
    ],
    "u64-practice": [
      {
        type: "code",
        prompt: "Warm-up: log preventDefault",
        starter: "",
        expectLogs: ["preventDefault"],
      },
    ],
    "u64-overview": [
      {
        type: "code",
        prompt: 'pw===confirm → log match (use "x" and "x")',
        starter: 'const pw = "x";\nconst confirm = "x";\n',
        expectLogs: ["match"],
      },
    ],
    "u65-concept": [
      {
        type: "code",
        prompt: "debounce sketch: clearTimeout then setTimeout 0 log go",
        starter: "let t;\nfunction debounceLog() {\n  clearTimeout(t);\n  t = setTimeout(() => console.log(\"go\"), 0);\n}\n",
        expectLogs: ["go"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u65-memory": [
      {
        type: "code",
        prompt: 'log "debounce" then "throttle"',
        starter: "",
        expectLogs: ["debounce", "throttle"],
      },
    ],
    "u65-practice": [
      {
        type: "code",
        prompt: "Warm-up: log debounce",
        starter: "",
        expectLogs: ["debounce"],
      },
    ],
    "u65-overview": [
      {
        type: "code",
        prompt: "call debounceLog twice quickly; still one go (starter helps)",
        starter:
          "let t;\nfunction debounceLog() {\n  clearTimeout(t);\n  t = setTimeout(() => console.log(\"go\"), 0);\n}\ndebounceLog();\n",
        expectLogs: ["go"],
        mustInclude: ["clearTimeout"],
      },
    ],
    "u66-concept": [
      {
        type: "code",
        prompt: 'control.tag = "button"; log tag',
        starter: "const control = {};\n",
        expectLogs: ["button"],
      },
    ],
    "u66-memory": [
      {
        type: "code",
        prompt: 'btn["aria-expanded"] = "true"; log it',
        starter: "const btn = {};\n",
        expectLogs: ["true"],
        mustInclude: ["aria"],
      },
    ],
    "u66-practice": [
      {
        type: "code",
        prompt: "Warm-up: log label",
        starter: "",
        expectLogs: ["label"],
      },
    ],
    "u66-overview": [
      {
        type: "code",
        prompt: 'log "Escape" (common dismiss key)',
        starter: "",
        expectLogs: ["Escape"],
      },
    ],
    "u67-concept": [
      {
        type: "code",
        prompt: 'el.classes add "enter"; log classes joined',
        starter:
          "const el = {\n  classes: [],\n  classList: {\n    add(c) {\n      el.classes.push(c);\n    },\n  },\n};\n",
        expectLogs: ["enter"],
        mustInclude: ["add"],
      },
    ],
    "u67-memory": [
      {
        type: "code",
        prompt: 'log "transitionend" (exit cleanup event)',
        starter: "",
        expectLogs: ["transitionend"],
      },
    ],
    "u67-practice": [
      {
        type: "code",
        prompt: "Warm-up: log transform",
        starter: "",
        expectLogs: ["transform"],
      },
    ],
    "u67-overview": [
      {
        type: "code",
        prompt: 'state = "open"; log open',
        starter: "",
        expectLogs: ["open"],
      },
    ],
    "u68-concept": [
      {
        type: "code",
        prompt: 'route from hash "#/about" → log about',
        starter: 'const hash = "#/about";\n',
        expectLogs: ["about"],
      },
    ],
    "u68-memory": [
      {
        type: "code",
        prompt: 'views home/about; show about → log about',
        starter:
          'const views = { home: false, about: false };\nfunction show(name) {\n  for (const k of Object.keys(views)) views[k] = false;\n  views[name] = true;\n  console.log(name);\n}\n',
        expectLogs: ["about"],
      },
    ],
    "u68-practice": [
      {
        type: "code",
        prompt: "Warm-up: log pushState",
        starter: "",
        expectLogs: ["pushState"],
      },
    ],
    "u68-overview": [
      {
        type: "code",
        prompt: 'path="/"; log home as default view name',
        starter: 'const path = "/";\n',
        expectLogs: ["home"],
      },
    ],
    "u69-concept": [
      {
        type: "code",
        prompt: 'log "HTTPS" (deploy security default)',
        starter: "",
        expectLogs: ["HTTPS"],
      },
    ],
    "u69-memory": [
      {
        type: "code",
        prompt: 'secrets stay out of front-end; log ".env"',
        starter: "",
        expectLogs: [".env"],
      },
    ],
    "u69-practice": [
      {
        type: "code",
        prompt: "Warm-up: log deploy",
        starter: "",
        expectLogs: ["deploy"],
      },
    ],
    "u69-overview": [
      {
        type: "code",
        prompt: 'base path idea: asset = "./app.js"; log asset',
        starter: "",
        expectLogs: ["./app.js"],
      },
    ],
    "u70-concept": [
      {
        type: "code",
        prompt: "Capstone bits: items push; log length 1",
        starter: "const items = [];\n",
        expectLogs: ["1"],
        mustInclude: ["push"],
      },
    ],
    "u70-memory": [
      {
        type: "code",
        prompt: 'tabs active "list"; log list',
        starter: "const ui = { active: \"home\" };\n",
        expectLogs: ["list"],
      },
    ],
    "u70-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Sites done",
        starter: "",
        expectLogs: ["Sites done"],
      },
    ],
    "u70-overview": [
      {
        type: "code",
        prompt: 'sections = ["home","list"]; log sections.length',
        starter: "",
        expectLogs: ["2"],
      },
    ],
    "u71-concept": [
      {
        type: "code",
        prompt: 'new Map; set "a"→1; log get("a")',
        starter: "",
        expectLogs: ["1"],
        mustInclude: ["Map"],
      },
    ],
    "u71-memory": [
      {
        type: "code",
        prompt: "Map with two sets; log size",
        starter: "const m = new Map();\nm.set(1, \"x\");\nm.set(2, \"y\");\n",
        expectLogs: ["2"],
        mustInclude: ["size"],
      },
    ],
    "u71-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Map",
        starter: "",
        expectLogs: ["Map"],
      },
    ],
    "u71-overview": [
      {
        type: "code",
        prompt: 'm.has("k") after set; log true',
        starter: "const m = new Map();\n",
        expectLogs: ["true"],
        mustInclude: ["has"],
      },
    ],
    "u72-concept": [
      {
        type: "code",
        prompt: "new Set([1,1,2]); log size",
        starter: "",
        expectLogs: ["2"],
        mustInclude: ["Set"],
      },
    ],
    "u72-memory": [
      {
        type: "code",
        prompt: '[...new Set(["a","a","b"])]; log joined',
        starter: "",
        expectLogs: ["a,b"],
        mustInclude: ["Set"],
      },
    ],
    "u72-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Set",
        starter: "",
        expectLogs: ["Set"],
      },
    ],
    "u72-overview": [
      {
        type: "code",
        prompt: "s.add(9); log has(9)",
        starter: "const s = new Set();\n",
        expectLogs: ["true"],
        mustInclude: ["add"],
      },
    ],
    "u73-concept": [
      {
        type: "code",
        prompt: "WeakMap: key {}; set value 1; log get",
        starter: "const wm = new WeakMap();\nconst key = {};\n",
        expectLogs: ["1"],
        mustInclude: ["WeakMap"],
      },
    ],
    "u73-memory": [
      {
        type: "code",
        prompt: "WeakSet add obj; log has",
        starter: "const ws = new WeakSet();\nconst obj = {};\n",
        expectLogs: ["true"],
        mustInclude: ["WeakSet"],
      },
    ],
    "u73-practice": [
      {
        type: "code",
        prompt: "Warm-up: log WeakMap",
        starter: "",
        expectLogs: ["WeakMap"],
      },
    ],
    "u73-overview": [
      {
        type: "code",
        prompt: 'log "weak" (GC-friendly idea)',
        starter: "",
        expectLogs: ["weak"],
      },
    ],
    "u74-concept": [
      {
        type: "code",
        prompt: "[10,2].sort((a,b)=>a-b); log joined",
        starter: "",
        expectLogs: ["2,10"],
        mustInclude: ["sort"],
      },
    ],
    "u74-memory": [
      {
        type: "code",
        prompt: "Copy then sort [3,1]; log original joined then sorted",
        starter: "const arr = [3, 1];\n",
        expectLogs: ["3,1", "1,3"],
        mustInclude: ["..."],
      },
    ],
    "u74-practice": [
      {
        type: "code",
        prompt: "Warm-up: log sort",
        starter: "",
        expectLogs: ["sort"],
      },
    ],
    "u74-overview": [
      {
        type: "code",
        prompt: "Descending: [1,3] → log 3,1",
        starter: "const nums = [1, 3];\n",
        expectLogs: ["3,1"],
        mustInclude: ["sort"],
      },
    ],
    "u75-concept": [
      {
        type: "code",
        prompt: "const next = [...[1], 2]; log next joined",
        starter: "",
        expectLogs: ["1,2"],
        mustInclude: ["..."],
      },
    ],
    "u75-memory": [
      {
        type: "code",
        prompt: "filter out 2 from [1,2,3]; log joined (no mutate need)",
        starter: "const items = [1, 2, 3];\n",
        expectLogs: ["1,3"],
        mustInclude: ["filter"],
      },
    ],
    "u75-practice": [
      {
        type: "code",
        prompt: "Warm-up: log spread",
        starter: "",
        expectLogs: ["spread"],
      },
    ],
    "u75-overview": [
      {
        type: "code",
        prompt: "const o2 = { ...{a:1}, b:2 }; log o2.b",
        starter: "",
        expectLogs: ["2"],
        mustInclude: ["..."],
      },
    ],
    "u76-concept": [
      {
        type: "code",
        prompt: "pure add(2,3); log 5",
        starter: "function add(a, b) {\n  return a + b;\n}\n",
        expectLogs: ["5"],
      },
    ],
    "u76-memory": [
      {
        type: "code",
        prompt: "[1,2,3].map(n=>n*2); log joined — keep callback pure",
        starter: "",
        expectLogs: ["2,4,6"],
        mustInclude: ["map"],
      },
    ],
    "u76-practice": [
      {
        type: "code",
        prompt: "Warm-up: log pure",
        starter: "",
        expectLogs: ["pure"],
      },
    ],
    "u76-overview": [
      {
        type: "code",
        prompt: "double(4) returns 8; log it",
        starter: "function double(n) {\n  return n * 2;\n}\n",
        expectLogs: ["8"],
      },
    ],
    "u77-concept": [
      {
        type: "code",
        prompt: "log an object with console.log — {ok:true}",
        starter: "",
        expectLogs: ['{"ok":true}'],
        mustInclude: ["console.log"],
      },
    ],
    "u77-memory": [
      {
        type: "code",
        prompt: 'log "breakpoint" (DevTools idea)',
        starter: "",
        expectLogs: ["breakpoint"],
      },
    ],
    "u77-practice": [
      {
        type: "code",
        prompt: "Warm-up: log debugger",
        starter: "",
        expectLogs: ["debugger"],
      },
    ],
    "u77-overview": [
      {
        type: "code",
        prompt: 'const err = "TypeError"; log err',
        starter: "",
        expectLogs: ["TypeError"],
      },
    ],
    "u78-concept": [
      {
        type: "code",
        prompt: 'use === : log true for 1 === 1',
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["==="],
      },
    ],
    "u78-memory": [
      {
        type: "code",
        prompt: "optional: const o=null; log o?.x (undefined)",
        starter: "const o = null;\n",
        expectLogs: ["undefined"],
        mustInclude: ["?."],
      },
    ],
    "u78-practice": [
      {
        type: "code",
        prompt: "Warm-up: log undefined",
        starter: "",
        expectLogs: ["undefined"],
      },
    ],
    "u78-overview": [
      {
        type: "code",
        prompt: "guard: if (!arr.length) log empty",
        starter: "const arr = [];\n",
        expectLogs: ["empty"],
      },
    ],
    "u79-concept": [
      {
        type: "code",
        prompt: "totalPrice = 10; log totalPrice (clear name)",
        starter: "",
        expectLogs: ["10"],
        mustInclude: ["totalPrice"],
      },
    ],
    "u79-memory": [
      {
        type: "code",
        prompt: 'log "why" (what comments should explain)',
        starter: "",
        expectLogs: ["why"],
      },
    ],
    "u79-practice": [
      {
        type: "code",
        prompt: "Warm-up: log clarity",
        starter: "",
        expectLogs: ["clarity"],
      },
    ],
    "u79-overview": [
      {
        type: "code",
        prompt: "small fn greet returns Hi; log it",
        starter: 'function greet() {\n  return "Hi";\n}\n',
        expectLogs: ["Hi"],
      },
    ],
    "u80-concept": [
      {
        type: "code",
        prompt: "byId Map set 1→{n:\"A\"}; log get(1).n",
        starter: "const byId = new Map();\n",
        expectLogs: ["A"],
        mustInclude: ["Map"],
      },
    ],
    "u80-memory": [
      {
        type: "code",
        prompt: "selected Set add 3; log has(3)",
        starter: "const selected = new Set();\n",
        expectLogs: ["true"],
        mustInclude: ["Set"],
      },
    ],
    "u80-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Collections done",
        starter: "",
        expectLogs: ["Collections done"],
      },
    ],
    "u80-overview": [
      {
        type: "code",
        prompt: "[...new Set([2,2,1])].sort((a,b)=>a-b); log joined",
        starter: "",
        expectLogs: ["1,2"],
        mustInclude: ["Set"],
      },
    ],
    "u81-concept": [
      {
        type: "code",
        prompt: 'Log "stack" then schedule timeout 0 "later" — order stack, later',
        starter: "",
        expectLogs: ["stack", "later"],
        mustInclude: ["setTimeout"],
      },
    ],
    "u81-memory": [
      {
        type: "code",
        prompt: 'Promise.resolve("micro").then(log); log "sync" — expect sync then micro',
        starter: "",
        expectLogs: ["sync", "micro"],
        mustInclude: ["Promise"],
      },
    ],
    "u81-practice": [
      {
        type: "code",
        prompt: "Warm-up: log event loop",
        starter: "",
        expectLogs: ["event loop"],
      },
    ],
    "u81-overview": [
      {
        type: "code",
        prompt: 'log "V8" (engine name idea)',
        starter: "",
        expectLogs: ["V8"],
      },
    ],
    "u82-concept": [
      {
        type: "code",
        prompt: 'runtime = "node"; log runtime',
        starter: "",
        expectLogs: ["node"],
      },
    ],
    "u82-memory": [
      {
        type: "code",
        prompt: 'log "no document" idea — log false for hasDOM default',
        starter: "const hasDOM = false;\n",
        expectLogs: ["false"],
      },
    ],
    "u82-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Node",
        starter: "",
        expectLogs: ["Node"],
      },
    ],
    "u82-overview": [
      {
        type: "code",
        prompt: 'cmd = "node app.js"; log cmd',
        starter: "",
        expectLogs: ["node app.js"],
      },
    ],
    "u83-concept": [
      {
        type: "code",
        prompt: 'deps = ["lodash"]; log deps[0]',
        starter: "",
        expectLogs: ["lodash"],
      },
    ],
    "u83-memory": [
      {
        type: "code",
        prompt: 'manifest = "package.json"; log manifest',
        starter: "",
        expectLogs: ["package.json"],
      },
    ],
    "u83-practice": [
      {
        type: "code",
        prompt: "Warm-up: log npm",
        starter: "",
        expectLogs: ["npm"],
      },
    ],
    "u83-overview": [
      {
        type: "code",
        prompt: 'folder = "node_modules"; log folder',
        starter: "",
        expectLogs: ["node_modules"],
      },
    ],
    "u84-concept": [
      {
        type: "code",
        prompt: 'function Button({label}){ return label; } log Button({label:"Go"})',
        starter: "",
        expectLogs: ["Go"],
        mustInclude: ["label"],
      },
    ],
    "u84-memory": [
      {
        type: "code",
        prompt: "state.count=1; view from state — log count",
        starter: "const state = { count: 0 };\n",
        expectLogs: ["1"],
      },
    ],
    "u84-practice": [
      {
        type: "code",
        prompt: "Warm-up: log component",
        starter: "",
        expectLogs: ["component"],
      },
    ],
    "u84-overview": [
      {
        type: "code",
        prompt: 'ui = "from state"; log ui',
        starter: "",
        expectLogs: ["from state"],
      },
    ],
    "u85-concept": [
      {
        type: "code",
        prompt: 'style = "declarative"; log style',
        starter: "",
        expectLogs: ["declarative"],
      },
    ],
    "u85-memory": [
      {
        type: "code",
        prompt: 'imperative step: el.text = "Hi"; log text',
        starter: "const el = {};\n",
        expectLogs: ["Hi"],
      },
    ],
    "u85-practice": [
      {
        type: "code",
        prompt: "Warm-up: log imperative",
        starter: "",
        expectLogs: ["imperative"],
      },
    ],
    "u85-overview": [
      {
        type: "code",
        prompt: 'log "vanilla" (still useful)',
        starter: "",
        expectLogs: ["vanilla"],
      },
    ],
    "u86-concept": [
      {
        type: "code",
        prompt: 'idea = "string"; log idea (TS would annotate : string)',
        starter: "",
        expectLogs: ["string"],
      },
    ],
    "u86-memory": [
      {
        type: "code",
        prompt: 'log "TypeScript"',
        starter: "",
        expectLogs: ["TypeScript"],
      },
    ],
    "u86-practice": [
      {
        type: "code",
        prompt: "Warm-up: log types",
        starter: "",
        expectLogs: ["types"],
      },
    ],
    "u86-overview": [
      {
        type: "code",
        prompt: 'compilesTo = "JavaScript"; log compilesTo',
        starter: "",
        expectLogs: ["JavaScript"],
      },
    ],
    "u87-concept": [
      {
        type: "code",
        prompt: 'nextLang = "Python"; log nextLang',
        starter: "",
        expectLogs: ["Python"],
      },
    ],
    "u87-memory": [
      {
        type: "code",
        prompt: 'transfer = "debugging"; log transfer',
        starter: "",
        expectLogs: ["debugging"],
      },
    ],
    "u87-practice": [
      {
        type: "code",
        prompt: "Warm-up: log transfer",
        starter: "",
        expectLogs: ["transfer"],
      },
    ],
    "u87-overview": [
      {
        type: "code",
        prompt: 'browserLang = "JavaScript"; log browserLang',
        starter: "",
        expectLogs: ["JavaScript"],
      },
    ],
    "u88-concept": [
      {
        type: "code",
        prompt: 'path = "/api/items"; log path',
        starter: "",
        expectLogs: ["/api/items"],
      },
    ],
    "u88-memory": [
      {
        type: "code",
        prompt: 'JSON.parse(\'{"ok":true}\'); log ok',
        starter: "",
        expectLogs: ["true"],
        mustInclude: ["JSON"],
      },
    ],
    "u88-practice": [
      {
        type: "code",
        prompt: "Warm-up: log fetch",
        starter: "",
        expectLogs: ["fetch"],
      },
    ],
    "u88-overview": [
      {
        type: "code",
        prompt: 'side = "backend"; log side',
        starter: "",
        expectLogs: ["backend"],
      },
    ],
    "u89-concept": [
      {
        type: "code",
        prompt: 'project = "todo"; log project',
        starter: "",
        expectLogs: ["todo"],
      },
    ],
    "u89-memory": [
      {
        type: "code",
        prompt: 'doc = "README"; log doc',
        starter: "",
        expectLogs: ["README"],
      },
    ],
    "u89-practice": [
      {
        type: "code",
        prompt: "Warm-up: log ship",
        starter: "",
        expectLogs: ["ship"],
      },
    ],
    "u89-overview": [
      {
        type: "code",
        prompt: 'scope = "small"; log scope',
        starter: "",
        expectLogs: ["small"],
      },
    ],
    "u90-concept": [
      {
        type: "code",
        prompt: 'log "Graduated"',
        starter: "",
        expectLogs: ["Graduated"],
      },
    ],
    "u90-memory": [
      {
        type: "code",
        prompt: 'next = ["Node","React"]; log next joined',
        starter: "",
        expectLogs: ["Node,React"],
      },
    ],
    "u90-practice": [
      {
        type: "code",
        prompt: "Warm-up: log Path complete",
        starter: "",
        expectLogs: ["Path complete"],
      },
    ],
    "u90-overview": [
      {
        type: "code",
        prompt: 'log "Keep building"',
        starter: "",
        expectLogs: ["Keep building"],
      },
    ],
  };

  // Also map overview/memory ids that use different patterns from grep
  // u2-overview etc. already match.

  root.units.forEach((unit, unitIndex) => {
    if (unitIndex < 1) return; // Unit 1 = history only
    unit.nodes.forEach((node) => {
      const extras = BANK[node.id];
      if (!extras?.length) return;

      // Practice uses flashcards — attach code warmups separately.
      if (node.type === "practice") {
        node.codeWarmups = extras;
        return;
      }

      if (!node.steps) node.steps = [];

      // Insert coding labs after the last teach step (or at start if none)
      let insertAt = 0;
      for (let i = 0; i < node.steps.length; i += 1) {
        if (node.steps[i].type === "teach") insertAt = i + 1;
      }

      const intro = {
        type: "teach",
        text: "Code lab: type real JavaScript below, press Run, then SELECT when the output looks right.",
      };
      node.steps.splice(insertAt, 0, intro, ...extras);
    });
  });
})();
