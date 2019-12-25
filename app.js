const express = require('express')
const app = express()
const {checkReqMethod} = require('./config/check-req-method')

const port = 3000

// 列出全部 Todo
app.get('/', checkReqMethod ,(req, res) => {
    res.send('列出全部 Todos')
})

// 新增一筆 Todo 頁面
app.get('/new', checkReqMethod, (req, res, next) => {
    res.send('新增 Todo 頁面')
})
 
// 顯示一筆 Todo 的詳細內容
app.get('/:id',checkReqMethod , (req, res) => {
    res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/',checkReqMethod , (req, res) => {
    res.send('新增一筆  Todo')
})

app.delete('/:id/delete', checkReqMethod, (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})