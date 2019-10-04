// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        let correctData = response.data.articles;
        // data:
        // articles:
        // bootstrap: (3) [{…}, {…}, {…}]
        // javascript: (4) [{…}, {…}, {…}, {…}]
        // jquery: (3) [{…}, {…}, {…}]
        // node: (2) [{…}, {…}]
        // technology: (3) [{…}, {…}, {…}]
        for(let topic in correctData){
            correctData[topic].forEach(element => {
                // console.log(element);
                cardContainer.appendChild(CardCreator(element))
            });
        }
    })
    .catch(error => {
        console.log('error');
    })

const CardCreator = (obj) => {
    const divCard = document.createElement('div');
    divCard.className = 'card';

    const divHeadline = document.createElement('div');
    divHeadline.className = 'headline';
    divHeadline.textContent = obj.headline

    const divAuthor = document.createElement('div');
    divAuthor.className ='author';

    const divImgContainer = document.createElement('div');
    divImgContainer.className = 'img-container';

    const authorsImg = document.createElement('img');
    authorsImg.src = obj.authorPhoto;

    const authorsNameSpan = document.createElement('span');
    authorsNameSpan.textContent = `By ${obj.authorName}`;

    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);

    divAuthor.appendChild(divImgContainer);
    divAuthor.appendChild(authorsNameSpan);

    divImgContainer.appendChild(authorsImg);
    
    return divCard
}