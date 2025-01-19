class apiResponse {
    constructor(statusCode ,data,message="message" ){
        this.statusCode= statusCode;
        this.data=data
        this.message=message ;
    }
}
export  default    apiResponse