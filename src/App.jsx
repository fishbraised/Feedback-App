import { useState } from 'react';
import './App.css';
import FeedbackApp from './Components/FeedbackApp';

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2462/2462055.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1933/1933399.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3199/3199830.png',
    },
  ],
  loveEmojiUrl: 'https://cdn-icons-png.flaticon.com/512/6003/6003502.png',
};

const App = () => <FeedbackApp resources={resources} />;

export default App;
