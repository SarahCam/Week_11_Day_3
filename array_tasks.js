var arrayTasks = {

	concat: function (arr1, arr2) {
		for(let element of arr2){
			arr1.push(element);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
	  let newArr = [];
		for(let element of arr){
			newArr.push(element * element);
		}
		return newArr;
	},

	sum: function (arr) {
		total = 0;
		for(let element of arr){
			total += element;
		}
		return total;
	},

	findDuplicates: function (arr) {
		let newArr = [];
		while(arr.length > 0){
			element = arr.pop();
			if (arr.includes(element) && !newArr.includes(element)){
				newArr.push(element);
			}
	 	}
		return newArr.sort();
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
