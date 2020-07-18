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
    response.data.articles.bootstrap.forEach(article => {
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
      // pic.setAttribute('src')

      title.textContent = article.headline
      name.textContent = 'By ' + article.authorName
      pic.src.textContent = article.authorPhoto

      card.appendChild(title)
      card.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(pic)
      author.appendChild(name)

      card.addEventListener('click', () => {
        console.log(article.headline)
      })

      const container = document.querySelector('.cards-container')

      container.appendChild(card)

    })

    response.data.articles.javascript.forEach(article => {
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
      // pic.setAttribute('src')

      title.textContent = article.headline
      name.textContent = 'By ' + article.authorName
      pic.src.textContent = article.authorPhoto

      card.appendChild(title)
      card.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(pic)
      author.appendChild(name)

      card.addEventListener('click', () => {
        console.log(article.headline)
      })

      const container = document.querySelector('.cards-container')

      container.appendChild(card)

    })

    response.data.articles.jquery.forEach(article => {
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
      // pic.setAttribute('src')

      title.textContent = article.headline
      name.textContent = 'By ' + article.authorName
      pic.src.textContent = article.authorPhoto

      card.appendChild(title)
      card.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(pic)
      author.appendChild(name)

      card.addEventListener('click', () => {
        console.log(article.headline)
      })

      const container = document.querySelector('.cards-container')

      container.appendChild(card)

    })

    response.data.articles.node.forEach(article => {
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
      // pic.setAttribute('src')

      title.textContent = article.headline
      name.textContent = 'By ' + article.authorName
      pic.src.textContent = article.authorPhoto

      card.appendChild(title)
      card.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(pic)
      author.appendChild(name)

      card.addEventListener('click', () => {
        console.log(article.headline)
      })

      const container = document.querySelector('.cards-container')

      container.appendChild(card)

    })

    response.data.articles.technology.forEach(article => {
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
      // pic.setAttribute('src')

      title.textContent = article.headline
      name.textContent = 'By ' + article.authorName
      pic.src.textContent = article.authorPhoto

      card.appendChild(title)
      card.appendChild(author)
      author.appendChild(imgContainer)
      imgContainer.appendChild(pic)
      author.appendChild(name)

      card.addEventListener('click', () => {
        console.log(article.headline)
      })

      const container = document.querySelector('.cards-container')

      container.appendChild(card)

    })

    console.log(response)
  })
  .catch(err => {
    console.log('ERROR', err)
  })