// stcky header
let mainHeader = document.getElementById("myHeader");
let sticky = mainHeader.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
});

// accordion

{
  let acordionBtn = document.getElementsByClassName("faq_item_button");

  // try another
  [...acordionBtn].forEach((currentItem, i) => {
    let acordionItem = document.getElementsByClassName("faq_item")[i];

    currentItem.addEventListener("click", () => {
      let showClass = document.querySelector(".showAcordion");

      if (!acordionItem.classList.contains("showAcordion") && showClass) {
        showClass.classList.remove("showAcordion");
      }

      acordionItem.classList.toggle("showAcordion");
    });
  });
}
