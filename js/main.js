let elModalOpenBtn = document.querySelector(".js-modal-btn");
let elModal = document.querySelector(".modal-window");
let elModalCloseBtn = document.querySelector(".js-modal-close-btn");


elModalOpenBtn.addEventListener("click", function(){
    elModal.classList.add("modal-show")
})
elModalCloseBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-show")
})