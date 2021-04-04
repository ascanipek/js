const accessControl = (req, res, next) => {
    // console.log("Acces Control Middleware Çalıştı")
    if(req.method == "GET"){
        if(req.body.userName == "Eren" && req.body.password == "123456"){
            next()
        }
        else{
            res.status(401).json({
                success: false,
                message: "Kullanıcı adı veya Parola Hatalı!"
            })
        }
        if(req.method == "POST"){
            if(req.body.userName == "Eren" && req.body.password == "123456"){
                next()
            }
            else{
                res.status(401).json({
                    success: false,
                    message: "Kullanıcı adı veya Parola Hatalı!"
                })
            }
        }
    }
    
}

module.exports = {
    accessControl
}
