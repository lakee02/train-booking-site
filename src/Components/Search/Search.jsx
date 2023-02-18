import React from 'react'

import {GoLocation} from 'react-icons/go';
import {RiAccountPinCircleLine} from 'react-icons/ri';
import {RxCalendar} from 'react-icons/rx';
export const Search = () => {
  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>1st AC</span>
          </div>
          <div className='singleBtn'>
            <span>2nd AC</span>
          </div>
          <div className='singleBtn'>
            <span>3rd AC</span>
          </div>
        </div>
        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
               <GoLocation className='icon'/>
            </div>
            <div className="texts">
              <h4>Locations</h4>
              <input type="text" placeholder='Where do you want to go?'/>
            </div>
          </div>
            {/*  */}
          <div className="singleInput flex">
            <div className="iconDiv">
               <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add Guest'/>
            </div>
          </div>
            {/*  */}
          <div className="singleInput flex">
            <div className="iconDiv">
               <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>
           {/*  */}
          <div className="singleInput flex">
            <div className="iconDiv">
               <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>

          <button className='btn btnBlock'>Search Train</button>
          
        </div>
      </div>
    </div>
  )
}
