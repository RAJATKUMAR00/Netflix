const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab Content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItem.forEach(item => item.addEventListener('click', selectItem));


