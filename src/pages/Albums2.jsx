import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card
} from "react-bootstrap";
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
import { useParams } from "react-router-dom";

function Albums2() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
    const params = useParams();
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
        fetch('https://api.spotify.com/v1/albums/2ZytN2cY4Zjrr9ukb2rqTP', authParameters)
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


  return (
    <>
      {!albums.images ? (
        <div>.loading</div>
      ) : (
        <div className="mt-20">
          <Card.Img src={albums.images[0].url } className="absolute bottom-7 left-20 w-[400px] h-[350px]" />
          <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </a>
          <p className="absolute top-[15%] left-[47%] font-Georgia text-[25px]"> { albums.name } </p> <br/>
          <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[20%] left-[50%] text-aliceblue text-[20px]"> Album By {  albums.artists[0].name } </p> <br/> <br />
          <p className="absolute top-[25%] left-[50%] text-[15px]"> { albums.total_tracks } songs - { albums.release_date}  </p>  <br/> <br /> <br />
          {albums.tracks.items.map((track) => {
            return (
              <Card style={{ width: '18rem', left: '40rem', height: '3.0rem' }} key={track.id}>

                <Card.Body>
                  
                  <div key={track.id} className="track-image" > 

                    <p className="hover:cyan">{track.name}</p> 

                  </div>         

                  {/* <Card.Img src={albums.images[0].url} /> */}
                </Card.Body>

              </Card>       

            );
          })} <br />
                      <p style={{ color: "black", position: "absolute", top: "190%",  bottom: '0',  right: '0', left: '0', textAlign: "center", width: "100%", fontSize: "1 rem" }}> {albums.copyrights[0].text} </p> <br /> <br /><br /><br />
                     
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

