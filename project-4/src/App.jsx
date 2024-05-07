function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}


export default function App() {
  return (
    <div>
      <MyButton/>
    </div>
  )
}