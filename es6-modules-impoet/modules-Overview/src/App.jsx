import { useEffect, useState } from 'react'

import './App.css'

import Watch from './components/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])


  // const watches = [
  //   {name: "apple watch", price: 200},
  //   {name: "nokia watch", price: 150},
  //   {name: "hp laptop", price: 80},
  // ]

  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 6",
  //     "price": 399
  //   },
  //   {
  //     "id": 2,
  //     "name": "Galaxy Watch 4",
  //     "price": 249
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Versa 3",
  //     "price": 229
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Venu",
  //     "price": 349
  //   },
  //   {
  //     "id": 5,
  //     "name": "Huawei Watch GT 2 Pro",
  //     "price": 299
  //   }
  // ]
  





  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map((watch, idx) => <Watch key={idx} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
