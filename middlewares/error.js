class Erronhandler extends Error{
    constructor(message,statuscode){
           super(message);
           this.statuscode= statuscode;
    }
}

export const errorMidleware=(err,req,res,next)=>{

    err.message=err.message || "internal server Error"
    err.statuscode=err.statuscode || 505
    return res.status(err.statuscode).json({
        success:false,
        message:err.message
   })
}


export default Erronhandler;