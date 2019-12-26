const express = require('express')
const app = express()
const {checkReqMethod} = require('./config/check-req-method')
const responseTime = require('response-time')
const port = 3000

app.use(responseTime(function (req, res, time) {
  // Q.請問這樣導入寫好的./config/check-req-method是正確的作法嗎?
  checkReqMethod(req, res, time)
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