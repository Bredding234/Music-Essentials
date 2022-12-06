import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card
} from "react-bootstrap";
import '/src/News2.css';
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SpotifyPlayer from 'react-spotify-player'
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
import { useParams } from "react-router-dom";

function Albums2() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
    const params2 = useParams();
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);

 // The tracks effect
 useEffect(() => {
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
      .then(({ access_token }) => {
        // API ACCESS TOKEN
        var authParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        };

        

        //Get request with Artist ID grab all the from that artist
        fetch(`https://api.spotify.com/v1/albums/${params2.id}`, authParameters)
          .then((response) => response.json())
          .then((data) => {
            console.log("Album" +  data );
            setAlbums(data);
            setTracks(data.tracks.items);
          });
      });


      
  }, []);
  console.log("The album of the artist is: ", albums.label);

  //console.log("This is my tracks array: ", tracks); // test out the tracks object
// yes in store.jsx



// do you use this file to display the albums when clicked on from store



  return (
    <>
      {!albums.images ? (
        <div>.loading</div>
      ) : (
        <div className="mt-10">
          <Card.Img src={albums.images[0].url } className="absolute bottom-7 left-20 w-[400px] h-[350px]" />
          <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </a> <br /> 

       
          <p className="absolute top-[15%] left-[47%] font-Georgia text-[25px]"> { albums.name } </p> <br/>
          <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[20%] left-[50%] text-aliceblue text-[20px]"> Album By {  albums.artists[0].name } </p> <br/> <br />
          <p className="absolute top-[25%] left-[50%] text-[15px]"> { albums.total_tracks } songs - { albums.release_date}  </p>  <br/> <br /> <br /> <br /> <br /> <br />   
        
         
          <span className="absolute top-[30%] left-[55%] text-[15px]" data-price="1200" style={{ fontWeight:'bold' }} >$12</span>
      
          
          {albums.tracks.items.slice(0,10).map((track) => {
            return ( 
              <div style={{ width: '15rem', marginLeft:'auto', marginRight: '32%', border: '2px solid black', height: '3.5rem', fontSize: '12px' }} key={track.id}>

                  
                  <div key={track.id} className="track-image" style={{textAlign: 'center'}} > 

                    <p className="hover:cyan">{track.name}</p> 
                  
                  </div>         
             
         
              </div>       

            );
          })}  
           <SpotifyPlayer
              style={{ position:'relative' , top:'80%' }}
              uri= {albums.uri}
                /> 
                      <p style={{ color: "black", position: "absolute", top: "170%",  bottom: '0',  right: '0', left: '0', textAlign: "center", width: "100%", fontSize: "1 rem" }}> {albums.copyrights[0].text} </p> <br /> <br /><br /><br />
                     
                      <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
        </div>
      )}
    </>
  );
}

export default Albums2

