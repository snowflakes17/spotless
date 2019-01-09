import React from 'react'

const MediaObject = ({ coverArtUrl, trackName, artists }) => {
  return(
    <div className='media-object'>
      <div className='cover-art' style={{"backgroundImage" : `url(${coverArtUrl || "../../public/images/default.png"})`}} />
      <div className='media-info'>
        <div className='info-name'>
          <span>{trackName}</span>
        </div>
        <div className='info-meta'>
        <span>{artists}</span>
        </div>
      </div>
    </div>
  )
}

export default MediaObject