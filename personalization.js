   if(window.location.hostname == 'www.blooket.com') {var style = document.createElement('style');style.type = 'text/css';style.innerHTML = '.page{background-color:#fff;height:100vh;width:100vw;left:0;top:0;background:#fff;position:absolute;z-index:100;overflow:hidden;}.pageheader{width:100%;height:55px;position:absolute;left:0;top:0;box-shadow:0 6px 8px rgb(0 0 0 / 20%);display:flex;z-index:1;}.tab{width:50%;display;flex;font-family:Nunito;color:#fff;font-size:45px;height:calc(100% - 3px);border-bottom:#0000 solid 3px;text-align:center;transition:0.2s;cursor:pointer;color:#3a3a3a;}.tab:hover{transform:scale(1.2);}.exit{width:35px;height:35px;norder-radius:50%;position:absolute;right:7.5px;top:7.5px;font-size:35px;cursor:pointer;color: rgb(255, 70, 43);}.pagerest{width:100vw;height:calc(100% - 55px);position:absolute;top:55px;overflow:auto;left:0;}.choose{width:100%;height:45px;text-align:center;font-size:35px;font-family:Nunito;font-color:#3a3a3a;margin-top:10px;}.selectionArea{width:calc(100% - 30px);height:calc(100% - 85px);margin:15px;position:absolute;display:flex;}.button{width:calc(15% - 20px);height:calc(95% - 20px);border:10px #fff solid;box-shadow:0 0 8px 3px rgb(0 0 0 / 20%);border-radius:15px;cursor:pointer;margin:2.5%;transition:0.2s;}.button:hover{transform:scale(0.97);}.smallicon{position:fixed;background:#3a3a3a;left:10px;top:calc(100% - 55px);border-radius:50%;height:25px;width:25px;padding:10px;cursor:pointer;transition:0.2s;box-shadow:0 0 8px 3px rgb(0 0 0 / 20%);}.smallicon:hover{transform:scale(1.15);}.info{width:100%;font-family:Nunito;font-size:20px;font-color:#3a3a3a;text-align:center;margin:50px 5px 5px 5px;font-weight:400px;}.input{width:50%;margin:5px 25%;font-size:25px;text-align:center;}.sendbutton{text-align:center;width:20%;padding:10px 15px;margin:15px calc(40% - 15px);background:rgb(11, 194, 207);border-radius:15px;color:#fff;font-family:Nunito;font-size:20px;cursor:pointer;transition:0.2s}.sendbutton:hover{box-shadow:-3px -3px 0.1px 1.5px rgb(0 152 162 / 100%);transform:translateX(3px) translateY(3px);}';document.getElementsByTagName('head')[0].appendChild(style);var header = document.querySelector('.styles__header___vR__R-camelCase');header.onload=function() {loadfilechange();};loadpage();
    } else {console.log('Hmm, try pasting this on the Blooket website...')};
