```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```