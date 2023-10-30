/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complimentPair = target - value;
        if (map[complimentPair] !== undefined) return [map[complimentPair], i]
        else  map[value] = i;
    }
};