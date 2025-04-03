document.addEventListener("DOMContentLoaded", function () {
    const questionsContainer = document.getElementById("questions-container");

    // List of all Striver 75 Hard questions with their LeetCode links
    const questions = [
        { number: 1, title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
        { number: 2, title: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/" },
        { number: 3, title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
        { number: 4, title: "Kadane’s Algorithm", link: "https://leetcode.com/problems/maximum-subarray/" },
        { number: 5, title: "Sort Colors (Dutch National Flag)", link: "https://leetcode.com/problems/sort-colors/" },
        { number: 6, title: "Stock Buy and Sell", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { number: 7, title: "Rotate Matrix", link: "https://leetcode.com/problems/rotate-image/" },
        { number: 8, title: "Merge Overlapping Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
        { number: 9, title: "Merge Two Sorted Arrays", link: "https://leetcode.com/problems/merge-sorted-array/" },
        { number: 10, title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { number: 11, title: "Missing and Repeating Numbers", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
        { number: 12, title: "Search in a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { number: 13, title: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/" },
        { number: 14, title: "Majority Element (>N/2)", link: "https://leetcode.com/problems/majority-element/" },
        { number: 15, title: "Majority Element (>N/3)", link: "https://leetcode.com/problems/majority-element-ii/" },
        { number: 16, title: "Grid Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
        { number: 17, title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/" },
        { number: 18, title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
        { number: 19, title: "4 Sum", link: "https://leetcode.com/problems/4sum/" },
        { number: 20, title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { number: 21, title: "Largest Subarray with 0 Sum", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { number: 22, title: "Count Subarrays with Given XOR", link: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
        { number: 23, title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { number: 24, title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        { number: 25, title: "Find Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        { number: 26, title: "Detect a Cycle in Linked List", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { number: 27, title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { number: 28, title: "Check if a Linked List is Palindrome", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        { number: 29, title: "Find Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        { number: 30, title: "Merge Two Sorted Linked Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { number: 31, title: "Remove N-th Node from End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { number: 32, title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/" }
    ];

    // Load previous state from local storage
    let remainingQuestions = JSON.parse(localStorage.getItem("remainingQuestions"));

    // If no remaining questions, reset to full list
    if (!remainingQuestions || remainingQuestions.length === 0) {
        remainingQuestions = [...questions];
    }

    // Select a random question and remove it from the list
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const selectedQuestion = remainingQuestions.splice(randomIndex, 1)[0];

    // Save updated remaining questions to local storage
    localStorage.setItem("remainingQuestions", JSON.stringify(remainingQuestions));

    // Display the selected question
    questionsContainer.innerHTML = `
        <p><strong>LeetCode #${selectedQuestion.number}:</strong> 
        <a href="${selectedQuestion.link}" target="_blank">${selectedQuestion.title}</a></p>
    `;
});
