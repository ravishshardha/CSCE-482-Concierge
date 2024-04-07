import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Star from "./Star";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart, FaHeart, FaTaxi, FaBox ,FaWheelchair,FaPhone, FaYelp} from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Default from '../img/default.png'; 



function RestCard({ name, stars, reviews, cusines, address,hours,attributes, favItems, setFavItems, image, total_images, phone, yelp}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllCuisines, setShowAllCuisines] = useState(false);


  //useEffect 
  useEffect(() => {
    setIsFavorite(favItems.find((fav) =>fav.name === name) !== undefined)
  }, [favItems])
  

  const onFavoriteClick = () => {
    // Toggle the favorite status
    setIsFavorite(!isFavorite);

    const newItem = { name, cusines, address };
    if (!isFavorite) {
      // Add item to favorites
      setFavItems([...favItems, newItem]);
    } else {
      // Remove item from favorites
      setFavItems((favItems || []).filter(item => item.name !== name));
    }
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    return days[date.getDay()];
  };

  const boldCurrentDay = (day) => {
    const currentDay = getCurrentDay();
    return day === currentDay ? <strong>{day}</strong> : day;
  };

  const renderIcon = (attribute) => {
    switch (attribute) {
      case 'take_out':
        return <FaBox />;
      case 'delivery':
        return <FaTaxi />;
      case 'wheelchair_accessible':
        return <FaWheelchair />;
      default:
        return null;
    }
  };

  const formatHours = (hour) => {
    if (hour.endsWith(':0')) {
      return hour + '0';
    }
    return hour;
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const images = Array.from({ length: total_images > 5 ? 5 : total_images }, (_, i) => `${image}${i > 0 ? `_${i}.jpg` : '.jpg'}`);
  const carouselImages = images.length > 0 ? images : [Default];



  return (
    <Card style={{ width: "23rem", marginBottom:"10px" }}>
      <Carousel 
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}

      >
      {carouselImages.map((image, index) => (
          <img className="carousel-image" key={index} src={image} alt={`Image ${index}`} />
        ))}
      </Carousel>
      <Card.Body style={{ paddingBottom: '0' }}>
        <div className="d-flex flex-row justify-content-between w-100">
          <Card.Title className="col-7">{name}</Card.Title>
          <Star stars={stars} reviews={reviews} />
        </div>
        <div className="d-flex flex-row justify-content-between w-100">
          <Card.Text className="col-8">
            {cusines.slice(0, showAllCuisines ? cusines.length : 2).map((cuisine, index) => (
              <button key={index} type="button" className="btn btn-outline-primary rounded-pill btn-sm mr-2" style={{ margin: '3px' }}>{cuisine}</button>
            ))}
            {cusines.length > 2 && (
              <Accordion alwaysOpen>
              <Accordion.Item style={{ margin: '3% 0 0 2%' }} eventKey="0">
                <Accordion.Header className="custom-cus">More ...</Accordion.Header>
                <Accordion.Body style={{padding: '2%', backgroundColor: 'lightgray' }}>
                  {cusines.slice(2).map((cuisine, index) => 
                   <React.Fragment key={index}>
                    {cuisine}
                    <br />
                    {index !== cusines.length - 3 && <hr style={{margin:'0'}}/>}
                  </React.Fragment>
                 )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            )}
          </Card.Text>
          <button type="button" className="favorite-btn btn" onClick={onFavoriteClick}>
            {isFavorite ? <FaHeart style={{ color: "#fb2323" }} /> : <FaRegHeart style={{ color: "#fb2323" }} />}
          </button>
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <a  className="map-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            title="click her to see it on map"
          >
            {"Address:" + " "+address}
          </a>
      </ListGroup.Item>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Opening Hours:</Accordion.Header>
            <Accordion.Body>              
              {Object.keys(hours).length === 0 ? (
                <div>No information available</div>
              ) : (
                <ul className="hours-list">
                  {Object.entries(hours).map(([day, hours], index) => (
                    <li key={day} className={index % 2 === 0 ? "gray-bg" : "white-bg"}>
                      {boldCurrentDay(day)}: {formatHours(hours) || "No information available"}
                    </li>
                  ))}
                </ul>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header>Extra:</Accordion.Header>
          <Accordion.Body>
            {Object.entries(attributes).length === 0 ? (
              <div>No information available</div>
            ) : (
              <ul className="attributes-list">
                {Object.entries(attributes).map(([attribute, value]) => (
                  value && (
                    <li key={attribute} className="attribute-item">
                      {renderIcon(attribute)}
                      <span className="attribute-text">{attribute.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </li>
                  )
                ))}
              </ul>
            )}
            {phone && (
              <>
                <hr /> 
                <li className="attribute-item">
                  <FaPhone />
                  <span className="attribute-text">Phone: {phone}</span>
                </li>
              </>
            )}
            {yelp && (
              <>
                <hr /> 
                <li className="attribute-item">
                  <FaYelp />
                  <span className="attribute-text">
                    Yelp: <a href={yelp} target="_blank" rel="noopener noreferrer">Visit Yelp</a>
                  </span>
                </li>
              </>
            )}
          </Accordion.Body>
        </Accordion.Item>

        </Accordion>
      </ListGroup>
    </Card>
  );
}



export default RestCard;
