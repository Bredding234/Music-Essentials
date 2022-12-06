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
const navigate  = useNavigate();
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const [searchInput, setSearchInput] = useState("");
const [accessToken, setAccessToken] = useState("");
const [albums, setAlbums] = useState({}); 
const [albums2, setAlbums2] = useState({});
const [albums3, setAlbums3] = useState({});
const [albums4, setAlbums4] = useState({});
const [albums5, setAlbums5] = useState({});
const [albums6, setAlbums6] = useState({});
const [show, setShow] = useState(false);
const [value, setValue] = React.useState("1");
 

const handleChange = (event, newValue) => {
      setValue(newValue);
};
 

const navigateAlbum = (event) => {
  let id = event.currentTarget.name; // finds the button name 
  navigate(`/album/${id}/nested`); // <<< redirects
};
// const navigateAlbum2 = () => {
//     navigate('/album/24TAupSNVWSAHL0R7n71vm');
// };
// const navigateAlbum3 = () => {
//     navigate('/album/1C2h7mLntPSeVYciMRTF4a');
// };
// const navigateAlbum4 = () => {
//     navigate('/album/2FD6g8bXEn2uQMYbeqqoCg');
// };
// const navigateAlbum5 = () => {
//     navigate('/album/5CnpZV3q5BcESefcB3WJmz');
// };
// const navigateAlbum6 = () => {
//     navigate('/album/6n9DKpOxwifT5hOXtgLZSL');
// };
 
 
 // const [playlists, setPlaylists] = useState(null);
 
 
// The tracks effect
useEffect(() => {
  //const asyncFunction = async() => {
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
  const fetchAlbumData = async(url, setter, index) => {
    var authPlaylistParametersFetched
    await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
    .then((result) => result.json())
    .then(({ access_token }) => {
      // API ACCESS TOKEN
      authPlaylistParametersFetched = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }})
    await fetch(url, authPlaylistParametersFetched)
        .then((response) => response.json())
        .then((data) => {  
        console.log( 'albums on fetch ' + index); // works(displays playlist based the specific one I passed it).
        setter(data);
        // console.log( albums ); // empty object
        })
  }
  const fetchAllAlbums = async() => {
    await fetchAlbumData('https://api.spotify.com/v1/albums/2ZytN2cY4Zjrr9ukb2rqTP', setAlbums, 1)
    await fetchAlbumData('https://api.spotify.com/v1/albums/24TAupSNVWSAHL0R7n71vm', setAlbums2, 2)
    await fetchAlbumData('https://api.spotify.com/v1/albums/1C2h7mLntPSeVYciMRTF4a', setAlbums3, 3)
    await fetchAlbumData('https://api.spotify.com/v1/albums/7IyoGB8J31fvQDwGtHAq9m', setAlbums4, 4)
    await fetchAlbumData('https://api.spotify.com/v1/albums/5CnpZV3q5BcESefcB3WJmz', setAlbums5, 5)
    await fetchAlbumData('https://api.spotify.com/v1/albums/6n9DKpOxwifT5hOXtgLZSL', setAlbums6, 6)
  }
  fetchAllAlbums();
// Promise.all([
//   await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }})
//     .then(authPlaylistParameters => {
 
   
     
//     //Get request with Artist ID grab all the from that artist
//     fetch('https://api.spotify.com/v1/albums/2ZytN2cY4Zjrr9ukb2rqTP', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log( 'albums on fetch: ', data  ); // works(displays playlist based the specific one I passed it).
//         setAlbums(data);
//         // console.log( albums ); // empty object
//         });
//       }),
 
// //album 2
// await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }}).then((authPlaylistParameters) => {
 
   
//           //setPlaylists(data);
//       // Get request using search to get the Artist ID
//       // https://api.spotify.com/v1/recommendations/available-genre-seeds
//       //api.spotify.com/v1/me/playlists
//       //Get request with Artist ID grab all the from that artist
//       fetch('https://api.spotify.com/v1/albums/24TAupSNVWSAHL0R7n71vm', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log('albums 2: ', { data } ); // works(displays playlist based the specific one I passed it).
//         setAlbums2({data});
//         // console.log({ albums2 }); // empty object
//         });
//     }),
 
// //album 3
 
// await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }}).then(authPlaylistParameters =>
 
   
       
//       //Get request with Artist ID grab all the from that artist
//       fetch('https://api.spotify.com/v1/albums/1C2h7mLntPSeVYciMRTF4a', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log( { data } ); // works(displays playlist based the specific one I passed it).
//         setAlbums3({data});
//         // console.log({ albums3 }); // empty object
//         }),


// //album 4
// await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }).then(authPlaylistParameters => 
 
   
//           //setPlaylists(data);
//       // Get request using search to get the Artist ID
//       // https://api.spotify.com/v1/recommendations/available-genre-seeds
//       //api.spotify.com/v1/me/playlists
//       //Get request with Artist ID grab all the from that artist
//       fetch('https://api.spotify.com/v1/albums/2FD6g8bXEn2uQMYbeqqoCg', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log( { data } ); // works(displays playlist based the specific one I passed it).
//         setAlbums4({data});
//         // console.log({ albums4 }); // empty object
//         }),

//     //album 5
// await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }}).then(authPlaylistParameters => 
 
   
//       //Get request with Artist ID grab all the from that artist
//       fetch('https://api.spotify.com/v1/albums/5CnpZV3q5BcESefcB3WJmz', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log( { data } ); // works(displays playlist based the specific one I passed it).
//         setAlbums5({data});
//         // console.log({ albums5 }); // empty object
//         })),
 
// //albums 6
 
// await fetch("https://accounts.spotify.com/api/token", authPlaylistParameters)
//     .then((result) => result.json())
//     .then(({ access_token }) => {
//       // API ACCESS TOKEN
//       return authPlaylistParameters = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${access_token}`,
//         },
//       }}).then(authPlaylistParameters =>
//       //Get request with Artist ID grab all the from that artist
//       fetch('https://api.spotify.com/v1/albums/6n9DKpOxwifT5hOXtgLZSL', authPlaylistParameters)
//         .then((response) => response.json())
//         .then((data) => {  
//         console.log( { data } ); // works(displays playlist based the specific one I passed it).
//         setAlbums6({data});
//         // console.log({ albums6.data.artists }); // empty object
//         })
//       )]).then(() => setDataFetched(true));
//   }
//   asyncFunction();
 
 
    //5r36AJ6VOJtp00oxSkBZ5h
}, []);


