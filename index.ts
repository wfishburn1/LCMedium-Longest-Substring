function lengthOfLongestSubstring(s: string): number {
    let start = 0; // Left pointer of the sliding window
    let maxLength = 0; // Tracks the maximum length of substring
    const charSet = new Set<string>(); // To store unique characters in the current window

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the set, remove characters from the start
        while (charSet.has(currentChar)) {
            charSet.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(currentChar);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3