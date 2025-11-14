import React from 'react'
import { NavLink } from "react-router-dom";

const Carousel = () => {



  return (
    <section id="heroSection">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ backgroundImage: `url(https://res.cloudinary.com/daiacamks/image/upload/f_auto/heroImage1_ukzsoh.jpg)` }}>

            <div class="carousel-caption ">
              <h5>OPEN OUR HEARTS!</h5>
              <p>WHERE LOVE FOR COFFEE BEGINS</p>
              <p><NavLink to="/story" className="carousel-story btn btn-outline-light btn-lg mt-4">COME TO OUR STORY</NavLink></p>
            </div>
          </div>
          <div class="carousel-item" style={{ backgroundImage: `url(https://res.cloudinary.com/daiacamks/image/upload/f_auto/heroImage2_khe5ry.jpg)` }}>

            <div class="carousel-caption ">
              <h5>SAVOUR THE MOMENT!</h5>
              <p>FIND YOUR PERFECT DRINK TODAY</p>
              <p><NavLink to="/menu" className="carousel-menu btn btn-outline-light btn-lg mt-4">GO TO MENU</NavLink></p>
            </div>
          </div>
          <div class="carousel-item" style={{ backgroundImage: `url(https://res.cloudinary.com/daiacamks/image/upload/f_auto/heroImage3_gefkwx.jpg)` }}>

            <div class="carousel-caption ">
              <h5>FEEL THE VIBE!</h5>
              <p>TAKE A PEEK INTO OUR COZY SPASE</p>
              <p><NavLink to="/gallery" className="carousel-gallery btn btn-outline-light btn-lg mt-4">LOOK AT GALLERY</NavLink></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Carousel
