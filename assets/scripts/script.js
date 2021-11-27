vet = [1,2,3,4]

function slide1() {
    
    i1.src=`./assets/img/filme${vet[3]}.png`
    
    setTimeout('slide2()', 900)
}
function slide2() {
    
    i2.src=`./assets/img/filme${vet[2]}.png`
    setTimeout('slide3()', 900)
}
function slide3() {
   
    i3.src=`./assets/img/filme${vet[1]}.png`
    setTimeout('slide4()', 900)
}
function slide4() {
   
    i4.src=`./assets/img/filme${vet[0]}.png`
    setTimeout('slide5()', 900)
}
function slide5() {
   
   i5.src=`./assets/img/filme${vet[3]}.png`
    setTimeout('slide6()', 900)
}
function slide6() {
    
    i6.src=`./assets/img/filme${vet[2]}.png`
    setTimeout('slide7()', 900)
}
function slide7() {
    
    i7.src=`./assets/img/filme${vet[1]}.png`
    setTimeout('slide8()', 900)
}
function slide8() {
   
    i8.src=`./assets/img/filme${vet[0]}.png`
    setTimeout('slide1()', 900)
    vet = [1,2,3,4].reverse();
}
//setInterval(sliders, 1500);