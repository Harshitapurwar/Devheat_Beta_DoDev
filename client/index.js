const login_btn_fn = document.getElementById('login_btn_fn')
login_btn_fn.addEventListener('click' , loginUser)
   
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
  try {
    const response  = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)// Convert data to JSON string if needed
    })
    if (response.ok) {
      const responseData = await response.json(); // Assuming the response is JSON
      localStorage.setItem('userId', responseData.id);
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  toggleMenu()

  window.alert('signup successfull!')
    
}
    //login user

async function loginUser(){
       
       var email  = document.getElementById('email_login').value
       var password = document.getElementById('pass_login').value
       
    
       const data = {
        
        email:email,
        password:password
        }
      const headers = {
        'Content-Type': 'application/json', 
      };
      
      // Make a POST request using the fetch() API
  
      try{
      console.log('start')
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)// Convert data to JSON string if needed
      })

      if (response.ok) {
        const responseData = await response.json(); // Assuming the response is JSON
        localStorage.setItem('userId', responseData.id);
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
      console.log('akhir')
      toggleMenu()
      window.alert('login successfull!')
}


function toggleMenu(){
  const isLoggedIn = localStorage.getItem('userId')

const loginSignupMenu= document.getElementById('login-signup')
const logoutBtn = document.getElementById('logout-btn')

if(isLoggedIn!==null){
  loginSignupMenu.style.display = 'None'
  logoutBtn.style.display = 'block'
}
else{
  loginSignupMenu.style.display = 'block'
  logoutBtn.style.display = 'None'
}
}

function logout(){
  localStorage.removeItem('userId');
  toggleMenu()
}

toggleMenu()






