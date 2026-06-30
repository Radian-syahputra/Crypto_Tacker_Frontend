

export interface User {
    id : string,
    username : string,
    email : string
}


export interface CoinMarket {
    id : string
    symbol : string
    name : string
    image : string
    current_price : number
    market_cap: number
    market_cap_rank : number
    price_change_percentage_24h : number
    total_volume : number
}

export interface CoinDetail {
    id : string
    symbol : string
    name : string
    image : {
        large : string
    }
    market_data : {
        current_price : {usd : number}
        market_cap : {usd : number}
        total_volume : {usd : number}
        price_change_percentage_24h : number
        price_change_percentage_7d : number
        price_change_percentage_30d : number
    }
    description : {
        en : string
    }
}

export interface Favorite {
  coinId: string
}