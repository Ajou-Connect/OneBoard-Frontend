import React, { useContext, useEffect, useState ,useCallback,useReducer} from 'react';
import ZoomContext from './ZoomClientContext';
import ZoomVideo from '@zoom/videosdk';
import { generateVideoToken } from './GenerateToken';
import ConnectionState from "@zoom/videosdk";
import produce from "immer";
import styled,{css} from 'styled-components';
import "./test.css";
import axios from 'axios';
import { RenderCanvas, ToggleCanvas, SetCanvasSize } from "../Pages/LectureClass/utils/SetCanvas/Index";
import Chat from "../Pages/LectureClass/utils/Contents/Chat/Index";
import Participant from "../Pages/LectureClass/utils/Contents/Participant/Index";
import MediaController from "../Pages/LectureClass/utils/MediaController/Index";
import Loading from "../Pages/LectureClass/utils/Loading/Index";
import My from "../img/myscreen.png";
import Share from "../img/share.png";
import "./test.css";


const MainCnt = styled.div`
background-color : gray;
padding : 0.5vh;
display : flex;
height : 100%;
`

const LeftCnt = styled.div`
flex-basis : 75%;
flex-direction : column;
height : 100%;
`

const ScreenMenuCnt = styled.div`
width : 100%;
z-index : 99;
height : 100px;
position : absolute;
padding  : 10px 0;
top : 0;
display : flex;
justify-content : left;
align-items : center;
background-color : transparent;
transition : all 0.1s linear;
transform : translateY(-100px);
`

const ScreenMenu = styled.button`
background-size : contain;
background-repeat : no-repeat;
background-position : center center;
height : 50px;
width : 50px;
margin : 10px;
&.active{
  background-color : blue;
  color : white;
  border : 1px solid blue;
}
`

const ZoomScreen = styled.div`
height : 1000px;
position : relative;
&:hover{
  #mediaController, #screenMenuCnt{
    transform : translateY(0);
  }
}
`

const RightCnt = styled.div`
flex-basis : 25%;
height : 100%;
display : flex;
flex-direction : column;
padding : 1vh 1rem;
justify-content : space-between;
background-color : gray;
`

const ActiveStyle = css`
height : 47vh;
background-color : white;
border-radius : 20px;
box-shadow: 5px 5px #f5f5f5;
display : flex;
flex-direction : column;  
justify-content : space-between;
padding : 2vh 1rem;
`

const Active1Cnt = styled.div`
${ActiveStyle}
`

const Active2Cnt = styled.div`
${ActiveStyle}
`

const ActvieContentCntStyle = css`
flex-basis : 37vh;
position : relative;
background-color : #F9F9F9;
//background-clip: content-box;
padding : 0.5vh 0.5rem;
margin-bottom : 1vh;
`

const Active1ContentCnt = styled.div`
${ActvieContentCntStyle}
`
const Active2ContentCnt = styled.div`
${ActvieContentCntStyle}
`

const ActiveContentStyle = css`
position : absolute;
width : 100%;
height : 100%;
`

const ParticipantsContent = styled.div`
${ActiveContentStyle}
background-color : pink;
`

const ChatContent = styled.div`
${ActiveContentStyle}
background-color : blue;
`

const QuestionContent = styled.div`
${ActiveContentStyle}
background-color : red;
`

const UnderstoodContent = styled.div`
${ActiveContentStyle}
background-color : pink;
`

const SubtitleContent = styled.div`
${ActiveContentStyle}
background-color : blue;
`

const EtcContent = styled.div`
${ActiveContentStyle}
background-color : red;
`

const Active1Menu = styled.div`
flex-basis : 4vh;
display : flex;
justify-content : space-between;
`

const Active2Menu = styled.div`
flex-basis : 4vh;
display : flex;
justify-content : space-between;
`

const constActiveBtnStyle = css`
border-radius : 5px;
flex-basis : 30%;
font-size :1.05rem;
background-color : gray;
color : gray;
&.active{
  background-color : gray;
  color : gray;
}
`

const Fuck = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`

const ParticipantsBtn = styled.button`
${constActiveBtnStyle}
`

const ChatBtn = styled.button`
${constActiveBtnStyle}
`

const QuestionBtn = styled.button`
${constActiveBtnStyle}
`

const UnderstoodsBtn = styled.button`
${constActiveBtnStyle}
`

const SubtitleBtn = styled.button`
${constActiveBtnStyle}
`

const EtcBtn = styled.button`
${constActiveBtnStyle}
`

const ContentWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
padding: 0.5rem;
visibility : hidden;
&.active{
  visibility : visible;
}
`

interface TestProps {
  match: {
    params: {
      subject_id: string,
      subject_code: string
    }
  }
}

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


