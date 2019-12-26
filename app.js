const express = require('express')
const app = express()
const {checkReqMethod} = require('./config/check-req-method')
const responseTime = require('response-time')
const port = 3000

app.use(responseTime(function (req, res, time) {
  // Q.請問有辦法把我寫好的/config/check-req-method.js直接導入拿來用嗎?
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
}))

// 列出全部 Todo
app.get('/', (req, res) => {
  // Q.為什麼checkReqMethod不能放在這呢?
  res.send('列出全部 Todos')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')
})
 
// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})