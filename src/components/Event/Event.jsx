

const Event = (props) => {
  


  return ( 
    <>
      {console.log(props)}
      <div>
        <h1>{props.event.name}</h1>
        <button>Delete Event</button>
      </div>
    </>
   );
}
 
export default Event;