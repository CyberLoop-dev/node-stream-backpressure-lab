<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:0f766e&height=170&section=header&text=Node%20Stream%20Backpressure%20Lab&fontSize=32&fontColor=ffffff&animation=fadeIn" width="100%" alt="Waving header"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=A%20dependency-free%20Node.js%20CLI%20that%20demonstrates%20Writable%20stream%20buffering%2C%20" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/node-stream-backpressure-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/node-stream-backpressure-lab)
![Stars](https://img.shields.io/github/stars/CyberLoop-dev/node-stream-backpressure-lab?style=flat)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/node-stream-backpressure-lab)
<img src="assets/mark.svg" width="112" alt="Node Stream Backpressure Lab illustration"/>
</div>

## 🧭 Overview

A dependency-free Node.js CLI that demonstrates Writable stream buffering, write() return values, highWaterMark, and drain events with a deliberately slow sink.

## ✨ Features

- 🌊 Observe write() returning false when the buffer reaches its limit.
- ⏳ Watch a slow Writable process queued chunks.
- 🔔 Wait for drain before writing more data.
- 🧪 Test the backpressure path with node:test.

## 🎬 Demo

No hosted demo is provided. Run the local example with the command below.

## ⚡ Quick Start

~~~bash
npm start
~~~

## 🧰 Tech Stack

- Node.js 18+
- Local-first execution; no external API calls

## 🗂️ Folder Structure

~~~text
node-stream-backpressure-lab/
├── src/main.js
├── test/backpressure.test.js
├── package.json
├── assets/mark.svg
├── .gitignore
├── LICENSE
└── README.md
~~~

## 🗺️ Roadmap

- [x] Core behavior and local examples
- [x] Custom SVG and setup documentation
- [ ] Add more guided exercises from community feedback

## 🤝 Contributing

Issues and focused pull requests are welcome. Keep examples reproducible and within the documented scope.

## 📄 License

MIT License. See [LICENSE](LICENSE).

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:101827&height=100&section=footer" width="100%" alt="Waving footer"/></div>
