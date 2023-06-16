const input1 = document.querySelector('.scale1');
const input2 = document.querySelector('.scale2');
const submit = document.querySelector('.btn1');
const result = document.querySelector('.paragraph1');
const resultdiv = document.querySelector('.results');
const refreshbtn = document.querySelector('.refreshbtn');
let value1;
let value2;
let number1 = [];
let listNum = [];

submit.addEventListener('click', function () {
  balanceNum();
});

refreshbtn.addEventListener(
  'click',
  () => {
    window.location.reload();
  },
  1000
);

function balanceNum() {
  value1 = input1.value; //here .value means we are getting the value of its number
  console.log(value1);
  value2 = input2.value;
  number1 = value1.split(','); // the split with the comma put  the numbers as single index without the comma the numbers will be joined
  listNum = value2.split(',');
  for (let i = 0; i < listNum.length; i++) {
    for (let j = 0; j < listNum.length; j++) {
      if (
        parseInt(number1[0]) + parseInt(listNum[i]) ===
        parseInt(number1[1]) + parseInt(listNum[j])
      ) {
        return result.innerHTML = `${listNum[i]}, ${listNum[j]} 	&#129395 they are balanced`;
      } else if (
        parseInt(number1[1]) + parseInt(listNum[i]) ===
        parseInt(number1[0]) + parseInt(listNum[j])
      ){
        return result.innerHTML = `${listNum[i]}, ${listNum[j]} 	&#129395 they are balanced`;
      }
    }
  }

  return result.innerHTML =  ` 	&#128546 sorry they can't be balanced`;
}
