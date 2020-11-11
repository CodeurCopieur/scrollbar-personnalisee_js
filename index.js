const progressBar = document.querySelector('.scrollbar');
const progressBarClick = document.querySelector('.clickScrollbar');

console.log(document.documentElement.scrollHeight , document.documentElement.clientHeight);

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scrollBar() {
  let progress = (document.documentElement.scrollTop / totalHeight ) * 100;

  progressBar.style.height = ` ${progress}% `;
  progressBar.style.opacity = ` ${progress}% `;
}

window.addEventListener('scroll', scrollBar)


function scrollBarClick(e) {
  e.preventDefault();

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;

  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })
}

progressBarClick.addEventListener('click', scrollBarClick)