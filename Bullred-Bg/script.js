const container = document.querySelector('.container')
const btnEl = document.querySelector('.btn')
const closeIconEl = document.querySelector(".close-icon")
const popupContainerEl = document.querySelector('.popup-container')

btnEl.addEventListener('click',()=> {
    container.classList.add('active')
    popupContainerEl.classList.remove('active')
})

closeIconEl.addEventListener('click',()=> {
    container.classList.remove('active')
    popupContainerEl.classList.add('active')
})