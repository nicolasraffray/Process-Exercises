
 /* You have an array of integers, and for each index you want to find the product of every
 * integer except the integer at that index.
 * <p/>
 * input :   [1, 7, 3, 4]
 * expected output:   [84, 12, 28, 21]
 * <p/>
 * why:   [7*3*4*1, 1*3*4, 1*7*4, 1*7*3]
 * <p/>
 * Do not use division in your solution.
 */


const findProduct = (array) => {
   var ans = [];
   
   for (let index = 0; index < array.length; index++) {
      var tempMutli = 1; 
      for (let index2 = 0; index2 < array.length; index2++) {
         if (index != index2) {
            tempMutli = tempMutli * array[index2]
         }
      }
      ans[index] = tempMutli;
   }
   console.log(ans);
}

findProduct([1, 7, 3, 4]);
console.log(' --- Next Test --- ');
findProduct([1,2,3,4]);