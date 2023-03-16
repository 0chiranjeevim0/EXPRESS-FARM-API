const express = require('express');


const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/',(request,response) =>{
    response.json({data:"hello,world"});
})

app.post('/calculate',calculatecost,(request,response) =>{
    const data = request.body;
    console.log(data);
    
})

function calculatecost(request,response,next){
    let crops = {
        "rice":7349,
        "wheat":12890,
        "maize":6220,
        "gingelly":1092,
        "groundnut":12478

    }

crop=request.body.crop_name;
area=request.body.land_area;
calc=crops[crop]*area;

response.json({cost:calc});
next();
}
app.listen(PORT,(error) =>{
    if(!error){
        console.log(`SERVER STARTED ON PORT ${PORT}`);
    }
})