const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

panels.forEach(panel => panel.addEventListener('mouseout', toggleClose));

function toggleClose(e) {
    // console.log(e.target.classList);
    if(e.target.classList.value.includes('open')) {
        this.classList.toggle('open');     }
}