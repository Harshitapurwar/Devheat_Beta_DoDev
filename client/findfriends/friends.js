data = [{
    name:"sparsh",
    email:"sdadf"
},
{
    name:"adfdsf",
    email:"adfsg"
},
{
    name:"adfdsf",
    email:"adfsg"
}
]
addUsers(data);
function addUsers(data){
    const user=document.getElementById('friends-body');
    for(let i=0;i<Object.keys(data).length;i++){
        const userrow=document.createElement('div');
        user.appendChild(userrow);
        userrow.classList.add("user-row");
        const userinfo=document.createElement('div');
        userrow.appendChild(userinfo);
        userinfo.classList.add("user-info");
        const img=document.createElement('img');
        userinfo.appendChild(img);
        img.src='';
        img.alt = 'User';
        const span=document.createElement('span');
        userinfo.appendChild(span);
        span.innerText = `${data[i].name}`;
        const button=document.createElement('button');
        button.classList.add("action-follow");
        userrow.appendChild(button);
        button.innerText="Add in team";

    }
}

