import { useState } from 'react';

function Header({ searchData }) {
  const [valueInput, setValue] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchData(valueInput);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <div className="input-group mb-3">
          <input type="text" onChange={handleChange} className="form-control" placeholder="Car, Dog, Cat" />
        </div>
      </form>
    </div>
  );
}

export default Header;
