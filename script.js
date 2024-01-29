const srchform = document.getElementById("frm");
const searchinput = document.getElementById("frminput");
const imgblock = document.getElementById("imgblock");
const btnshow = document.getElementById("btnshow");
const search = document.getElementById("btn");
pagesize = 15;
let keyword = "";
let page = 1;
let accessKey = "7FH3dlHwBOzww28jpxN2pByVI_eBfUcR9KlFBWhMfaU";
async function searchImg() {
    keyword = searchinput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${pagesize}`;
    const response = await fetch(url);
    const data = await response.json();
    btnshow.style.display = "none";
    if (page === 1) {
        imgblock.innerHTML = "";
    }
    console.log(data);
    let results = await data.results;
    results.map((e) => {
        const img = document.createElement("img");
        img.src = e.urls.small;
        const imglink = document.createElement("a");
        imglink.href = e.links.html;
        imglink.target = "_blank";
        imglink.appendChild(img);
        imgblock.appendChild(imglink);
        btnshow.style.display = "block";
    })

}
srchform.addEventListener("submit", function (e) {
    e.preventDefault();
    page = 1;
    searchImg();
});
btnshow.addEventListener("click", function (e) {
    page++;
    searchImg();
});
gsap.from("#container", {
    scale: 0,
    duration: 1.5,
    opacity: 0
});
gsap.from("#heading", {
    y: -50,
    duration: 1,
    opacity: 0,
    scale: 0
});
const menu = document.querySelector("#menucont")

const fullNav = document.querySelector("#full-menu");
var count = 0;
menu.addEventListener("click", function () {
    count++;
    // console.log(count);
    if (count % 2 != 0) {
        fullNav.style.top = "0rem";
        menu.style.top = "2.4rem";
    }
    else {
        fullNav.style.top = "-2rem";
        menu.style.top = "1rem";
    }

})
var lock = true;
const contactbtn = document.querySelector("#contactbtn");
const contact = document.querySelector("#contact");
// contactbtn.style.color="red";
var countc = 0;
// contact.style.;

contactbtn.addEventListener("click", function () {
    countc++;
    if (countc % 2 != 0 ) {
        contact.style.display = "flex";

        contact.style.scale = "1";
    }
    else {
        contact.style.display = "none";
        contact.style.scale = "0";
    }
})

const about = document.querySelector("#about");
const aboutbtn = document.querySelector("#aboutbtn");
var counta = 0;

aboutbtn.addEventListener("click", function () {
    counta++;
    if (counta % 2 != 0 ) {
        about.style.right = "0rem";
        about.style.top = "0rem";
    }
    else {
        about.style.right = "-10rem";


    }

})
