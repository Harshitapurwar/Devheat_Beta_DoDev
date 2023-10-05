async function createTeam(){
    const data = {
        "user_id":localStorage.getItem('userId'),
        "team_name":document.getElementById('team_name_val').value
    }
    const headers = {
      'Content-Type': 'application/json', 
    };
    console.log(data)


    fetch("http://localhost:5000/team/addteam", {
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


    const filePath = './findfriends/friends.html';
            window.open(filePath, '_self');


}

