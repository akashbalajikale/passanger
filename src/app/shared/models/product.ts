 export interface Iproduct{
    pname : string,
    pdetails : string,
    pId : string,
    pstatus : ProductStatus
 }

 export enum ProductStatus {
    Inprogress = "Inprogress",
    Dispatched = "Dispatched",
    Delivered = "Delivered",
 }