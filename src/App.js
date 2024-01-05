import React, { useEffect } from 'react';
import Die from './components/Die';

function App() {
  function numberGenerator() {
    return Math.floor(Math.random() * 10) + 1;
  }

const [numbers, setNumbers] = React.useState([
    {
      id: 0,
      number: numberGenerator(),
      on: false
    },
    {
      id: 1,
      number: numberGenerator(),
      on: false
    },
    {
      id: 2,
      number: numberGenerator(),
      on: false
    },
    {
      id: 3,
      number: numberGenerator(),
      on: false
    },
    {
      id: 4,
      number: numberGenerator(),
      on: false
    },
    {
      id: 5,
      number: numberGenerator(),
      on: false
    },
    {
      id: 6,
      number: numberGenerator(),
      on: false
    },
    {
      id: 7,
      number: numberGenerator(),
      on: false
    },
    {
      id: 8,
      number: numberGenerator(),
      on: false
    },
    {
      id: 9,
      number: numberGenerator(),
      on: false
    }
])
  
  const [win, setWin] = React.useState(false)
  const [first, setFirst] = React.useState(0)

      function handleChange(event, idiul) {
      setNumbers((old) => {
        const new_numbers = [];
        for (let i = 0; i < 10; i++){
          if (old[i].id === idiul && old[i].number === first) {
            const new_elem = {
              ...old[i],
              on: !old[i].on
            }
            new_numbers.push(new_elem)
          } else if (old[i].id === idiul && first === 0) {
            setFirst(old[i].number);
            const new_elem = {
              ...old[i],
              on: !old[i].on
            }
            new_numbers.push(new_elem)
          }
          else {
            new_numbers.push(old[i])
          }
        }
        return new_numbers;
      })
  }

  React.useEffect(() => {
    let aux = true;
    for (let i = 0; i < 10; i++){
      if (numbers[i].on !== true) {
        aux = false;
      }
    }
    if (aux) {
      setWin(true)
    }
  },[numbers])
  
  function handle_reset() {
    setNumbers(old => {
      const new_array = []
      for (let i = 0; i < 10; i++){
        if (old[i].on && win===false) {
          const new_elem = {
            ...old[i]
          }
          new_array.push(new_elem);
        } else if (old[i].on === false) {
          const new_elem = {
            ...old[i],
            number: numberGenerator()
          }
          new_array.push(new_elem)
        } else if (win === true) {
          const new_elem = {
            ...old[i],
            number: numberGenerator(),
            on : !old[i]
          }
          setWin(false)
          setFirst(0)
          new_array.push(new_elem)
        }
      }
      return new_array
  })
}


  return (
    <main>
      <div className='dice-container'>
        {numbers.map((number, index) => (
          <Die
            key={index}
            number={number.number}
            on={number.on}
            id={number.id}
            handleCheck={handleChange}
          />
        ))}
        <button onClick={handle_reset}>
          {
            win ? "Play again" : "Mix"
          }
        </button>
      </div>
    </main>
  );
}

export default App;
