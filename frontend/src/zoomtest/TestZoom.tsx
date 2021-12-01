import React, { useContext, useEffect, useState } from 'react';
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


const MainCnt = styled.div`
background-color : ${props => props.theme.color.background_gray};
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
/* background-color : ${props => props.theme.color.background_gray}; */
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
  background-color : ${props => props.theme.color.blue};
  color : white;
  border : 1px solid ${props => props.theme.color.blue};
}
`

const ZoomScreen = styled.div`
height : 100%;
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
background-color : ${props => props.theme.color.background_gray};
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
background-color : ${props => props.theme.color.light_gray};
color : ${props => props.theme.color.font_light_gray};
&.active{
  background-color : ${props => props.theme.color.dark_gray};
  color : ${props => props.theme.color.font_dark_gray};
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



function TestZoom(props: TestProps) {
const [isLoading, setisLoading] = useState<boolean>(true);
  const [screenNum, setscreenNum] = useState<number>(0);
  const [client, setclient] = useState<any>();
  const [Active1Num, setActive1Num] = useState<number>(1);
  const [Active2Num, setActive2Num] = useState<number>(1);
  const [ref, setref] = useState<any>(React.createRef());
  const [subject_id, setsubject_id] = useState(props.match.params.subject_id);
  const [lecture_id, setlecture_id] = useState<number>(1);
  const [lecture_info, setlecture_info] = useState(null);
  const [students, setstudents] = useState(null);

 

  async function zoomInit() {
    try {
      setisLoading(true);
      const client = ZoomVideo.createClient();
      await client.init("en-US", "Global")
      const token = generateVideoToken(
    "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
    "tony",
    "",
    "jack",
    "jack4"
      );
      await client.join("tony", token, "name", "")
        .then(() => {
        console.log("join session complete");
          setclient(client);
          setisLoading(false);
        })
        .catch((error) => {
        console.log(error);
        })
      await client.getMediaStream().startAudio();
      client.on("connection-change", (payload) => {
        if (payload.state === "Connected") {
          console.log("connected to mediaStream");
          
        }
        else {
          console.log("failed to connect");
          
        }
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    zoomInit();
  },[])

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
  
   

 
  return (
    <div>
      hello this is zoom test page
    </div>
  )
};

export default TestZoom;
