Approach: Sliding Window
Use two pointers (start and end) to represent a sliding window over the string.
Use a Set or a Map to keep track of the characters in the current window.
Expand the window by moving end. If a character is repeated:
Move start forward until the window no longer has duplicates.
Track the maximum length of the substring as you iterate.