// ok

//
useEffect(() => {
  console.log('checks'); 
  if(
    albums.album_type 
    && albums2.album_type
    && albums3.album_type
    && albums4.album_type
    && albums5.album_type
    && albums6.album_type
    ) {
      setShow(true);
      console.log('got it');
  }
}, [albums, albums2, albums3, albums4, albums5, albums6]);

// <- this console log shows the object is actually) (so will that fix the issue?)
//console.log("data: " + albums.data)  <- you need to add .data after albums then access the data like you were

  return (
    <div>
   
      <h1 style={{textAlign: 'center', fontSize:'20px'}}> Welcome To The Store </h1>
      { !show ? (
        <>
        <div style={{marginTop: '80px', marginLeft: '20px'}}>...loading</div>
        </>
      ) : (
    <Row style={{display: 'flex'}}>
 
        <div className="imageone">
          <p className="absolute top-[26%] left-[10%] font-Georgia text-[25px]"> {albums?.name} </p> <br/>
          <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[35%] left-[7%] text-aliceblue text-[20px]"> Album By {albums?.artists[0].name} </p> <br/>
          <p className="absolute top-[32%] left-[10%] text-[15px]"> { albums.total_tracks } songs - { albums?.release_date}  </p>
        <Card.Img src={albums?.images[0].url } style={{  border: '2px solid black' }}className="absolute bottom-8 left-20 w-[300px] h-[300px]" />
          {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
          <div className="overlay">
                 <div className="content">
                 <button name="2ZytN2cY4Zjrr9ukb2rqTP" onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 </div>
             </div>
         
          <br />
                 
        </div>
 
<div className="imagetwo">
    <p className="absolute top-[28%] left-[42%] font-Georgia text-[25px]"> { albums2?.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[36%] left-[42%] text-aliceblue text-[20px]"> Album By {albums2?.artists[0].name} </p> 
    <p className="absolute top-[33%] left-[44%] text-[15px]"> { albums2?.total_tracks } songs - { albums2?.release_date}  </p>
    <Card.Img src={albums2?.images[0].url} className="absolute bottom-6 left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay2">
                 <div className="content2">
                 <button name='24TAupSNVWSAHL0R7n71vm' onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 </div>
             </div>
 
<br />
       
</div>
 
<div className = "imagethree" style={{  position: 'relative', right: '-30%', marginTop: '29%'}} >
    <p className="absolute top-[-19rem] left-[39%] font-Georgia text-[25px]"> { albums3?.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-17rem] left-[42%] text-aliceblue text-[20px]"> Album By {  albums3?.artists[0].name } </p> <br/>
    <p className="absolute top-[-15rem] left-[44%] text-[15px]"> { albums3?.total_tracks } songs - { albums3?.release_date}  </p>
    <Card.Img src={albums3?.images[0].url } className="absolute bottom-[-17px] left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay3">
                 <div className="content3">
                  <button name='1C2h7mLntPSeVYciMRTF4a' onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                
                 {/* <button> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                 */}
    </div> 
  </div>
<br />
 
</div>
 
<Row className= "Row-2" style={{ }}>
 
<div className="imagefour" >
 
 
  <p className="absolute top-[-22rem] left-[10%] font-Georgia text-[25px]"> { albums4?.name } </p> <br/>
  <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-19rem] left-[7%] text-aliceblue text-[20px]"> Album By {  albums4?.artists[0].name } </p> <br/>
  <p className="absolute top-[-20rem] left-[10%] text-[15px]"> { albums4?.total_tracks } songs - { albums4?.release_date}  </p>
<Card.Img src={albums4?.images[0].url } style={{  border: '2px solid black' }}className="absolute bottom-8 left-20 w-[300px] h-[300px]" />
  {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
  <div className="overlay4">
         <div className="content4">
         <button name='7IyoGB8J31fvQDwGtHAq9m' onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                

         {/* <button > <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                  */}
         </div>
     </div>
 
  <br />
         
</div>
 
<div className="imagefive">
    <p className="absolute top-[-22rem] left-[42%] font-Georgia text-[25px]"> { albums5?.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-18rem] left-[42%] text-aliceblue text-[20px]"> Album By  {  albums5?.artists[0].name } </p> <br/>
    <p className="absolute top-[-20rem] left-[44%] text-[15px]"> { albums5?.total_tracks } songs - { albums5?.release_date}  </p>
    <Card.Img src={albums5?.images[0].url } className="absolute bottom-6 left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay5">
         <div className="content5">
         <button name='5CnpZV3q5BcESefcB3WJmz' onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                

         {/* <button > <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>          */}
                 </div>
     </div>
 
<br />
       
</div>
 
<div className = "imagesix" style={{  position: 'relative', right: '-30%', marginTop: '30%'}} >
    <p className="absolute top-[-19rem] left-[39%] font-Georgia text-[25px]"> { albums6?.name } </p> <br/>
    <p href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" className="absolute top-[-16rem] left-[42%] text-aliceblue text-[20px]"> Album By  {  albums6?.artists[0].name } </p> <br/>
    <p className="absolute top-[-17rem] left-[44%] text-[15px]"> { albums6?.total_tracks } songs - { albums6?.release_date}  </p>
    <Card.Img src={albums6?.images[0].url } className="absolute bottom-[-17px] left-[40%] w-[300px] h-[300px]" />
    {/* <a href= "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "90%"}}  />  </a> <br /> <br /> <br /> <br /> <br /> <br />  */}
    <div className="overlay6">
         <div className="content6">
         <button name='6n9DKpOxwifT5hOXtgLZSL' onClick={navigateAlbum}> <PlayCircleOutlineIcon className="hover:bg-zinc-600 "  style= {{  position: "absolute", left: "20%", top: "100%"}}  />  </button>                

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
 

