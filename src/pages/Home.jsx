import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import Footer from '../components/Footer';
import Album from "./Albums";
import {useNavigate} from 'react-router-dom';
import SpotifyWebApi from "spotify-web-api-node"
import Navbar from '/src/components/Navbar'
import '/src/home.css';
import '/src/store.css';
import Player from "./Player"
import axios from "axios"
import ReactAudioPlayer from "react-h5-audio-player";
import SpotifyPlayer from 'react-spotify-player'
import "react-h5-audio-player/lib/styles.css";
import ImageSlider from '../ImageS'; 
import { NewsContextProvider2 } from '/src/NewsContext2.jsx';
import News3 from "/src/News3.jsx";
import '/src/News2.css';
import { SliderData } from '/src/SliderData.js';
import LayoutOne from '/src/components/LayoutOne'
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
import { AuthNav, MainNav } from '/src/components/Navbar'; 
//import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [data, setData] = useState();
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")


  const musicTracks = [
    {
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
    },
    {
      name: "Creative Minds",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    },
    {
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
    },
    {
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
    },
    {
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
    },
    {
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
    },
    {
      name: "Sweet",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
    },
    {
      name: "Love",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
    },
    {
      name: "Piano Moment",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
    },
    {
      name: "E.R.F",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
    },
    {
      name: "Dreams",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
    },
    {
      name: "A Day To Remember",
      src:
        "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
    },
    {
      name: "Adventure",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
    },
    {
      name: "Photo Album",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
    },
    {
      name: "November",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
    }
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };



