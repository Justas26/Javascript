(function(){

    "use strict"

    let paveiksliukumasyvas = new Array();
    paveiksliukumasyvas [0] = new Image();
    paveiksliukumasyvas [0].src = './images/paveiksliukas1.jpg';
    paveiksliukumasyvas [1] = new Image();
    paveiksliukumasyvas [1].src = './images/paveiksliukas2.jpg';
    paveiksliukumasyvas[2] = new Image();
    paveiksliukumasyvas[2].src = './images/paveiksliukas3.jpg';
    paveiksliukumasyvas[3] = new Image();
    paveiksliukumasyvas[3].src = './images/paveiksliukas4.jpg';
    paveiksliukumasyvas[4] = new Image();
    paveiksliukumasyvas[4].src = './images/paveiksliukas5.jpg';
    paveiksliukumasyvas[5] = new Image();
    paveiksliukumasyvas[5].src = './images/paveiksliukas6.jpg';
    paveiksliukumasyvas[6] = new Image();
    paveiksliukumasyvas[6].src = './images/paveiksliukas7.jpg';
    paveiksliukumasyvas[7] = new Image();
    paveiksliukumasyvas[7].src = './images/paveiksliukas8.jpg';
    paveiksliukumasyvas[8] = new Image();
    paveiksliukumasyvas[8].src = './images/paveiksliukas9.jpg';
    paveiksliukumasyvas[9] = new Image();
    paveiksliukumasyvas[9].src = './images/paveiksliukas10.jpg';


    const btn = document.querySelector('.rodyti');
    const btn1 = document.querySelector('.maisyti');
    const section = document.querySelector('.galerija');

    btn.addEventListener('click', showGallery);
    btn1.addEventListener('click', mixGallery);

    function fy(a,b,c,d){ // mixina array
        c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
    }

    function showGallery(){
       let ul = document.createElement('ul');
       section.appendChild(ul);
        for(let i = 0; i < paveiksliukumasyvas.length; i++){
            let li = document.createElement('li');
            ul.appendChild(li);
            let paveikslelis = document.createElement('IMG');
            paveikslelis.src = paveiksliukumasyvas[i].src;
            li.appendChild(paveikslelis);
        }
        document.querySelector('.rodyti').style.display = 'none';
    }
    function mixGallery(){
        const list = document.querySelectorAll('img');
        fy(paveiksliukumasyvas);
        for(let i = 0; i <list.length; i++){
            list[i].src = paveiksliukumasyvas[i].src;
        }
    }

})();