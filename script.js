
function guess(){
    var number = prompt("введи любое число");
    var guess_number = 10;
    if (number>guess_number){
        alert("это слишком много"); 
        return guess;
    }
        
    else if (number< guess_number){
        alert("Это слишком мало");
        return guess;
    }
        
    else{
        return alert("Вы угадали");
    }
}

//guess();

function reminder(){
    alert("Ты здесь слишком долго");
    window.close;
}
//setTimeout(reminder, 5000);

function valid_form(){
    var name = document.getElementById("name").value;
    console.log(name);
    var password = document.getElementById("password").value;
    console.log(password);
    
    var reg_name = /^[a-zA-Zа-яёА-ЯЁ]+$/i;
    if(reg_name.test(name)== false){
        alert("В поле моугт быть только буквы");
       }
    var reg_password = /[a-z0-9]{5, 100}/i;
    if(reg_password.test(password)== false){
        alert("неверные данные");
       }
}
var a = document.querySelector(".submit_button").addEventListener("click", valid_form);


