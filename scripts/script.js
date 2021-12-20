let city = prompt("Введите название города на английском", "Minsk")
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40fe6ec370bfa747930d1e6e552f5e7d`)
.then(function(resp) { return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').textContent = Math.round(data.main.temp - 273);
    document.querySelector('.humidity').textContent = Math.round(data.main.humidity);
    document.querySelector('.pressure').textContent = data.main.pressure;
    document.querySelector('.wind').textContent = Math.round(data.wind.speed);
    let timesunrise = new Date(data.sys.sunrise*1000);
    let m1 = timesunrise.getMinutes();
    let h1 = timesunrise.getHours();
    document.querySelector('.sunrise').textContent = h1 +":"+ m1;

    let timesunset = new Date(data.sys.sunset*1000);
    let m2 = timesunset.getMinutes();
    let h2 = timesunset.getHours();
    document.querySelector('.sunset').textContent = h2 +":"+ m2;

})