import './App.css';
import { useState } from 'react';
import Header from './layouts/header';
import Api from './search/api';
import List from './search/list';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await Api(term);
    setImages(result);
  };
  return (
    <div className="App">
      <Header searchData={handleSubmit} />
      <List imagesPlaceholder={images} />
    </div>
  );
}

export default App;
