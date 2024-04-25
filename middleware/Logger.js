exports.mylogger=(req,res,next)=>{
    console.log("middleware");
    next()
    }