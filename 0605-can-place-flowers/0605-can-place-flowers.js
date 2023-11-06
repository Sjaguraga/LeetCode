/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    // Initialize a count to keep a reack of the planted flowers.
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = i === 0 ? 0 : flowerbed[i - 1]; // Check the previous plot (left).
            const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]; // Check the next plot (right).
            
            // If both plots are empty...
            if (prev === 0 && next === 0) {
                flowerbed[i] = 1; // Plant flower in the current plot.
                count++; // Increment the count of planted flowers.
            }
        }
    }
    // Return true if enough flowers were planted , otherwise false.
    return count >= n;
};