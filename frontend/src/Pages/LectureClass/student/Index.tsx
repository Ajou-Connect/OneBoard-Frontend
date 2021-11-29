import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import socketio from 'socket.io-client'
import { RenderCanvas, ToggleCanvas, SetCanvasSize } from '../utils/SetCanvas/Index'
import MediaController from '../utils/MediaController/Index'
import Loading from '../utils/Loading/Index'
import { generateVideoToken } from '../utils/Auth/Index';
import ZoomVideo from '@zoom/videosdk';
import Chat from '../utils/Contents/Chat/Index';
import Participant from '../utils/Contents/Participant/Index';
import Question from '../utils/Contents/Question/Index'
import Etc from '../utils/Contents/Etc/Index'
import Comp from '../utils/Contents/Comp/Index'
import Sub from '../utils/Contents/Sub/Index.js'
// import My from '../../../img/myscreen.png';
// import Share from "../../../img/share.png";
import './Index.css'

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
  background-color : blue;
  color : white;
  border : 1px solid blue;
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
background-color : lightgray;
color : lightgray;
&.active{
  background-color : darkgray;
  color : darkgray
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


// const socket = socketio('https://disboard13.kro.kr', {
//   transports: ['polling'],
//   withCredentials: true,
//   path: '/socket'
// });



function Index(props: TestProps) {
  //------states------
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

  //------useeffect------

  const user = JSON.parse(window.sessionStorage.userInfo);

  async function zoomInit() {
    try {
      setisLoading(true);
      const client = ZoomVideo.createClient();
      await client.init("en-US", `${window.location.origin}/lib`);
      const token = generateVideoToken(
         "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
        "harry"
      );
      await client.join("harry", token, user.name)
        .then(() => {
          console.log("Successfully joined a session.");
          setclient(client);
          setisLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      await client.getMediaStream().startAudio();
      client.on("connection-change", (payload) => {
        if (payload.state === "Connected") {
          console.log("connected!");
        } else {
          console.log("connected other");
        }
      });

      client.on('active-share-change', async (payload) => {
        console.log('active-share-change');
        const canvas = document.getElementById("canvas1") as HTMLCanvasElement;;
        const stream = client.getMediaStream();
        console.log(payload);
        if (payload.state === 'Active') {
          stream.startShareView(canvas, payload.userId);
          console.log('sharing active');
        } else if (payload.state === 'Inactive') {
          await stream.stopShareView().then(response => {
            console.log(response);
          });
        }
      })

      client.on('share-content-dimension-change', payload => {
        console.log('share-content-dimension-change');
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

      //resize canvas when window resizess
      window.addEventListener('resize', () => {
        const canvas = document.getElementById("canvas0") as HTMLCanvasElement;;
        const parent = canvas.parentElement as HTMLElement;
        const stream = client.getMediaStream();
        stream.updateVideoCanvasDimension(canvas, parent.offsetWidth, parent.offsetHeight);
        //stream.adjustRenderedVideoPosition(canvas, client.getCurrentUserInfo().userId, canvas.width, canvas.height, 0, 0);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // const joinLecture = () => {
  //   console.log('joinlecture');
  //   axios.get(`/api/lecture/get/inProgress/subject/${subject_id}`)
  //     .then(res => {
  //       console.log(res);
  //       setlecture_id(res.data.lecture._id);
  //       axios.put(`/api/lecture/join/${res.data.lecture._id}`).then((res) => {
  //         console.log(res);
  //         setstudents(res.data.lecture.students);
  //         setlecture_info(res.data.lecture);
  //       })
  //     }).catch(err => console.log(err));
  // }

  // interface ccc {
  //   subjectId: String
  // }

  //수업중인 lecture 받아오기

  //zoom init
  useEffect(() => {
    zoomInit();
    
  }, [])

  useEffect(() => {
    !isLoading && ToggleCanvas(screenNum);
  }, [screenNum, isLoading])

  useEffect(() => {
    !isLoading && SetCanvasSize();
  }, [isLoading])

  //for Active 1 
  useEffect(() => {
    const contents: NodeListOf<Element> = document.querySelectorAll('.Active1Content');
    contents.forEach((content: Element, idx) => {
      content.setAttribute("style", "display : none;")
      if (parseInt(content.id) === Active1Num)
        content.setAttribute("style", "display : block;")
    })
    const buttons = document.querySelectorAll('.Active1Btn');
    buttons.forEach((button: Element, idx) => {
      button.classList.remove('active');
      if (parseInt(button.id) === Active1Num) button.classList.add('active');
    })
  }, [Active1Num])

  //for Active 2
  useEffect(() => {
    const contents = document.querySelectorAll('.Active2Content');
    contents.forEach((content, idx) => {
      content.setAttribute("style", "display : none;")
      if (parseInt(content.id) === Active2Num)
        content.setAttribute("style", "display : block;")
    })
    const buttons = document.querySelectorAll('.Active2Btn');
    buttons.forEach((button, idx) => {
      button.classList.remove('active');
      if (parseInt(button.id) === Active2Num) button.classList.add('active');
    })
  }, [Active2Num])

  //------rendering------
  //render screen button handler
  // const RenderMenuBtns = () => {
  //   const screens = ['내화면', '공유화면'];
  //   const links = [My, Share]
  //   const result = screens.map((value, index) => {
  //     return (
  //       <Fuck>
  //         <ScreenMenu style={{ backgroundImage: `url(${links[index]})` }} onClick={changeScrenBtn} id={index.toString()}></ScreenMenu>
  //         <span style={{ color: 'white' }}>{value}</span>
  //       </Fuck>);
  //   })
  //   return result;
  // }

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

  useEffect(() => {
    const contents = document.querySelectorAll('.content1') as NodeListOf<HTMLElement>;
    contents.forEach((content, index) => {
      content.classList.remove('active');
      if (index == Active1Num - 1) content.classList.add('active');
    })
  }, [Active1Num])

  useEffect(() => {
    const contents = document.querySelectorAll('.content2') as NodeListOf<HTMLElement>;
    contents.forEach((content, index) => {
      content.classList.remove('active');
      if (index == Active2Num - 1) content.classList.add('active');
    })
  }, [Active2Num])

  // useEffect(() => {
  //   console.log(socket, "afasd");
  // }, [])

  // useEffect(() => {
  //   socket.emit('user', {
  //     name: user ? user.name : "default",
  //     code: props.match.params.subject_code,
  //     email: user ? user.email : "default"
  //   });
  //   socket.on('newUser', (data: any) => {
  //     console.log(data);
  //   });
  // }, [])
  if (isLoading) return <Loading type="spin" color='orange'></Loading>

  return (
    <MainCnt>
      <LeftCnt>
        <ZoomScreen id="zoomScreen">
          <ScreenMenuCnt id="screenMenuCnt">
            {/* {RenderMenuBtns()} */}
          </ScreenMenuCnt>
          {RenderCanvas()}
          <MediaController  client={client} />
        </ZoomScreen>
      </LeftCnt>
      <RightCnt>
        <Active1Cnt>
          <Active1ContentCnt>
            <ContentWrapper className="content1 active" id="content1"></ContentWrapper>
            <ContentWrapper className="content1" id="content2"><Chat user={user.name} /></ContentWrapper>
            <ContentWrapper className="content1" id="content3"><Question lecture_id={lecture_id}  /></ContentWrapper>
          </Active1ContentCnt>
          <Active1Menu>
            <ParticipantsBtn className="Active1Btn active" id="1" onClick={Active1BtnHandler}>참가자</ParticipantsBtn>
            <ChatBtn className="Active1Btn" id="2" onClick={Active1BtnHandler}>채팅</ChatBtn>
            <QuestionBtn className="Active1Btn" id="3" onClick={Active1BtnHandler}>질문</QuestionBtn>
          </Active1Menu>
        </Active1Cnt>
        <Active2Cnt>
          <Active2ContentCnt>
            {/* <ContentWrapper className="content2 active" id="content1"><Comp lecture_info={lecture_info} lecture_id={lecture_id} /></ContentWrapper> */}
            <ContentWrapper className="content2" id="content2"><Sub lecture_id={lecture_id}  /></ContentWrapper>
            <ContentWrapper className="content2" id="content3"></ContentWrapper>
          </Active2ContentCnt>
          <Active2Menu>
            <UnderstoodsBtn className="Active2Btn active" id="1" onClick={Active2BtnHandler}>이해도</UnderstoodsBtn>
            <SubtitleBtn className="Active2Btn" id="2" onClick={Active2BtnHandler}>자막</SubtitleBtn>
            <EtcBtn className="Active2Btn" id="3" onClick={Active2BtnHandler}>작업</EtcBtn>
          </Active2Menu>
        </Active2Cnt>
      </RightCnt>
    </MainCnt>
  )
}

export default Index