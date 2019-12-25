module.exports = {
    checkReqMethod : function(req, res, next) {
        const url = req.url
        const method = req.method
        
        date = new Date
        const yy = date.getFullYear()
        const mm = date.getMonth() + 1
        const dd = date.getDate()
        const hours = date.getHours()
        const mins = date.getMinutes()
        const secs = date.getSeconds()
        console.log(yy, "-", mm, "-", dd, " ", hours,":", mins, ":", secs, "|",method, "from", url)
        next()
    }
}