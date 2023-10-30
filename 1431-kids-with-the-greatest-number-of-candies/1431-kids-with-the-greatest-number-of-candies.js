/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    // Use greedy approach. For each kid check if candies[i] + extraCandies ≥ maximum in Candies[i].
    let max = candies.reduce((a, b) => Math.max(a, b), - Infinity);
    let result = [];
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) result[i] = true;
        else result[i] = false;
    }
    
    return result;
};