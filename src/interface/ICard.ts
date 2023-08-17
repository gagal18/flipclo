export interface ICard{
    value: number;
    index: number;
    length: number;
}


export interface ICardBulk{
    value: number;
    cardsCount: number;
}

export interface ICardGroup{
    toCount: boolean;
    value: number;
}
