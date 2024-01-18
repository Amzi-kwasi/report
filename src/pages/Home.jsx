import { useEffect, useState } from "react";
import React from "react";
import "../style/style.css"




function findTotal(){
    var arr = document.getElementsByName('hrs');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('hrs-total').value = tot;
    localStorage.setItem("findtotal",  document.getElementById('hrs-total').value);
  }


function findBs(){
    var arr = document.getElementsByName('bs');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('bs-total').value = tot;
    localStorage.setItem("findbs",  document.getElementById('bs-total').value);
}



export default function Home(){


const [brand, setBrand]=useState("My Report");


function saveHrs() {
  
  var hrs=document.getElementById("hrs");
  var hrs2=document.getElementById("hrs2");
  var hrs3=document.getElementById("hrs3");
  var hrs4=document.getElementById("hrs4");
  var hrs5=document.getElementById("hrs5");
  var hrs6=document.getElementById("hrs6");
  var hrs7=document.getElementById("hrs7");
  var hrs8=document.getElementById("hrs8");
  var hrs9=document.getElementById("hrs9");
  var hrs10=document.getElementById("hrs10");
  var hrs11=document.getElementById("hrs11");
  var hrs12=document.getElementById("hrs12");
  var hrs13=document.getElementById("hrs13");
  var hrs14=document.getElementById("hrs14");
  var hrs15=document.getElementById("hrs15");
  var hrs16=document.getElementById("hrs16");
  var hrs17=document.getElementById("hrs17");
  var hrs18=document.getElementById("hrs18");
  var hrs19=document.getElementById("hrs19");
  var hrs20=document.getElementById("hrs20");
  var hrs21=document.getElementById("hrs21");
  var hrs22=document.getElementById("hrs22");
  var hrs23=document.getElementById("hrs23");
  var hrs24=document.getElementById("hrs24");
  var hrs25=document.getElementById("hrs25");
  var hrs26=document.getElementById("hrs26");
  var hrs27=document.getElementById("hrs27");
  var hrs28=document.getElementById("hrs28");
  var hrs29=document.getElementById("hrs29");
  var hrs30=document.getElementById("hrs30");
  var hrs31=document.getElementById("hrs31");


  

  localStorage.setItem("hrs",hrs.value);
  localStorage.setItem("hrs2",hrs2.value);
  localStorage.setItem("hrs3",hrs3.value);
  localStorage.setItem("hrs4",hrs4.value);
  localStorage.setItem("hrs5",hrs5.value);
  localStorage.setItem("hrs6",hrs6.value);
  localStorage.setItem("hrs7",hrs7.value);
  localStorage.setItem("hrs8",hrs8.value);
  localStorage.setItem("hrs9",hrs9.value);
  localStorage.setItem("hrs10",hrs10.value);
  localStorage.setItem("hrs11",hrs11.value);
  localStorage.setItem("hrs12",hrs12.value);
  localStorage.setItem("hrs13",hrs13.value);
  localStorage.setItem("hrs14",hrs14.value);
  localStorage.setItem("hrs15",hrs15.value);
  localStorage.setItem("hrs16",hrs16.value);
  localStorage.setItem("hrs17",hrs17.value);
  localStorage.setItem("hrs18",hrs18.value);
  localStorage.setItem("hrs19",hrs19.value);
  localStorage.setItem("hrs20",hrs20.value);
  localStorage.setItem("hrs21",hrs21.value);
  localStorage.setItem("hrs22",hrs22.value);
  localStorage.setItem("hrs23",hrs23.value);
  localStorage.setItem("hrs24",hrs24.value);
  localStorage.setItem("hrs25",hrs25.value);
  localStorage.setItem("hrs26",hrs26.value);
  localStorage.setItem("hrs27",hrs27.value);
  localStorage.setItem("hrs28",hrs28.value);
  localStorage.setItem("hrs29",hrs29.value);
  localStorage.setItem("hrs30",hrs30.value);
  localStorage.setItem("hrs31",hrs31.value);
  

}



function saveBs() {
  
  var bs=document.getElementById("bs");
  var bs2=document.getElementById("bs2");
  var bs3=document.getElementById("bs3");
  var bs4=document.getElementById("bs4");
  var bs5=document.getElementById("bs5");
  var bs6=document.getElementById("bs6");
  var bs7=document.getElementById("bs7");
  var bs8=document.getElementById("bs8");
  var bs9=document.getElementById("bs9");
  var bs10=document.getElementById("bs10");
  var bs11=document.getElementById("bs11");
  var bs12=document.getElementById("bs12");
  var bs13=document.getElementById("bs13");
  var bs14=document.getElementById("bs14");
  var bs15=document.getElementById("bs15");
  var bs16=document.getElementById("bs16");
  var bs17=document.getElementById("bs17");
  var bs18=document.getElementById("bs18");
  var bs19=document.getElementById("bs19");
  var bs20=document.getElementById("bs20");
  var bs21=document.getElementById("bs21");
  var bs22=document.getElementById("bs22");
  var bs23=document.getElementById("bs23");
  var bs24=document.getElementById("bs24");
  var bs25=document.getElementById("bs25");
  var bs26=document.getElementById("bs26");
  var bs27=document.getElementById("bs27");
  var bs28=document.getElementById("bs28");
  var bs29=document.getElementById("bs29");
  var bs30=document.getElementById("bs30");
  var bs31=document.getElementById("bs31");


  

  localStorage.setItem("bs",bs.value);
  localStorage.setItem("bs2",bs2.value);
  localStorage.setItem("bs3",bs3.value);
  localStorage.setItem("bs4",bs4.value);
  localStorage.setItem("bs5",bs5.value);
  localStorage.setItem("bs6",bs6.value);
  localStorage.setItem("bs7",bs7.value);
  localStorage.setItem("bs8",bs8.value);
  localStorage.setItem("bs9",bs9.value);
  localStorage.setItem("bs10",bs10.value);
  localStorage.setItem("bs11",bs11.value);
  localStorage.setItem("bs12",bs12.value);
  localStorage.setItem("bs13",bs13.value);
  localStorage.setItem("bs14",bs14.value);
  localStorage.setItem("bs15",bs15.value);
  localStorage.setItem("bs16",bs16.value);
  localStorage.setItem("bs17",bs17.value);
  localStorage.setItem("bs18",bs18.value);
  localStorage.setItem("bs19",bs19.value);
  localStorage.setItem("bs20",bs20.value);
  localStorage.setItem("bs21",bs21.value);
  localStorage.setItem("bs22",bs22.value);
  localStorage.setItem("bs23",bs23.value);
  localStorage.setItem("bs24",bs24.value);
  localStorage.setItem("bs25",bs25.value);
  localStorage.setItem("bs26",bs26.value);
  localStorage.setItem("bs27",bs27.value);
  localStorage.setItem("bs28",bs28.value);
  localStorage.setItem("bs29",bs29.value);
  localStorage.setItem("bs30",bs30.value);
  localStorage.setItem("bs31",bs31.value);
  

}
function Prepage(){
   
  setTimeout(()=>{
    var preloader=document.getElementById("preloader");
    var page=document.getElementById("page");
  
  
    preloader.style.display="none";
  page.style.display="block";
  document.getElementById('hrs-total').value = localStorage.getItem("findtotal");
  document.getElementById('bs-total').value = localStorage.getItem("findbs");

  var hrs=document.getElementById("hrs");
var hrs2=document.getElementById("hrs2");
var hrs3=document.getElementById("hrs3");
var hrs4=document.getElementById("hrs4");
var hrs5=document.getElementById("hrs5");
var hrs6=document.getElementById("hrs6");
var hrs7=document.getElementById("hrs7");
var hrs8=document.getElementById("hrs8");
var hrs9=document.getElementById("hrs9");
var hrs10=document.getElementById("hrs10");
var hrs11=document.getElementById("hrs11");
var hrs12=document.getElementById("hrs12");
var hrs13=document.getElementById("hrs13");
var hrs14=document.getElementById("hrs14");
var hrs15=document.getElementById("hrs15");
var hrs16=document.getElementById("hrs16");
var hrs17=document.getElementById("hrs17");
var hrs18=document.getElementById("hrs18");
var hrs19=document.getElementById("hrs19");
var hrs20=document.getElementById("hrs20");
var hrs21=document.getElementById("hrs21");
var hrs22=document.getElementById("hrs22");
var hrs23=document.getElementById("hrs23");
var hrs24=document.getElementById("hrs24");
var hrs25=document.getElementById("hrs25");
var hrs26=document.getElementById("hrs26");
var hrs27=document.getElementById("hrs27");
var hrs28=document.getElementById("hrs28");
var hrs29=document.getElementById("hrs29");
var hrs30=document.getElementById("hrs30");
var hrs31=document.getElementById("hrs31");

hrs.value=localStorage.getItem("hrs");
hrs2.value=localStorage.getItem("hrs2");
hrs3.value=localStorage.getItem("hrs3");
hrs4.value=localStorage.getItem("hrs4");
hrs5.value=localStorage.getItem("hrs5");
hrs6.value=localStorage.getItem("hrs6");
hrs7.value=localStorage.getItem("hrs7");
hrs8.value=localStorage.getItem("hrs8");
hrs9.value=localStorage.getItem("hrs9");
hrs10.value=localStorage.getItem("hrs10");
hrs11.value=localStorage.getItem("hrs11");
hrs12.value=localStorage.getItem("hrs12");
hrs14.value=localStorage.getItem("hrs14");
hrs15.value=localStorage.getItem("hrs15");
hrs16.value=localStorage.getItem("hrs16");
hrs17.value=localStorage.getItem("hrs17");
hrs18.value=localStorage.getItem("hrs18");
hrs19.value=localStorage.getItem("hrs19");
hrs20.value=localStorage.getItem("hrs20");
hrs21.value=localStorage.getItem("hrs21");
hrs22.value=localStorage.getItem("hrs22");
hrs23.value=localStorage.getItem("hrs23");
hrs24.value=localStorage.getItem("hrs24");
hrs25.value=localStorage.getItem("hrs25");
hrs26.value=localStorage.getItem("hrs26");
hrs27.value=localStorage.getItem("hrs27");
hrs28.value=localStorage.getItem("hrs28");
hrs29.value=localStorage.getItem("hrs29");
hrs30.value=localStorage.getItem("hrs30");
hrs31.value=localStorage.getItem("hrs31");




var bs=document.getElementById("bs");
var bs2=document.getElementById("bs2");
var bs3=document.getElementById("bs3");
var bs4=document.getElementById("bs4");
var bs5=document.getElementById("bs5");
var bs6=document.getElementById("bs6");
var bs7=document.getElementById("bs7");
var bs8=document.getElementById("bs8");
var bs9=document.getElementById("bs9");
var bs10=document.getElementById("bs10");
var bs11=document.getElementById("bs11");
var bs12=document.getElementById("bs12");
var bs13=document.getElementById("bs13");
var bs14=document.getElementById("bs14");
var bs15=document.getElementById("bs15");
var bs16=document.getElementById("bs16");
var bs17=document.getElementById("bs17");
var bs18=document.getElementById("bs18");
var bs19=document.getElementById("bs19");
var bs20=document.getElementById("bs20");
var bs21=document.getElementById("bs21");
var bs22=document.getElementById("bs22");
var bs23=document.getElementById("bs23");
var bs24=document.getElementById("bs24");
var bs25=document.getElementById("bs25");
var bs26=document.getElementById("bs26");
var bs27=document.getElementById("bs27");
var bs28=document.getElementById("bs28");
var bs29=document.getElementById("bs29");
var bs30=document.getElementById("bs30");
var bs31=document.getElementById("bs31");

bs.value=localStorage.getItem("bs");
bs2.value=localStorage.getItem("bs2");
bs3.value=localStorage.getItem("bs3");
bs4.value=localStorage.getItem("bs4");
bs5.value=localStorage.getItem("bs5");
bs6.value=localStorage.getItem("bs6");
bs7.value=localStorage.getItem("bs7");
bs8.value=localStorage.getItem("bs8");
bs9.value=localStorage.getItem("bs9");
bs10.value=localStorage.getItem("bs10");
bs11.value=localStorage.getItem("bs11");
bs12.value=localStorage.getItem("bs12");
bs14.value=localStorage.getItem("bs14");
bs15.value=localStorage.getItem("bs15");
bs16.value=localStorage.getItem("bs16");
bs17.value=localStorage.getItem("bs17");
bs18.value=localStorage.getItem("bs18");
bs19.value=localStorage.getItem("bs19");
bs20.value=localStorage.getItem("bs20");
bs21.value=localStorage.getItem("bs21");
bs22.value=localStorage.getItem("bs22");
bs23.value=localStorage.getItem("bs23");
bs24.value=localStorage.getItem("bs24");
bs25.value=localStorage.getItem("bs25");
bs26.value=localStorage.getItem("bs26");
bs27.value=localStorage.getItem("bs27");
bs28.value=localStorage.getItem("bs28");
bs29.value=localStorage.getItem("bs29");
bs30.value=localStorage.getItem("bs30");
bs31.value=localStorage.getItem("bs31");




const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
        toggleSwitch.checked = true;
    }
}


var date=new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let mth=month[date.getMonth()];
let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
var day=days[date.getDay()];
var d=date.getDate();
var year=date.getFullYear();



if(d == 11){
  var id= document.getElementById("11");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 2){
  var id= document.getElementById("2");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 3){
  var id= document.getElementById("3");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 4){
  var id= document.getElementById("4");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 5){
  var id= document.getElementById("5");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 6){
  var id= document.getElementById("6");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 7){
  var id= document.getElementById("7");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 8){
  var id= document.getElementById("8");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 9){
  var id= document.getElementById("9");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 10){
  var id= document.getElementById("10");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 12){
  var id= document.getElementById("12");
   id.style.color="orange";
  id.style.display="table-row"
 }
 if(d == 13){
  var id= document.getElementById("13");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 14){
  var id= document.getElementById("14");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 15){
  var id= document.getElementById("15");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 16){
  var id= document.getElementById("16");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 17){
  var id= document.getElementById("17");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 18){
  var id= document.getElementById("18");
   id.style.color="orange";
  id.style.display="table-row"
  
 }
 
 if(d == 19){
  var id= document.getElementById("19");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 20){
  var id= document.getElementById("20");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 21){
  var id= document.getElementById("21");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 22){
  var id= document.getElementById("22");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 23){
  var id= document.getElementById("23");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 24){
  var id= document.getElementById("24");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 25){
  var id= document.getElementById("25");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 26){
  var id= document.getElementById("26");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 27){
  var id= document.getElementById("27");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 28){
  var id= document.getElementById("28");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 29){
  var id= document.getElementById("29");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 if(d == 30){
  var id= document.getElementById("30");
   id.style.color="orange";
  id.style.display="table-row"
 }
 
 
 
   if(d == 31){
 
  var id= document.getElementById("31");
   id.style.color="orange";
  id.style.display="table-row"
       for(var i = 0; i < 2; i++){
     alert("The month has ended.");
       };
    alert("Please you can send your report now.")
   }
 
  //  else if(month == "November" && d == 1 && year == 2023){
  //      alert('New update.')
  //  }
   
   if(d ==1){
     var id= document.getElementById("1");
   id.style.color="orange";
  id.style.display="table-row"
       alert('Akwaaba! New month.');
       alert("You can clear your saves for a fresh page");
       window.location.href="#clear"
   }
   else if(month == "September","April","June","November" && d == 30){
       for(var i = 0; i < 2;i++){
     alert("The month has ended.");
       }
      
   }
 


document.getElementById("date").innerHTML=day +", "+ mth+" "+ d;
document.getElementById("navDemo").innerHTML=year; 
},2000);

  
}

