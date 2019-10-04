// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const divHeader = document.createElement('div');
    divHeader.className = 'header';
    

    const spanDate = document.createElement('span');
    spanDate.className = 'date';
    spanDate.textContent = 'MARCH 28, 2019';

    const h1Tittle = document.createElement('h1')
    h1Tittle.textContent = 'Lambda Times';

    const spanTemp = document.createElement('span')
    spanTemp.className = 'temp'
    spanTemp.textContent = '98';

    divHeader.appendChild(spanDate);
    divHeader.appendChild(h1Tittle);
    divHeader.appendChild(spanTemp);
    
    return divHeader;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());