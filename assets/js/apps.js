    
    // stcky header
    let mainHeader = document.getElementById("myHeader")
    let sticky = mainHeader.offsetTop;

    window.addEventListener("scroll", function(){
        if(window.pageYOffset > sticky){
            mainHeader.classList.add("sticky")
        }
        else{
            mainHeader.classList.remove("sticky")
        }
    })