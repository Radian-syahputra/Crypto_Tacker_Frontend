import api from "./api";


export const addFavorite = async (coinId : string) => {
    const response = await api.post('/favorite', {
        coinId
    })

    return response.data
}


export const removeFavorite = async (coinId : string) => {
    const response = await api.delete(`/favorite/${coinId}`)

    return  response.data
}


export const getFavoriteList = async () => {
    const response = await api.get('/favorite')

    return response.data
}