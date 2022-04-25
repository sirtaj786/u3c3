// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let total1=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=total1

let disp=JSON.parse(localStorage.getItem("movie"))
disp.map(function(el){
   
    let dv=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster
        let p=document.createElement("p");
        p.innerText=el.Title;
        let btn=document.createElement("button");
        btn.innerText="Book Now";
        dv.append(image,p,btn)
        movie.append(dv)
})
