import { h, Component } from 'preact';
import { useState } from 'preact/hooks';


import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';
 
const Gallery = ({ images, scrollPosition }) => {
    
    const [popup, showPopup] = useState(false);
    const [popupInfo, setPopupInfo] = useState(null);

    const triggerPopup = (imageObj) => setPopupInfo(imageObj);

    return (<div className="grid">
        {images.length && images.map((image) =>
        
            <div className="grid-item" onClick={triggerPopup(image)}>
                <LazyLoadImage
                    key={image.data[0].nasa_id}
                    alt={image.data[0].title}
                    height="200"
                    // Make sure to pass down the scrollPosition,
                    // this will be used by the component to know
                    // whether it must track the scroll position or not
                    scrollPosition={scrollPosition}
                    src={image.links[0].href}
                    width="200" />
                )
            </div>
        )}

        {popup && <div className="popup">
            <h1>{popupInfo.image.data[0].title}</h1>
        </div>}

    </div>)
};


// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(Gallery);