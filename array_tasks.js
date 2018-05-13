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

	sum: function (arr) {								// could use REDUCE
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
		return newArr.reverse();
	},

	removeAndClone: function (arr, valueToRemove) {				// FILTER
		let newArr = [];
		for(let element of arr){
			if (element !== valueToRemove){
				newArr.push(element);
			}
		}
		return newArr;
	},

	findIndexesOf: function (arr, itemToFind) {					// FOREACH
		let newArr = [];
		for(let element of arr){
			if (element === itemToFind){
				let index = arr.indexOf(element);
				newArr.push(index);
				arr[index] = 'DONE';
			}
		}
		return newArr;
	},

	sumOfAllEvenNumbersSquared: function (arr) {				// REDUCE
		let result = 0;
		for(let element of arr){
			if(element%2 === 0){
				result += (element * element);
			}
		}
		return result;
	}

}

module.exports = arrayTasks
