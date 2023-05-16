const connection =require("../connection.ts")

module.exports={
    getAll:function(callback){
        const sql=`SELECT * FROM users`
        connection.query(sql,function(err,result){
            callback(err,result)
        })
    },
    signUp:function(user,callback){
        const sql=`INSERT INTO users SET ?`
        connection.query(sql,user,function(err,result){
            callback(err,result)
        })
    },
    login:function(email,callback){
        const sql=`SELECT * FROM users WHERE email=${email}`
        connection.query(sql,[email],function(err,result){
            callback(err,result)
        })
    }
}