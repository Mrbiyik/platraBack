var express = require('express');
const fetch = require('node-fetch')
var api = require("../socketAPI")

var router = express.Router();
var io = api.io


var isvicreData = {}



async function getData() {

    

    let url = "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";
    let resp = await fetch(url)
    console.log(resp.status)
    let data = await resp.json()
    isvicreData = data
    //braodcasting
    io.emit('broadcast',isvicreData);

}



getData()

setInterval(getData, 2000)

router.get("/", function (req, res, next) {


   
    res.send(isvicreData);


});



module.exports = router;