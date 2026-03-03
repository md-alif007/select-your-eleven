import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailabelPlayers/AvailablePlayers'

const fetchPlayersData = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayersData();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>loading players data...</p>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
