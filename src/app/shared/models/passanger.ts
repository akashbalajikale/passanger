export interface Ipassanger{
    id : number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: null | number,
    children: null | Array<Ichild>,
}

export interface Ichild{
    name : string,
    age :number
}