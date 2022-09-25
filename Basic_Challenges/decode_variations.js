/* A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

Examples:

input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'. */

const decodeVariations = (digits) => {
  digits.split(''); // [1, 2, 6, 2]
  let n = digits.length; // 4
  let count = new Array(n + 1);
  count[0] = 1;
  count[1] = 1;
  // [1, 1, 2, 3, 3]

  if (digits[0] == '0') {
    return 0;
  }

  for (let i = 2; i <= n; i++) {
    count[i] = 0;

    if (digits[i - 1] > '0') {
      count[i] = count[i - 1];
    }

    if (digits[i - 2] == '1' || (digits[i - 2] == '2' && digits[i - 1] < '7')) {
      count[i] += count[i - 2];
    }
    console.log(count);
  }
  return count[n];
};
