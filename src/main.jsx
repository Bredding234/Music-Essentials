import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const tracks = [
	{
	  url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
	  title: "Madza - Chords of Life",
	  tags: ["house"],
	},
	{
	  url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
	  title: "Madza - Late Night Drive",
	  tags: ["dnb"],
	},
	{
	  url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
	  title: "Madza - Persistence",
	  tags: ["dubstep"],
	},
  ];

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
