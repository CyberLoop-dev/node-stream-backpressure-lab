const test = require("node:test");
const assert = require("node:assert/strict");
const { runDemo } = require("../src/main");

test("producer waits for drain when writable buffer fills", async () => {
  const events = await runDemo({ delayMs: 1, log: () => {} });
  assert.ok(events.some((event) => event.type === "enqueue" && !event.accepted));
  assert.ok(events.some((event) => event.type === "drain"));
  assert.equal(events.at(-1).type, "finish");
});