const chooseTrack = (track) => {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  };

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
  })

  const apiKey = "175ecdd94ca5474b90527666e7db7a3e";
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
  const navigate  = useNavigate();

  const navigateContact = () => {
     navigate('/Contact');
 };
  const navigateMusic = () => {
     navigate('/music');
 };




 useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));


   
  }, []);
  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack]);

  // Search
  async function search() {
    console.log("Searching For: " + searchInput);
    // Get request using search to get the Artist ID.
	var artistParameters = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist ID is: " + artistID);
    // Get request with Artist ID grab all the albums from that artist
    var Albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?includes_groups=albummarket=US&limit=50",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  console.log(albums);

  const [isHovering, setIsHovering] = useState(false);

  const showHover = () => {
    setIsHovering(true);
  };

  const hideHover = () => {
    setIsHovering(false);
  };



  return (

<div className="w-full">  
    <LayoutOne />

		<div className="backgroundWallpaper" style={{ backgroundColor: 'black', height: '40rem', width: '100%', position: 'relative',}} href="#SearchMusic">
			 <a href="#SearchMusic" > <h1 className="underline" style={{  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', fontFamily: 'Georgia', color: 'white' }}> Listen, Search, and Discover new music everyday. </h1></a>
			<img style={{width: "100%", height: '100%',  }} src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"  />
		</div>
<div className="genre-image py-4 w-full" >
  <h2 style={{fontSize:'2.5rem', textAlign:'center', fontWeight: 'bold'}}> Pick Genre </h2> <br /> <br />
  <ImageSlider slides={SliderData} />
</div> 
  <div id="SearchMusic" >		
      {/* style={{ height: 40, borderColor: 'black', borderWidth: 1, display: 'block', marginRight: 'auto', marginLeft: 'auto' }} */}
      <div style={{backgroundColor: 'white',position: "relative",textAlign: "center",}} className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-50">
          	<img  style={{ width: '100%', height: '100%' }} src="https://wallpaperaccess.com/full/1502779.jpg"   />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', fontFamily: 'Georgia', color: 'white' }}>
      <h2 style={{ color: "white",  fontSize: "30px", fontWeight: "700",  fontFamily: 'Poppins,sans-serif', lineHeight: '1.4074',  }}>
        {" "}		

      Visit the <a href="/music"> Music  </a> Page       </h2>    


      <p style={{ fontSize:'20px',}}> Take a look at the music link above, you will be able to seach for your favorite artist <br /> and can choose any song or album. The customer will have the option to choose from <br /> any genre of their music interest.  </p>
        </div>
      </div>




<div className="genre-image">

      <Container>
        {!albums ? (
          <div> </div>
        ) : (
          <Row className="mx-2 row row-cols-4">
            {albums.map((album) => {
              console.log(album);
              //console.log();
              return (
                <Link key={album.id} to={`/album/${album.id}`}>
                  <Card>
                    <Card.Img src={album.images[0].url} />
                    <Card.Body>
                      <Card.Title> {album.name}</Card.Title> 
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </Row>
        )}
      </Container>

      <Row className="w-full">

<Card className="flex justify-center items-center" style={{backgroundColor: 'grey', height: '40rem', width: "100%"}}>
<div style={{position: 'relative', top: '50%'}}>
    <h2 style={{fontSize:'3.5rem', textAlign:'center', color: 'white', top: '20%'}}>  Store </h2> <br /> <br />

</div>

<div style={{ position: 'relative', top: '50%', left: '-25%'   }}>

      <div className="border overflow-hidden relative" style={{ height: '22rem', width: '19.6rem'}}>
          <img src='https://media.pitchfork.com/photos/5929b3a1ea9e61561daa6b11/1:1/w_600/a6db7cdb.jpg' style={{ maxHeight:'23rem', maxWidth:'22rem', left: '10%'  }}/>
         
          <br />
          <div className='hover:bg-zinc-600 transition-hover opacity-70 duration-300 ease-in mix-blend-screen absolute top-0 left-0 w-full h-full z-10 grid place-items-center'></div>

        </div>
        </div>

 <div style={{ position:'relative',  top: '10%', left: '2%'}}>

      <div className="border overflow-hidden " style={{position: 'relative',bottom: '30%', left: '2%', height: '22rem'}}>
          <img src='https://m.media-amazon.com/images/I/51b4V4ErHUL._SY580_.jpg' style={{ maxHeight:'23rem', maxWidth:'22rem'  }}/>
         
          <br />
          <div className='hover:bg-zinc-600 transition-hover opacity-70 duration-300 ease-in mix-blend-screen absolute top-0 left-0 w-full h-full z-10 grid place-items-center'></div>

        </div>
    </div>
    <div style={{ position: 'relative', left: '25%', top: '-39%'}}>

      <div className="border overflow-hidden " style={{position: 'relative', bottom: '40%', left: '30%', height: '21rem'}}>
          <img src='https://m.media-amazon.com/images/I/61zscDlfYbL._SY580_.jpg' style={{ maxHeight:'22rem', maxWidth:'22rem'  }}/>
         
          <br />
          <div className='hover:bg-zinc-600 transition-hover opacity-70 duration-300 ease-in mix-blend-screen absolute top-0 left-0 w-full h-full z-10 grid place-items-center'></div>

        </div>

<div className="textUnderline" style={{position: 'relative', top: '-24%', left: '-40%'}}>
  {/*        */}
  <a className="linkU" href="/Store"  style={{ textDecoration: 'none', color: '#fff', fontSize: '20px'}}>Visit All </a>

</div>
        </div>

</Card>

      
			<hr />
      
<Card className="flex justify-center items-center flex-col" style={{backgroundColor: 'red', height: '40rem'}}>
        <h2 style={{fontSize:'3.5rem', textAlign:'center', color: 'white', paddingBottom: '.5rem'}}> Latest News </h2> 

      <NewsContextProvider2>
      <News3 />
    </NewsContextProvider2> 


  

<div className="textUnderline" >
  {/*        */}
  <a className="linkU" href="/News"  style={{ textDecoration: 'none', color: '#fff', fontSize: '20px'}}>Visit All </a>

</div>

</Card>
<hr />
<Card  style={{ width: '100%'}}>
<Row className="contactForm" >

<div  className="contactForm flex flex-col items-center justify-center text-center" style={{backgroundImage: `url("https://globalmusicrights.azureedge.net/images/contact-us/background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width:'100%'}}>
<div>

<h2 className="text-4xl font-semibold text-white"> Contact US </h2>

<p style={{textAlign:'center', color: 'white',  fontSize: '20px', fontFamily: 'proxima-nova-n1',}} className="py-6"> Contact us regarding any questions about the website. We will provide you with the customer support that you need, <br /> I will support you with the issues feel free to send an email and I will assist at my earliest convienience.</p>

<button onClick={navigateContact} className="btn btn-primary" > Contact Us </button>



</div> 


</div><br /> 
</Row>

</Card>


 </Row> 
  <div className="playBar">
  {/* <SpotifyPlayer
  uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
  size={size}
  view={view}
  theme={theme}
/> */}
         <h2 style={{fontSize:'3.5rem', textAlign:'center', color: 'white', position:'relative', top: '20%'}}> Listen To Music </h2> <br /> <br />
         <p style={{textAlign:'center', color: 'white', position: 'relative', right: '0%', fontSize: '20px', fontFamily: 'proxima-nova-n1', padding: '10px', top: '20%'}}> Take a visit to the music page where you can search an artist and choose a album then listen to music.  </p> <br /> <br />
         <Button onClick={navigateMusic} className="click" style={{ backgroundColor: 'grey', position: 'relative' , color: 'white', right: '-48%', width: '10%', top: '0%' }} > Listen </Button>

    </div>

</div>

 </div>

<Footer/>




</div>


      );
  
}

export default Home;
