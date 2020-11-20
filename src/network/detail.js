import {request} from "./newwork.js";

export function getDetail(iid){
    return request({
        url:'./detail',
        params:{
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.newPrice
        this.oldProce = itemInfo.oldProce
        this.discount = itemInfo.discount
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.realPrice
    }
}

