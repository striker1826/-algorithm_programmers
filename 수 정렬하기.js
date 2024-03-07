// 선택 정렬
function selection_sort(some_list) {
  for (let i = 0; i < some_list.length; i++) {
    let min_value_index = i;

    for (let j = i + 1; j < some_list.length; j++) {
      if (some_list[min_value_index] > some_list[j]) {
        min_value_index = j;
      }
    }
    let swap = some_list[min_value_index];
    some_list[min_value_index] = some_list[i];
    some_list[i] = swap;
  }
  return some_list;
}

// 삽입 정렬
function insertion_sort(array) {
  for (let i = 0; i < array.length; i++) {
    const current_value = array[i];
    let left = i - 1;

    // 현재 인덱스가 0보다 크거나 같고, -1인덱스의 값이 현재 값보다 크다면
    while (left >= 0 && array[left] > current_value) {
      // 현재 인덱스의 값과 현재 인덱스 -1의 값을 바꾼다.
      array[left + 1] = array[left];
      left--;
    }
    // 현재 인덱스에 현재 값 넣기
    array[left + 1] = current_value;
  }

  return array;
}

// 1 4 5 0 2
console.log(insertion_sort([1, -3, 5, 4, 0, 2]));

console.time("함수 시작");
for (let i = 0; i < 1000000; i++) {
  insertion_sort([1, 5, 4, 0, 2]);
}
console.timeEnd("함수 시작");
