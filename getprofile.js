function getvalue(){

    let fullname = document.getElementById("fullname").value;

    
    let profileImage = document.getElementById("profileImage").files[0];
    let imageData = null;
    if (profileImage) {
        // Convert image to base64 string
        const reader = new FileReader();
        reader.onload = function (e) {
            imageData = e.target.result;
            sessionStorage.setItem('profileImage', imageData);
        };
        reader.readAsDataURL(profileImage);
    }


    let Fwork = document.getElementById("Fwork").value;
    let skillone = document.getElementById("one").value;
    let skilltwo = document.getElementById("two").value;
    let skillthree = document.getElementById("three").value;
    let skillfour = document.getElementById("four").value;
    let work1 = document.getElementById("work1").value;
    let workaddress1 = document.getElementById("workaddress1").value;
    let work2 = document.getElementById("work2").value;
    let workaddress2 = document.getElementById("workaddress2").value;
    let genderOptions = document.getElementsByName('gender');


    let selectedGender;
    for (var i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectedGender = genderOptions[i].value;
            break;
        }
    }


    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let linkedin = document.getElementById("linkedin").value;
    let address = document.getElementById("address").value;
    let nature = document.getElementById("nature").value;

    sessionStorage.setItem('fullname', fullname);
    sessionStorage.setItem('Fwork', Fwork);
    sessionStorage.setItem('skillone', skillone);
    sessionStorage.setItem('skilltwo', skilltwo);
    sessionStorage.setItem('skillthree', skillthree);
    sessionStorage.setItem('skillfour', skillfour);
    sessionStorage.setItem('work1', work1);
    sessionStorage.setItem('workaddress1', workaddress1);
    sessionStorage.setItem('work2', work2);
    sessionStorage.setItem('workaddress2', workaddress2);
    sessionStorage.setItem('gender', selectedGender);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('website', website);
    sessionStorage.setItem('linkedin', linkedin);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('nature', nature);

    window.location.href = 'profile.html';
    
    return false;
}
