import { useEffect, useState } from "react"
import './style.scss'
import {getAllDrivers} from "../../apiservice";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function RandomDriver({season}) {
    const [driver, setDriver] = useState([]);

    useEffect(() => {
        getAllDrivers(season).then(res => {
            const drivers = res.MRData.DriverTable.Drivers
            const randomDriver = drivers[getRandomInt(drivers.length)]

            setDriver({
                code: randomDriver.code,
                familyName: randomDriver.familyName,
                givenName: randomDriver.givenName,
                permanentNumber: randomDriver.permanentNumber,
                url: randomDriver.url,
                driverId: randomDriver.driverId,
            })
        })
    }, [])

    function onRandom() {

        getAllDrivers(season).then(res => {
            const drivers = res.MRData.DriverTable.Drivers
            const randomDriver = drivers[getRandomInt(drivers.length)]

            setDriver({
                code: randomDriver.code,
                familyName: randomDriver.familyName,
                givenName: randomDriver.givenName,
                permanentNumber: randomDriver.permanentNumber,
                url: randomDriver.url,
                driverId: randomDriver.driverId,
            })
        })
    }

    const {code, familyName, givenName, permanentNumber, url, driverId} = driver;


     return (
        <div className="random-block">
            <button onClick={onRandom}>
                Get random driver
            </button>
            <div className="random-driver">
                <h3>
                #{permanentNumber} {givenName} {familyName} ({code})
                </h3>
                <div className="random-buttons">
                    <a href={driverId} className="random-btn">Detail</a>
                    <a href={url} className="random-btn">Wiki</a>
                </div>
            </div>

        </div>
     )
}

export default RandomDriver
