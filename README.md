# 🧩 LeetCode Solutions

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Algorithms](https://img.shields.io/badge/Algorithms-Yes-brightgreen)
![LeetHub](https://img.shields.io/badge/LeetHub-3.0-blue)

A collection of **LeetCode problem solutions** written in **JavaScript**, showcasing clean and optimized code for practicing algorithms and data structures.  
All solutions are stored in a **single folder** for easy access.  

---

## 🚀 Features

- 📝 **All-in-One Folder** – All solutions in a single place  
- 🔗 **Problem Links** – Each file contains a reference to the original LeetCode problem  
- ⚡ **Optimized Code** – Focused on readability and efficiency  
- 📂 **Automatic Sync** – Solutions can be synced via LeetHub 3.0  

---

## 🛠️ Technologies Used

- **JavaScript**  
- **Git & GitHub**  
- **LeetHub 3.0 Chrome Extension**  

---

- All solution files are in the root folder.  
- Each file is named after the LeetCode problem for easy identification.  

---

## 🔗 Links

- GitHub Repository: [LeetCode-DSA](https://github.com/abdulvahabaa/LeetCode-DSA.git)  
- LeetCode Profile: [LeetCode Dashboard](https://leetcode.com/u/abdulvahabaa/)  

---

## 📌 How to Use

1. Browse the repository files.  
2. Open a solution file to view the code and problem reference link.  
3. Use it for **learning, reference, and practice**.  

---

**Example Code Preview**  

```javascript
// Example: Two Sum
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
};
