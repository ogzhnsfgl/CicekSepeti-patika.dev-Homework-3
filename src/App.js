import './scss/main.scss';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import { useState, useEffect, useCallback } from 'react';
import alertify from 'alertifyjs';
import { fetchData } from './services/api';

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

    (async () => {
      const { loading, error, data } = await fetchData();
      if (data.length > 0) {
        setFetchState({ loading, error, data });
      }
    })();

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
        error={fetchState.error}
        deleteCard={deleteCard}
      />
      <Footer />
    </div>
  );
}

export default App;
