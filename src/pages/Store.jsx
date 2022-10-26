import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import '/src/store.css';
import {useNavigate} from 'react-router-dom';
 
import {Container,InputGroup,FormControl, Button, Row, Card, } from "react-bootstrap";
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
//const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
//const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
 
 
function Store() {
const { navigate } = useNavigate();
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    const [albums2, setAlbums2] = useState([]);
    const [albums3, setAlbums3] = useState([]);
    const [albums4, setAlbums4] = useState([]);
    const [albums5, setAlbums5] = useState([]);
    const [albums6, setAlbums6] = useState([]);
 
    const [value, setValue] = React.useState("1");
 
const handleChange = (event, newValue) => {
    setValue(newValue);
};
 
const navigateAlbum = () => {
    navigate('/album/:id/nested');
};
 
 
 // const [playlists, setPlaylists] = useState(null);
 
 
// The tracks effect
useEffect(() => {
  var authPlaylistParameters = {
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
 
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
     
    //Get request with Artist ID grab all the from that artist
    fetch('https://api.spotify.com/v1/albums/2ZytN2cY4Zjrr9ukb2rqTP', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums(data);
        console.log( { albums }); // empty object
        });
      });
 
 
//album 2
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
          //setPlaylists(data);
      // Get request using search to get the Artist ID
      // https://api.spotify.com/v1/recommendations/available-genre-seeds
      //api.spotify.com/v1/me/playlists
      //Get request with Artist ID grab all the from that artist
      fetch('https://api.spotify.com/v1/albums/24TAupSNVWSAHL0R7n71vm', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums2(data);
        console.log({ albums2 }); // empty object
        });
    });
 
//album 3
 
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
       
      //Get request with Artist ID grab all the from that artist
      fetch('https://api.spotify.com/v1/albums/1C2h7mLntPSeVYciMRTF4a', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums3(data);
        console.log({ albums3 }); // empty object
        });
    });


//album 4
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
          //setPlaylists(data);
      // Get request using search to get the Artist ID
      // https://api.spotify.com/v1/recommendations/available-genre-seeds
      //api.spotify.com/v1/me/playlists
      //Get request with Artist ID grab all the from that artist
      fetch('https://api.spotify.com/v1/albums/2FD6g8bXEn2uQMYbeqqoCg', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums4(data);
        console.log({ albums4 }); // empty object
        });
    });

    //album 5
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
      //Get request with Artist ID grab all the from that artist
      fetch('https://api.spotify.com/v1/albums/5CnpZV3q5BcESefcB3WJmz', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums5(data);
        console.log({ albums5 }); // empty object
        });
    });
 
//albums 6
 
fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      var authPlaylistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      };
 
   
  
      //Get request with Artist ID grab all the from that artist
      fetch('https://api.spotify.com/v1/albums/6n9DKpOxwifT5hOXtgLZSL', authPlaylistParameters)
        .then((response) => response.json())
        .then((data) => {  
        console.log( { data } ); // works(displays playlist based the specific one I passed it).
        setAlbums6(data);
        console.log({ albums6 }); // empty object
        });
    });
 
 
    //5r36AJ6VOJtp00oxSkBZ5h
}, []);
  return (
    <div>
   
      <h1 style={{textAlign: 'center', fontSize:'20px'}}> Welcome To The Store </h1>
   
      {!albums.images ? (
        <div>.loading</div>
      ) : (
    <Row style={{display: 'flex'}}>
 
        <div className="imageone">
 
 
          <p className="absolute top-[26%] left-[10%] font-Georgia text-[25px]"> { albums.name } </p> <br/>
          <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[35%] left-[7%] text-aliceblue text-[20px]"> Album By {albums.artists[0].name} </p> <br/>
          <p className="absolute top-[32%] left-[10%] text-[15px]"> { albums.total_tracks } songs - { albums.release_date}  </p>
        <Card.Img src={albums.images[0].url } style={{  border: '2px solid black' }}className="absolute bottom-8 left-20 w-[300px] h-[300px]" />
          {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
          <div className="overlay">
                 <div className="content">
                 <button onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 </div>
             </div>
         
          <br />
                 
        </div>
 
<div className="imagetwo">
    <p className="absolute top-[28%] left-[42%] font-Georgia text-[25px]"> { albums2.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[36%] left-[42%] text-aliceblue text-[20px]"> Album By {albums2.artists[0]} </p> 
    <p className="absolute top-[33%] left-[44%] text-[15px]"> { albums2.total_tracks } songs - { albums2.release_date}  </p>
    <Card.Img src={albums2.images[0].url} className="absolute bottom-6 left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay2">
                 <div className="content2">
                 <button onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 </div>
             </div>
 
<br />
       
</div>
 
<div className = "imagethree" style={{  position: 'relative', right: '-30%', marginTop: '20%'}} >
    <p className="absolute top-[-19rem] left-[39%] font-Georgia text-[25px]"> { albums3.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-17rem] left-[42%] text-aliceblue text-[20px]"> Album By {  albums3.artists[0].name } </p> <br/>
    <p className="absolute top-[-15rem] left-[44%] text-[15px]"> { albums3.total_tracks } songs - { albums3.release_date}  </p>
    <Card.Img src={albums3.images[0].url } className="absolute bottom-[-17px] left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay3">
                 <div className="content3">
                 {/* <button> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 */}
    </div> 
  </div>
<br />
       
</div>
 
<Row className= "Row-2" style={{ }}>
 
<div className="imagefour" >
 
 
  <p className="absolute top-[-22rem] left-[10%] font-Georgia text-[25px]"> { albums4.name } </p> <br/>
  <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-19rem] left-[7%] text-aliceblue text-[20px]"> Album By {  albums4.artists[0].name } </p> <br/>
  <p className="absolute top-[-20rem] left-[10%] text-[15px]"> { albums4.total_tracks } songs - { albums4.release_date}  </p>
<Card.Img src={albums4.images[0].url } style={{  border: '2px solid black' }}className="absolute bottom-8 left-20 w-[300px] h-[300px]" />
  {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
  <div className="overlay4">
         <div className="content4">
         {/* <button > <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                  */}
         </div>
     </div>
 
  <br />
         
</div>
 
<div className="imagefive">
    <p className="absolute top-[-22rem] left-[42%] font-Georgia text-[25px]"> { albums5.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-18rem] left-[42%] text-aliceblue text-[20px]"> Album By {  albums5.artists[0].name } </p> <br/>
    <p className="absolute top-[-20rem] left-[44%] text-[15px]"> { albums5.total_tracks } songs - { albums5.release_date}  </p>
    <Card.Img src={albums5.images[0].url } className="absolute bottom-6 left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay5">
         <div className="content5">
         {/* <button > <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>          */}
                 </div>
     </div>
 
<br />
       
</div>
 
<div className = "imagesix" style={{  position: 'relative', right: '-30%', marginTop: '34%'}} >
    <p className="absolute top-[-19rem] left-[39%] font-Georgia text-[25px]"> { albums6.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-16rem] left-[42%] text-aliceblue text-[20px]"> Album By {  albums6.artists[0].name } </p> <br/>
    <p className="absolute top-[-17rem] left-[44%] text-[15px]"> { albums6.total_tracks } songs - { albums6.release_date}  </p>
    <Card.Img src={albums6.images[0].url } className="absolute bottom-[-17px] left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay6">
         <div className="content6">
         {/* <button> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>            */}
               </div>
     </div>
 
<br />
       
</div>
 
 
 </Row>
 
 
</Row>
 
      )}<br /> <br /><br /><br /><br /><br /><br />
 
 
      <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%"
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>
    </div>
  )
}
 
export default Store
 

