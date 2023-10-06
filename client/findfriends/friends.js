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
// fetch('http://localhost:5000/user/')
    // .then((response) => response.json())
    // .then((data) => {
    //     // Handle the JSON data here
    //     // console.log('hello')
    //     // console.log(data);
    //     addUsers(data)
    //     // You can now display or manipulate the data in your HTML
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });

// addUsers(data);

fetchData('http://localhost:5000/user/all');


async function fetchData(url) {
    try {
        // Make a GET request to the specified URL
        const response = await fetch(url);

        // Check if the response status code indicates success (e.g., 200 OK)
        if (!response.ok) {
            throw new Error(`HTTP error! Status:, ${response.status}`);
        }

        // Parse the response body as JSON
        data = await response.json();

        // Return the parsed data
        console.log(data);
        addUsers(data);
        return data;
    } catch (error) {
        // Handle any errors that occurred during the fetch or parsing
        console.error("Error fetching data:", error);
        throw error; // Optionally, rethrow the error to be handled elsewhere
    }
}
// addUsers(data);
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput"); 
    // const searchInput="app";
    // console.log(searchInput);

    // Add an event listener to the search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // If the search term is empty, display all users
        if (!searchTerm) {
            clearUsers();
            addUsers(data);
            return;
        }

        // user.skills.toLowerCase().includes(searchTerm)
        // Filter the data based on the search term
        const filteredData = data.filter(user =>
            user.firstName.toLowerCase().includes(searchTerm)
            || user.skills.some(skill => skill.toLowerCase().includes(searchTerm))
        );

        // Clear the existing users
        clearUsers();

        // Add the filtered users
        addUsers(filteredData);
    });
});
function clearUsers() {
    const friendsBody = document.getElementById("friends-body");
    friendsBody.innerHTML = "";
}
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
        span.innerText = `${data[i].firstName} : Skills(${data[i].skills})`;
        // const span1=document.createElement('span');
        // userinfo.appendChild(span1);
        // span.innerText = `${data[i].email}`;
        const button=document.createElement('button');
        button.classList.add("action-follow");
        button.id = data[i]._id
        button.addEventListener('click' , function(){
            
            joinTeam(button.id)
            window.alert('member added successfully!')
        })
        button.addEventListener('click', function () {
            window.open('/client/teamlist/team.html', '_self');
            

        });
        
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
// $(function(){
//     // Load the navigation bar using jQuery
//     $("#navbar").load("navbar/navbar.html");
//   });