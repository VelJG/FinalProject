
let og;
function load() {
    og=document.getElementById('image').innerHTML;
previewImgs = document.getElementsByClassName('preview');
for (let i = 0; i < previewImgs.length; i++) {
   console.log('Added');
	previewImgs[i].setAttribute('tabindex', '0');
    previewImgs[i].onfocus = function () {
        upDate(this);
    };
    previewImgs[i].onblur = function () {
        unDo();
    };
}
}
function upDate(previewPic) {
   
	
 pic=document.getElementById('image'); 
 pic.style.backgroundImage=`url(${previewPic.src})`;
  pic.innerHTML = previewPic.alt;
	}

function unDo(){
   
pic=document.getElementById('image');
	pic.style.backgroundImage='';
    pic.innerHTML= og;
}

