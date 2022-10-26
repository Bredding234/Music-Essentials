import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Collapse } from "@blueprintjs/core";
import TabPanel from "@mui/lab/TabPanel";
import Home from "./Home";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

function Tabs6() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
  const [playlists, setPlaylists] = useState(null);
  const [playlists2, setPlaylists2] = useState(null);
  const [playlists3, setPlaylists3] = useState(null);
  const [playlists4, setPlaylists4] = useState(null);
  const [playlists5, setPlaylists5] = useState(null);

  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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

        //api.spotify.com/v1/me/playlists
        //Get request with Artist ID grab all the from that artist
        fetch(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DX7YCknf2jT6s`,
          authPlaylistParameters
        )
          .then((response) => response.json())
          .then((data) => {
            console.log({ data }); // works(displays playlist based the specific one I passed it).
            setPlaylists(data);
            console.log({ playlists }); // empty object
          });
      });

    //playlists 2

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
        fetch(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DXcWL5K0oNHcG`,
          authPlaylistParameters
        )
          .then((response) => response.json())
          .then((data) => {
            console.log({ data }); // works(displays playlist based the specific one I passed it).
            setPlaylists2(data);
            console.log({ playlists2 }); // empty object
          });
      });

    //playlists 3

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
        fetch(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DWTtzPKJEaTC4`,
          authPlaylistParameters
        )
          .then((response) => response.json())
          .then((data) => {
            console.log({ data }); // works(displays playlist based the specific one I passed it).
            setPlaylists3(data);
            console.log({ playlists3 }); // empty object
          });
      });

    //playlists 4

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
        fetch(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DWTR4ZOXTfd9K`,
          authPlaylistParameters
        )
          .then((response) => response.json())
          .then((data) => {
            console.log({ data }); // works(displays playlist based the specific one I passed it).
            setPlaylists4(data);
            console.log({ playlists4 }); // empty object
          });
      });

    //playlists 5

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

        //api.spotify.com/v1/me/playlists
        //Get request with Artist ID grab all the from that artist
        fetch(
          `https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI`,
          authPlaylistParameters
        )
          .then((response) => response.json())
          .then((data) => {
            console.log({ data }); // works(displays playlist based the specific one I passed it).
            setPlaylists5(data);
            console.log({ playlists5 }); // empty object
          });
      });
  }, []);

  return (
    <div>
      <h1
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px",
          textAlign: "center",
          backgroundColor: "#CBC3E3",
          color: "white",
          fontSize: "20px",
        }}
      >
        {" "}
        Jazz{" "}
      </h1>{" "}
      <br />
      {playlists && (
        <img
          src={playlists.images[0].url}
          className="absolute bottom-[20%] left-20 w-[400px] h-[350px]"
        />
      )}
      {playlists &&
        playlists.tracks.items.slice(0, 20).map((item, i) => {
          return (
            <Box
              sx={{
                display: "flex",
                position: "relative",
                lineHeight: "7px",
                left: "40%",
                padding: "5px",
              }}
            >
              {i + 1}.{")"} {item.track.name}
              {item.track.artists.map((artist) => {
                <Box>{artist.name}</Box>;
              })}
            </Box>
          );
        })}{" "}
      <br /> <br /> <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px",
          textAlign: "center",
          backgroundColor: "#CBC3E3",
          color: "white",
          fontSize: "20px",
        }}
      >
        {" "}
        Are & B{" "}
      </h1>{" "}
      <br />
      {playlists2 && (
        <img
          src={playlists2.images[0].url}
          className="absolute bottom-[-90%] left-20 w-[400px] h-[350px]"
        />
      )}{" "}
      <br /> <br /> <br /> <br />
      {playlists2 &&
        playlists2.tracks.items.slice(0, 20).map((item, i) => {
          return (
            <Box
              sx={{
                display: "flex",
                position: "relative",
                lineHeight: "7px",
                left: "40%",
                padding: "5px",
              }}
            >
              {i + 1}.{")"} {item.track.name}
              {item.track.artists.map((artist) => {
                <Box>{artist.name}</Box>;
              })}
            </Box>
          );
        })}{" "}
      <br /> <br /> <br />
      <br />
      <br />
      <br />
      <Button
        style={{
          margin: "auto",
          display: "flex",
          padding: "5px",
          color: "black",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        Load More{" "}
      </Button>
      <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br />
      <Collapse isOpen={isOpen}>
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
          }}
        >
          {" "}
          I Love My 90's R&B{" "}
        </h1>{" "}
        <br />
        {playlists3 && (
          <img
            src={playlists3.images[0].url}
            className="absolute bottom-[70%] left-20 w-[400px] h-[350px]"
          />
        )}
        {playlists3 &&
          playlists3.tracks.items.slice(0, 20).map((item, i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  lineHeight: "7px",
                  left: "40%",
                  padding: "5px",
                }}
              >
                {i + 1}.{")"} {item.track.name}
                {item.track.artists.map((artist) => {
                  <Box>{artist.name}</Box>;
                })}
              </Box>
            );
          })}{" "}
        <br /> <br /> <br /> <br />
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
          }}
        >
          {" "}
          I Love My '00s R&B{" "}
        </h1>{" "}
        <br />
        {playlists4 && (
          <img
            src={playlists4.images[0].url}
            className="absolute bottom-[40%] left-20 w-[400px] h-[350px]"
          />
        )}
        {playlists4 &&
          playlists4.tracks.items.slice(0, 20).map((item, i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  lineHeight: "7px",
                  left: "40%",
                  padding: "5px",
                }}
              >
                {i + 1}.{")"} {item.track.name}
                {item.track.artists.map((artist) => {
                  <Box>{artist.name}</Box>;
                })}
              </Box>
            );
          })}{" "}
        <br /> <br /> <br /> <br />
        <h1
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
          }}
        >
          {" "}
          I Love My '10s R&B{" "}
        </h1>{" "}
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {playlists5 && (
          <img
            src={playlists5.images[0].url}
            className="absolute bottom-[5%] left-20 w-[400px] h-[350px]"
          />
        )}
        {playlists5 &&
          playlists5.tracks.items.slice(0, 20).map((item, i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  lineHeight: "7px",
                  left: "40%",
                  padding: "5px",
                }}
              >
                {i + 1}.{")"} {item.track.name}
                {item.track.artists.map((artist) => {
                  <Box>{artist.name}</Box>;
                })}
              </Box>
            );
          })}
      </Collapse>{" "}
      <br /> <br /> <br />
      <br /> <br />
    </div>
  );
}
export default Tabs6;
