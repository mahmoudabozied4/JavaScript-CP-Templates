// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's: O(n)
function slidingWindow(nums) {
    let maxSum = nums[0];
    let curSum = 0;
    let maxL = 0, maxR = 0;
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        if (curSum < 0) {
            curSum = 0;
            L = R;
        }
        curSum += nums[R];
        if (curSum > maxSum) {
            maxSum = curSum;
            maxL = L; 
            maxR = R;     
        }    
    }    
    return [maxL, maxR];
}
