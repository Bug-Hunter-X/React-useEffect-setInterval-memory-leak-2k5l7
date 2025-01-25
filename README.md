# React useEffect setInterval memory leak
This repository demonstrates a common error in React applications: memory leaks caused by improper use of `setInterval` within the `useEffect` hook.
The `bug.js` file shows the incorrect implementation where the `setInterval` is not properly cleaned up when the component unmounts. This leads to continued increment of the counter even after the component is removed from the DOM, resulting in a memory leak.
The `bugSolution.js` file demonstrates the correct implementation, including a cleanup function to stop the interval when the component unmounts, preventing the memory leak.