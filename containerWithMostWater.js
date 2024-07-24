const maxArea  = ( height) => {
    let maxArea = 0, left = 0, right = height.length - 1;
    
    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;        
}

console.log(maxArea([12, 4, 6, 8, 1]));