let navElements = {
    navBarContainer: document.getElementById('navContainer')
}

function dock() {
    navElements.navBarContainer.style.right = '0%';
}

function unDock() {
    navElements.navBarContainer.style.right = '41%';
}

function dockUnDock() {
    debugger;
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 80) {
        unDock();
    }
    else {
        dock();
    }
}

window.onscroll = function () {

    dockUnDock();
}