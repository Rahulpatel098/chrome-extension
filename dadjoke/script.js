const URL="https://icanhazdadjoke.com/slack";
 const op=document.querySelector("#joke");
(async()=>{
  let res=await fetch(URL)
  let data = await res.json()
  console.log(res);
  op.innerText=` ${data.attachments[0].text} 😂`;
 
})();