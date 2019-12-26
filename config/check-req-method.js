module.exports = {
    checkReqMethod : function(req, res, next) {
        /* Q.請問這樣處理/favicon.ico的請求是對的嗎?
        如果沒這樣做，每次都會在終端機跑出兩次的console.log
        */
        if (req.url !== '/favicon.ico') {
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
}