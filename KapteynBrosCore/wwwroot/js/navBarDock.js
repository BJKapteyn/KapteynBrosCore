let navElements = {
    navBarContainer: document.getElementById('navContainer'),
    navBar: document.getElementById('navBar')
}

function dock() {
    navElements.navBar.style.transition = 'box-shadow 10ms';
    navElements.navBarContainer.style.right = '0%';
    navElements.navBar.style.boxShadow = '0px 0px 0px grey';
}

function unDock() {
    navElements.navBar.style.transition = 'box-shadow 500ms ease-out';
    navElements.navBarContainer.style.right = '41%';
    navElements.navBar.style.boxShadow = '5px 0px 10px grey';
}

function dockUnDock() {
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