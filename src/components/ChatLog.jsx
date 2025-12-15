import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const getChatEntries = (entries) => {
    return entries.map((entry) => {
      return (<ChatEntry
        key= {entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLike={props.onLikeEntry}>
      </ChatEntry>
      );
    });
  };

  return (
    <div className='chat-log'>
      {getChatEntries(props.entries)}
    </div>
  );

};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onLikeEntry: PropTypes.func.isRequired
};


export default ChatLog;
