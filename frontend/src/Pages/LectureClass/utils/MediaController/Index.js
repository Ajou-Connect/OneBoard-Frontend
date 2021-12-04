import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Micoff from '../../../../img/micoff.png';
import Micon from '../../../../img/micon.png';
import Videooff from '../../../../img/videooff.png';
import Videoon from '../../../../img/videoon.png';
import Screenoff from '../../../../img/screenoff.png';
import Screenon from '../../../../img/screenon.png';
import ZoomVideo from '@zoom/videosdk';
const MediaController = styled.div`
  width: 100%;
  background-color: black;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  transition: all 0.1s linear;
  transform: translateY(100px);
`;

const AudioController = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AudioCnt = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${Micoff});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const VideoController = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoCnt = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${Videooff});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ScreenController = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScreenCnt = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${Screenon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const LeaveBtn = styled.button`
  position: absolute;
  right: 0;
  margin-right: 30px;
  color: red;
`;

const Index = (props) => {
  // const socket = props.socket;
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isShareOn, setIsShareOn] = useState(false);
  const [cnt, setCnt] = useState(0);
  const {
    mediaStream,
    video: { decode: isVideoDecodeReady },
  } = props.mediaState;

  //useEffect

  useEffect(() => {
    if (isAudioOn) {
      startAudio();
    } else muteAudio();
  }, [isAudioOn]);

  const startAudio = async () => {
    try {
      await props.client
        .getMediaStream()
        .unmuteAudio()
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const muteAudio = async () => {
    try {
      await props.client
        .getMediaStream()
        .muteAudio()
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const client1 = props.client;
        const stream = client1.getMediaStream();
        const canvas1 = document.getElementById('canvas0');
        const parent1 = canvas1.parentElement;
        stream.updateVideoCanvasDimension(canvas1, parent1.offsetWidth, parent1.offsetHeight);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  }, [cnt]);

  async function startVideoBtn() {
    console.log(props.client);
    const client = props.client;
    const stream = client.getMediaStream();
    const canvas = document.getElementById('canvas0');
    try {
      if (!stream.isCapturingVideo()) {
        setCnt(cnt + 1);
        await stream.startVideo();
        await stream
          .renderVideo(
            canvas,
            client.getCurrentUserInfo().userId,
            canvas.width,
            canvas.height,
            0,
            0,
            3,
          )
          .then((response) => {
            console.log('renderVideo');
            console.log(stream.isCapturingVideo());
          });
        setCnt(cnt + 1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function stopVideo() {
    const client = props.client;
    const stream = client.getMediaStream();
    const canvas = document.getElementById('canvas0');
    try {
      if (stream.isCapturingVideo()) {
        await stream.stopVideo().then((response) => {
          stream
            .stopRenderVideo(canvas, client.getCurrentUserInfo().userId, '', '#222222')
            .then((response) => {
              console.log('stoprenderingvideo');
            });
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function shareScreen() {
    const client = props.client;
    const stream = client.getMediaStream();
    try {
      const canvas = document.getElementById('canvas1');
      await stream.startShareScreen(canvas);
      console.log(canvas.getContext('2d'));
    } catch (error) {
      console.log(error);
    }
  }
  /* position: absolute; left: 0px; top: 0px; display: block; justify-content: center; align-items: center; */
  async function stopShare() {
    const client = props.client;
    const stream = client.getMediaStream();
    try {
      await stream.stopShareScreen();
      let canvas1 = document.getElementById('canvas1');
      const canvas0 = document.getElementById('canvas0');
      canvas1.parentNode.removeChild(canvas1);
      canvas1 = document.createElement('canvas');
      canvas1.id = 'canvas1';
      canvas1.style.position = 'absolute';
      canvas1.style.left = '0px';
      canvas1.style.top = '0px';
      canvas1.style.display = 'block';
      canvas1.width = canvas0.parentElement.offsetWidth;
      canvas1.height = canvas0.parentElement.offsetHeight;
      canvas0.after(canvas1);
    } catch (error) {
      console.log(error);
    }
  }

  const audioToggleHandler = () => {
    if (isAudioOn) {
      setIsAudioOn(false);
    } else {
      setIsAudioOn(true);
    }
  };

  const videoToggleHandler = () => {
    if (isVideoOn) {
      setIsVideoOn(false);
      stopVideo();
    } else {
      setIsVideoOn(true);
      startVideoBtn();
    }
  };

  const screenToggleHandler = () => {
    if (isShareOn) {
      setIsShareOn(false);
      stopShare();
    } else {
      setIsShareOn(true);
      shareScreen();
    }
  };

  useEffect(() => {
    const audiocnt = document.getElementById('audioCnt');
    const audiotext = document.getElementById('audioText');
    //console.log(audiotext.innerText);
    if (isAudioOn) {
      audiocnt.style.backgroundImage = `url(${Micon})`;
      audiotext.innerText = 'Mute';
    } else {
      audiocnt.style.backgroundImage = `url(${Micoff})`;
      audiotext.innerText = 'unMute';
    }
  }, [isAudioOn]);

  useEffect(() => {
    const videocnt = document.getElementById('videoCnt');
    const videotext = document.getElementById('videoText');
    if (isVideoOn) {
      videocnt.style.backgroundImage = `url(${Videoon})`;
      videotext.innerText = 'Stop Video';
    } else {
      videocnt.style.backgroundImage = `url(${Videooff})`;
      videotext.innerText = 'Start Video';
    }
  }, [isVideoOn]);

  const getOut = () => {
    // socket.disconnect({
    //   test: 'test',
    // });
    window.location.href = '/main';
  };

  useEffect(() => {
    const screenCnt = document.getElementById('screenCnt');
    const screenText = document.getElementById('screenText');
    if (isShareOn) {
      screenCnt.style.backgroundImage = `url(${Screenoff})`;
      screenText.innerText = 'Stop share';
    } else {
      screenCnt.style.backgroundImage = `url(${Screenon})`;
      screenText.innerText = 'Share';
    }
  }, [isShareOn]);

  return (
    <MediaController id="mediaController">
      <AudioController onClick={audioToggleHandler}>
        <AudioCnt id="audioCnt"></AudioCnt>
        <span id="audioText" style={{ color: '#A8A8A8' }}>
          Mute
        </span>
      </AudioController>
      <VideoController onClick={videoToggleHandler}>
        <VideoCnt id="videoCnt" />
        <span id="videoText" style={{ color: '#A8A8A8' }}>
          Stop Video
        </span>
      </VideoController>
      <ScreenController onClick={screenToggleHandler}>
        <ScreenCnt id="screenCnt" />
        <span id="screenText" style={{ color: '#A8A8A8' }}>
          Share
        </span>
      </ScreenController>
      <LeaveBtn onClick={getOut}>나가기</LeaveBtn>
    </MediaController>
  );
};

export default Index;
