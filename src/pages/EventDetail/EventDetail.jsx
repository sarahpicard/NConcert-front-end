
const EventDetail = (props) => {
  return(
    <>
      <h1>Event details here</h1>
      {/* <h1>{props.event.name}</h1>  */}
      {/* <h2>{props.events[0]._embedded.venues[0].name}</h2>
      <h2>{props.events[0].dates.start.localDate}</h2>
      <h2>{props.events[0].dates.start.localTime}</h2>
      <a href={`${props.events[0].url}`}>Buy Tickets</a>
      <div>
        <img src={props.events[0].images[0].url} alt="" />
      </div>
      <h4>Accessibility Information: {props.events[0]._embedded.venues[0].accessibleSeatingDetail}</h4>
      <h4>Additional Information: {props.events[0].info}</h4> */}
    </>
  )
}

export default EventDetail