import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import socketio from 'socket.io-client'
import { RenderCanvas, ToggleCanvas, SetCanvasSize } from '../utils/SetCanvas/Index'
import MediaController from "../utils/MediaController/Index";

import Loading from '../utils/Loading/Index'
import { generateVideoToken } from '../utils/Auth/Index'
import ZoomVideo from '@zoom/videosdk';
import Chat from '../utils/Contents/Chat/Index';
import Participant from '../utils/Contents/Participant/Index1';
import Question from '../utils/Contents/Question/Index'
import Etc from './util/Etc/Index'
import Comp from './util/Comp/Index';
import Sub from './util/Sub/Index'
// import My from '../../../../images/utils/myscreen.png'
// import Part from '../../../../images/utils/part.png'
// import Share from '../../../../images/utils/share.png'
import './Index.css'
/* import StartAnim from './util/Animation/Index' */

interface aaa {
  subjectId: number
  options: {
    subtitle: boolean
    record: boolean
    attendance: boolean
    limit: number
  }
}

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
background-color : ${props => props.theme.color.light_gray};
color : ${props => props.theme.color.font_light_gray};
&.active{
  background-color : ${props => props.theme.color.dark_gray};
  color : ${props => props.theme.color.font_dark_gray};
}
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

const Fuck = styled.div`
display : flex;
flex-direction : column;
align-items : center;
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

const ContentWrapper2 = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
padding: 0.5rem;
visibility : hidden;
border-radius : 10px;
&.active{
  visibility : visible;
}
`

interface TestProps {
  match: {
    params: {
      subject_id: string
      subject_code: string
    }
  }
}

/* const socket = socketio('http://disboard13.kro.kr:3000', {
  transports : ['polling']
});
console.log(socket); */

// const socket = socketio('https://disboard13.kro.kr', {
//   transports: ['polling'],
//   withCredentials: true,
//   path: '/socket'
// });
// console.log(socket);

const user = sessionStorage.userInfo && JSON.parse(window.sessionStorage.userInfo);
function Index(props: TestProps) {
  //------states------
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [screenNum, setscreenNum] = useState<number>(0);
  const [client, setclient] = useState<any>();
  const [Active1Num, setActive1Num] = useState<number>(1);
  const [Active2Num, setActive2Num] = useState<number>(1);
  const [ref, setref] = useState<any>(React.createRef());
  const [subType, setsubType] = useState<number>(1);
  const [compRef, setcompRef] = useState(React.createRef());
  const [subject_id, setSubject_id] = useState(props.match.params.subject_id);
  const [lecture_id, setlecture_id] = useState<number>(1);

  //------useeffect------


  async function zoomInit() {
    setisLoading(true);
    const client = ZoomVideo.createClient();
    await client.init("en-US", `${window.location.origin}/lib`);
    const token = generateVideoToken(
      "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
      "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
      "harry"
    );
    console.log('joining...');
    await client.join("harry", token, user.email)
      .then(() => {
        console.log("Successfully joined a session.");
        setclient(client);
        setisLoading(false);
        console.log(client.getMediaStream());
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

    //resize canvas when window resizes
    window.addEventListener('resize', () => {
      const canvas = document.getElementById("canvas0") as HTMLCanvasElement;;
      const parent = canvas.parentElement as HTMLElement;
      const stream = client.getMediaStream();
      stream.updateVideoCanvasDimension(canvas, parent.offsetWidth, parent.offsetHeight);
      //stream.adjustRenderedVideoPosition(canvas, client.getCurrentUserInfo().userId, canvas.width, canvas.height, 0, 0);
    });
  }

  //zoom init
  useEffect(() => {
    zoomInit();
  }, [])

  useEffect(() => {
    !isLoading && ToggleCanvas(screenNum);
  }, [screenNum, isLoading])

  useEffect(() => {
    !isLoading && SetCanvasSize();
    console.log(isLoading);
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
  //   const payload: aaa =
  //   {
  //     subjectId: parseInt(props.match.params.subject_id),
  //     options: {
  //       subtitle: true,
  //       record: false,
  //       attendance: true,
  //       limit: 5
  //     }
  //   }
  //   axios.post('/api/lecture/start', payload).then(res => {
  //     setlecture_id(res.data.lecture._id);
  //     console.log(res.data.lecture._id);
  //   })
  //   socket.emit('user', {
  //     name: user ? user.name : "default",
  //     code: props.match.params.subject_code,
  //     email: user ? user.email : "default"
  //   });
  //   socket.on('newUser', (data: any) => {
  //     console.log(data);
  //   });
  //   socket.on('disConnected', (data: any) => {
  //     console.log(data);
  //   })
  //   /*     setTimeout(() => {
  //         StartAnim();
  //       }, 5000); */
  // }, [])

  if (isLoading) return <Loading type="spin" color='orange'></Loading>

  /*   function setOption(num: number) {
      setsubType(num);
    } */

  function setColor(total: number) {
    const ref = document.querySelector('.content2#content1') as HTMLElement;
    if (total > 0) {
      ref.style.backgroundColor = `rgb(38, 255, 0, 0.0${total})`;
    } else if (total < 0) {
      ref.style.backgroundColor = `rgb(255, 39, 0, 0.0${total * -1})`;
    } else {
      ref.style.backgroundColor = 'transparent';
    }
  }

  return (
    <MainCnt>
      <LeftCnt>
        <ZoomScreen id="zoomScreen">
          <ScreenMenuCnt id="screenMenuCnt">
            {/* {RenderMenuBtns()} */}
            메뉴
          </ScreenMenuCnt>
          {RenderCanvas()}
          {/* <MediaController socket={socket} client={client} /> */}
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
            {/* <ContentWrapper2 className="content2 active" id="content1"><Comp setColor={setColor} socket={socket} /></ContentWrapper2>
            <ContentWrapper2 className="content2" id="content2"><Sub socket={socket} type={subType} /></ContentWrapper2>
            <ContentWrapper2 className="content2" id="content3"><Etc socket={socket} /></ContentWrapper2> */}
          </Active2ContentCnt>
          <Active2Menu>
            <UnderstoodsBtn className="Active2Btn active" id="1" onClick={Active2BtnHandler}>이해도</UnderstoodsBtn>
            <SubtitleBtn className="Active2Btn" id="2" onClick={Active2BtnHandler}>자막</SubtitleBtn>
            <EtcBtn className="Active2Btn" id="3" onClick={Active2BtnHandler}>퀴즈</EtcBtn>
          </Active2Menu>
        </Active2Cnt>
      </RightCnt>
      {/* <Popup setOptions={setOption} /> */}
    </MainCnt>
  )
}

export default Index