function TestZoom(props: TestProps) {
const [isLoading, setisLoading] = useState<boolean>(true);
  const [screenNum, setscreenNum] = useState<number>(0);
  const [userClient, setUserClient] = useState<any>();
  const [Active1Num, setActive1Num] = useState<number>(1);
  const [Active2Num, setActive2Num] = useState<number>(1);
  const [ref, setref] = useState<any>(React.createRef());
  const [subject_id, setsubject_id] = useState(props.match.params.subject_id);
  const [lecture_id, setlecture_id] = useState<number>(1);
  const [lecture_info, setlecture_info] = useState(null);
  const [students, setstudents] = useState(null);
  const [mediaState, dispatch] = useReducer(mediaReducer, mediaShape);


 const user = JSON.parse(window.sessionStorage.userInfo);

  async function zoomInit() {
    try {
      setisLoading(true);
      const client = ZoomVideo.createClient();
      await client.init("en-US", "Global", "zoom.us");
      const token = generateVideoToken(
    "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
    "tony3",
    "",
    "jack",
    "jack4"
      );
      await client.join("tony3", token, "name", "")
        .then(() => {
          console.log("join session complete");
          setUserClient(client);
          setisLoading(false);
          
          
        })
        .catch((error) => {
          console.log(error);
        });
      
      await client.getMediaStream().startAudio();
      

      client.on("connection-change", (payload) => {
        if (payload.state === "Connected") {
          console.log("connected to mediaStream");
        }
        else {
          console.log("failed to connect");
        }
      });

      client.on("active-share-change", async (payload) => {
        console.log("active-share-change");
        const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
        const stream = client.getMediaStream();
        console.log(payload);
        if (payload.state === "Active") {
          stream.startShareView(canvas, payload.userId);
          console.log("share view active");
        }
        else if (payload.state === "Inactive") {
          await stream.stopShareView().then(res => {
            console.log(res);
          })
        }
      })

      client.on("peer-video-state-change", async (payload) => {
        console.log("video state change");
        const canvas = document.getElementById("canvas0") as HTMLCanvasElement;
        const stream = client.getMediaStream();
        console.log("payload");
        if (payload.action === "Start") {
          stream.renderVideo(canvas, user.userId, 300, 500, 0, 0, 3);
        } else if (payload.action === "Stop") {
          stream.stopRenderVideo(canvas,user.userId);
        }
        
        
      })

      client.on("share-content-dimension-change", payload => {
        console.log("share-content-dimension-change");
        const canvas1 = document.getElementById("canvas1") as HTMLCanvasElement;
        const arr = [canvas1];
        arr.forEach((value, index) => {
          const canvas = value;
          const parent = canvas.parentElement as HTMLElement;
          const contentWidth = payload.width;
          const contentHeight = payload.height;
          const cntWidth = parent.offsetWidth;
          const cntHeight = parent.offsetHeight;
          console.log(canvas.style);
           if (cntWidth / contentWidth > cntHeight / contentHeight) {
            canvas.style.height = `${cntHeight}px`;
            canvas.style.width = `${cntHeight * contentWidth / contentHeight}px`;
          } else {
            canvas.style.width = `${cntWidth}px`;
            canvas.style.height = `${cntWidth * contentHeight / contentWidth}px`;
          }
        })
      })

       client.on("event_share_content_change", async (payload) => {
        console.log("event_share_content_change");
      });

      client.on("event_passively_stop_share", async (payload) => {
        console.log("event_passively_stop_share");
      });

      window.addEventListener('resize', () => {
        const canvas = document.getElementById("canvas0") as HTMLCanvasElement;;
        const parent = canvas.parentElement as HTMLElement;
        const stream = client.getMediaStream();
        stream.updateVideoCanvasDimension(canvas, parent.offsetWidth, parent.offsetHeight);
        //stream.adjustRenderedVideoPosition(canvas, client.getCurrentUserInfo().userId, canvas.width, canvas.height, 0, 0);
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  const onMediaSDKChange = useCallback((payload) => {
    const { action, type, result } = payload;
    dispatch({ type: `${type}-${action}`, payload: result === "success" });
  }, []);

  useEffect(() => {
    zoomInit();
    console.log("hi" + userClient);
    
  }, [])
  
    useEffect(() => {
    !isLoading && ToggleCanvas(screenNum);
  }, [screenNum, isLoading])

  useEffect(() => {
    !isLoading && SetCanvasSize();
  }, [isLoading])


//   const client = ZoomVideo.createClient();
// const token = generateVideoToken(
//     "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
//     "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
//   "tony",
//   "",
//   "jack",
//   "jack4"
//   );
//   useEffect(() => {
//     const init = async () => {
//       await client.init('en-US', 'Global');
//       try { 
//         await client.join("tony", token, "name","");
//         console.log("join session");
//       }
//       catch (e) {
//         console.log(e);
//       }
//     }
//     init();
// })
  useEffect(() => {
    
    userClient.on("media-sdk-change", onMediaSDKChange);
    
    return () => {
      
      userClient.off("media-sdk-change", onMediaSDKChange);
    };
  }, [userClient, onMediaSDKChange]);
   
  const RenderMenuBtns = () => {
    const screens = ['내화면', '공유화면'];
    const links = [My, Share]
    const result = screens.map((value, index) => {
      return (
        <Fuck>
          <ScreenMenu style={{ backgroundImage: `url(${links[index]})` }} onClick={changeScrenBtn} id={index.toString()}></ScreenMenu>
          <span style={{ color: 'white' }}>{value}</span>
        </Fuck>);
    })
    return result;
  }

  //------handler------
  //change screen handler
  const changeScrenBtn = (e: any) => {
    setscreenNum(parseInt(e.target.id));
  }

  //change active1 content
  const Active1BtnHandler = (e: any) => {
    setActive1Num(parseInt(e.target.id));
  }
  //change active2 content
  const Active2BtnHandler = (e: any) => {
    setActive2Num(parseInt(e.target.id));
  }
 
  return (
    <MainCnt>
      <LeftCnt>
        <ZoomScreen id="zoomScreen">
          <ScreenMenuCnt id="screenMenuCnt">
            {RenderMenuBtns()}
          </ScreenMenuCnt>
          {RenderCanvas()}
          <MediaController client={userClient} state={mediaState}/>
        </ZoomScreen>
      </LeftCnt>
      <RightCnt>
        <Active1Cnt>
          <Active1ContentCnt>
            
            <Active1Menu>
              <ChatBtn className="Active1Btn" id="2" onClick={Active1BtnHandler}>채팅</ChatBtn>
            </Active1Menu>
            
          </Active1ContentCnt>
        </Active1Cnt>
      </RightCnt>
   </MainCnt>
  )
};

export default TestZoom;
