"use strict";

/**
 * ================ Problem ==================
 * Rotate array
 * [1, 2, 3, 4, 5, 6, 7] => [3, 4, 5, 6, 7, 1, 2]
 */

/*
 * Using extra space
 */
function rotateWithExtraSpace(arr, d) {
  const n = arr.length;
  const tempArrayOfMoving = [];
  const temptArrayOfRem = [];
  if (n <= d) {
    d = d - n;
  }

  for (let i = 0; i < n; i++) {
    while (i < d) {
      tempArrayOfMoving.push(arr[i]);
      i++;
    }

    temptArrayOfRem.push(arr[i]);
  }

  return temptArrayOfRem.concat(tempArrayOfMoving);
}

module.exports = {
  rotateWithExtraSpace,
};
