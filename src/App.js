import './scss/main.scss';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import { useState, useEffect, useCallback } from 'react';
import alertify from 'alertifyjs';

/* Initial states */
const initialState = {
  loading: true,
  error: null,
  data: [],
};

function App() {
  const [fetchState, setFetchState] = useState(initialState);
  /* Filtered List created from fetched data in order to keep main data safe .*/
  const [filteredList, setFilteredList] = useState(fetchState.data);
  /* Search input state is using at navbar component */
  const [input, setInput] = useState('');

  /* ComponentDidMount - Fetcing Data */
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://614f3e1cb4f6d30017b48511.mockapi.io/api/youtube',
          {
            method: 'get',
            signal: signal,
          }
        );
        const data = await res.json();

        setFetchState((prev) => ({ ...prev, data }));
      } catch (error) {
        setFetchState((prev) => ({ ...prev, error }));
      } finally {
        setFetchState((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  /* Filter Data covered useCallBack in order to prevent infinite loop */
  const filterList = useCallback(
    (input) => {
      const filtered = [...fetchState.data].filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredList(filtered);
    },
    [fetchState.data]
  );

  /* When state of input updated */
  useEffect(() => {
    filterList(input);
  }, [filterList, input]);

  /* Delete card from filtered list */
  const deleteCard = (id) => {
    const deletedItem = fetchState.data.find((item) => item.id === id);
    console.log(deletedItem);
    const leftCards = fetchState.data.filter((card) => card.id !== id);
    setFetchState((prev) => ({ ...prev, data: leftCards }));
    setFilteredList(leftCards);
    alertify.notify(`Deleted! <hr> <strong>${deletedItem.title}`, 'warning', 4);
  };

  return (
    <div className="App">
      <Navbar filterList={filterList} input={input} setInput={setInput} />
      <CardList
        cardList={filteredList}
        isLoading={fetchState.loading}
        deleteCard={deleteCard}
      />
      <Footer />
    </div>
  );
}

export default App;
