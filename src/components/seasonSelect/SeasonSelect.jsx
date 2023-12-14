import { useEffect, useState } from 'react'
import './style.scss'
import { getSeasons } from '../../apiservice'

function SeasonSelect({onSelectSeason, defaultSeason}) {
    const [seasonList, setSeasonList] = useState([]);

    useEffect(() => {
        getSeasons().then(res => {
            const seasonsList = res.MRData.SeasonTable.Seasons;
            setSeasonList(seasonsList)
        })
    }, [])

    function onSeasonSelect(e) {
        onSelectSeason(e.target.value)
    }

    const seasons = seasonList.map(s => {
        return (
            <option value={s.season} key={s.season}>{s.season}</option>
        )
    })

    return (
        <select className="season-select" value={defaultSeason} onChange={onSeasonSelect}>
            {seasons}
        </select>
    )
}

export default SeasonSelect