function More(){
  var more=document.getElementById("more");
  if(more.innerHTML == "More"){
  more.innerHTML="Less"
  document.getElementById('1').style.display="table-row";
  document.getElementById('2').style.display="table-row";
  document.getElementById('3').style.display="table-row";
  document.getElementById('4').style.display="table-row";
  document.getElementById('5').style.display="table-row";
  document.getElementById('6').style.display="table-row";
  document.getElementById('7').style.display="table-row";
  document.getElementById('8').style.display="table-row";
  document.getElementById('9').style.display="table-row";
  document.getElementById('10').style.display="table-row";
  document.getElementById('11').style.display="table-row";
  document.getElementById('12').style.display="table-row";
  document.getElementById('13').style.display="table-row";

  document.getElementById('14').style.display="table-row";
  document.getElementById('15').style.display="table-row";
  document.getElementById('16').style.display="table-row";
  document.getElementById('17').style.display="table-row";
   document.getElementById('18').style.display="table-row";
   document.getElementById('19').style.display="table-row";
   document.getElementById('20').style.display="table-row";
   document.getElementById('21').style.display="table-row";
   document.getElementById('22').style.display="table-row";
   document.getElementById('23').style.display="table-row";
   document.getElementById('24').style.display="table-row";
   document.getElementById('25').style.display="table-row";
   document.getElementById('26').style.display="table-row";
   document.getElementById('27').style.display="table-row";
   document.getElementById('28').style.display="table-row";
   document.getElementById('29').style.display="table-row";
   document.getElementById('30').style.display="table-row";
   document.getElementById('31').style.display="table-row";
  }

  else if(more.innerHTML == "Less"){
    window.location.reload()
  }
}




