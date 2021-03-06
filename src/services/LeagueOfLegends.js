const API_BASE = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/pt_BR'

const allChampions = async () => {
    const req = await fetch(`${API_BASE}/champion.json`)
    const json = await req.json()
    const data = Object.values(json.data)
    return data
}

const filterClassChampions = async (tag) => {
    const req = await fetch(`${API_BASE}/champion.json`)
    const json = await req.json()
    const data = Object.values(json.data).filter(p => p.tags[0] === tag)
    return data
}

const championDetails = async (id) => {
    const req = await fetch(`${API_BASE}/champion/${id}.json`)
    const json = await req.json()
    const data = Object.values(json.data)
    return data
}

export default {
    getChampionsList: async () => {
        return [
            {
                items: await allChampions()
            }
        ]
    },
    getClassChampionLists: async () => {
        return [
            {
                title: 'Fighters',
                items: await filterClassChampions('Fighter')
            },
            {
                title: 'Mages',
                items: await filterClassChampions('Mage')
            },
            {
                title: 'Marksmans',
                items: await filterClassChampions('Marksman')
            },
            {
                title: 'Supports',
                items: await filterClassChampions('Support')
            },
            {
                title: 'Assassins',
                items: await filterClassChampions('Assassin')
            },
            {
                title: 'Tanks',
                items: await filterClassChampions('Tank')
            }
        ]
    },
    getChampionDetails: async (id) => {
        return await championDetails(id)
    }
}