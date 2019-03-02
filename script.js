var div = document.querySelector('#test');
var mindiv = document.querySelector('#min');
var secdiv = document.querySelector('#sec');
var mildiv = document.querySelector('#mil');
var reset = document.querySelector('.test');

var str = "";
var control = false;
var n = 1;
var min=0,sec=0;

const great = () => {
   //alert("Hello, World");
   control = true;
}

document.querySelector('.btn').addEventListener('click', function(){
    if(this.textContent === "Stop"){
        control = true;
        this.textContent = "Continue";
        reset.style.visibility = 'visible';
     }else{
         this.textContent = "Stop";
         control = false;
         rec();
         reset.style.visibility = 'hidden';    
     }

});

function rec(){
     setTimeout(function(){
        //str += (n + "<br>");
        mindiv.innerHTML = min;
        secdiv.innerHTML = sec;
        mildiv.innerHTML = n;
        n++;
        if(n===100){sec++; n=0;}
        if(sec === 60){min++; sec=0;}
        if(control === false){rec(n);}
     }, 10);
}

reset.addEventListener('click', function(){
   min = 00, sec=00, n = 00;
   mindiv.innerHTML = min;
   secdiv.innerHTML = sec;
   mildiv.innerHTML = n;
   document.querySelector('.btn').textContent= "Start";
});
