function toCase(text) {
  // write your code here

  if (text === null || text.trim() === "") {
    return "";
  }

  const filteredText = text.split(" ").join("").toLowerCase();
  const result = `${filteredText}-${filteredText.toUpperCase()}`;

  return result;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
