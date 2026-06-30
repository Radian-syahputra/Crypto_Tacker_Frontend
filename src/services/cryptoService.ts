import api from "./api";


export const getCoinList = async (page : number = 1) => {
    const response = await api.get(`/crypto/coins`, {
        params : {  page}
    })
    return response.data
}


export const getCoinDetail = async (id : string) => {
 const response = await api.get(`/crypto/coins/${id}`)   
 return response.data
}


export const getCoinChart = async (id : string, days : number) => {
    const response = await api.get(`/crypto/coins/${id}/chart`, {
        params : {days}
    })

    return response.data
}

export const searchCoin = async (query : string) => {
    const response  = await api.get('/crypto/search', {
        params : {query}
    })

    return response.data
}