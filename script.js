function indexOfIgnoreCase(s1, s2) {
  const lowerStr = s1.toLowerCase();
    const lowerSubStr = s2.toLowerCase();
    const index = lowerStr.indexOf(lowerSubStr);
    return index !== -1 ? index : -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");

const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
