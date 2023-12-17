import { useEffect, useState } from "react";
import { getStandings } from "../../apiservice"
import './style.scss'
import DriverLi from "../driverLi/DriverLi";
import classNames from "classnames";

function Standings({season}) {
    const [standings, setStandings] = useState([])
    const [isPending, setPending] = useState(false)
    const [displayedSeason, setDisplayedSeason] = useState(season)

    let tableClasses = classNames('standings',{
        'pending': isPending
    })

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
        const {constructorId, name} = driver.Constructors[0]

        return (
            <DriverLi
                key={driverId}
                position={position}
                givenName={givenName}
                familyName={familyName}
                points={points}
                teamId={constructorId}
                team={name}/>
                )
    })

    return (
        <div className={tableClasses}>
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
