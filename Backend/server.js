import express from 'express';

const app = express();
app.get('/',(req,res)=>{
    res.send("server is active");
})
app.get('/api/lists',(req,res)=>{
    const lists=[
        {
            id:0,
            name:'Aakash gupta',
            branch:'iiot-b2'
        },
        {
            id:1,
            name:'nobudy',
            branch:'ar-b1'
        },
        {
            id:2,
            name:'somebuddy',
            branch:'aids-b1'
        },
        {
            id:3,
            name:'anybuddy',
            branch:'aiml-b2'
        },
        {
            id:4,
            name:'buddy',
            branch:'iiot-b1'
        }
    ];
    res.send(lists);
});
const port=process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
    
})