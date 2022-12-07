/**
 * Script to create my background timeline from a json data file
 */

// get the data from json file
fetch("./data/data_en.json")
  .then((response) => response.json())
  .then((jsonData) => {
    create_timeline(jsonData);
  });

let background_timeline = document.querySelector("#background .box-timeline");

// create the timeline in the DOM
const create_timeline = function (data) {
  for (let i = 0; i < data.background.boxtimeline.length; i++) {
    let item = document.createElement("div");
    item.classList.add("timeline-item");
    let a = document.createElement("a");
    a.href = data.background.boxtimeline[i].url;
    a.target = "_blank";
    let div = document.createElement("div");
    div.classList.add("item-description");
    let h3 = create_h3(data, i);
    let p = document.createElement("p");
    p.innerText = data.background.boxtimeline[i].p;
    let img = create_img(data, i);
    let svg = create_svg();

    div.appendChild(h3);
    div.appendChild(p);
    a.appendChild(div);
    a.appendChild(img);
    item.appendChild(a);
    item.appendChild(svg);
    background_timeline.appendChild(item);
  }
};

// automatise the creation of h3 that incorporate time elements
const create_h3 = function (data, i) {
  let h3 = document.createElement("h3");
  h3.innerHTML = data.background.boxtimeline[i].h3;
  let time = "";

  switch (data.background.boxtimeline[i].time.length) {
    case 2:
      time = document.createElement("time");
      time.innerText = data.background.boxtimeline[i].time[0];
      h3.append(time);
      h3.innerHTML = h3.innerHTML + "-";
      time.innerText = data.background.boxtimeline[i].time[1];
      h3.append(time);
      break;
    case 4:
      time = document.createElement("time");
      time.innerText = data.background.boxtimeline[i].time;
      h3.innerHTML = h3.innerHTML + " ";
      h3.appendChild(time);
      break;
  }
  return h3;
};

// automatise the creation of img elements
const create_img = function (data, i) {
  let img = document.createElement("img");
  img.src = data.background.boxtimeline[i].img.src;
  img.alt = data.background.boxtimeline[i].img.alt;
  if (data.background.boxtimeline[i].img.class != "") {
    img.classList.add(data.background.boxtimeline[i].img.class);
  }
  return img;
};

// automatise the creation of svg elements
const create_svg = function () {
  let svg = document.createElement("svg");
  svg.classList.add("timeline-card-svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  let path = document.createElement("path");
  path.setAttribute(
    "d",
    "M5 15h3v21H5V15zm1.5-2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
  );
  svg.appendChild(path);
  return svg;
};

//Faire bouger la timeline avec les fleches cliquables

const background_section = document.querySelector("section#background");
background_timeline.scrollLeft = 0;
const left_arrow = document.querySelector("#left");
const right_arrow = document.querySelector("#right");
// const timeline_item = document.querySelector(".timeline-item");
// console.log(timeline_item.offsetWidth);
right_arrow.hidden = true;

let width = background_timeline.offsetWidth - 100;
let count = 1;

left_arrow.addEventListener("click", function () {
  right_arrow.hidden = false;
  background_timeline.scrollLeft -= width;
  console.log(background_timeline.scrollLeft);
  console.log(width * count)
  count++;
  if (background_timeline.scrollLeft == (width * count)){
    left_arrow.hidden = true;
  }
});

right_arrow.addEventListener("click", function () {
  background_timeline.scrollLeft += width;
  if (background_timeline.scrollLeft == 0){
    right_arrow.hidden = true;
  }
});

background_section.addEventListener("scroll", function() {
  console.log("je suis en focus sur la timeline");
})

// const timeline_item = document.querySelector(".timeline-item");
// const item_width = timeline_item.offsetWidth;
// const total_div_width = item_width * 7 + 
// background_timeline.childElementCount