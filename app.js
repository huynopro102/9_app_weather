var tagname = document.querySelector('.content .name')
var tagcapital = document.querySelector('.content .capital')
var taginput = document.querySelector('.search')
var tagtime = document.querySelector('.time')
var tagtemperature = document.querySelector('.temperature')
var tagshortdescription = document.querySelector('.short_description')
var tagvisibility = document.querySelector('.visibility span')
var tagshort_nav_description = document.querySelector('.short_nav_description')
var tagspeed = document.querySelector('.speed span')
var taghumidity = document.querySelector('.humidity span')
var taggust = document.querySelector('.gust span')
var tagdeg = document.querySelector('.deg span')
var tagcontent = document.querySelector('.content')
var tagweather1 = document.querySelector('.body .weather')
var tagbody1 = document.querySelector('body')
console.log(taggust)
taginput.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
     tagnamedescript = e.target.value
     changeApi()
    }
 })
 var tagnamedescript 
async function changeApi(){
    let myapi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tagnamedescript}&appid=4dfe500e5d2fcaee597a5551283e33d4&lang=vi`).then(response => response.json()) 
        console.log(myapi)
        if(myapi.cod == 200){
            tagcontent.classList.remove('hidden')
           
            tagname.innerHTML = myapi.name
            tagcapital.innerHTML = myapi.sys.country
            // chuyển độ k sang độ c -273.15
            tagtemperature.textContent = Math.round((myapi.main.temp - 273.15)) + '°C'
            if((myapi.main.temp - 273.15) <= 20 ){
                tagweather1.classList.add('winter')
                tagbody1.classList.add('winter')
            }
            tagshortdescription.innerHTML = myapi.weather[0].main
            tagvisibility.innerHTML = myapi.visibility + 'm'
            tagshort_nav_description.innerHTML = myapi.weather[0].description
            tagdeg.innerHTML = myapi.wind.deg + '°'
            taggust.innerHTML = myapi.wind.gust
            // tim dùng Date trong js
            tagtime.innerHTML = new Date().toLocaleString()
            tagspeed.innerHTML = myapi.wind.speed + 'm/s'
            taghumidity.innerHTML = myapi.main.humidity + '%'
        }else{
            tagcontent.classList.add('hidden')
            alert('no find')
        }
}
changeApi()
