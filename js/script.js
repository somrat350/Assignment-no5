
// Heart button

let heartCount = 0;

const  heartClick = document.getElementsByClassName('heart-click');

for (const heart of heartClick) {
  heart.addEventListener('click', ()=>{
    heartCount += 1;
    document.getElementById('heart-count').innerHTML = heartCount;
  })
}








// Call button

let coinCount = 100;

document.getElementById('coin-count').innerText = coinCount;

const callButton = document.querySelectorAll('.card .call-button');

for (const call of callButton) {
  call.addEventListener('click', (e)=>{
    const card = e.currentTarget.closest(".card");

    if (coinCount >= 20) {
      const title = card.querySelector(".title").innerText;
      const subTitle = card.querySelector(".sub-title").innerText;
      const number = card.querySelector(".number").innerText;

      const historyCard = `
      <div class="bg-gray-100 px-3 lg:px-2 py-2 rounded-lg flex justify-between items-center">
            <div class="">
              <h3 class="text-lg font-semibold">${title}</h3>
              <p class="text-lg text-gray-500">${number}</p>
            </div>
            <span class="font-medium">${getCurrentTime()}</span>
          </div>
      `;

      document.querySelector('.history').innerHTML += historyCard;

      alert(`📞 Calling ${subTitle} ${number}...`);
      coinCount -= 20;
      document.getElementById('coin-count').innerHTML = coinCount;
    }else{
      alert("❌ You don't have enough coins. You need at least 20 coins to make a call.")
    }

  })
}




// History side

document.querySelector('.clear').addEventListener('click', ()=>{
  document.querySelector('.history').innerHTML = '';
})

function getCurrentTime() {

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let amPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, '0')

  let final = `${hours}:${minutes}:${seconds} ${amPm}`;

  return final;  

}







// Copy button

let copied = 0;

const copiedCount = document.getElementById('copied-count')
copiedCount.innerText = copied;

const copyButton = document.querySelectorAll('.card .copy-button');

for (const copy of copyButton) {
  copy.addEventListener('click', (e)=>{
    const card = e.currentTarget.closest(".card")
    const number = card.querySelector(".number").innerText;

    navigator.clipboard.writeText(number);

    alert('Number is copied: ' + number)

    copied++;
    copiedCount.innerText = copied;

  })
}