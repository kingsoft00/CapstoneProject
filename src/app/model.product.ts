export class Product {
    constructor(public _id:number, public name:string, public size:string, public color:string, public image:string, public gender:string,public price:number, public brand:string){}
}
export class Brand {
    constructor(public _id:any, public brand:string){}
}
export class User {
    constructor(public _id:any, public username:string, public email:string, public password:string){}
}
export class Item {
    constructor(public product:Product,public quantity:number){}
}