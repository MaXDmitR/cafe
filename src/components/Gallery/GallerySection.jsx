import React, {useState} from 'react'
import Masonry from "react-masonry-css";
import GalleryData from '../../database/gallery.json'
import GalleryImage from './GalleryImage';

const GallerySection = () => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    const [galleryData] = useState(GalleryData)

    

    return (
        <section className='gallerySection'>


            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {galleryData.map((image, index) => (
                    <GalleryImage key={index} image={image.url} desc={image.desc} ></GalleryImage>
                ))}




            </Masonry>
        </section>
    )
}

export default GallerySection
