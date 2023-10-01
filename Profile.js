let fullname = sessionStorage.getItem('fullname');
document.getElementById("fullname").innerText = fullname;


let profileImage = sessionStorage.getItem('profileImage');
if (profileImage) {
    document.getElementById("profileImage").src = profileImage;
}


let Fwork = sessionStorage.getItem('Fwork');
document.getElementById("Fwork").innerText = Fwork;

let skillone = sessionStorage.getItem('skillone');
document.getElementById("one").innerText = skillone;

let skilltwo = sessionStorage.getItem('skilltwo');
document.getElementById("two").innerText = skilltwo;

let skillthree = sessionStorage.getItem('skillthree');
document.getElementById("three").innerText = skillthree;

let skillfour = sessionStorage.getItem('skillfour');
document.getElementById("four").innerText = skillfour;

let work1 = sessionStorage.getItem('work1');
document.getElementById("work1").innerText = work1;

let workaddress1 = sessionStorage.getItem('workaddress1');
document.getElementById("workaddress1").innerText = workaddress1;

let work2 = sessionStorage.getItem('work2');
document.getElementById("work2").innerText = work2;

let workaddress2 = sessionStorage.getItem('workaddress2');
document.getElementById("workaddress2").innerText = workaddress2;

let selectedGender = sessionStorage.getItem('gender');
document.getElementById("sex").innerText = selectedGender;

let phone = sessionStorage.getItem('phone');
document.getElementById("phone").innerText = phone;

let email = sessionStorage.getItem('email');
document.getElementById("email").innerText = email;

let website = sessionStorage.getItem('website');
document.getElementById("website").innerText = website;

let linkedin = sessionStorage.getItem('linkedin');
document.getElementById("linkedin").innerText = linkedin;

let address = sessionStorage.getItem('address');
document.getElementById("address").innerText = address;

let nature = sessionStorage.getItem('nature');
document.getElementById("nature").innerText = nature;
