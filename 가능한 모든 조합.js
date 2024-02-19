function a(n) {
  let arr = [];

  function b(index) {
    if (index === n) {
      console.log(arr);
      return;
    }

    for (let i = 1; i <= n; i++) {
      arr[index] = i;
      b(index + 1);
    }
  }

  b(0);
}

a(4);
