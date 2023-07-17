import React from 'react'

import { useState } from 'react';
function Plu() {
  let c = '+';
const [Lv,setLv]=useState(1)
  console.log(Lv);
  let random_Number = Math.floor(Math.random() * (Lv *30)) ;
  let random_Number2 =  Math.floor(Math.random() * (Lv *40)) ;
  let result =random_Number2 > random_Number ? random_Number2  :random_Number;
  let score=0;
  const [count,sectcount]= useState(0)
function settings(){
  //*  create Elements
  let black_screen= document.createElement('div');
  black_screen.classList.add('black_screen')
  let box= document.createElement('nav'); 
  let btnL= document.createElement('button');
  let btnD= document.createElement('button');
  let btnI= document.createElement('button');
  let btnI2= document.createElement('button');
  let btnLv1= document.createElement('button');
  let btnLv2= document.createElement('button');
  let btnLv3= document.createElement('button');
  let btnLv4= document.createElement('button');
  let btnLv5= document.createElement('button');
  let btnLv6= document.createElement('button');
  let btnLv7= document.createElement('button');
    let Lv_box= document.createElement('nav');
 btnLv1.textContent='Lv.25';
 btnLv2.textContent='Lv.5';
 btnLv3.textContent='Lv1';
 btnLv4.textContent='Lv1.5';
 btnLv5.textContent='Lv2';
 btnLv6.textContent='Lv3';
 btnLv7.textContent='Lv4';
 btnL.style.cssText='--color:light'
 btnD.style.cssText='--color:#212129'
 btnI.style.cssText=`--color:#6528F7`;
 btnI2.style.cssText='--color:#111'
 //* classes
 box.classList.add('box_settings')
 Lv_box.classList.add('box_Lv')
 btnLv1.classList.add('btnLv')  
 btnLv2.classList.add('btnLv')  
 btnLv3.classList.add('btnLv')  
 btnLv4.classList.add('btnLv')  
 btnLv5.classList.add('btnLv')  
 btnLv6.classList.add('btnLv')  
 btnLv7.classList.add('btnLv')  

 btnL.classList.add('btnDL')  
 btnD.classList.add('btnDL')
 btnI.classList.add('btnDL')
 btnI2.classList.add('btnDL')
 //* append
  document.body.append(black_screen)
black_screen.append(box) 
black_screen.append(Lv_box) 
box.append(btnL)
box.append(btnI2)
box.append(btnD)
box.append(btnI)
box.append(Lv_box)
box.append(Lv_box)
Lv_box.append(btnLv1)
Lv_box.append(btnLv2)
Lv_box.append(btnLv3)
Lv_box.append(btnLv4)
Lv_box.append(btnLv5)
Lv_box.append(btnLv6)
Lv_box.append(btnLv7)
// functions
black_screen.addEventListener('dblclick',e =>{
  black_screen.remove()
})
btnL.addEventListener('click',e =>{
  document.body.style.background ='#fff'
})
btnD.addEventListener('click',e =>{
  document.body.style.background ='#212129'
})

btnI.addEventListener('click',e =>{
   document.body.style.background ='#6528F7'

})
btnI2.addEventListener('click',e =>{
  document.body.style.background ='#111'
})
btnLv1.addEventListener('click',e =>{
setLv((e) => e =.25 )
console.log(Lv);
})
btnLv2.addEventListener('click',e =>{
  setLv(e => e = .5 )

console.log(Lv);

})
btnLv3.addEventListener('click',e =>{
setLv(e => e =1 )
  
console.log(Lv);

})
btnLv4.addEventListener('click',e =>{
  setLv(e => e =1.5 )
    
  console.log(Lv);
  
  })
  btnLv5.addEventListener('click',e =>{
    setLv(e => e =2 )
      
    console.log(Lv);
    
    })
    btnLv6.addEventListener('click',e =>{
      setLv(e => e =3 )
        
      console.log(Lv);
      
      })
      btnLv7.addEventListener('click',e =>{
        setLv(e => e =4 )
          
        console.log(Lv);
        
        })
  
}
  function check() {

 if(document.querySelector('.inp').value !== ''){

console.log(score <= 0);
    if(+document.querySelector('.inp').value + +random_Number === result){
      sectcount(e => e += 1);
      let random_img=Math.round(Math.random() *2)
      let random_img2=Math.round(Math.random() *2)
      const aduio =document.createElement('audio');
      let left =Math.round(Math.random() *90)
      let left2 =Math.round(Math.random() *90)
      let top2 =Math.round(Math.random() *80)
      let top =Math.round(Math.random() *80)

      let imgs =['https://em-content.zobj.net/source/microsoft-teams/337/grinning-face-with-smiling-eyes_1f604.png','https://em-content.zobj.net/source/microsoft-teams/337/star-struck_1f929.png','https://em-content.zobj.net/source/microsoft-teams/337/winking-face_1f609.png']
      const pop =document.createElement('img');
      const pop2 =document.createElement('img');
    pop.classList.add('pop');
    pop2.classList.add('pop');
pop.style.filter ='hue-rotate(130deg)'
      pop.src=imgs[random_img];
      pop.style.cssText =`position:absolute;wid th:100px;height:100px;top:${top}%;left:${left}%;text-align:center;z-index:1;`
      pop2.src=imgs[random_img2];
      pop2.style.cssText =`position:absolute;width:100px;height:100px;left:${left2}%;top:${top2}%;text-align:center;z-index:0 ;`
      document.querySelector('#plus').append(pop) 
      document.querySelector('#plus').append(pop2) 
      setInterval(e => pop2.remove(),1800)
      setInterval(e => pop.remove(),1800)
   aduio.autoplay = true;

      document.querySelector('#plus').append(aduio) 
      setInterval(e => aduio.remove(),1000)
  document.querySelector('.inp').value = ''

  }
  else{
    const aduio =document.createElement('audio');
    const img =document.createElement('img');
    const img2 =document.createElement('img');
    let random_img=Math.round(Math.random() *2)
    let imgs =['https://em-content.zobj.net/source/microsoft-teams/337/persevering-face_1f623.png','https://em-content.zobj.net/source/microsoft-teams/337/sad-but-relieved-face_1f625.png','https://em-content.zobj.net/source/microsoft-teams/337/pensive-face_1f614.png']
    document.querySelector('#plus').append(img) 
    document.querySelector('#plus').append(img2) 
img.classList.add('pop');
img2.classList.add('pop');
    let top =Math.round(Math.random() *80)
    let top2 =Math.round(Math.random() *80)
    let left =Math.round(Math.random() *80)
    let left2 =Math.round(Math.random() *80)
    img.src=imgs[random_img];
    img2.src=imgs[random_img];
    img.style.cssText =`position:absolute;width:100px;height:100px;left:${left}%;top:${top}%;text-align:center;z-index:0 ;`
    img2.style.cssText =`position:absolute;width:100px;height:100px;left:${left2}%;top:${top2}%;text-align:center;z-index:0 ;`
    setInterval(e => img2.remove(),1800)
    setInterval(e => img.remove(),1800)
    document.querySelector('#plus').append(aduio) 
   aduio.autoplay = true;
   document.querySelector('.inp').value = ''
   document.querySelector('#score_').classList.add('toggle')   
   setTimeout(e => document.querySelector('#score_').classList.remove('toggle'),1000)
   setInterval(e => aduio.remove(),1000)

  }
document.querySelector('.inp').focus();
}

}

function answer(e) {
    document.querySelector('.inp').classList.add('inp_ani');
  setTimeout(e =>{
    
    document.querySelector('.inp').classList.remove('inp_ani');
  },1000)

  document.querySelector('.inp').value = result - random_Number; 
}
function fulls(params) {
  document.documentElement.requestFullscreen()
}
function exitf(params) {
document.exitFullscreen()
}
  return (
    <div id='plus'>

      <h1 id='score' style={{'--color':'#57cec4'}} >
      <ion-icon name="checkmark-done-circle"></ion-icon> : <span id="score_"> {count} </span>
        <br />
        <ion-icon name="speedometer-outline"></ion-icon> : <span id="LV" >{Lv}</span>
        <br />
      </h1>
{/* <label id='range'>
  <input type="range"  min='3' max='99'  onChange={e => console.log(e.value)} />
</label> */}
      <button id='answer' onClick={answer}  style={{'--color':'#57cec4'}} ><i className='bx bxs-bolt-circle'></i></button>
      <button id='settings' onClick={settings}   style={{'--color':'#57cec4'}} ><ion-icon name="settings"></ion-icon></button>
      <button id='full_s' onClick={fulls} onDoubleClick={exitf}  style={{'--color':'#57cec4'}} ><ion-icon name="scan-circle-outline"></ion-icon></button>
      <button id='rescore' onClick={e => sectcount(e => e = 0)}   style={{'--color':'#57cec4'}} ><ion-icon name="reload-outline"></ion-icon></button>

      <h1 id='qu'  style={{'--color':'#57cec4'}} >How much <span id='halal'>{c}    <i className="fa-duotone fa-heart-crack" ></i>
</span> {random_Number} =  {result} ?</h1>

<input type="number" className='inp' min='0' max='500'  id='inpUT_'  style={{'--color':'#57cec4'}}  onKeyDown={e => {
  if(e.target.value.length >= 4){
    e.target.value = ''
    e.target.value.replace('-','')
  }
console.log(e.target.value.length);
  if(e.key === "Enter"){
check();
  }
}}/>
<h1 id='_'  style={{'--color':'#57cec4'}} >{c}</h1>
<h1 id='number'  style={{'--color':'#57cec4'}} >{random_Number}</h1>
<h1 id='eq'   style={{'--color':'#57cec4'}}>=</h1>
<h1 id='result'  style={{'--color':'#57cec4'}} >{result}</h1>
<button id="check" onClick={check}  style={{'--color':'#57cec4'}} >check</button>
    </div>
  )
}

export default Plu