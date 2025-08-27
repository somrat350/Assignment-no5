
// Heart button

let heartCount = 0;

const  heartClick = document.getElementsByClassName('heart-click');

for (const heart of heartClick) {
  heart.addEventListener('click', ()=>{
    document.getElementById('heart-count').innerHTML = heartCount += 1;
  })
}