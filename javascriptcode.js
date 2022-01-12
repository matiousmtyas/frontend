uinput=document.getElementById("u_input");
uclick=document.getElementById("u_click");
div_item=document.getElementById("letter_generate");
div_img=document.getElementById("img_container")
var letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

uclick.addEventListener("click", function(e){
  gn(e);
  var count=uinput.value;
  if (!(count>=1&&count<=26)){
    alert("Oooops! Please enter number in range 1 to 26");
    div_item.innerHTML="";
    return;
  }
  var arr=new Array(count);
  div_item.innerHTML="";
  var random_value;
  for(var i=0;i<count;i++){
    random_value=Math.floor(Math.random()*26);
    while(arr.indexOf(random_value)!=-1){
      random_value=Math.floor(Math.random()*26);
    }
    arr[i]=random_value
    var btn=document.createElement("button");
    var btn_txt=document.createTextNode(letter[random_value]);
    btn.appendChild(btn_txt);
    div_item.appendChild(btn);
  }
});

div_item.addEventListener("click",function(e){
  bt(e);
  var x=e.target.textContent;
  if(e.target.tagName=="BUTTON"){
    var src1="img/"+x+".jpg";
    div_img.innerHTML="";
    var img1=document.createElement("img");
    img1.src=src1;
    div_img.appendChild(img1);
  }
});
function gn(e){
  this.e=e;
      localStorage.setItem(count+"-generate",[e.target,e.type,new Date().toLocaleTimeString()]);
      count++;
    }
  function bt(e){
    this.e=e;
    localStorage.setItem(count+"-button",[e.target,e.type,new Date().toLocaleTimeString()]);
    count++;
      }
  
      function load(e){
          this.e=e;
          localStorage.setItem(count+"-window load",[e.target,e.type,new Date().toLocaleTimeString()]);
          count++;
          }
          window.addEventListener("load",function(e){
            load(e);
          });
  var count=0;
          function unload(e){
              this.e=e;
              localStorage.setItem(count+"-window unload",[e.target,e.type,new Date().toLocaleTimeString()]);
              count++;    
          }
              window.addEventListener("unload",function(e){
                  unload(e);
              });