

var list=[];
let myList=document.querySelectorAll("ul li");
for (let i = 0; i < myList.length; i++) {
    myList[i].addEventListener("click" , function(e){
       let targetCode = e.target.getAttribute("data-code");
       getNews(targetCode);
    })
}
function getNews(countryCode) {
var myHttp=new XMLHttpRequest();
myHttp.open("GET",`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=4cbcca93df7a446c9529706fac40b6e5`);
myHttp.send();

// console.log(myHttp.readyState);
myHttp.addEventListener("readystatechange", function(){
    // console.log(myHttp.readyState);
    if(myHttp.readyState==4 && myHttp.status==200){
        list= JSON.parse(myHttp.response).articles
        console.log(list);
        display();
    }
})

    
}
function display(){
    var box=``;
    for (let i = 0; i< list.length; i++) {
      box+=` <div class="col-md-4">
      <div class="item">
          <img class="w-100" src="${list[i].urlToImage ? list[i].urlToImage : 'images/4.jpg'}">
          <h2>${list[i].title}</h2>
          <p>${list[i].description}</p>
      </div>
  </div>`
       
    }
    
    document.getElementById("data").innerHTML=box
}

//myHttp.readyState=0 =========>> not established
//myHttp.readyState=1 =========>> established
//myHttp.readyState=2 =========>> Back-end Recieved
//myHttp.readyState=4 =========>> Front-end Recieved 

//Status
//404 =>Server not Found
//500 =>Server dowen
//403 =>Forbidden
//200 =>Success


// http://127.0.0.1:5500/Rout%20Training/APIs/index.html