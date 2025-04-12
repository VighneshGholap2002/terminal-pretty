const chalk = require('chalk');

function formatError(error) {
  const time = new Date().toLocaleTimeString();
  console.log(
    chalk.redBright.bold(`[❌ ERROR @ ${time}] `) + chalk.red(error.message)
  );
  if (error.stack) {
    console.log(
      chalk.gray(error.stack.replace(error.message, "").trim())
    );
  }
}

function formatWarning(msg) {
  const time = new Date().toLocaleTimeString();
  console.log(
    chalk.yellowBright.bold(`[⚠️ WARNING @ ${time}] `) + chalk.yellow(msg)
  );
}

(function hookAutomatically() {
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = function (...args) {
    args.forEach(arg => {
      if (arg instanceof Error) formatError(arg);
      else formatError(new Error(arg));
    });
  };

  console.warn = function (...args) {
    args.forEach(arg => formatWarning(arg));
  };

  process.on('uncaughtException', (err) => {
    formatError(err);
    process.exit(1); // optional: remove if you want app to continue
  });

  process.on('unhandledRejection', (reason) => {
    formatError(reason instanceof Error ? reason : new Error(reason));
  });
})();
