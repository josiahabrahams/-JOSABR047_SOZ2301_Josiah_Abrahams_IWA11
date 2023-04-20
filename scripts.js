// script.js

 const root1 ={
 order: document.querySelector('[data-key="order1" ]' ),
biscuits: document.querySelector('[data-biscuits="10"]' ),
 donuts: document.querySelector('[ data-donuts="13" ]'),
 pancakes: document.querySelector('[data-pancakes="0" ]'),
 delivered: document.querySelector('[data-delivered="false"]')
} 

const count = document.querySelectorAll('.count')


const biscuits1 =  root1.biscuits.dataset.biscuits
count[0].textContent= biscuits1
const donuts1 = root1.donuts.dataset.donuts
count[1].textContent=donuts1
const pancakes1 = root1.pancakes.dataset.pancakes
count[2].textContent = pancakes1
 
  const check = root1.delivered.dataset.delivered

const status1 = check ==='true'?'Delivered':'Pending'
const deliveryStatus = document.querySelectorAll('.status')
deliveryStatus[0].lastElementChild.textContent= status1




 const root2 ={ 
   order: document.querySelector('[data-key="order2"]' ),
    biscuits : document.querySelector('[data-biscuits="5"]'),
  donuts: document.querySelector('[data-donuts="0"]'),
 pancakes: document.querySelector('[data-pancakes="2" ]'),
 delivered:document.querySelector('[data-delivered="false"]'),
  }
const biscuits2= root2.biscuits.dataset.biscuits
 count[3] .textContent = biscuits2
 
 const donuts2 = root2.donuts.dataset.donuts
 count[4].textContent = donuts2

 const pancakes2 =root2.pancakes.dataset.pancakes
count[5].textContent = pancakes2

const check2 =root2.delivered.dataset.delivered
const status2 = check2 === 'true' ? 'Delivered' : 'Pending'
deliveryStatus[1].lastElementChild.textContent = status2  

const root3 = {
order: document.querySelector('[data-key="order3"]' ),
 biscuits: document.querySelector('[ data-biscuits="12" ]'),
 donuts: document.querySelector('[ data-donuts="11" ]'),
 pancakes: document.querySelector('[data-pancakes="15" ]'),
 delivered: document.querySelector('[ data-delivered="true"]'),
}

 const biscuits3=root3.biscuits.dataset.biscuits
 count[6].textContent=biscuits3
const donuts3 = root3.donuts.dataset.donuts
count[7].textContent=donuts3
const pancakes3 = root3.pancakes.dataset.pancakes
count[8].textContent=pancakes3
const check3 =  root3.delivered.dataset.delivered
 const status3 = check3==="true" ? 'Delivered' : 'Pending'
 deliveryStatus[2].lastElementChild.textContent = status3
