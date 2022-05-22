import "../style.css";

function App() {
  function handleChange() {
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX");
  }

  let names = ["Arya", "John", "Bran"];

  let fruits = [
    { id: "apple", value: "🍎 apple" },
    { id: "orange", value: "🍊 orange" },
    { id: "grape", value: "🍇 grape" },
    { id: "pear", value: "🍐 pear" },
  ];

  return (
    <>
      <button onClick={() => alert("Hello React Event!")}>Click Me!</button>
      <button onClick={handleChange}>How Can I help You?</button>
      {names.map((name) => (
        <button onClick={() => alert(`Hello ${name}`)} key={name}>
          {name}
        </button>
      ))}
      {fruits.map((fruit) => (
        <button key={fruit.id} onClick={() => alert(fruit.value)}>
          {fruit.value}
        </button>
      ))}
    </>
  );
}

export default App;
