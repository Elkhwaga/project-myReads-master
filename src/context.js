import React, { useState, useContext, useEffect, useCallback } from 'react';
import * as BookAPI from './utils/BooksAPI';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = useCallback(() => {
    setLoading(true);

    BookAPI.getAll()
      .then((data) => {
        console.log(data);
        if (data) {
          setBooks(data);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const changeShelf = useCallback(
    async (book, shelf) => {
      await BookAPI.update(book, shelf);
      fetchBooks();
    },
    [fetchBooks]
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks, changeShelf]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        changeShelf,
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
