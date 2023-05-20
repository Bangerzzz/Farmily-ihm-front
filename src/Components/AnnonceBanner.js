import React, { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';

const AnnonceBanner = () => {
  const fileInput = useRef();
  const [uploadedImages, setUploadedImages] = useState([null, null, null, null]);
  const [annonceType, setAnnonceType] = useState(null);
  const [titleInputVisible, setTitleInputVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [quantityInputVisible, setQuantityInputVisible] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [locationInputVisible, setLocationInputVisible] = useState(false);
  const [location, setLocation] = useState({
    country: '',
    city: '',
    address: ''
  });

  const handleImageUpload = () => {
    if (uploadedImages.some((img) => img === null)) {
      fileInput.current.click();
    } else {
      alert("Vous ne pouvez pas télécharger plus de 4 images.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      const firstEmptyIndex = newImages.indexOf(null);
      newImages[firstEmptyIndex] = file.name; // setting file name instead of file data
      setUploadedImages(newImages);
    }
  };

  const handleAnnonceTypeChange = (e) => {
    setAnnonceType(e.target.value);
  };

  const handleIconClick = (input) => {
    if (input === 'title') {
      setTitleInputVisible((prevVisible) => !prevVisible);
    } else if (input === 'quantity') {
      setQuantityInputVisible((prevVisible) => !prevVisible);
    } else if (input === 'location') {
      setLocationInputVisible((prevVisible) => !prevVisible);
    }
  };

  const handleInputChange = (e, field) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      [field]: e.target.value
    }));
  };

  return (
    <div className="rounded-2xl w-1/3 max-w-md h-auto p-8 bg-white shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Nouvelle annonce</h1>

      <div className="flex flex-wrap justify-between mb-6">
        <div
          className="w-full md:w-1/2 md:h-48 p-4 border-2 border-dashed border-gray-300 rounded-lg mb-4 md:mb-0 flex justify-center items-center cursor-pointer"
          onClick={handleImageUpload}
        >
          <FaCamera size={48} className="text-green-500" />
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 flex flex-wrap">
          {uploadedImages.map((imageName, index) => (
            <div
              key={index}
              className="w-1/2 h-24 p-4 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center"
            >
              <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                {imageName}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-green-500 font-bold text-left mb-2">Type d'annonce :</div>
        <div className="flex flex-wrap items-center text-sm text-black font-bold">
          <label htmlFor="offre" className="mr-4">
            <input
              type="radio"
              id="offre"
              name="annonceType"
              value="offre"
              checked={annonceType === "offre"}
              onChange={handleAnnonceTypeChange}
              className="custom-radio"
            />
            Offre de vente
          </label>

          <span className="mr-2"></span>

          <label htmlFor="demande" className="mr-4">
            <input
              type="radio"
              id="demande"
              name="annonceType"
              value="demande"
              checked={annonceType === "demande"}
              onChange={handleAnnonceTypeChange}
              className="custom-radio"
            />
            Demande d'achat
          </label>
        </div>
      </div>

      <h2 className="text-green-500 font-bold mb-4 text-left flex justify-between">
        Titre
        <AiOutlineRight
          className="text-green-500 text-xl cursor-pointer"
          onClick={() => handleIconClick('title')}
        />
      </h2>

      {titleInputVisible && (
        <input
          type="text"
          value={title}
          onChange={(e) => handleInputChange(e, 'title')}
          placeholder="Entrez votre titre"
          className="border border-gray-300 rounded px-2 py-1 mb-4"
        />
      )}

      <h2 className="text-green-500 font-bold mb-4 text-left flex justify-between">
        Quantité
        <AiOutlineRight
          className="text-green-500 text-xl cursor-pointer"
          onClick={() => handleIconClick('quantity')}
        />
      </h2>

      {quantityInputVisible && (
        <input
          type="text"
          value={quantity}
          onChange={(e) => handleInputChange(e, 'quantity')}
          placeholder="Entrez la quantité"
          className="border border-gray-300 rounded px-2 py-1 mb-4"
        />
      )}

      <h2 className="text-green-500 font-bold mb-4 text-left flex justify-between">
        Localisation
        <AiOutlineRight
          className="text-green-500 text-xl cursor-pointer"
          onClick={() => handleIconClick('location')}
        />
      </h2>

      {locationInputVisible && (
        <div>
          <input
            type="text"
            value={location.country}
            onChange={(e) => handleInputChange(e, 'country')}
            placeholder="Pays"
            className="border border-gray-300 rounded px-2 py-1 mb-2"
          />
          <input
            type="text"
            value={location.city}
            onChange={(e) => handleInputChange(e, 'city')}
            placeholder="Ville"
            className="border border-gray-300 rounded px-2 py-1 mb-2"
          />
          <input
            type="text"
            value={location.address}
            onChange={(e) => handleInputChange(e, 'address')}
            placeholder="Adresse"
            className="border border-gray-300 rounded px-2 py-1 mb-4"
          />
        </div>
      )}

      <div className="mb-8"></div>

      <button className="w-full p-2 rounded bg-gradient-to-r from-green-500 to-green-700 text-white">
        Publier
      </button>
    </div>
  );
};

export default AnnonceBanner;


