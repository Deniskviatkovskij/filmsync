const tags = document.querySelectorAll('[data-tab-target]')
const tabConstents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabConstents.forEach(tabContent => { tabContent.classList.remove('active')})
        target.classList.add('active')
    })
})
