const items = document.querySelectorAll(".collapsible__item");

items.forEach(item =>  {
  item.addEventListener("click", collapse);
  function collapse() {
    const content = item.nextElementSibling;
    content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
  }
})