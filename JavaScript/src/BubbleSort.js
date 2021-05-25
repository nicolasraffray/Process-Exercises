    /**
     * Repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
     * The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
     */

    const bubbleSort = (array) => {
        let noswa
        while(){
            for (let index = 0; index < array.length; index++) {
                if (array[index] > array[index + 1]) {
                    array = swap(array);
                }
                console.log(swap(array));
            }
        }

    }

const swap = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index + 1]) {
            var temp = array[index];
            var temp2 = array[index+1];
            array[index] = temp2;
            array[index + 1] = temp;
        }
    }
    return array
}
    
console.log(bubbleSort([2, 5, 3, 1, 6, 3]));

