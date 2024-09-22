// packages import
const express= require('express');
const cors = require('cors');
const cookiePerser = require('cookie-parser');
 

const app =express();


// Call middleware

app.use(cors());
app.use(cookiePerser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    try {
        res.status(200).json({
            intro:'Welcome to Backend Server',
            creator:'The Server Made by MR.XXX',
            message:'Continue Develop with MR.XXX'
        });
    } catch {
        res.status(500).json({message: 'Internal Server Error'});
    }
});




module.exports = app ;