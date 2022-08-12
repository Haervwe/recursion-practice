function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function fibRec(n, sequence = [0, 1]) {
  if (sequence.length == n) {
    return sequence;
  }
  let i = sequence.length;
  sequence.push(sequence[i - 1] + sequence[i - 2]);
  return fibRec(n, sequence);
}

let test = [9, 8, 7, 6, 5, 4, 13, 3, 2, 1, 10, 0, 11, 12];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let right = array.slice(0, Math.floor(array.length / 2));
  let left = array.slice(Math.floor(array.length / 2));

  right = mergeSort(right);
  left = mergeSort(left);
  console.log(left, right);
  let result = [];
  let i = 0;
  let j = 0;
  while (i <= left.length) {
    if (right[j] == undefined && left[i] == undefined) {
      i++;
    } else if (right[j] != undefined && left[i] == undefined) {
      result.push(right[j]);
      j++;
    } else if (left[i] <= right[j] || right[j] == undefined) {
      result.push(left[i]);
      i++;
    } else {
      if (right[j] != undefined) {
        result.push(right[j]);
        j++;
      }
    }
  }

  console.log(result);
  return result;
}

console.log(fibRec(8));
console.log(fibonacci(8));
console.log(mergeSort(test));
