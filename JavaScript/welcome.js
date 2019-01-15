var i = 0;  //index each letter of string
var speed = 100; //controls speed of writing and erasing, lower makes it faster
var txt = 'Welcome'+'\xa0'+'to'+'\xa0'+'my'+'\xa0'+ 'website!'; // string to append to DOM at selected ID

//write to selected ID element if i is less than the length of string, otherwise start erasing when i equals length of string
function write() {
  if (i < txt.length) {
    //
    document.getElementById('welcome').innerText += txt[i];
    i++;
    setTimeout(write, speed);
  }
  else if(i === txt.length){
      setTimeout(erase,speed);
  }
}

setTimeout(write,speed); //invoke write

function erase(){
    if(i > 0){
        var tmp = txt.substring(0, i);
        //console.log("erase --- i: "+i+" tmp: "+tmp);
        document.getElementById('welcome').innerText = tmp; 
        i--;
        setTimeout(erase,speed);
    }
    else{
        document.getElementById('welcome').innerText="";
        setTimeout(write, speed);
    }
}