import React, { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the inputValue, like sending it to a server
    console.log('Input value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
