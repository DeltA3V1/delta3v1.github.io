export type LineColor = `red` | `yellow` | `green`

export type StationBranch = {
    side: 'left' | 'right'
    label: string
    to: string
    line: LineColor
}

export type Station = {
    id: string
    label: string
    headerLabel?: string
    showStationHeader: boolean
    branches?: StationBranch[]
}

export const stations = [
    {
        id: 'landing',
        label: 'Landing',
        showStationHeader: false,
    },
    {
        id: 'sitemap',
        label: 'Sitemap',
        showStationHeader: false,
    },
    {
        id: 'about',
        label: 'About',
        showStationHeader: true,
    },
    {
        id: 'uw',
        label: 'UW',
        showStationHeader: true,
    },
    {
        id: 'toolbox',
        label: 'Toolbox',
        showStationHeader: true,
    },
    {
        id: 'portfolio',
        label: 'Portfolio',
        showStationHeader: true,
    },
    {
        id: 'blog',
        label: 'Blog',
        showStationHeader: true,
    },
    {
        id: 'contact',
        label: 'Contact',
        showStationHeader: true,
    }
] as const satisfies readonly Station[]

export type StationId = (typeof stations)[number]['id']

export const stationIds = stations.map((station) => station.id) as readonly StationId[]

export function getStation(id: StationId) {
    return stations.find((station) => station.id === id)
}
export function getPrevStation(id: StationId) {
    const index = stations.findIndex((station) => station.id === id)
    if (index === -1) return undefined
    return stations[index - 1]
}
export function getNextStation(id: StationId) {
    const index = stations.findIndex((station) => station.id === id)
    if (index === -1) return undefined
    return stations[index + 1]
}