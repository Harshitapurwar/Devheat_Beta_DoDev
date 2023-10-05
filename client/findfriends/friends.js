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

var selected_user_id = ''
fetch('http://localhost:5000/user/all')
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
        button.id = data[i]._id
        button.addEventListener('click' , function(){
            
            joinTeam(button.id)
        })
        
        userrow.appendChild(button);
        button.innerText="Add in team";

    }
}





async function joinTeam(id){
    const current_team = localStorage.getItem('currentTeam')
    selected_user_id = id

    const data = {
       team_id:current_team,
       user_id:selected_user_id
    }

    console.log(data)
    const headers = {
      'Content-Type': 'application/json', 
    };
    console.log(data)


    fetch("http://localhost:5000/team/jointeamuser", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)// Convert data to JSON string if needed
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      console.log(response.json())
      return response.json(); // Parse the response as JSON
    })
    .then(function (data) {
      // Handle the JSON response data
      console.log(data);
    })
    .catch(function (error) {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });


}