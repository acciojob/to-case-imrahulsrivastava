function toCase(text) {
  // write your code here

  if (text === null || text.trim() === "") {
    return "-";
  }

  const str = text.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str.splice(i, 1);
    }
  }

  const filteredText = str.join("").toLowerCase();
  const result = `${filteredText}-${filteredText.toUpperCase()}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
