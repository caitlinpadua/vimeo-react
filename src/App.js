import React from 'react';
import './App.css';
import Monsoon from './Monsoon';
import Beams from './Beams';
import Move from './Move';
import {Gallery, GalleryImage } from 'react-gesture-gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const images = [
    "https://a.ltrbxd.com/resized/sm/upload/z3/0g/ol/7s/gALeMjf3NlSXy1gbz3eKct1aRhd-0-230-0-345-crop.jpg",
    "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/a4/7f9e5a6043646195d8251a650e52d9ce_500x735.jpg",
    "https://i.ytimg.com/vi/rAhHQfmFTxw/movieposter.jpg",
    "https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg"
];

const [index, setIndex] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
          <Monsoon/>
          <Beams/>
          <Move/>

        
          <Gallery
              
              index={index}
              onRequestChange = {i => {
              setIndex(i);
              }} 
           >
              {images.map(image => (
               <GalleryImage style = {{
                 height: '300px',
                 width: '300px'
               }}
               objectFit='contain' src={image} />
              ))} 

            

           </Gallery>
        
      
      </header>
    </div>
  );
}

export default App;
