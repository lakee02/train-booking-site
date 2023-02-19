import React from 'react'
// import places pictures
import jodhpur from '../../assests/jodhpur.jpg'
import agra from '../../assests/agra.jpg'
import delhi from '../../assests/delhi.jpg'

// import users pictures
import user1 from '../../assests/user1.jpg'
import user2 from '../../assests/user2.jpg'
import user3 from '../../assests/user3.jpg'

// use high order array method called map to display all the data

const travelers=[
  {
    id:1,
    destinationPicture:jodhpur,
    travelerImage:user1,
    travelerName:'Lucky Mangal',
    socialLink:'@lucky.mangal02'
  },
  {
    id:2,
    destinationPicture:agra,
    travelerImage:user2,
    travelerName:'Person1',
    socialLink:'@person1'
  },
  {
    id:3,
    destinationPicture:delhi,
    travelerImage:user3,
    travelerName:'person2',
    socialLink:'@person2'
  }
]
export const Travelers = () => {
  return (
    <div className='travelers containers section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({id,destinationPicture,travelerImage,travelerName,socialLink})=>{
              return(
                <div key={id} className="singleTraveler">
                  <img src={destinationPicture} alt="jodhpur" className='destinationImage'/>
                  <div className='travelerDetails'>
                    <div >
                      <img src={travelerImage} alt="user1" className="travelerImage"/>
                    </div>
                    <div className='travelerName'>
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
