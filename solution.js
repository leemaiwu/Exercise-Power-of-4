const powerOf4 = (n) => {
  if (n === Math.pow(4, (Math.log(n) / Math.log(4)))) {
    return true
  }
  return false
}

console.log(powerOf4(4)) // true
console.log(powerOf4(44)) // false
console.log(powerOf4(1024)) // true
console.log(powerOf4('1024')) // false
