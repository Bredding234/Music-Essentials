import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBRipple } from "mdb-react-ui-kit";
import Footer from './footer'
import Album from "./Albums";
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

function Home() {
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

  const [isHovering, setIsHovering] = useState(false);

  const showHover = () => {
    setIsHovering(true);
  };

  const hideHover = () => {
    setIsHovering(false);
  };

  return (
    <div>
		<div style={{ backgroundColor: 'black' }} href="#SearchMusic">
			 <a href="#SearchMusic"> <h1 style={{  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', fontFamily: 'Georgia', color: 'white' }}> Listen, Search, and Discover new music everyday. </h1></a>
			<img  style={{width: "110%",marginLeft: 'auto', marginRight: 'auto', padding: '5px' }} src="https://i0.wp.com/www.xsnoize.com/wp-content/uploads/2019/11/luke-chesser-pFqrYbhIAXs-unsplash.jpg"  />
		</div>
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
        <select id="genre" className="w-42 border-2 border-gray-700 rounded-lg">
          <option value="default">Choose Genre</option>
          <option value="Pop">Pop</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Rock">Rock</option>
          <option value="EDM">EDM</option>
          <option value="R&B"> R&B </option>
          <option value="Jazz">Jazz</option>
          <option value="Rock">Rock</option>
          <option value="Electronic music">Electronic music</option>
          <option value="Soul Music">Soul Music </option>
        </select>
      </div>

      <Row>
        <Card className="flex justify-center items-center " style={{backgroundColor: 'blue'}}>
          <div
            className="border rounded-lg overflow-hidden relative"
            onMouseOver={showHover}
            onMouseLeave={hideHover}
          >
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9wJTIwbXVzaWN8ZW58MHx8MHx8&w=1000&q=80"
              className="img-fluid shadow-4"
              alt="..."
            style={{objectFit: 'cover', Width: '100%',height: '100%' }} />
            <div className={`${isHovering ? "block" : "hidden"}`}>
              <a className="text-3xl text-white  absolute top-0 left-0 w-full h-full z-10 grid place-items-center">
                Pop
              </a>
            </div>
            <div className="hover:bg-zinc-600 transition-hover duration-300 opacity-70  ease-in mix-blend-screen absolute top-0 left-0 w-full h-full"></div>
          </div>
        </Card>

        <Card className="flex justify-center items-center " style={{backgroundColor: 'purple'}}>
          <div
            className="border rounded-lg overflow-hidden relative"
            onMouseOver={showHover}
            onMouseLeave={hideHover}
          >
            <img
              src="https://www.dancemusicnw.com/wp-content/uploads/2014/09/EDM-is-for-everyone-e1410585792428.jpg"
              className="img-fluid shadow-4 w-full h-full"
              alt="..."
            />
            <div className={`${isHovering ? "block" : "hidden"}`}>
              <a className="text-3xl text-white  absolute top-0 left-0 w-full h-full z-10 grid place-items-center">
                Hip Hop
              </a>
            </div>
            <div className="hover:bg-zinc-600 transition-hover duration-300 opacity-70  ease-in mix-blend-screen absolute top-0 left-0 w-full h-full"></div>
          </div>
        </Card>

        <Card className="flex justify-center items-center " style={{backgroundColor: 'grey'}}>
          <div
            className="border rounded-lg overflow-hidden relative"
            onMouseOver={showHover}
            onMouseLeave={hideHover}
          >
            <img
              src="https://cdn.artphotolimited.com/images/5b9fc1ecac06024957be8806/1000x1000/the-rolling-stones-rock-and-roll-circus.jpg"
              className="img-fluid shadow-4 w-full h-full"
              alt="..."
            />
            <div className={`${isHovering ? "block" : "hidden"}`}>
              <a className="text-3xl text-white  absolute top-0 left-0 w-full h-full z-10 grid place-items-center">
                Rock
              </a>
            </div>
            <div className="hover:bg-zinc-600 transition-hover duration-300 opacity-70  ease-in mix-blend-screen absolute top-0 left-0 w-full h-full"></div>
          </div>
        </Card>
			<hr />
          <div
            className="border rounded-lg overflow-hidden relative"
            onMouseOver={showHover}
            onMouseLeave={hideHover}
			style={{backgroundColor: 'lightblue'}}
          >
            <img
              src="https://thump-images.vice.com/images/2016/08/01/edm-electronic-music-confusion-essay-body-image-1470064168.jpg?crop=1xw:0.8433382137628112xh;center,center&resize=1200:*"
              className="img-fluid shadow-4 w-full h-full"
              alt="..."
           style={{width: "70%", height: '100%', objectFit: 'cover' , display: 'block', marginLeft: 'auto', marginRight: 'auto', padding: '5px' }} />
            <div className={`${isHovering ? "block" : "hidden"}`}>
              <a className="text-3xl text-white  absolute top-0 left-0 w-full h-full z-10 grid place-items-center">
                EDM
              </a>
            </div>
            <div className="hover:bg-zinc-600 transition-hover duration-300 opacity-70  ease-in mix-blend-screen absolute top-0 left-0 w-full h-full"></div>
          </div>
     
      </Row> </div> <br /><br /><br /><br /><br /><br /><br />
	  <footer className="footer" style={{backgroundColor: 'black',color: 'white', textAlign:'center', position: "fixed",
          left: 0,
          bottom: 0,
          right: 0}}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
      </div>
  );
}

export default Home;
