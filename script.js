let n = 1;
let x = 0;
let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];

function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    
    let message = document.getElementById("show");
    let NewRow = message.insertRow(n);
    

    list1[x] = document.getElementById("username").value;
    list2[x] = document.getElementById("age").value;
    list3[x] = document.getElementById("date").value;
    list4[x] = document.getElementById("Gender").value;
   

    if(password.length != 0){
        if(password == cnfrmPassword){
            let cel1 = NewRow.insertCell(0);
            let cel2 = NewRow.insertCell(1);
            let cel3 = NewRow.insertCell(2);
            let cel4 = NewRow.insertCell(3);
            cel1.innerHTML = list1[x];
            cel2.innerHTML = list2[x];
            cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
      
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}