import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { RouteComponentProps } from 'react-router-dom';
import ZoomContext from '../../context/zoom-context';
import ZoomMediaContext from '../../context/media-context';
import Avatar from './components/avatar';
import VideoFooter from "./components/video-footer";
import Pagination from './components/pagination';
import { useCanvasDimension } from './hooks/useCanvasDimension';
import { useGalleryLayout } from './hooks/useGalleryLayout';
import { usePagination } from './hooks/usePagination';
import { useActiveVideo } from './hooks/useAvtiveVideo';
import { useShare } from './hooks/useShare';
import './video.scss';
import { isSupportWebCodecs } from '../../utils/platform';
import Chat from "../chat/chat";
import axios from "axios";
import { Button } from "antd";
import styled from 'styled-components';
import io from "socket.io-client";

const AttendanceBtn = styled.button`
  color: red;
`;

interface VideoProps extends RouteComponentProps {
  lectureId: string;
  lessonId: string; 
  sessionId: string;
}

const VideoContainer: React.FunctionComponent<VideoProps> = (props) => {
  const { history, lectureId, lessonId ,sessionId} = props;
  const zmClient = useContext(ZoomContext);
  const {
    mediaStream,
    video: { decode: isVideoDecodeReady },
  } = useContext(ZoomMediaContext);
  const videoRef = useRef<HTMLCanvasElement | null>(null);
  const shareRef = useRef<HTMLCanvasElement  | null>(null);
  const selfShareRef = useRef<HTMLCanvasElement & HTMLVideoElement| null>(null);
  const shareContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasDimension = useCanvasDimension(mediaStream, videoRef);
  const activeVideo = useActiveVideo(zmClient);
  const user = JSON.parse(localStorage.userInfo);
  const userType : string = user.userType;
  const { page, pageSize, totalPage, totalSize, setPage } = usePagination(
    zmClient,
    canvasDimension,
  );
  const { visibleParticipants, layout: videoLayout } = useGalleryLayout(
    zmClient,
    mediaStream,
    isVideoDecodeReady,
    videoRef,
    canvasDimension,
    {
      page,
      pageSize,
      totalPage,
      totalSize,
    },
  );
  const { isRecieveSharing, isStartedShare, sharedContentDimension } = useShare(
    zmClient,
    mediaStream,
    shareRef,
  );
  const isSharing = isRecieveSharing || isStartedShare;
  const contentDimension = sharedContentDimension;
  const socket = io.connect("https://oneboard.connect.o-r.kr:8070");
  if (isSharing && shareContainerRef.current) {
    const { width, height } = sharedContentDimension;
    const {
      width: containerWidth,
      height: containerHeight,
    } = shareContainerRef.current.getBoundingClientRect();
    const ratio = Math.min(containerWidth / width, containerHeight / height, 1);
    contentDimension.width = Math.floor(width * ratio);
    contentDimension.height = Math.floor(height * ratio);
  }

    socket.emit("init", {
      "userType": userType,
      "room" : sessionId
    })
  
  socket.on("attendance request" , )
  
  const checkAttendance = (e: any) => {
    // e.preventDefault(); 
    axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/attendance/professor`,{params: { session: `${sessionId}` }})
      .then((res) => {
      console.log(res);
      })
      .catch(e => {
      console.log(e);
    })
  }

  const checkUnderstand = () => {
    axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/professor`,{params : {session : `${sessionId}`}})
      .then((res) => {
        console.log(res);
        const result = res.data.data;
      
      })
      .catch((error) => {
      console.log(error);
    })
  }
    
    

  return (
    <div className="viewport">
      <div
        className={classnames('share-container', {
          'in-sharing': isSharing,
        })}
        ref={shareContainerRef}
      >
        <div
          className="share-container-viewport"
          style={{
            width: `${contentDimension.width}px`,
            height: `${contentDimension.height}px`,
          }}
        >
          <canvas
            className={classnames('share-canvas', { hidden: isStartedShare })}
            ref={shareRef}
          />
          {isSupportWebCodecs()?<video
            className={classnames('share-canvas', { hidden: isRecieveSharing })}
            ref={selfShareRef}
          />:<canvas
            className={classnames('share-canvas', { hidden: isRecieveSharing })}
            ref={selfShareRef}
          />}
        </div>
      </div>
      <div
        className={classnames('video-container', {
          'in-sharing': isSharing,
        })}
      >
        <canvas
          className="video-canvas"
          id="video-canvas"
          width="800"
          height="600"
          ref={videoRef}
        />
        <ul className="avatar-list">
          {visibleParticipants.map((user, index) => {
            if (index > videoLayout.length - 1) {
              return null;
            }
            const dimension = videoLayout[index];
            const { width, height, x, y } = dimension;
            const { height: canvasHeight } = canvasDimension;
            return (
              <Avatar
                participant={user}
                key={user.userId}
                isActive={activeVideo === user.userId}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${canvasHeight - y - height}px`,
                  left: `${x}px`,
                }}
              />
            );
          })}
        </ul>
      </div>
      <VideoFooter className="video-operations" sharing shareRef={selfShareRef} lectureId={props.lectureId} lessonId={props.lessonId} sessionId={props.sessionId} />
      {totalPage > 1 && (
        <Pagination
          page={page}
          totalPage={totalPage}
          setPage={setPage}
          inSharing={isSharing}
        />
      )}
      {userType === "T" ? (<div>
        <AttendanceBtn onClick={checkUnderstand}>이해도 확인 요청</AttendanceBtn>
        <AttendanceBtn onClick={checkAttendance}>출석요청</AttendanceBtn></div>) : (<div></div>)}
      <Chat/>
    </div>
  );
};

export default VideoContainer;
