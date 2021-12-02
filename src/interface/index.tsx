export interface Comment{
    id:number,
    rating:number,
    comment:string,
    author:string,
    date: string,
}

export interface Dish{
    id:number,
    name: string,
    image:string,
    category:string,
    label:string,
    price:string,
    description: string,
    comments:Comment[],
}

export interface Reservation{
    _id:string,
    name:string,
    phone:string,
    numberOfPerson:number,
    smoking:boolean,
    dateTime:string,
    specialRequests:string,
}

export interface IReservationForm{
    name:string;
    phone: string;
    numberOfPeople: number;
    smoking: boolean;
    dateTime: string;
    specialRequest: string; 

}