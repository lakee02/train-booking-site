import React from 'react'

import imageGrid from '../../assests/grid2.jpg'
export const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={imageGrid} alt="grid" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div> 
        <div className="grids grid">
          <div className="singleGrid">
            <span className='gridTitle'>
              Help through the railway
            </span>
            <p>
              You can also call railway from your phone and book a train ticket
              to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>
              You can also call railway from your phone and book a train ticket
              to one of your favorite destinations.
            </p>
          </div>
          
          <div className="singleGrid">
            <span className='gridTitle'>
              Care on the railway
            </span>
            <p>
              You can also call railway from your phone and book a train ticket
              to one of your favorite destinations.
            </p>
          </div>
          
          <div className="singleGrid">
            <span className='gridTitle'>
              Chauffeur-drive service
            </span>
            <p>
              You can also call railway from your phone and book a train ticket
              to one of your favorite destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
