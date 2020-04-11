function createSideMenuElement(sideMenu, menuElement) {
    const listItem = document.createElement('li');
    listItem.classList.add('side-menu-button');

    const anchor = document.createElement('a');
    anchor.textContent = menuElement.name;
    anchor.setAttribute('href', menuElement.reference);
    anchor.classList.add('font-primary-color');
    listItem.appendChild(anchor);

    sideMenu.appendChild(listItem);
}

// function setDocumentEventListeners() {
//     const sideMenu = document.querySelector('#side-menu');
//     document.addEventListener('click', function() {
//         sideMenu.classList.toggle('unactive-side-menu');
//     });
// }

function setSideMenuEventListeners(sideMenu) {
    document.querySelector('#nav-slide-button').addEventListener('click', function() {
        const sideMenuClassList = sideMenu.classList;
        if (sideMenuClassList.contains('unactive-side-menu')) {
            sideMenuClassList.remove('unactive-side-menu');
            sideMenuClassList.add('active-side-menu');
        } else if (sideMenuClassList.contains('active-side-menu')) {
            sideMenuClassList.remove('active-side-menu');
            sideMenuClassList.add('unactive-side-menu');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuElements = [{
            name: 'Start',
            reference: '#hero-slider'
        },
        {
            name: 'Cooking Program',
            reference: '#cooking-program-card'
        },
        {
            name: 'Day Promotions',
            reference: '#day-promotions'
        },
        {
            name: 'Day Event',
            reference: '#day-event-card'
        },
        {
            name: 'Social Media',
            reference: '#social-media-card'
        },
        {
            name: 'Find Us',
            reference: '#find-us'
        }
    ];

    const sideMenu = document.querySelector('#side-menu');
    let breakLine;
    createSideMenuElement(sideMenu, menuElements[0]);
    for (let i = 1; i < menuElements.length; i++) {
        breakLine = document.createElement('hr');
        breakLine.classList.add('sidemenu-break-line');
        sideMenu.appendChild(breakLine);
        createSideMenuElement(sideMenu, menuElements[i]);
    }
    // setDocumentEventListeners();
    setSideMenuEventListeners(sideMenu);
});