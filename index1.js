import express from "express";
import bodyParser from "body-parser";
import qr from 'qr-image';
import fs from 'fs';

const app = express();
const port = 3000;
var url="";
var qr_svg;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
  url=req.body["ur"];
  qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('public/images/dimpu.png'));
  res.render("index.ejs");
});


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});
