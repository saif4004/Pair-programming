const transpose = function(matrix) {
    
   let transposeMatrix = [];
   for (let col = 0; col < matrix[0].length; col++) {
     transposeMatrix[col] = [];
     for (let row = 0; row < matrix.length; row++)
       transposeMatrix[col].push(matrix[row][col]);
   }
   return transposeMatrix;
     };

 const wordSearch = (letters, word) => { 
     if (letters.length === 0 || word.length === 0 || typeof word !== "string") {
         return false;
     }
     
     const horizontalJoin = letters.map(ls => ls.join(''))
     for (const l of horizontalJoin) {
         if (l.includes(word)) return true
     }
     const lettersTranspose = transpose(letters);
     const verticalJoin = lettersTranspose.map(ls => ls.join(''));
     for (const l of verticalJoin) {
         if (l.includes(word)) return true
     }
    
     return false;
 }
 
 module.exports = wordSearch