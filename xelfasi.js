let ranges = document.querySelectorAll('input');
let paragraphs = document.querySelectorAll('p');
let btn = document.querySelectorAll('button');
ranges[0].addEventListener('input', () => {
  paragraphs[1].innerText = `რაოდენობა ${ranges[0].value} თანხა ${ranges[0].value * 20} ლარი`;
  if (ranges[0].value > 0) {
    ranges[0].style.accentColor = 'green';
     paragraphs[1].style.color = 'green';
     paragraphs[1].style.borderBlockEnd = '10px solid chocolate';
  } else {
    paragraphs[1].style.color = 'red';
    paragraphs[1].style.borderBlockEnd = '0';
    ranges[0].style.accentColor = 'red';
  }
 })

ranges[1].addEventListener('input', () => {
  paragraphs[3].innerText = `რაოდენობა ${ranges[1].value} თანხა ${ranges[1].value * 15} ლარი`;
  if (ranges[1].value > 0) {
    ranges[1].style.accentColor = 'green';
     paragraphs[3].style.color = 'green';
     paragraphs[3].style.borderBlockEnd = '10px solid chocolate';

  } else {
    paragraphs[3].style.color = 'red';
    paragraphs[3].style.borderBlockEnd = '0';
    ranges[1].style.accentColor = 'red';
  }
 })

ranges[2].addEventListener('input', () => {
  paragraphs[5].innerText = `რაოდენობა ${ranges[2].value} თანხა ${ranges[2].value * 15} ლარი`;
  if (ranges[2].value > 0) {
    ranges[2].style.accentColor = 'green';
     paragraphs[5].style.color = 'green';
     paragraphs[5].style.borderBlockEnd = '10px solid chocolate';

  } else {
    paragraphs[5].style.color = 'red';
    paragraphs[5].style.borderBlockEnd = '0';
    ranges[2].style.accentColor = 'red';
  }
 })

ranges[3].addEventListener('input', () => {
  paragraphs[7].innerText = `რაოდენობა ${ranges[3].value} თანხა ${ranges[3].value * 15} ლარი`;
  if (ranges[3].value > 0) {
    ranges[3].style.accentColor = 'green';
     paragraphs[7].style.color = 'green';
     paragraphs[7].style.borderBlockEnd = '10px solid chocolate';

  } else {
    paragraphs[7].style.color = 'red';
    paragraphs[7].style.borderBlockEnd = '0';
    ranges[3].style.accentColor = 'red';

  }
 })
ranges[4].addEventListener('input', () => {
  paragraphs[9].innerText = `რაოდენობა ${ranges[4].value} თანხა ${ranges[4].value * 10} ლარი`;
  if (ranges[4].value > 0) {
    ranges[4].style.accentColor = 'green';
     paragraphs[9].style.color = 'green';
     paragraphs[9].style.borderBlockEnd = '10px solid chocolate';

  } else {
    paragraphs[9].style.color = 'red';
    paragraphs[9].style.borderBlockEnd = '0';
    ranges[4].style.accentColor = 'red';
  }
 })

 btn[2].addEventListener('click', () => {
  document.querySelector('.x').style.display = 'block';
  document.getElementById('show').style.display = 'block';
  document.getElementById('show').innerText = ` შენი ხელფასი შეადგენს ${ranges[1].value * 15 + ranges[0].value * 20 + ranges[2].value * 15 + ranges[3].value * 15 + ranges[4].value * 10} ლარს`;
 })

 document.querySelector('.x').addEventListener('click', () => {
  document.querySelector('.x').style.display = 'none';
  document.getElementById('show').style.display = 'none';
 })
