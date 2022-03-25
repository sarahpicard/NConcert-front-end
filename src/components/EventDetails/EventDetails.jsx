import Events from "../../pages/Events/Events";
import { Link } from "react-router-dom";

const eventDetails = (props) => {
  return ( 
    <>
    <h2>{props.event.name}</h2>
    <Link to="/eventdetail" state={props.event}>Event Detail</Link>
    {/* <a href={props.event.url}>Ticket</a> */}
    </>
  );
}
 
export default eventDetails;