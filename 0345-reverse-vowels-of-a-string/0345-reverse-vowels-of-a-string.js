/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = (s) => {
    // Initialize two pointers, 'left' at the beginning of the string and 'right' at the end of the string.
    let left = 0;
    let right = s.length - 1;
    // Create a set of vowels to efficiently check if a character is a vowel.
    const vowels = 'aeiouAEIOU';
    // Convert the string to an array for easier character manipulation.
    const strArr = s.split('');
    // console.log(strArr)

    // Use a while loop to iterate as long as 'left' is less than 'right'.
    while (left < right) {
        // Inside the loop, move 'left' to the next vowel from the left by incrementing it while the character at 'left' is not a vowel.
        while (left < right && !vowels.includes(strArr[left])) {
            left++;
        }
        // Similarly, move 'right' to the next vowel from the right by decrementing it while the character at 'right' is not a vowel.
        while (left < right && !vowels.includes(strArr[right])) {
            right--;
        }

        // Swap the vowels found at 'left' and 'right' positions in the array.
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]

        // Increment 'left' and decrement 'right' to continue the process.
        left++;
        right--;
    }

    // Finally, convert the modified array back to a string and return it.
    return strArr.join('')
};