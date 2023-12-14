import { useEffect, useState } from "react";
import { getStandings } from "../../apiservice"
import './style.scss'
import DriverLi from "../driverLi/DriverLi";

function Standings({season}) {
    const [standings, setStandings] = useState([])
    const [pending, setPending] = useState(false)
    const [displayedSeason, setDisplayedSeason] = useState(season)

    let classNames = pending ? 'standings pending' : 'standings';

    useEffect(() => {
        setPending(true)
        setStandings([])
        getStandings(season).then(res => {
            const standingsData = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            setStandings(standingsData)
            setDisplayedSeason(season)
            setPending(false)
        })

    }, [season])

    const drivers = standings.map(driver => {
        const {position, points} = driver
        const {givenName, familyName, driverId} = driver.Driver
        return (
            <DriverLi
                key={driverId}
                position={position}
                givenName={givenName}
                familyName={familyName}
                points={points}/>
        )
    })

    return (
        <div className={classNames}>
            <h3>
                {displayedSeason} Standings
            </h3>
            <ul className="standings-list">
                {drivers}
            </ul>
        </div>
    )
}

export default Standings
