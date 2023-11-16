/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    // Initialize an array to store the result.
    let result = [];
    // Initialize variables to keep track of the product of elements before and after the current index.
    let prefix = 1; // To store product of elements before the current index.
    let suffix = 1; // To store product of elements after the current index.

    // Calculate the product of elements before the current index and store in the result array.
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix; // Store product of elements before the current index.
        prefix *= nums[i]; // Update prefix for the next iteration.
    }

    // Calculate the product of elements after the current index and update the result array.
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix; // Multiply the product of elements before with the product of elements after.
        suffix *= nums[i]; // Update suffix for the next iteration.
    }

    // The result array now contains the product of all elements except the one at the current index.
    return result;
};