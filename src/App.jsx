import { useState } from 'react'
import './App.css'
import RandomDriver from './components/randomDriver/RandomDriver'
import Standings from './components/standings/Standings'
import SeasonSelect from './components/seasonSelect/SeasonSelect'


function App() {
  const [season, setSeason] = useState(2012)

  function selectSeason(year) {
    setSeason(year)
  }

  return (
    <>
    {/* <RandomDriver season={season}/> */}
      <SeasonSelect onSelectSeason={selectSeason} defaultSeason={season}/>
      <Standings season={season}/>
    </>
  )
}

export default App
