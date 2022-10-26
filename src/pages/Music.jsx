import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import Footer from './footer'
import Tabs2 from './Tabs2';
import Album from "./Albums";
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

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

function Music() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);



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
  console.log(albums);
  
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
<div>		
    <div id="SearchMusic" style={{backgroundColor: 'white'}}>		
      {/* style={{ height: 40, borderColor: 'black', borderWidth: 1, display: 'block', marginRight: 'auto', marginLeft: 'auto' }} */}
      <p style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
        {" "}
        Search for artist
      </p>
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
          color: "black",
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

      <div className="flex border justify-center items-center gap-3">
        <label htmlFor="genre">Genre</label>
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
              


</div>

    </div> <br /><br /><br /><br /><br /><br /><br />
	  
    
    
    <footer class="footer" style={{backgroundColor: 'black',color: 'white', textAlign:'center', position: "fixed",
          left: 0,
          bottom: 0,
          right: 0}}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
      </div>
  );
}

export default Music;
