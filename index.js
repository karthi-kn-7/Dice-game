function handlebutton (){
    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;
    
    if(p1>p2){
        document.querySelector(".container>h1").textContent="🎌 Player 1 wins.";
        
    }
    else if(p2>p1){
        document.querySelector(".container>h1").textContent="Player2 wins. 🎌"
    }
    else{
        document.querySelector(".container>h1").textContent="Match tie 🏳️";
    }
    var img1="images/dice"+p1+".png";
    var img2="images/dice"+p2+".png";
    
    document.querySelector(".img1").setAttribute("src",img1);
    document.querySelector(".img2").setAttribute("src",img2);
}
var n=prompt("Enter your name to continue : ");
document.querySelector("title").innerHTML=n+" Playing🔥";
document.querySelector(".container h2").textContent="Hello, " + n;
document.querySelector(".btn").addEventListener("click",handlebutton);