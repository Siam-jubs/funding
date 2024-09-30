    
  



document.getElementById('btn1').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInput('paisa');
    const balance = gettext('tk') ;
   
    newBalance = balance + addMoney;
   
    console.log(newBalance);

    document.getElementById('tk').innerText = newBalance;

    const lessMoney = gettext('main-tk');
    anotherBalance = lessMoney - addMoney;

    document.getElementById('main-tk').innerText = anotherBalance;

    alert("your money has been received"); 
    // history
    const p1 =document.createElement('p');
    p1.innerText = ` ${addMoney} taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;
    
    document.getElementById('hide4').appendChild(p1);  

   const a1= document.createElement('a');
   a1.innerText = Date();
   document.getElementById('hide4').appendChild(a1);
    
     
});


// 2nd card
document.getElementById('btn2').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInput('paisa2');
    const balance = gettext('tk2') ;
   
    newBalance = balance + addMoney;
   
    console.log(newBalance);

    document.getElementById('tk2').innerText = newBalance;

    const lessMoney = gettext('main-tk');
    anotherBalance = lessMoney - addMoney;

    document.getElementById('main-tk').innerText = anotherBalance;

    alert("your money has been received");   
    // history
    const p1 =document.createElement('p');
    p1.innerText = ` ${addMoney} taka is Donate for Flood Relief in Feni,Bangladesh.`;
    
    document.getElementById('hide5').appendChild(p1);  

   const a1= document.createElement('a');
   a1.innerText = Date();
   document.getElementById('hide5').appendChild(a1);
    
});


// 3rd card


document.getElementById('btn3').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInput('paisa3');
    const balance = gettext('tk3') ;
   
    newBalance = balance + addMoney;
   
    console.log(newBalance);

    document.getElementById('tk3').innerText = newBalance;

    const lessMoney = gettext('main-tk');
    anotherBalance = lessMoney - addMoney;

    document.getElementById('main-tk').innerText = anotherBalance;

    alert("your money has been received");   
    
    // history

    const p1 =document.createElement('p');
    p1.innerText = ` ${addMoney} taka is Aid for Injured in the Quota Movement.`;
    
    document.getElementById('hide6').appendChild(p1);  

   const a1= document.createElement('a');
   a1.innerText = Date();
   document.getElementById('hide6').appendChild(a1);
    
});

