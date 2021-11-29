import React, { useContext, useEffect } from 'react';
import ZoomContext from './ZoomClientContext';
import ZoomVideo from '@zoom/videosdk';
import { generateVideoToken } from './GenerateToken';
import ConnectionState from "@zoom/videosdk";

const client = ZoomVideo.createClient();
const token = generateVideoToken(
    "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
    "tony"
  );
function TestZoom() {
  
  useEffect(() => {
    const init = async () => {
      await client.init("en-US", `${window.location.origin}/lib`, 'zoom.us');
      try {
        console.log("join session");
        await client.join("topic", token, "tony");
        console.log(token);
        
      }
      catch (e) {
        console.log(e);
        
      }
    }
  //   const client = ZoomVideo.createClient();
  // client.init("en-US", `${window.location.origin}/lib`);
  // const token = generateVideoToken(
  //   "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
  //   "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
  //   "tony"
  // );
  // console.log(token);
  
  // client.join("tony", token, "name").then(() => {
  //   console.log("join meeting session");
    
  // }).catch(error => {
  //   console.log(error);
    
  // });
  // client.on("connection-change", (payload) => {
  //   if (payload.state === "Connected") {
  //     console.log("connect!");
      
  //   }
  //   else {
  //     console.log("disconnected");
      
  //   }
  // })
  })
  
  return (
    <div>
      hello this is zoom test page
    </div>
  )
};

export default TestZoom;
