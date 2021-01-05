import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'


const ImageList = (props) => {
    //                                  DESTRUCTURING
    const images = props.images.map(imageObj => {
    return <ImageCard key={imageObj.id} image={imageObj}/>
    })
    return <div className='image-list'>{images}</div>
}

export default ImageList