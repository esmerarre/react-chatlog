import './App.css';
import ChatLog from './components/ChatLog';
import entriesData from './data/messages.json';
import { useState } from 'react';


const countTotalLikes = entriesData => {
  return entriesData.reduce((acc, entry) => {
    if (!entry.liked) {
      return acc;
    }
    return acc + 1;
  }, 0);
};

const App = () => {
  const [entryData, setEntriesData] = useState(entriesData);

  const handleLikes = id => {
    setEntriesData(entryData => {
      return entryData.map(entry => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked};
        }
        return entry;
      });
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>Total Likes: {countTotalLikes(entriesData)}</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entriesData} onLike={handleLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
