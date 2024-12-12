```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the timeout inside the useEffect
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function to clear the timeout
    // This leads to multiple timeouts being set, causing unexpected behavior
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
```