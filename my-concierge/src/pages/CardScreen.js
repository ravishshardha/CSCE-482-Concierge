import React, { useEffect, useState, useRef } from "react";
import Carousel from 'react-multi-carousel';
import RestCard from '../components/RestCard';
import 'react-multi-carousel/lib/styles.css';
import '../css/CardScreenCss.css';


function CardScreen({restaurants, highlighted, setHighlighted, forceUpdate}) {

  const carouselRef = useRef(null); // Reference for the carousel component
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
      arrows: true,
      showDots: true
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      arrows: true,
      showDots: true
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


  useEffect(() => {
    // No card selected or pin deselected
    if (highlighted === -1) {
      return;
    }
    else if (highlighted >= carouselRef?.current.state.currentSlide &&
             highlighted < carouselRef?.current.state.currentSlide + carouselRef?.current.state.slidesToShow) {
      return;
    }

    carouselRef?.current.goToSlide(highlighted);
    forceUpdate();
  }, [highlighted])


  // Sets highlighted card upon arrow click or pin click that is out of view
  const checkSlideFocus = () => {
    if (highlighted !== carouselRef?.current.state.currentSlide) {
        setHighlighted(carouselRef?.current.state.currentSlide);
    }
  }

  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        onClick={ () => onClick() }
        className={active ? "custom-dot-active" : "custom-dot-inactive"}
      >
      </li>
    );
  };


  return (
    
    <div className="carousel-wrapper">
      <Carousel 
        ref={carouselRef} // Set the ref for the carousel
        responsive={responsive}
        afterChange={checkSlideFocus}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderDotsOutside={true}
        showDots
        customDot={<CustomDot/>}
        renderButtonGroupOutside={true}
      >

      {restaurants.map((business, index) => (
          <div key={index}>
            <RestCard
              name={business.name || "No Name"}
              stars={business.stars || 0}
              reviews={business.num_reviews >= 1000 ? "1k+" : (business.num_reviews || 0)}
              cuisines={business.categories || []}
              address={business.address ? `${business.address}, ${business.city}, ${business.state} ${business.zip_code}` : "No Address"}
              hours={business.hours || {}}
              attributes={business.attributes || {}}
              image = {business.base_image_url}
              total_images = {business.num_images}
              phone = {business.phone}
              yelp = {business.yelp_url}
              rank ={business.rank}
              highlighted = {highlighted}
              setHighlighted = {setHighlighted}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CardScreen;
