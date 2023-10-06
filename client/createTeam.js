async function createTeam(){
    const data = {
        "user_id":localStorage.getItem('userId'),
        "team_name":document.getElementById('team_name_val').value
    }
    const headers = {
      'Content-Type': 'application/json', 
    };
    console.log(data)


    

  try{
    console.log('start')
    const response = await fetch("http://localhost:5000/team/addteam", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)// Convert data to JSON string if needed
  })

    if (response.ok) {
      const responseData = await response.json(); // Assuming the response is JSON
      console.log(responseData)
      localStorage.setItem('currentTeam', responseData.id);
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }


    


    const filePath = './findfriends/friends.html';
            window.open(filePath, '_self');


}

