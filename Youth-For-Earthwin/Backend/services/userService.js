const db=require('../config/db')

const checkpass=async(data,req,res)=>{
    if(data.length>0){
        if(data[0].password==password){
            res.json({
                status:200,
                message:'Login success :)'
            })
        }else{
            res.json({
                status:400,
                message:'password does not matched ;-;'
            })
        }
    }
}


const userLogin=async(req,res)=>{
    const {username,password}=req.body;

    const sqlQuery=`SELECT * FROM student WHERE username='${username}'`;
    //const sqlQuery1=`SELECT * FROM student WHERE password='${password}'`;

    await db.query(sqlQuery,async(error,data)=>{
        try{
            if(data.length==0){
                res.json({
                    status:400,
                    message:"user does not exist"
                })
            }
            if(data.length>0){
                checkpass(data,req.body,res)
            }
        }catch(error){
            console.log(error)
            res.json({
                message:error
            })
        }
    })
}


module.exports={userLogin}