function loadpage() {
function changecolor(){
  var header = document.querySelector('.styles__header___vR__R-camelCase');var blooketlogo = document.querySelector('.styles__headerTextLeft___1IX-Y-camelCase');var pageheader = document.querySelector('.pageheader');var basictab = document.querySelector('.tab');var complextab = document.querySelectorAll('.tab')[1];var headervalue = localStorage.getItem('header');var logocolor = localStorage.getItem('logo');var textcolor = localStorage.getItem('text');pageheader.style.background=headervalue;basictab.style.color=textcolor;complextab.style.color=textcolor;if(header == null, undefined) {} else {header.style.backgroundColor=headervalue;blooketlogo.style.color=logocolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[2].style.color=textcolor;document.querySelector('.styles__createIcon___3PIJb-camelCase').style.color=textcolor;document.querySelector('.styles__statsIcon___1dLXo-camelCase').style.color=textcolor;document.querySelector('.styles__storeIcon___2h0yG-camelCase').style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[4].style.color=textcolor;document.querySelector('.styles__logoutIcon___1hUNx-camelCase').style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[2].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[4].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[5].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[6].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[7].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[8].style.color=textcolor;}
};
  var page = document.createElement("div");document.body.appendChild(page);page.className='page';document.body.style.overflow='hidden';
  var pageheader = document.createElement("div");page.appendChild(pageheader);pageheader.className=('pageheader');
  var basictab = document.createElement("div");pageheader.appendChild(basictab);basictab.className=('tab');basictab.innerHTML='Basic';basictab.onclick=function a(){var pagerest = document.querySelector('.pagerest');if (pagerest == null) {} else {pagerest.remove();};loadbasic();};
  var complextab = document.createElement("div");pageheader.appendChild(complextab);complextab.className=('tab');complextab.innerHTML='Complex';complextab.onclick=function a(){var pagerest = document.querySelector('.pagerest');if (pagerest == null) {} else {pagerest.remove();};loadcomplex();};
  var exit = document.createElement("i");pageheader.appendChild(exit);exit.className=('exit far fa-times-circle');exit.onmouseover = function(){exit.className='exit fas fa-times-circle'};exit.onmouseout = function(){exit.className='exit far fa-times-circle'};exit.onclick = function(){page.remove();loadicon();}
  var pagerest = document.createElement("div");page.appendChild(pagerest);pagerest.className='pagerest';
  var choose = document.createElement("div");pagerest.appendChild(choose);choose.className='choose';choose.innerHTML='Choose One';
  var sarea = document.createElement("div");pagerest.appendChild(sarea);sarea.className='selectionArea';
  var button1 = document.createElement("div");sarea.appendChild(button1);button1.className='button';button1.style.background='#9a49aa';button1.onclick = function button1(){
      localStorage.setItem('header', '#9a49aa');localStorage.setItem('text', '#fff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  var button2 = document.createElement("div");sarea.appendChild(button2);button2.className='button';button2.style.background='#0bc2cf';button2.onclick = function button2(){
      localStorage.setItem('header', '#0bc2cf');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  var button3 = document.createElement("div");sarea.appendChild(button3);button3.className='button';button3.style.background='#ffffff';button3.onclick = function button3(){
      localStorage.setItem('header', '#ffffff');localStorage.setItem('text', '#3a3a3a');localStorage.setItem('logo', '#3a3a3a');changecolor();
    };
    var button4 = document.createElement("div");sarea.appendChild(button4);button4.className='button';button4.style.background='#f9a241';button4.onclick = function button4(){
      localStorage.setItem('header', '#f9a241');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
    var button5 = document.createElement("div");sarea.appendChild(button5);button5.className='button';button5.style.background='#19184d';button5.onclick = function button5(){
      localStorage.setItem('header', '#19184d');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  function loadicon() {
    document.body.style.overflow='auto';var smallicon = document.createElement("img");document.body.appendChild(smallicon);smallicon.className='smallicon';smallicon.src='https://cdn.discordapp.com/avatars/332637382698598410/8f4b0719f2ab59c9f7a7d0f1ee457a08.png?size=1024';smallicon.onclick=function reopenpage(){loadpage();this.remove()};
  };
  if (localStorage.getItem('header') == null) {} else {changecolor();}
};
function loadbasic() {
  var page = document.querySelector('.page');

  var pagerest = document.createElement("div");page.appendChild(pagerest);pagerest.className='pagerest';
  var choose = document.createElement("div");pagerest.appendChild(choose);choose.className='choose';choose.innerHTML='Choose One';
  var sarea = document.createElement("div");pagerest.appendChild(sarea);sarea.className='selectionArea';
  var button1 = document.createElement("div");sarea.appendChild(button1);button1.className='button';button1.style.background='#9a49aa';button1.onclick = function button1(){
      localStorage.setItem('header', '#9a49aa');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  var button2 = document.createElement("div");sarea.appendChild(button2);button2.className='button';button2.style.background='#0bc2cf';button2.onclick = function button2(){
      localStorage.setItem('header', '#0bc2cf');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  var button3 = document.createElement("div");sarea.appendChild(button3);button3.className='button';button3.style.background='#ffffff';button3.onclick = function button3(){
      localStorage.setItem('header', '#ffffff');localStorage.setItem('text', '#3a3a3a');localStorage.setItem('logo', '#3a3a3a');changecolor();
    };
  var button4 = document.createElement("div");sarea.appendChild(button4);button4.className='button';button4.style.background='#f9a241';button4.onclick = function button4(){
      localStorage.setItem('header', '#f9a241');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
  var button5 = document.createElement("div");sarea.appendChild(button5);button5.className='button';button5.style.background='#19184d';button5.onclick = function button5(){
      localStorage.setItem('header', '#19184d');localStorage.setItem('text', '#ffffff');localStorage.setItem('logo', '#ffffff');changecolor();
    };
};
function loadcomplex() {
  var page = document.querySelector('.page');
  var pagerest = document.createElement("div");page.appendChild(pagerest);pagerest.className='pagerest';
  var choose = document.createElement("div");pagerest.appendChild(choose);choose.className='choose';choose.innerHTML='Type in a 6 digit hex';
  var hcolorinfo = document.createElement("div");pagerest.appendChild(hcolorinfo);hcolorinfo.className='info';hcolorinfo.innerHTML='Header Color:';
  var hexarea1 = document.createElement("input");pagerest.appendChild(hexarea1);hexarea1.className='input';hexarea1.placeholder='#000000';var headervalue = localStorage.getItem('header');if(headervalue == null) {} else {hexarea1.value=headervalue}hexarea1.maxLength='7';
  var tcolorinfo = document.createElement("div");pagerest.appendChild(tcolorinfo);tcolorinfo.className='info';tcolorinfo.innerHTML='Header Text Color:';
  var hexarea2 = document.createElement("input");pagerest.appendChild(hexarea2);hexarea2.className='input';hexarea2.placeholder='#000000';var textvalue = localStorage.getItem('text'); if(textvalue == null) {} else {hexarea2.value=textvalue}hexarea2.maxLength='7';
  var lcolorinfo = document.createElement("div");pagerest.appendChild(lcolorinfo);lcolorinfo.className='info';lcolorinfo.innerHTML='Logo Color:';
  var hexarea3 = document.createElement("input");pagerest.appendChild(hexarea3);hexarea3.className='input';hexarea3.placeholder='#000000';var logovalue = localStorage.getItem('logo'); if(logovalue == null) {} else {hexarea3.value=logovalue}hexarea3.maxLength='7';
  var sendbutton = document.createElement("div");pagerest.appendChild(sendbutton);sendbutton.className='sendbutton';sendbutton.innerHTML='Send!';sendbutton.onclick = function sendvalues() {var gethvalue = hexarea1.value;var gettvalue = hexarea2.value;var getlvalue = hexarea3.value;if (gethvalue == '') {} else {localStorage.setItem('header', gethvalue)};if (gettvalue == '') {} else {localStorage.setItem('text', gettvalue)};if (getlvalue == '') {} else {localStorage.setItem('logo', getlvalue)};changecolor();
  }
}
function changecolor(){
  var header = document.querySelector('.styles__header___vR__R-camelCase');var blooketlogo = document.querySelector('.styles__headerTextLeft___1IX-Y-camelCase');var pageheader = document.querySelector('.pageheader');var basictab = document.querySelector('.tab');var complextab = document.querySelectorAll('.tab')[1];var headervalue = localStorage.getItem('header');var logocolor = localStorage.getItem('logo');var textcolor = localStorage.getItem('text');pageheader.style.background=headervalue;basictab.style.color=textcolor;complextab.style.color=textcolor;if(header == null, undefined) {} else {header.style.backgroundColor=headervalue;blooketlogo.style.color=logocolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[2].style.color=textcolor;document.querySelector('.styles__createIcon___3PIJb-camelCase').style.color=textcolor;document.querySelector('.styles__statsIcon___1dLXo-camelCase').style.color=textcolor;document.querySelector('.styles__storeIcon___2h0yG-camelCase').style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[4].style.color=textcolor;document.querySelector('.styles__logoutIcon___1hUNx-camelCase').style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[2].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[4].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[5].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[6].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[7].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[8].style.color=textcolor;}
};
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
      setTimeout(loadfilechange, 1)
      return pushState.apply(history, arguments);
    };
})(window.history);
function loadfilechange() {
  var header = document.querySelector('.styles__header___vR__R-camelCase');var blooketlogo = document.querySelector('.styles__headerTextLeft___1IX-Y-camelCase');var headervalue = localStorage.getItem('header');var logocolor = localStorage.getItem('logo');var textcolor = localStorage.getItem('text');if(header == null, undefined) {} else {header.style.backgroundColor=headervalue;blooketlogo.style.color=logocolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[2].style.color=textcolor;document.querySelector('.styles__createIcon___3PIJb-camelCase').style.color=textcolor;document.querySelector('.styles__statsIcon___1dLXo-camelCase').style.color=textcolor;document.querySelector('.styles__storeIcon___2h0yG-camelCase').style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__listIcon___JvI1r-camelCase')[4].style.color=textcolor;document.querySelector('.styles__logoutIcon___1hUNx-camelCase').style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[0].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[1].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[2].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[3].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[4].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[5].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[6].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[7].style.color=textcolor;document.querySelectorAll('.styles__navText___MFu71-camelCase')[8].style.color=textcolor;};
  console.log('Updated Colors')
};
