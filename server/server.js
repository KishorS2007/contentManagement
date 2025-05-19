require('dotenv').config(); 

const express = require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require("./src/db/db");

const app = express();

app.use(cors());
app.use(bodyparser.json()); 


const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/login',(req,res)=>{
  res.json({hi:"zfknbvdnb",akjdfn:"dflnbvdfkn"})
})

app.get('/class-name',(req,res)=>{
  const sql = `SELECT * FROM class_table`

  db.query(sql,(err,result)=>{
    if(err){
      console.log("unable to fetch classNames");
      return res.status(500).json({500:"Internal server Error"})
    }
    console.log('\x1b[36m%s\x1b[0m',"status - className fetch successful")
    return res.status(200).json(result);
  })
})

app.get('/class-name/subject-name',(req,res)=>{
  const sql  = `SELECT * FROM subject_table`;
  db.query(sql,(err,result)=>{
    if(err){
      console.log("unable to fetch subjectName");
      return res.status(500).json({Error:"unable to fetch data"});
    }
    console.log('\x1b[36m%s\x1b[0m',"status - subjectName fetch successful")
    return res.status(200).json(result);
  })
})