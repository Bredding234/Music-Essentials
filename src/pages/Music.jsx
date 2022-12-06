import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import Footer from './footer'
import Tabs2 from './Tabs2';
import Navbar from '/src/components/Navbar'
import Album from "./Albums";
import '/src/music.css' 
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {genreData} from '../components/data/data'

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;

//import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { data } from "autoprefixer";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

function Music() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

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
  console.log("albums" + albums);
const [selectOption, setSelectOption ] = useState();

const [activeGenre, setActiveGenre] = useState();

const handleSelectChange = (e) =>{
    let data = genreData.filter(selectOption => selectOption.id === e.target.value)
    setActiveGenre(data[0])
  };




  const [isHovering, setIsHovering] = useState(false);

  const showHover = () => {
    setIsHovering(true);
  };

const hideHover = () => {
    setIsHovering(false);
  };

return (
<div className="bodyPages" >	
	
    <div id="SearchMusic" style={{}} >		
      {/* style={{ height: 40, borderColor: 'black', borderWidth: 1, display: 'block', marginRight: 'auto', marginLeft: 'auto' }} */}
      <p style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
        {" "}
        Search for artist
      </p> <br /> <br /> 
      <InputGroup className="mb-1" size="sm">
        <FormControl
          type="input"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              search();
            }
          }}
          onChange={(event) => { 
			search()
			setSearchInput(event.target.value)}}
          id="firstName"
          placeholder="Search for artist"
          autoComplete="given-name"
        />
      </InputGroup>
      <Button
        style={{
          color: "white",
          position: "relative",
          left: "64%",
          top: "-38px",
        }}
        onClick={() => {
          search;
        }}
      >
        {" "}
        Search{" "}
      </Button>

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
                  <Card   style={{ cursor: "pointer" }}>
                    <Card.Img src={album.images[0].url} /> <br /> 
                    <Card.Body>
                      <Card.Title className="ml-3"> {album.name}</Card.Title>
                      <Card.Title className="text-muted"> {album.artists[0].name }</Card.Title>

                    </Card.Body> 
                  </Card><br /> <br />
                </Link>
              );
            })}
          </Row>
        )}
      </Container>
      <div className="flex border justify-center items-center gap-3">
        <label htmlFor="genre" style={{color: 'white' }}>Genre</label>
        <select id="genre" className="w-42 border-2 border-gray-700 rounded-lg" value={selectOption} onChange={e => handleSelectChange(e)} >
          <option value="default">Choose Genre</option>
          { genreData.map(genre => (
            <option value={ genre.id } key={ genre.id }>{ genre.label }</option>
            
          )) }
        </select>
      </div>
      <div id="pop" style={{textAlign: 'center'}}> 
     {activeGenre &&  ( <a  href={activeGenre.WebsiteLink}><div
            style={{
                backgroundImage: `url(${activeGenre.image})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'centers',
                color: 'white',
                marginRight: 'auto', 
                marginLeft: 'auto',
                height:"300px",
                width: "40%",
                backgroundSize: "cover"
            }}>
            <div style={{position: 'relative',textDecoration: 'none', fontSize:'30px', padding: '0',textAlign: 'center', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>   { activeGenre.label } </div>
           
          </div> </a>) }
  <div style={{ position: 'relative', top: '20rem' }}>



    </div>
 


</div>

    </div> <br /><br /><br /><br /><br /><br /><br />
	  
    
    
    <footer className="footer" style={{backgroundColor: 'black',color: 'white', textAlign:'center', position: "fixed",
          left: 0,
          bottom: 0,
          right: 0}}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
      </div>
  );
}

export default Music;
