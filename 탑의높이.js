function solution(n, arr) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let current = {
      height: arr[i],
      index: i + 1,
    };

    if (i === 0) {
      answer.push(0);
      stack.push(current);
      continue;
    }

    if (current.height > stack[stack.length - 1].height) {
      while (stack.length) {
        if (stack[stack.length - 1].height > current.height) {
          break;
        } else {
          stack.pop();
        }
      }
      answer.push(stack.length ? stack[stack.length - 1].index : 0);
      stack.push(current);
    } else {
      answer.push(stack[stack.length - 1].index);
      stack.push(current);
    }
  }

  console.log(answer);
}

solution(5, [6, 9, 5, 7, 4]);

function isCopyObj(origin) {
  let res = {};
  for (let key in origin) {
    if (typeof origin[key] === "object") {
      res[key] = isCopyObj(obj[key]);
    } else {
      res[key] = origin[key];
    }
  }
  return res;
}