function Clear(){
  let c=prompt("Type 'Clear' to delete your save");
   if(c == "Clear"){
    localStorage.clear();
    window.location.reload();
   }
}


function switchTheme(e) {
  
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }  
    
    
}



function Sms(){

  const phoneNumber = "";
  var hrs = document.getElementById("hrs-total").value;
  const message = "Total_Report\n\n HRS:" + hrs + ",\nBible-Studies:  ";
  
    const link = document.createElement("a");
    link.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    link.click();
  
  
}

    return(
        <div onLoad={Prepage()}>

        <div id="preloader" >
            <center>
            <p>Report</p>
            </center>
        </div>




        <div id="page" className="none">
        <div id="nav">
        <a>{brand}</a>
       <a id="navDemo" style={{color: "whitesmoke",position: "absolute",right: "20px"}}></a>
        </div>
<br/>
<br/>
<br/>
<div id="pagecontent">
<a style={{color:"orangered",fontFamily:"cursive"}} href="https://calendar.google.com/">Calendar</a>

<div className="input_cal">
<input type="date" />
</div>
<br/>
<br/>
<div>
  <center>
  <h3 id="date" style={{color:"orange"}}></h3>
  </center>
</div>
<br/>
        <table className="table">
  <tr className="tr">
    <th>Date</th>
    <th className="th pick">
<input type="text" id="th_1"  placeholder="HRS" className="th-input" readOnly/> 
</th>
    
    <th className="th">
<input type="text" id="th_5"  placeholder="B.S" className="th-input" readOnly /> </th>

</tr>
  <tr style={{display:"none"}} id="1">
    <td>1.</td>
    <td className="pick"><input type="number"  className="td-input"  name="hrs" onKeyUp={saveHrs} onInput={findTotal}  id="hrs"  />
     </td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs"  /></td>
  </tr>



  <tr style={{display:"none"}} id="2">
    <td>2.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs2"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs2"  /></td>
  </tr>


  <tr style={{display:"none"}} id="3">
    <td>3.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}  id="hrs3" /></td>



    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs3"  /></td>
  </tr>


   <tr style={{display:"none"}} id="4">
    <td>4.</td>
    <td className="pick"><input type="number" className="td-input"  id="hrs4" name="hrs" onKeyUp={saveHrs} onInput={findTotal} /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs4"  /></td>
  </tr>


   <tr style={{display:"none"}} id="5">
    <td className="pick">5.</td>
    <td><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs5"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs5"  /></td>
  </tr>



   <tr style={{display:"none"}} id="6">
    <td>6.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs6"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs6"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="7">
    <td>7.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs7"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs7"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="8">
    <td>8.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs8"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs8"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="9">
    <td>9.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs9"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs9"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="10">
    <td>10.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs10"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs10"  /></td>
  </tr>
  
   <tr style={{display:"none"}}  id="11">
    <td>11.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs11"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs11"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="12">
    <td>12.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs12"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs12"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="13">
    <td>13.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs13"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs13"  /></td>
  </tr>
  
   <tr style={{display:"none"}} id="14">
    <td>14.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs14"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs14"  /></td>
  </tr>


   <tr style={{display:"none"}} id="15">
    <td>15.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs15"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs15"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="16">
    <td>16.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs16"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs16"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="17">
    <td>17.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs17"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs17"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="18">
    <td>18.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs18"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs18"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="19">
    <td>19.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs19"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs19"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="20">
    <td>20.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs20"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs20"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="21">
    <td>21.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs21"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs21"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="22">
    <td>22.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs22"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs22"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="23">
    <td>23.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs23"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs23"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="24">
    <td>24.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs24"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs24"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="25">
    <td>25.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs25"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs25"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="26">
    <td>26.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs26"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs26"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="27">
    <td>27.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs27"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs27"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="28">
    <td>28.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs28"   /></td>

    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs28"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="29">
    <td>29.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs29"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs29"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="30">
    <td>30.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs30"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs30"  /></td>
  </tr>

  
   <tr style={{display:"none"}} id="31">
    <td>31.</td>
    <td className="pick"><input type="number" className="td-input" name="hrs" onKeyUp={saveHrs} onInput={findTotal}   id="hrs31"   /></td>


    <td><input type="number"  className="td-input"  name="bs" onKeyUp={saveBs} onInput={findBs} id="bs31"  /></td>
  </tr>

