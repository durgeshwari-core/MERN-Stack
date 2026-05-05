import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["Learn React", "Build App"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <h1>React JSX Demo</h1>

      {/* Counter Section */}
      <div style={styles.card}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      {/* Todo Section */}
      <div style={styles.card}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={input}
          placeholder="Add new task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {items.length === 0 && <p>No tasks available</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "30px",
    textAlign: "center",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "20px auto",
    width: "300px",
    borderRadius: "8px",
  },
};