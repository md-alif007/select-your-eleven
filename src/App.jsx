import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailabelPlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayersData = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayersData();

function App() {

  const [toggle, setToggle] = useState(true);

  const [availabelBalance, setAvailableBalance] = useState(100000);

  return (
    <>
      <Navbar availabelBalance={availabelBalance}></Navbar>

      <div className='mx-auto w-11/12 flex justify-between m-5'>
        <h1 className='font-bold text-2xl'>Available players</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)}
            className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 
            ${toggle === true ? "bg-[#E7FE29]" : ""}`}>
            Available
          </button>
          <button onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0
            ${toggle === false ? "bg-[#E7FE29]" : ""}`}>
            Selected {0}
          </button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<p>loading players data...</p>}>
            <AvailablePlayers setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers></SelectedPlayers>
      }


    </>
  )
}

export default App
