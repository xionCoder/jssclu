
function colorChanger() {
    
    const body = document.body;
    const radomaNumber1 = 0 +Math.round(Math.random()*256);
    const radomaNumber2 = 0 +Math.round(Math.random()*256);
    const radomaNumber3 = 0 +Math.round(Math.random()*256);
    
    const color = "rgb("+radomaNumber1+","+radomaNumber2+","+radomaNumber3;
    body.style.backgroundColor = color;
    body.append("rgb(",radomaNumber1,",",radomaNumber2,",",radomaNumber3,")");
}

colorChanger();