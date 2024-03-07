
import './App.css'
import {Animal, Dog, Cat} from "./Animal.ts";

function App() {
  const dog = new Dog("dog");
  const cat = new Cat("cat");
  type DC = Dog | Cat;
  const animals: DC[] = [dog, cat];

const handleClick = () => {

  animals.forEach(animal => {
    animal.bark();

    if (animal instanceof Dog) {
      animal.killThief();
      console.log(animal.catchThief)
    }
  })
}


  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          bark
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
