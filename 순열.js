function a(n, m) {
  let arr = [];
  let visited = [];
  let result = "";

  function b(index) {
    if (index === m) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited.includes(i)) {
        arr[index] = i;
        visited.push(i);
        b(index + 1);
        visited.pop();
      }
    }
  }

  b(0);
  return result;
}

// console.log(a(4, 2));
const b = [5, 6];
const a = [1, 2, 3, 4].filter((num) => num >= 2);
const g = a.slice();
const d = a.forEach((rest, i) => [...a, rest]);
console.log(g);
