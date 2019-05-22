window.onload= function () {

    var panel= document.getElementById("puzzlearea");
    var children= panel.children;

    /*
    This modular function allows us to locate the images in the tiles.
     */
    (function () {
        let x= -1;
        for (let key in children){
            let child= children[key];

            child.onclick= tileClick;
            child.onmouseover= tileMouseOver;
            child.onmouseleave= tileMouseLeave;

            if(x<=2) x++;
            else x=0;

            let positionX= 100*(x)+"px";
            let positionY= 100* Math.floor(key/4)+"px";

            child.style.top= positionY;
            child.style.left= positionX;
            child.classList.add("nomouseover");

            let img= "../../images/hmw25/background.jpg";
            child.style.background= "url("+img+") -"+positionX+" -"+positionY;

            if(key==14)break;

        }
    })();

    var emptyX= 300;
    var emptyY= 300;

    function tileClick() {
        if(!win()){
            if(playing){
                if(isMovable(this)){
                    move(this);
                }
            }
        }else {
            // if(playing){
            //     playing= false;
            //     alert("Congrats, you win!!!")
            // }
        }
    }

    function win() {
        let x= -1;
        for (let key in children){
            let child= children[key];

            if(x<=2) x++;
            else x=0;

            let positionX= 100*(x)+"px";
            let positionY= 100* Math.floor(key/4)+"px";

            if(positionX != child.style.left || positionY != child.style.top){
                return false;
            }

            if(key==14)break;
        }
        return true;
    }

    function move(elem) {
        let tempX= parseInt(elem.style.left);
        let  tempY= parseInt(elem.style.top);

        elem.style.top= emptyY+"px";
        elem.style.left= emptyX+"px";

        emptyX= tempX;
        emptyY= tempY;

        if(win()){
            playing= false;
            alert("Congrats, you win!!!")
        }
    }
    function tileMouseOver() {
        if(isMovable(this)){
            this.classList.add("mouseover");
        }
    }
    function tileMouseLeave() {
        this.classList.remove("mouseover")
    }

    function isMovable(elem) {
        var x= parseInt(elem.style.left);
        var y= parseInt(elem.style.top);

        if(emptyX-x==0 && Math.abs(emptyY-y)==100){
            return true;
        }else if(Math.abs(emptyX-x)==100 && emptyY-y== 0){
            return true;
        }
        return false;
    }

    var playing= false;

    document.getElementById("shufflebutton").onclick= function () {
        for (let i= 0; i<100; i++){
            suffle();
        }
        playing= true;
    }

    function suffle() {
        let random= parseInt(Math.random()*100);
        let occurence= 0;
        if(random%2==0){
            for (key in children){
                let child= children[key];
                if(isMovable(child) && occurence<1){
                    occurence++;
                }else if(isMovable(child) && occurence==1){
                    move(child);
                }
                if(key==14)break;
            }
        }else{
            for (key in children){
                let child= children[key];
                if(isMovable(child)){
                    move(child);
                }
                if(key==14)break;
            }
        }
    }

}