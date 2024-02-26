
function findLargestDecreasingSequence(arr) {
  let currentSequence = [];
  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] >= arr[i - 1]) {
      currentSequence = [arr[i]];
    } else {
      currentSequence.push(arr[i]);
    }

    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence.slice();
    }
  }
  alert(maxSequence);
  alert(maxSequence.length)
}

function findLargestIncreasingSequence(arr) {
  let currentSequence = [];
  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] <= arr[i - 1]) {
      currentSequence = [arr[i]];
    } else {
      currentSequence.push(arr[i]);
    }

    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence.slice();
    }
  }
  alert(maxSequence);
  alert(maxSequence.length)
}

function getMinMaxNumber(file) {

  let reader = new FileReader();

  reader.onload = function(event) {
    let  arr = event.target.result.split("\n").map(Number);

    arr = arr.slice(0,arr.length-1)
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    alert(`max -> ${max} \n min -> ${min}`)
  };
  reader.readAsText(file);
}

function getMedian(file) {
  let reader = new FileReader();

  reader.onload = function(event) {
    let  arr = event.target.result.split("\n").map(Number);
    arr = arr.slice(0,arr.length-1)

     findMedian(arr);
  };
  reader.readAsText(file);
}

function getAverage(file) {

  let reader = new FileReader();

  reader.onload = function(event) {
    let  arr = event.target.result.split("\n").map(Number);
    arr = arr.slice(0,arr.length-1)
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    alert( sum / arr.length);
  };
  reader.readAsText(file);
}

function getMostLongerSequenceOfNumbersASC(file) {

  let reader = new FileReader();

  reader.onload = function(event) {
    let  arr = event.target.result.split("\n").map(Number);
    arr = arr.slice(0,arr.length-1)
     findLargestIncreasingSequence(arr);
  };
  reader.readAsText(file);

}

function getMostLongerSequenceOfNumbersDESC(file) {

  let reader = new FileReader();

  reader.onload = function(event) {
    let  arr = event.target.result.split("\n").map(Number);
    arr = arr.slice(0,arr.length-1)
    findLargestDecreasingSequence(arr);
  };
  reader.readAsText(file);

}




function findMedian(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  arr.sort((a, b) => a - b);

  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    alert((arr[mid] + arr[mid - 1]) / 2);
    return;
  }
   alert(arr[mid]);
}
//9999999