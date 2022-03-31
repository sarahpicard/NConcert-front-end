import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch, showEvent } from '../../services/eventServices'
import Comments from '../../components/Comments/Comments'
import * as profileService from '../../services/profileService'

import './EventDetail.css'

const EventDetail = () => {
  const [currentEvent, setCurrentEvent] = useState()
  let location = useLocation()

  useEffect(() => {
    showEvent(location.state.event)
    .then(currentEvent => setCurrentEvent(currentEvent))
  }, [])
  
  const handleInterestedEvent = (evt) => {
    console.log("location.state.event: ", location.state.event)
    evt.preventDefault()
    try {
      profileService.createInterested(location.state.event)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAttendingEvent = (evt) => {
    console.log("location.state.event: ", location.state.event)
    evt.preventDefault()
    try {
      profileService.createAttending(location.state.event)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div className='whole-event-detail-page'>
      <img 
        src={location.state.event.images.find(image => image.height > 110 && image.width > 100).url} alt="concertImage" 
        className='event-detail-images'
      />
      <div className='event-detail-name'>
        <h2 className='event-detail-h2'>{location.state.event.name}</h2>
      </div><br />
      <div className='date-and-time-div'>
        {location.state.event.dates.start.localTime && location.state.event.dates.start.localDate ?
        <div>
          <h3> {location.state.event.dates.start.localDate} at {location.state.event.dates.start.localTime}</h3>
        </div>
        :
          <p>no local date and time information</p>
        }
        </div>
      <button className='btn btn-success event-interest-btn' onClick={handleInterestedEvent}>
        Interested
      </button>
      <button className='btn btn-success event-interest-btn' onClick={handleAttendingEvent}>
        Attending
      </button><br />

      {location.state.event._embedded.venues[0].name && location.state.event._embedded.venues[0].city.name && location.state.event._embedded.venues[0].state.stateCode ?
        <div>
          <h6 className='venue-information'>
            Venue: {location.state.event._embedded.venues[0].name} 
            <span>- {location.state.event._embedded.venues[0].city.name}</span>
            <span>, {location.state.event._embedded.venues[0].state.stateCode}</span>
          </h6>
          </div>
        :
        <p>Venue: no venue details</p>
      }
    {location.state.event.classifications[0].genre.name ? 
      <p className='event-detail-genre'>Genre: {location.state.event.classifications[0].genre.name}</p>
      : 
      <p>Genre: no genre found</p>
    }



    {location.state.event.sales.public.startDateTime ?
      <h4>Public Presale: {location.state.event.sales.public.startDateTime}</h4>
      :
      <p>Public Presale: no information available</p>
    } 

    {location.state.event.url ? 
      <button className='btn btn-success event-interest-btn' >
        <a className="btn-a-link" href={location.state.event.url}>Buy Tickets</a>
      </button>
    :
    <p>Cannot buy tickets now</p>
  }

  
    {location.state.event.products ?
      <button className='btn btn-success event-interest-btn' >
        <a className="btn-a-link" href={location.state.event.products[0].url}>Parking Info</a>
      </button>
    :
    <p>No parking Information Available</p>
  }

  {location.state.event._embedded.venues[0].accessibleSeatingDetail ?
    <div>
      <p><span className='accessible-seating-span'>Accessible Seating:  </span>{location.state.event._embedded.venues[0].accessibleSeatingDetail}</p>
    </div>
  : 
  <p>No Accessible Seating Information Available</p>
  }

    {location.state.event.info && location.state.event._embedded.venues[0].parkingDetail ? 
      <div>
        <h6 className='accessible-seating-span'>Important Venue Information:</h6>
        <p>{location.state.event.info}</p>
        <p><span className='accessible-seating-span'>Parking Information: </span> {location.state.event._embedded.venues[0].parkingDetail}</p>
      </div>
    :
    <h6>No Venue Information Available</h6>
    }

    {location.state.event.seatmap ?
      <div>
        <h3>Venue Seating Map: </h3>
        <img 
          src={location.state.event.seatmap.staticUrl} 
          alt="seatmap" 
          className='seatmap-image'
          />
      </div>
    :
    <div>
      <h6>No seating map available, please see event link for more details.</h6>
    </div>
    }
    </div>
  )
}

export default EventDetail