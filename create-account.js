document
    .getElementById("register-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;

        console.log(userEmail, userPassword);

        if(userEmail && userPassword){
           let userDetails = {
           
            email: userEmail,
            password: userPassword,
           };

           let stringifyObj = JSON.stringify(userDetails);
          
           localStorage.setItem("user", stringifyObj);
           
           
            window.location.href = "./index.html"
        }

    });