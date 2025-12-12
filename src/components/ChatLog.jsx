import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

    const getChatEntries = (entries) => {
        return entries.map((entry) => {
            return (<ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}>
            </ChatEntry>
            );
        });
    };

    return (
        <div className='chat-log'>
            {getChatEntries(props.entries)}
        </div>
    )

};

export default ChatLog;
