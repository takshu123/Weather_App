// let url='https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=0baccf7429d7466063c5407d2605e7a6';
let searchcity=document.querySelector(".navsearch input");
let btn=document.querySelector(".navsearch button");
let cityhtml=document.querySelector(".location span");
let citytemp=document.querySelector(".temp span");
let logovalue=document.querySelector(".logo p");

let humidityhtml=document.querySelector(".humidity p");
let pressurehtml=document.querySelector(".pressure p");
let windhtml=document.querySelector(".wind p");

let logohtml=document.querySelector(".logo");

let weathername=document.querySelector(".logo p");

let htmldate=document.querySelector(".location p");
var dt=new Date();
htmldate.innerText=dt;

btn.addEventListener("click",()=>{
  let dynamicurl=`https://api.openweathermap.org/data/2.5/weather?q=${searchcity.value}&appid=0baccf7429d7466063c5407d2605e7a6`;
  call(dynamicurl);


  async function call(url){

    let response= await fetch(url);
 let data=await response.json();
console.log(data);
let temperature=data.main.temp;
citytemp.innerText=(temperature-273).toFixed(1);

cityhtml.innerText=`${searchcity.value}`;

let humidityvalue=data.main.humidity;
let pressurevalue=data.main.pressure/1000;
let windvalue=data.wind.speed;
humidityhtml.innerText=humidityvalue;
pressurehtml.innerText=(pressurevalue).toFixed(1);
windhtml.innerText=windvalue;

let weather=data.weather[0].main;
console.log(weather)
if(weather=="Haze"){
  
  weathername.innerText="Haze";
 logohtml.style.backgroundImage="url(./pictures/haze.png)"
}
if(weather=="Clouds"){
  weathername.innerText="Clouds";
 logohtml.style.backgroundImage="url(./pictures/clouds.png)"
}
if(weather=="Thunderstorm"){
  weathername.innerText="Thunderstorm";
logohtml.style.backgroundImage="url(./pictures/storm.png)"
}
if(weather=="Clear"){
  weathername.innerText="Sunny";
logohtml.style.backgroundImage="url(./pictures/sun.png)"
}
if(weather=="Rain"){
  weathername.innerText="Rain";
logohtml.style.backgroundImage="url(./pictures/rain.png)"
}

  
}
  

  
  
})




