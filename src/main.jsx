import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import ImageCard from "./components/ImageCard"

function Main() {
  return (
    <>
      <br />

      <div className="float-right">
        <img
          src="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/test-image-1-thumb.jpg"
          width="300"
        />
      </div>

      <div className="content-text">
        <p style={{ fontSize: "x-large" }}>
          Place your Intro text here...
        </p>

        <h2>Images:</h2>
        <p>Click images to view full version</p>
      </div>

      <div className="center">
        <div className="grid-container-4-2">

          <ImageCard
            link="#"
            img="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/card-1-january-1a-cigarette-cards-john-player-and-sons-a-nature-calendar-thumb.jpg"
            title="January No.1 (front)"
          />

          <ImageCard
            link="#"
            img="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/card-1-january-1b-cigarette-cards-john-player-and-sons-a-nature-calendar-thumb.jpg"
            title="January No.1 (back)"
          />

          <ImageCard
            link="#"
            img="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/card-2-january-2a-cigarette-cards-john-player-and-sons-a-nature-calendar-thumb.jpg"
            title="January No.2 (front)"
          />

          <ImageCard
            link="#"
            img="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/card-2-january-2b-cigarette-cards-john-player-and-sons-a-nature-calendar-thumb.jpg"
            title="January No.2 (back)"
          />

        </div>
      </div>
    </>
  )
}

export default Main