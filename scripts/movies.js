// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//fetch
//let movie_list=document.getElementById("movies");

let total1=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=total1
let movie_list=document.getElementById("movies")
let id;


async function Searchmovies(){
    try{
        const search=document.getElementById("search").value;
      // const search="avenger"
        const res=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=39e83ad3`);
         const data=await res.json();
         console.log(data.Search)
       // const movi=data.search();
        // return movi
      // console.log("res:",res)
      appMovie(data.Search)


    }
    catch(err){
        console.log("err:",err)
    }
}
//appMovie();

function appMovie(data){
    movie_list.innerHTML=null;
  
    data.forEach(function(el){
        
        let dv=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster
        let p=document.createElement("p");
        p.innerText=el.Title;
        let btn=document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
          checkout(details)
        
        });
        let details={
            image:el.Poster,
            title:el.Title,
            year:el.Year,
            type:el.Type
        }
        dv.append(image,p,btn)
        movie_list.append(dv)
    });
}
 
 async function main(){
     let data=await Searchmovies();
     if(data===undefined){
         return false;
     }
     appMovie(data)
 }
// //debounce
 function debounce(func,delay){
     if(id){
         clearInterval(id);
     }
     id=setTimeout(function(el){
         func();


     },delay);
 }
function checkout(x){
    window.location.href="checkout.html"
    localStorage.setItem("movie",JSON.stringify(x))
}