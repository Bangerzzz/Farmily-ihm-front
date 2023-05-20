import React from 'react';
import oeuf from '../images/oeuf.jpg';
import ble from '../images/ble.jpg';
import tomate from "../images/tomate.jpg";
import vache from '../images/vache.jpg';
import { AiFillStar } from 'react-icons/ai';

const OfferList = () => {
  const offers = [
    {
      user: {
        username: 'Utilisateur1',
        rating: 5,
        sales: 9
      },
      image: tomate,
      name: 'Nom de l\'annonce 1',
      location: 'Localisation 1'
    },
    {
      user: {
        username: 'Utilisateur2',
        rating: 4.5,
        sales: 12
      },
      image: vache,
      name: 'Nom de l\'annonce 2',
      location: 'Localisation 2'
    },
    {
      user: {
        username: 'Utilisateur2',
        rating: 4.5,
        sales: 12
      },
      image: oeuf,
      name: 'Nom de l\'annonce 2',
      location: 'Localisation 2'
    },
    {
      user: {
        username: 'Utilisateur2',
        rating: 4.5,
        sales: 12
      },
      image: ble,
      name: 'Nom de l\'annonce 2',
      location: 'Localisation 2'
    },
    // Ajoutez d'autres offres fictives ici...
  ];

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center' // changed from 'flex-start' to 'center'
    },
    userRating: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '5px'
    },
    offerItem: {
      width: '23%', // Set width to 23%
      margin: '0.5%', // Set margin to 0.5%
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    imageContainer: {
      width: '200px',
      height: '200px',
      overflow: 'hidden',
      borderRadius: '10px'
    },
    offerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    offerDetails: {
      fontWeight: 'bold',
      marginTop: '10px'
    },
    offerLocation: {
      color: 'grey',
      marginTop: '10px'
    }
  };

  return (
    <div style={style.container}>
      {offers.map((offer, index) => (
        <div key={index} style={style.offerItem}>
          <div className="user-info">
          <span className="user-rating" style={style.userRating}>{offer.user.username} - <AiFillStar style={{ color: 'orange' }} /> {offer.user.rating} ({offer.user.sales})</span>

          </div>
          <div style={style.imageContainer}>
            <img src={offer.image} alt={offer.name} style={style.offerImage} />
          </div>
          <div style={style.offerDetails}>
            <span className="offer-name">{offer.name}</span>
          </div>
          <div style={style.offerLocation}>
            <span className="offer-location">{offer.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferList;
