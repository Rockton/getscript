var nowloading = document.createElement('div');document.body.appendChild(nowloading);nowloading.style.position='fixed';nowloading.style.width='50vw';nowloading.style.left='25vw';nowloading.style.height='50vh';nowloading.style.top='25vh';nowloading.style.display='flex';nowloading.style.justifyContent='center';nowloading.innerHTML='<img src="https://rockton.github.io/getscript/loadingicon.gif" height:100%;width:auto;>';setTimeout(function() {nowloading.innerHTML='';nowloading.style.width='80vw';nowloading.style.left='10vw';nowloading.style.height='80vh';nowloading.style.top='10vh';nowloading.style.borderRadius='15px';nowloading.style.boxShadow='0 0 8px 3px rgba(0,0,0,0.2)';nowloading.style.display='inline-block';nowloading.style.background='#fff';if(window.localStorage.token == undefined) {nowloading.innerHTML='<div style="font-family:Nunito;font-size:45px;font-color:#3a3a3a;font-weight:600px;width:100%;text-align:center;margin-top:15px;">Error</div><div style="font-family:Nunito;font-size:20px;font-color:#3a3a3a;font-weight:400px;width:100%;text-align:center;margin-top:55px;">Please log in first!</div><div></div>'} else {nowloading.innerHTML='<div style="font-family:Nunito;font-size:45px;font-color:#3a3a3a;font-weight:600px;width:100%;text-align:center;margin-top:15px;">Copy This:</div><div style="font-family:Nunito;font-size:20px;font-color:#3a3a3a;font-weight:400px;width:100%;text-align:center;margin-top:55px;">' + window.localStorage.token + '</div><div></div>';}}, 1500);
