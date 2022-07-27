# Udacity FEND MyReads Project

- The app consists of two pages: the main page and the search page.
- The main page shows 4 shelves with books.
- Clicking on + icon on the main page links to search page, where more books may be added to your shelves.
- You can assign the books to shelves, both from the search page and the homepage.
- You can also click on the book title to go to the View More About Book page

## Installation

Install my-project with npm

```bash
  cd my-project
  npm install
```

## What You're Getting

```
├── CONTRIBUTING.md
├── public
│   ├── favicon.ico
│   └── index.html
├──  src
├── assets
│   ├── icon
│   ├── add.svg
│   ├── arrow-back.svg
│   └── arrow-drop-down.svg
│  └── images
│   └── myread.jpg
├── components
│   ├── Book.jsx
│   ├── BookDetails.jsx
│   ├── BookSearch.jsx
│   ├── Bookshelf.jsx
│   ├── Footer.jsx
│   ├── Grid.jsx
│   ├── Header.jsx
│   ├── Helmet.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── Section.jsx
├── pages
│   ├── Home.jsx
│   └── Search.jsx
├── pages
│   └── routes.jsx
├── sass
│   ├── components
│     ├──_book.scss
│     ├──_bookdetails.scss
│     ├──_footer.scss
│     ├──_header.scss
│     ├──_loader.scss
│     ├──_home.scss
│     ├──_search.scss
│     └──_section.scss
│   ├──_base.scss
│   ├──_mixins.scss
│   ├──_variables.scss
│   └──index.scss
├── utils
│   └── BooksAPI
├── App.js
├── context.js
├── index.js
├── package.json
├── README.md - This file.
└── yarn.lock
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file `BooksAPI.js` contains the methods you will need to perform necessary operations on the backend:

-getAll
-update
-search

getAll
Method Signature:

## getAll()

Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.

## update

Method Signature:

-update(book, shelf)
-book: `<Object>` containing at minimum an id attribute
-shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-Returns a Promise which resolves to a JSON object containing the response data of the POST request

## search

Method Signature:

search(query)
-query: `<String>`
-Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
