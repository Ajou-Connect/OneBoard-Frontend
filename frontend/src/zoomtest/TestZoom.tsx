import React, { useContext, useEffect } from 'react';
import ZoomContext from './ZoomClientContext';
import ZoomVideo from '@zoom/videosdk';
import { generateVideoToken } from './GenerateToken';
import ConnectionState from "@zoom/videosdk";
import produce from "immer";



const mediaShape = {
  audio: {
    encode: false,
    decode: false,
  },
  video: {
    encode: false,
    decode: false,
  },
  share: {
    encode: false,
    decode: false,
  },
};
const mediaReducer = produce((draft, action) => {
  switch (action.type) {
    case "audio-encode": {
      draft.audio.encode = action.payload;
      break;
    }
    case "audio-decode": {
      draft.audio.decode = action.payload;
      break;
    }
    case "video-encode": {
      draft.video.encode = action.payload;
      break;
    }
    case "video-decode": {
      draft.video.decode = action.payload;
      break;
    }
    case "share-encode": {
      draft.share.encode = action.payload;
      break;
    }
    case "share-decode": {
      draft.share.decode = action.payload;
      break;
    }
    default:
      break;
  }
}, mediaShape);


function TestZoom() {
  const client = ZoomVideo.createClient();
const token = generateVideoToken(
    "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
  "tony",
  "",
  "jack",
  "jack4"
  );
  useEffect(() => {
    const init = async () => {
      await client.init('en-US', 'Global');
      try { 
        await client.join("tony", token, "name","");
        console.log("join session");
      }
      catch (e) {
        console.log(e);
      }
    }
    init();
})
  
   
  // client.init("en-US", `${window.location.origin}/lib`, 'zoom.us');
  // console.log(token);
  // client.join("tony", token, "name","").then(() => {
  //   console.log("join meeting session");
  // }).catch(error => {
  //   console.log("disconnect");
    
  // });
  // client.on("connection-change", (payload) => {
  //   if (payload.state === "Connected") {
  //     console.log("connect!");
      
  //   }
  //   else {
  //     console.log("disconnected");
      
  //   }
  // })
 
  return (
    <div>
      hello this is zoom test page
    </div>
  )
};

export default TestZoom;
