const express=require('express')
const fs = require('fs');
const app=express()

app.all('*',function (req,res,next) {
  res.header('Access-Control-Allow-Origin','*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers',"content-type")
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
    if(req.method.toLowerCase()=='options'){
      res.send(200)
    }
    else{
      next()
    }

})

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/multidata.json',function (err,data){
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
});
app.get('/home/homedata',function (req,res) {
  fs.readFile('./data/homedata.json',function (err,data){
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
});
app.listen(8000,function () {
console.log('serve is running!')
})
