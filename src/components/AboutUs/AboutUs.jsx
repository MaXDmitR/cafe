import React from 'react'
import ReadMoreButton from './ReadMoreButton'

const AboutUs = () => {
    return (
        <section className="aboutSection">
            <div
                className="aboutImage"
                style={{ backgroundImage: "url('images/aboutUs.jpg')" }}
                aria-label="Затишний інтер'єр кав'ярні"
            >

            </div>
            <div className="aboutContent">

                <h1 className="aboutTitle">About us</h1>

                <p><strong>AromaPlace</strong> is a cosy, family-friendly coffee shop created with love and inspired by our community. We wanted to create a space where you would feel at home: a place where <strong>real coffee</strong>, nutritious food and sincere communication come together.</p>

                <p>We serve fresh <strong>organic Fair Trade certified coffee</strong> made from <strong>locally roasted beans</strong>. Our menu includes freshly baked croissants every morning and pastries from local bakers.</p>

                <p>Everything we offer is based on our values: <strong>warmth, creativity and stability</strong>. </p>

                <h3>A family business. Created with love.</h3>

                <p>There is always something fresh to <strong>enjoy</strong>. Whether it's our signature espresso drinks or a cosy cup of tea, we guarantee you'll leave satisfied.</p>

                <ReadMoreButton></ReadMoreButton>
                <blockquote class="aboutQuote">
                    “We don’t just serve coffee — we serve warmth, inspiration and connection.”
                    <span>– The AromaPlace Family</span>
                </blockquote>

            </div>

        </section>



    )
}

export default AboutUs
