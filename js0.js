function forloop(){
    let text ="";
    for (let index = 0; index < 10; index++) {
        text += "<br> The number is "+index;
        
    }
    document.getElementById("output").innerHTML=text;
}