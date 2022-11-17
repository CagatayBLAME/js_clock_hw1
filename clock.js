let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let Name = prompt ("Lütfen Adınızı Giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = Name;

function showTime () {
    let time = new Date();
    let day = days[time.getDay()];
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let secs = time.getSeconds();

    document.querySelector("#myClock").innerHTML= `${hours}: ${minutes}: ${secs}: ${day}`;
}

setInterval(showTime, 1000);