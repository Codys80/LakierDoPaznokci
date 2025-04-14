import { useState } from 'react'
import './App.css'
import purple from './assets/fioletowy.jpg'
import red from './assets/czerwony.jpg'
import gold from './assets/zloty.jpg'
import all from './assets/wszystkie.jpg'
import f1 from './assets/f1.jpg'
import f2 from './assets/f2.jpg'
import c1 from './assets/c1.jpg'
import c2 from './assets/c2.jpg'
import z1 from './assets/z1.jpg'
import z2 from './assets/z2.jpg'
import Lakier from './Lakier'

function App() {

  const [cart, setCart] = useState(0)
  const [category, setCategory] = useState("fioletowy")

  const paintNails = [
    {id: "f1", hue: "fioletowy", name: "No Risk No story", price: "27,29", ad: "Oszczedzasz 33%", image: f1 },
    {id: "f2", hue: "fioletowy", name: "Moony Whispers", price: "38,99", ad: "Mój wybór Kasia Kot", image: f2 },
    {id: "c1", hue: "czerwony", name: "Alizee", price: "27,29", ad: "Oszczędzasz 31%", image: c1 },
    {id: "c2", hue: "czerwony", name: "Mysterious Tale", price: "32,99", ad: "GET THE LOOK", image: c2 },
    {id: "z1", hue: "złoty", name: "Top Glow Gold", price: "29,99", ad: "XMAS Trend", image: z1 },
    {id: "z2", hue: "złoty", name: "Sparkling Kiss", price: "27,99", ad: "XMAS Trend", image: z2 }
  ]

  let filteredList = paintNails;

  if(category === "wszystkie") {
    filteredList = paintNails;
  }else {
    filteredList = paintNails.filter((nail) => nail.hue === category);
  }

  return (
    <>
      <div className='nav'>
        <h1>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
        <p>w koszyku: {cart}</p>
      </div>
      <div className='chooseNail'>
        <p>wybierz odcień</p>
        <img className="nailShade"src={purple} alt='fioletowy' onClick={() => setCategory("fioletowy")} />
        <img className="nailShade" src={red} alt='czerwony' onClick={() => setCategory("czerwony")} />
        <img className="nailShade" src={gold} alt='złoty' onClick={() => setCategory("złoty")} />
        <img className="nailShade" src={all} alt='wszystkie' onClick={() => setCategory("wszystkie")} />
      </div>
      <div className='nails'>
        {filteredList.map((nail) => (
          <Lakier key={nail.id} setCart={setCart} nail={nail} />
        ))}
      </div>
    </>
  )
}

export default App
