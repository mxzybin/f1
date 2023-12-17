import './style.scss'
import classNames from 'classnames'

function DriverLi({position, givenName, familyName, points, teamId, team}) {
    let teamClass = classNames('standings-team', teamId)

    return (
        <li className="standings-position">
            <span className={teamClass} title={team}></span>
            <span className='standings-number'>{position}</span> 
            <span className="standings-name">{givenName} {familyName}</span>
            <span className="standings-points">{points}</span>
        </li>
    )
}

export default DriverLi
