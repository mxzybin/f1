const _apiBase = 'http://ergast.com/api/f1/';

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Сліпий вже, не бачу що там в ${url}, здається справа пахне ${res.status}`)
    }

    return await res.json();
}

export async function getAllDrivers(season) {
    return getResource(`${_apiBase}${season}/drivers.json`);
}

export async function getStandings(season) {
    return getResource(`${_apiBase}${season}/driverStandings.json`);
}

export async function getSeasons() {
    return getResource(`${_apiBase}seasons.json?limit=90&offset=0`);

}
