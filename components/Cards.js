// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const container = document.querySelector('.cards-container')

    response.data.articles.bootstrap.forEach(article => {
      container.appendChild(cardCreator(article))
    })

    response.data.articles.javascript.forEach(article => {
      container.appendChild(cardCreator(article))
    })

    response.data.articles.jquery.forEach(article => {
      container.appendChild(cardCreator(article))
    })

    response.data.articles.node.forEach(article => {
      container.appendChild(cardCreator(article))
    })

    response.data.articles.technology.forEach(article => {
      container.appendChild(cardCreator(article))
    })

  })

  .catch(err => {
    console.log('Your error message is ', err.message)
  })


const cardCreator = (obj) => {
  const card = document.createElement('div')
  const title = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const pic = document.createElement('img')
  const name = document.createElement('span')

  card.classList.add('card')
  title.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  title.textContent = obj.headline
  name.textContent = 'By ' + obj.authorName
  pic.setAttribute('src', obj.authorPhoto)

  card.appendChild(title)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(pic)
  author.appendChild(name)

  card.addEventListener('click', () => {
    console.log(obj.headline)
  })

  const container = document.querySelector('.cards-container')

  container.appendChild(card)

  return card
}