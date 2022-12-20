const webImg = [
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80",
];

const figmaImg = [
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
  "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
];

// const websiteUrls = [];
// const figmaFiles = [];

const markUp1 = `<section>
${Array.from(
  webImg,
  (image) =>
    `<div><span class="overlay"><a href="#" target="_blank">Open</a></span>
            <img
              src=${image}
              alt="website"
            /></div>
          `
).join("")}
</section>`;

const markUp2 = `<section>
${Array.from(
  figmaImg,
  (image) =>
    `<div><span class="overlay"><a href="#" target="_blank">Open</a></span>
            <img
              src=${image}
              alt="website"
            /></div>
          `
).join("")}
</section>`;

document.getElementById("frame1").innerHTML = markUp1;
document.getElementById("frame2").innerHTML = markUp2;

// Scrollbar;
//  when the window page is scrolled, execute function
// onscroll event is attached to the window object which stands for the whole page
//  in this case it is used as "onscroll = (event)" in which in this case event is triggering the function

window.onscroll = () => {
  scroll();
};

// console.log();
// scrollTop is the pixels amount that the document is scrolled vertically, in this case 0
// documentElement is standing for the HTML element that is encapsulating the whole document
// scrollHeight is the height of an element's content, in this case the HTML's whole size
// clientHeight in this case is returning the viewport height, which is the size of the portion of the window that is currently being viewed

const scroll = () => {
  let scrollBegin =
    document.body.scrollTop || document.documentElement.scrollTop;
  //   console.log(scrollBegin); -> which is the scrollTop of the HTML element
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  //   console.log(height); -> find the height of the document that's remaining when you subtract the current viewport height from the document's
  // total height
  let scrolled = (scrollBegin / height) * 100;
  // this equation is used to find the position of where you are scrolled, by taking the pixel amount of where you are scrolled vertically divided by the height
  // in pixels of the document, then multiplied by 100 to get a valid percent number for the css height amount
  document.getElementById("scrollbar2").style.height = scrolled + "%";
};
