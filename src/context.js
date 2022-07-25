import React, { useState, useContext, useEffect, createContext } from 'react';
import * as BookAPI from './BooksAPI';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [textMessage, settextMessage] = useState('');
  const [mapOfId, setMapOfId] = useState(new Map());
  const [submergedBooks, setSubMergedBooks] = useState([]);
  const [booksFromSearch, setBooksFromSearch] = useState([]);
  const [showSearchPage, setshowSearchPage] = useState(false);

  useEffect(() => {
    BookAPI.getAll().then((data) => {
      setBooks(data);
      setMapOfId(createMapOfBooks(data));
    });
  }, []);

  useEffect(() => {
    const combined = booksFromSearch.map((book) => {
      if (mapOfId.has(book.id)) {
        return mapOfId.get(book.id);
      } else {
        return book;
      }
    });
    setSubMergedBooks(combined);
  }, [booksFromSearch, mapOfId]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const changeShelf = (book, shelf) => {
    const updateShelf = books.map((item) => {
      if (item.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return item;
    });
    if (!mapOfId.has(book.id)) {
      book.shelf = shelf;
      updateShelf.push(book);
    }
    setBooks(updateShelf);
    BookAPI.update(book, shelf);
  };

  useEffect(() => {
    let clearSearch = true;

    if (query) {
      BookAPI.search(query, 20).then((data) => {
        if (data && !data.error) {
          if (clearSearch) {
            setBooksFromSearch(
              data.map((booksSearch) => {
                books.forEach((book) => {
                  if (booksSearch.id === book.id) {
                    booksSearch.shelf = book.shelf;
                  }
                });
                return booksSearch;
              })
            );
            setshowSearchPage(true);
          }
        } else {
          setBooksFromSearch([]);
        }
      });
    }

    return () => {
      clearSearch = false;
      setBooksFromSearch([]);
      settextMessage('Plase enter somting');
    };
  }, [books, query]);

  return (
    <AppContext.Provider
      value={{
        books,
        changeShelf,
        query,
        setQuery,
        booksFromSearch,
        submergedBooks,
        showSearchPage,
        textMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
