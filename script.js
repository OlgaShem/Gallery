let cards = [
    {
        title: "Heading",
        text: "Here goes some sample, example text that is relatively short.",
        image: "1.jpg",
        btnSave: "Save to collection",
        btnShare: "Share",
    },
    {
      title: "Heading",
      text: "And here full text doesn’t fit, and at the very end of it we should show a truncatio. Here goes some sample, example text that is relatively short.Here goes some sample, example text that is relatively short.",
      image: "2.jpg",
      btnSave: "Save to collection",
      btnShare: "Share",
  },
  {
    title: "Heading",
    text: "And here full text doesn’t fit, and at the very end of it we should show a truncatio",
    image: "4.jpg",
    btnSave: "Save to collection",
    btnShare: "Share",
  },
  {
    title: "Heading",
    text: "Here goes some sample, example text that is relatively short.Here goes some sample, example text that is relatively short, example text that is relatively short..",
    image: "3.jpg",
    btnSave: "Save to collection",
    btnShare: "Share",
  },
]


function getAll() {
  let wrap = '';
  for (let item of cards) {
      wrap += `
          <div class="card col-4">
            <img class="card-img-top" alt="" src="img/${item.image}">
            <div class="card-body">
              <h4 class="card-title">${item.title}</h4>
              <p class="text card-text">${item.text}</p>
              </div>
          <div class="card-buttons">
              <a href="#" class="btn orange">${item.btnSave}</a>
              <a href="#" class="btn btn-outline-secondary">${item.btnShare}</a>
            </div>
          </div>`
  }
  document.querySelector(".card-section").innerHTML = wrap;
}

getAll();

/*Dark theme*/

let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let body = document.body

dark.addEventListener("click", (e) => {
body.setAttribute("data-bs-theme", "dark");
});

light.addEventListener("click", (e) => {
body.setAttribute("data-bs-theme", "light");
});



/*Tabs for aside categoties*/

const navLink  = document.querySelectorAll(".nav-link");

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.querySelector(".photo").click();


/*Add button Show more*/

let cardText = document.querySelectorAll(".card-text");
let text = document.querySelector(".text");
function show() {
  for (let i = 0; i < cardText.length; i++) {
      if (cardText[i].textContent.length > 90) {
        cardText[i].innerHTML += `<div class="show-more">Show more...</div>`;
    }
  }
}
show();

let read= document.querySelectorAll(".show-more");
for (let i = 0; i < read.length; i++) {
read[i].addEventListener('click',e => read[i].closest('p').style.height = 'auto');
read[i].addEventListener('click',e => read[i].style.display = 'none');
}

