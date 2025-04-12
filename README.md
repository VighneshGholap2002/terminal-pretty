# terminal-pretty

*Make your terminal errors and warnings easy to spot and debug.*  
terminal-pretty automatically hooks into your console to enhance and colorize error-related messages like console.error, console.warn, uncaught exceptions, and unhandled promise rejections.

## ✨ Features

- Automatically formats:
  - console.error
  - console.warn
  - Uncaught exceptions
  - Unhandled promise rejections
- Adds clear labels and color coding for better visibility
- Helps quickly locate and debug critical issues during development



## 🚀 Installation

```bash
npm install terminal-pretty




🔧 Usage

Just require it at the top of your entry file (like index.js or app.js):

require('terminal-pretty');

console.warn("This is a warning");
console.error("This is an error");

throw new Error("Uncaught error will be handled too!");

Promise.reject("Rejected promise also handled!");




🎨 Output Example

[⚠️ WARNING @ 12:30:12] This is a warning
[❌ ERROR @ 12:30:14] This is an error
[❌ ERROR @ 12:30:15] Uncaught error will be handled too!

Colors are powered by chalk.




📁 Folder Structure

console-beauty/
├── index.js
├── package.json
├── README.md
├── LICENSE
└── .gitignore



📜 License

MIT License
Copyright © 2025 [Vighnesh Gholap]



❤️ Contributing

Found a bug or want to add features? PRs are welcome!


🌐 GitHub

https://github.com/VighneshGholap2002/terminal-pretty



📦 Coming Soon

Custom error/warning themes

Toggle for showing/hiding stack traces

Log level filters

Optional file logging# terminal-pretty
