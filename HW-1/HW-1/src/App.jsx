import './App.css'

function App() {

  const myName = "Oleh";
  
  const favSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  const num1 = 5;
  const num2 = 10;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <>
    <h1>{myName}</h1>

    <p>Ласкаво просимо до нашого сайту</p>
    
    <img
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDjEkb_oMpE8kjWJhrr6BL2RBcDnLlaQlqg&s"}
        alt={"Собака"}
        width="300"
        />

    <a href={favSite.url}>{favSite.name}</a>

    <p>{num1 + num2}</p>

    <ul>
      {colors.map((color, i) => (
        <li key={i}>{color}</li>
      ))}
    </ul>
    </>
  )
}

export default App
