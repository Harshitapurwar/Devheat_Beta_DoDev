const hackathon = require("../db/models/HackathonSchema")


data = [{
    name:"sparsh",
    email:"sdadf"
},
{
    mname:"adfdsf",
    email:"adfsg"
},
{
    mname:"adfdsf",
    email:"adfsg"
}
]

hackathon = [
    {

    },
    {

    }
]

function addUsers(data){
    const userDiv = document.getElementById('users_list')

    for(var i= 0 ; i<data.length ; i++){
        var div = userDiv.appendChild('div')
        var p = div.appendChild('p')
        var h1 = div.appendChild('p')

    }
}

// how to add html elements in dom using javascript