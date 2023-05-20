import React, { useState } from 'react';

const SearchOptions = () => {
  const [selectedType, setSelectedType] = useState('offers');
  const [selectedPrice, setSelectedPrice] = useState('ascending');
  const [negotiable, setNegotiable] = useState(false);
  const [recentlyPosted, setRecentlyPosted] = useState(false);
  const [newProduct, setNewProduct] = useState(false);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleNegotiableChange = () => {
    setNegotiable(!negotiable);
  };

  const handleRecentlyPostedChange = () => {
    setRecentlyPosted(!recentlyPosted);
  };

  const handleReset = () => {
    setSelectedType('offers');
    setSelectedPrice('ascending');
    setNegotiable(false);
    setRecentlyPosted(false);
    setNewProduct(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and search for results
  };

  return (
    <div className="max-w-[1000px] mx-auto my-10 bg-white rounded-lg shadow-lg p-6">
    <div className="justify-between items-center mb-4">
      <h1 className="text-right text-[#4dc263] underline cursor-pointer" onClick={handleReset}>
        Réinitialiser
      </h1>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className="flex justify-between mb-4">
        <div className="w-1/2 mr-4">
          <label htmlFor="type" className="font-bold block mb-2">
            Type :
          </label>
          <select
            id="type"
            value={selectedType}
            onChange={handleTypeChange}
            className="border rounded-md w-full p-2"
          >
            <option value="offers">Offres</option>
            <option value="demands">Demandes</option>
          </select>
        </div>
        <div className="w-1/2 ml-4">
          <label htmlFor="price" className="font-bold block mb-2">
            Prix :
          </label>
          <select
            id="price"
            value={selectedPrice}
            onChange={handlePriceChange}
            className="border rounded-md w-full p-2"
          >
            <option value="ascending">Prix croissant</option>
            <option value="descending">Prix décroissant</option>
          </select>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="negotiable"
          checked={negotiable}
          onChange={handleNegotiableChange}
          className="mr-2 custom-checkbox"
        />
        <label htmlFor="negotiable">Négociable</label>
        <input
          type="checkbox"
          id="recently-posted"
          checked={recentlyPosted}
          onChange={handleRecentlyPostedChange}
          className="ml-4 mr-2 custom-checkbox"
        />
        <label htmlFor="recently-posted">Récemment posté</label>
      </div>
      <div className="flex justify-end mb-4">
        <button type="submit" className="bg-[#4dc263] text-white rounded-md px-4 py-2">
          Afficher les résultats
        </button>
      </div>
    </form>
  </div>  
  )
}

export default SearchOptions
        