</table>


<br/>

<center><a onClick={More} style={{color:"orange",cursor:"pointer"}} id="more">More</a></center>
<br/>
<form>
  <fieldset>

    <legend>Total_Report</legend>
    <div className="form-group">
     <input  id="hours" style={{padding: "6px 8px", border: "none",background: "transparent"}}   placeholder="Hours" readOnly/>
      <input type="number" name="total" id="hrs-total" className="form-control prc" readOnly/>
    </div>
    <br/>
    <br/>
   
    <div className="form-group">
       <input id="biS" style={{padding: "6px 8px",border: "none", background: "transparent"}}   placeholder="Bible-Studies" readOnly/>
      <input type="number" name="total" id="bs-total" className="form-control prc" readOnly/>
    </div>
    
  </fieldset>

  </form>

<br/><br/>


<br/>
<div>
  <center>
<button className="send" id="send-sms" onClick={Sms}>Send Report via SMS</button>
<br />
<br />
<button className="send"><a href="https://api.whatsapp.com/send?phone=&text=Total_Report Bible-Studies: ,Hours:">Send Report via Whatsapp</a>
</button>
<br />
<br />
<button className="send">
<a href="mailto:email@example.com?subject=Total_Report
&body=Bible-Studies: ,Hours: ,
">Send Report via Email</a>
</button>
</center>
</div>


<br />

<div className="theme-switch-wrapper">
    <label className="theme-switch" for="checkbox">
        <input type="checkbox" onChange={switchTheme} id="checkbox" />
        <div className="slider round"></div>
  </label>
</div> 

<button onClick={()=>{window.location.href="addnote"}} className="add">+</button>
    <br />
 <br />
 <button id="clear" onClick={Clear} className="clear">Clear All Data</button>


 </div>

        </div>



        </div>
    )
}