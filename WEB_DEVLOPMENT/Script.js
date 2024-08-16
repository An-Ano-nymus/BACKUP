let element1=document.querySelector('#NEVER_GIVE_UP1')
let element2=document.querySelector('#NEVER_GIVE_UP2')
let element3=document.querySelector('#NEVER_GIVE_UP3')


function click(){


    element1.innerHTML= "FIGHT FOR US";
    element1.style.backgroundColor='Yellow';
    element1.style.color='Black';
    element1.style.fontSize='20px';


}






function myMove(element_id) {

    console.log('ANIMATION BEGINS');

    let id = null;
    const elem = document.getElementById(element_id);   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}





let count=3;
function click2(){
    
    let newElement = document.createElement('div') //create div

    count++;
    console.log('count',count)
    newElement.id = `NEVER_GIVE_UP${count}`;
    
    newElement.style.fontSize = '20px';
    newElement.style.fontFamily = 'Arial, sans-serif';
    newElement.style.color = 'yellow';
    newElement.style.backgroundColor = 'red';
    newElement.style.height = '100px';
    newElement.style.width = '100px';
    newElement.style.border = '5px solid black'; // Border with width and color
    newElement.style.borderRadius = '10px';
    newElement.style.padding = '10px';
    newElement.style.textAlign = 'center';
    newElement.style.fontWeight = 'bold';
    
    newElement.textContent="FIGHT BACK"
    // let content = document.createTextNode("This is Heading");
    
    // newElement.appendChild(content);
    
    document.querySelector('body').appendChild(newElement);
    
    
    console.log(newElement.outerHTML)
    
}



function click3(){

    
    element3.style.color='White';
    element3.style.backgroundColor='Black';

}

function INTERVAL_BKCHDI(){
  const myCollection = document.getElementsByTagName("div");
  
  setTimeout(myFunction, 3000);

  setInterval(myFunction, 5000);
  var i=0;
  function myFunction() {
    

    
    if ( i < myCollection.length) {
      myCollection[i].style.color = "red";
      i++;
    }
  }

}



function INTERVAL_BKCHDI2(){

  setInterval(myFunction, 50);

  function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds() + ":" +
    d.getMilliseconds();
  }

}



element1.onclick =click;
element2.onclick=click2;

element3.onmouseover=click3;
// element3.onmouseout=

// document.getElementById('myButton').addEventListener('click', click2);



