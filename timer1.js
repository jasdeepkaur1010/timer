const userInput = process.argv.slice(2);
for (let i = 0; i < userInput.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(userInput[i]);
  }, userInput[i] * 1000);
};
