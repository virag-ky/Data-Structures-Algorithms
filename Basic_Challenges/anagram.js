/* Return true if the two given strings are anagrams. Otherwise, return false.

A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

For example:

friend and Finder are anagrams.
The Morse Code and Here come dots are anagrams as well.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

 */
const anagram = (str1, str2) => {
  let string1 = arrangeStr(str1);
  let string2 = arrangeStr(str2);

  return string1 === string2;
};

const arrangeStr = (str) => {
  return str.replace(/[\W_]/g, '').toLowerCase().split('').sort().join('');
};

console.log(anagram('hello 1', 'OL_1LEH')); // true
console.log(anagram('House', 'mouse')); // false
