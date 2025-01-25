```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the return value of setInterval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This leads to memory leaks and unexpected behavior
    // when the component unmounts
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```