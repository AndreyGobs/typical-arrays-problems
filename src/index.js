
exports.min = function min (array) {
   if (array === undefined || array === null || array.length <= 0) {
      return 0;
    } else {
      let minN = array.sort((a, b) => a - b);
      return minN[0];
    }
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length <= 0) {
      return 0;      
    } else {
      let maxN = array.sort((a, b) => b - a);
      return maxN[0];
    }
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length <= 0) {
      return 0;
  } else {
      let sum = array.reduce((sum, current) => sum + current, 0);
      let avg = sum / array.length;
      return avg;
  }
}
