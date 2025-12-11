import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
/* we need name of sender to be displayed above bubble
text of the message to be placed inside bubble
need timestamp of when the text was sent, slightly below body of message and still within the bubble 
the like button is included here
data needed:
    "sender":"Estragon",
    "body":"Because you are wrong.",
    "timeStamp":"2018-05-29T22:49:33+00:00",
    "liked": false

*/

const ChatEntry = (props) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
