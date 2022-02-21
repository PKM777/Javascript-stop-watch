let start = document.getElementById('st');
let stop = document.getElementById('sp');
let reset = document.getElementById('rt');
let min = document.getElementById('one');
let sec = document.getElementById('two');
let mils = document.getElementById('three');
// let htr = document.getElementById('head3');
// let catc = document.getElementById('tap');
// let bake = document.getElementById('lols');

mils.style.display="none";
sec.style.display="none";
start.addEventListener('click', milisec);
function milisec(){
    mils.style.display="block";
    sec.style.display="block";
    reset.style.color="white";
    stop.style.color="white";
    mils.style.color="#d35400";
    let lk=1;
    let dk=1;
    // let mk=1;
    function load(){let bom = mils.innerText=lk; if(lk===100){lk=0;} lk++};
    function doad(){let dom = sec.innerHTML=dk;  dk++};
    // function boad(){let som = min.innerHTML=mk;  mk++};
     let lon = setInterval(load, 10);
     let son = setInterval(doad,1000);
    //  setInterval(boad, 60000);
     start.style.display = 'none';
    
     stop.addEventListener('click', stopit);
     function stopit(){
        
        stop.style.color="#d35400";
        reset.style.color="white";
         clearInterval(lon);
         clearInterval(son);
     }

     reset.addEventListener('click',resett);
     function resett(){
        
        stop.style.color="white";
        reset.style.color="#d35400";
         lk=0;
         dk=0;
         mils.innerText=lk;
         sec.innerHTML=dk;
         clearInterval(lon);
         clearInterval(son);
         start.style.display= "inline";
         document.querySelector('h3').remove();
         location.reload();
     }
    //  catc.addEventListener('click', saveit);
    //  function saveit(){
    //     bake.style.display="contents";
    //     let bata = document.createElement('h3');
    //     bata.setAttribute("id","cood");
        
    //     let news = bake.appendChild(bata);
    //     let oo = document.getElementById('cood');
    //     console.log("hi");
    //     news.innerHTML = sec.innerHTML + ":"+ mils.innerHTML;
    //  }

}







