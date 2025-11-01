import React from 'react';

const TitleCarousel = () => {
    return (
        <div id="storyTitleCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel"> 
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ backgroundImage: "url('images/aboutUs.jpg')" }}> 
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('images/hero2.jpg')" }}>
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('images/hero3.jpg')" }}>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#storyTitleCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#storyTitleCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default TitleCarousel