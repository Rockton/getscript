var myInterval = setInterval(interval, 20);
function interval() {
  const data = {
    "standings":[
      {
        "blook":"Spooky Ghost",
        "name":"cool game",
        "place":1000000000,
        "gold":0,
        "corrects":{},
        "incorrects":{}
      }
    ],
    "settings":{ 
      "instruct":true,
      "type":"Gold",
      "amount":1,
      "mode":"Amount",
      "lateJoin":true,
      "randomNames":false},
      "set":"Add a descriptive title",
      "setId":"60a511610435f6001d8bdfb0",
      "name":"benFixYourGame"
    };
  const url = "https://api.blooket.com/api/history";
  const op={
    method:"POST",
    headers:{
      "content-type":"application/json; charset=UTF-8",
      "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmVuRml4WW91ckdhbWUiLCJzdHJpcGUiOiJjdXNfSlFpcTMwQ0JBcTlyTTQiLCJwbGFuIjoiU3RhcnRlciIsImdhbWVzUGxheWVkIjoxOSwiZW1haWwiOiJiZW5maXh5b3VyZ2FtZUBnbWFpbC5jb20iLCJkYXRlQ3JlYXRlZCI6IjIwMjEtMDUtMDVUMjA6MzI6NDQuMDA5WiIsInJvbGUiOiJTdHVkZW50IiwiaGFzUGFzc3dvcmQiOnRydWUsImlhdCI6MTYyMTM5NDg5NiwiZXhwIjoxNjIxOTk5Njk2fQ.BF8cQQg50P_t_-gnmAGYn0Kwh40cOLxlvVozaWvu3BM",
      "Host": "api.blooket.com"
    },
    body:JSON.stringify(data)
  };
fetch(url,op);
.then(data=>{return data.json()});
.then(res=>{console.log(res)});
.catch(error=>console.log(error))};
setTimeout(clearinterval, 2000);
function clearinterval() {
  clearTimeout(myInterval);
};
