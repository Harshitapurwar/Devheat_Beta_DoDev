
   
    function mymenufunction() {
     var i = document.getElementById("navMenu");
     if(i.className === "nav-menu") {
         i.className += " responsive";
     } 
     else {
         i.className = "nav-menu";
     }
    }
    
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
     function login() {
         x.style.left = "4px";
         y.style.right = "-520px";
         a.className += " white-btn";
         b.className = "btn";
         x.style.opacity = 1;
         y.style.opacity = 0;
     }
function register() {
         x.style.left = "-510px";
         y.style.right = "5px";
         a.className = "btn";
         b.className += " white-btn";
         x.style.opacity = 0;
         y.style.opacity = 1;
        
   
}

//register user

async function registerUser(){
    var firstName = document.getElementById('firstname_su').value
   var lastName = document.getElementById('lastname_su').value
   var email  = document.getElementById('email_su').value
   var password = document.getElementById('password_su').value
   

   const data = {
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password
    }

    console.log(data)
  
  // Define the request headers (optional)
  const headers = {
    'Content-Type': 'application/json', 
  };
  
  // Make a POST request using the fetch() API
  fetch("http://localhost:5000/user/signup", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)// Convert data to JSON string if needed
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
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
    //login user

    async function loginUser(){
       
       var email  = document.getElementById('email_login').value
       var password = document.getElementById('pass_login').value
       
    
       const data = {
        
        email:email,
        password:password
        }

        
    
        //console.log(data)
      
      // Define the request headers (optional)
      const headers = {
        'Content-Type': 'application/json', 
      };
      
      // Make a POST request using the fetch() API
      fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)// Convert data to JSON string if needed
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
          }
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


        // Saving the token
const emaillogin = "email_login";
localStorage.setItem("authToken", emaillogin);

// Retrieving the token
// const savedToken = localStorage.getItem("authToken");

// // Expected token for verification
// const expectedToken = "email_login";

// if (savedToken === expectedToken) {
//     // Token is valid
//     console.log("Token is valid.");
// } else {
//     // Token is not valid
//     console.log("Token is not valid.");
// }
// Clearing the token
localStorage.removeItem("authToken");


}