import './style.scss'

function DriverLi({position, givenName, familyName, points}) {
    return (
        <li className="standings-position">
            <span className="standings-number">{position}</span> 
            <span className="standings-name">{givenName} {familyName}</span>
            <span className="standings-points">{points}</span>
        </li>
    )
}

export default DriverLi
