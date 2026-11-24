const { Writable } = require("node:stream");
const { once } = require("node:events");
const { finished } = require("node:stream/promises");

async function runDemo(options = {}) {
  const highWaterMark = options.highWaterMark ?? 8;
  const chunkCount = options.chunkCount ?? 8;
  const chunkSize = options.chunkSize ?? 4;
  const delayMs = options.delayMs ?? 18;
  const log = options.log ?? console.log;
  const events = [];
  let received = 0;

  const sink = new Writable({
    highWaterMark,
    write(chunk, _encoding, callback) {
      received += 1;
      events.push({ type: "write", chunk: chunk.toString(), received });
      setTimeout(callback, delayMs);
    }
  });

  for (let index = 0; index < chunkCount; index += 1) {
    const chunk = Buffer.alloc(chunkSize, 65 + (index % 26));
    const accepted = sink.write(chunk);
    const event = {
      type: "enqueue",
      index,
      accepted,
      bufferedBytes: sink.writableLength,
      highWaterMark
    };
    events.push(event);
    log(`enqueue #${index + 1}: accepted=${accepted}, buffered=${sink.writableLength}/${highWaterMark}`);
    if (!accepted) {
      log("  buffer full -> waiting for drain");
      await once(sink, "drain");
      events.push({ type: "drain", bufferedBytes: sink.writableLength });
      log("  drain -> producer may continue");
    }
  }

  sink.end();
  await finished(sink);
  events.push({ type: "finish", received });
  log(`finished: ${received} chunks received`);
  return events;
}

if (require.main === module) {
  runDemo().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { runDemo };
