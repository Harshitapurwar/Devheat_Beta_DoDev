// data = [{
//     name:"sparsh",
<<<<<<< HEAD
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
=======
//     email:"sdadf"
>>>>>>> b48129c6d993d6090dddfe9ef02e97fdc8a0b19c
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
<<<<<<< HEAD
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
=======
// addUsers(data);


// fetch('http://localhost:5000/user/all')
//     .then((response) => response.json())
//     .then((data) => {
//         // Handle the JSON data here
//         // console.log('hello')
//         // console.log(data);
//         addUsers(data)
//         // You can now display or manipulate the data in your HTML
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

>>>>>>> b48129c6d993d6090dddfe9ef02e97fdc8a0b19c
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
<<<<<<< HEAD
        span.innerText = `${data[i].name} : Skills(${data[i].email})`;
        // const span1=document.createElement('span');
        // userinfo.appendChild(span1);
        // span.innerText = `${data[i].email}`;
=======
        span.innerText = `${data[i].firstName}`;
>>>>>>> b48129c6d993d6090dddfe9ef02e97fdc8a0b19c
        const button=document.createElement('button');
        button.classList.add("action-follow");
        userrow.appendChild(button);
        button.innerText="Add in team";

    }
}

