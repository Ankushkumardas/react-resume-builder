const express=require('express')
const cors=require('cors')
const pdf=require('html-pdf')
const pdfsample=require('./pdf-sample')
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.post('/create-pdf',(req,res)=>{
    pdf.create(pdfsample(req.body),{}).toFile('Resume.pdf',(err)=>{
        if(err){
            res.send(Promise.reject())
            console.log(err)
        }
        res.send(Promise.resolve())
        console.log('success')
    })
})

app.get('fetch-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Resume.pdf`)
})

const port=4000;

app.listen(port,()=>{
    console.log('server is runninf at port 4000')
})