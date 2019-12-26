module.exports = {
    checkReqMethod : function(req, res, time) {
        /* Q.因為每次都會多一個/favicon.ico的請求，
        上網查好像是因為程式預設每次request都會連帶發出一個網頁頁籤fav icon的請求所導致?
        網路說可以這樣處理，不知道這樣是對的嗎?
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
            console.log(yy, "-", mm, "-", dd, " ", hours,":", mins, ":", secs, "|",method, "from", url, "|", Math.round(time), 'ms')
        }
    }
}