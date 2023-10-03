// data = [{
//     name:"sparsh",
//     email:"Web , App"
// },
// {
//     name:"adfdsf",
//     email:"Blockchain"
// },
// {
//     name:"adfdsf",
//     email:"adfsg"
// },
// {
//     name:"adfdsf",
//     email:"adfsg"
// },
// {
//     name:"adfdsf",
//     email:"adfsg"
// },
// {
//     name:"adfdsf",
//     email:"adfsg"
// }
// ]
fetch('http://localhost:5500/user/all')
    .then((response) => response.json())
    .then((data) => {
        // Handle the JSON data here
        // console.log('hello')
        // console.log(data);
        addUsers(data)
        // You can now display or manipulate the data in your HTML
    })
    .catch((error) => {
        console.error('Error:', error);
    });

addUsers(data);
function addUsers(data){
    // console.log(data)
    const user=document.getElementById('friends-body');
    for(let i=0;i<Object.keys(data).length;i++){
        console.log(data[i])
        const userrow=document.createElement('div');
        user.appendChild(userrow);
        userrow.classList.add("user-row");
        const userinfo=document.createElement('div');
        userrow.appendChild(userinfo);
        userinfo.classList.add("user-info");
        const img=document.createElement('img');
        userinfo.appendChild(img);
        img.src='download.png';
        img.alt = 'User';
        const span=document.createElement('span');
        userinfo.appendChild(span);
        span.innerText = `${data[i].name} : Skills(${data[i].email})`;
        // const span1=document.createElement('span');
        // userinfo.appendChild(span1);
        // span.innerText = `${data[i].email}`;
        const button=document.createElement('button');
        button.classList.add("action-follow");
        userrow.appendChild(button);
        button.innerText="Add in team";

    }
}

