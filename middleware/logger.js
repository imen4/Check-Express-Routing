let date = new Date();

let CurrentHour=date.getHours();
console.log(CurrentHour)

let CurrentDay=date.getDay();
console.log(CurrentDay)

function logger (req,res,next){
    //dimanche et samedi ne fct pas
    if(CurrentHour>9 && CurrentHour<17 && CurrentDay>0 && CurrentDay<6)
    {
        next()
    }
    else{
        res.send('<h1>Sorry we are closed!!!</h1>')
    }
}

module.exports = logger