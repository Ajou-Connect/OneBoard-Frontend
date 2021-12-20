
import React, { useContext, useEffect, useRef, useState } from 'react';
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
import QuizModal from './QuizModal';
import UnderStandModal from './UnderStandModal';

const AttendanceBtn = styled.button`
  width: 100%;
  margin-top:1rem;
  color: red;
  cursor:pointer;
`;

interface VideoProps extends RouteComponentProps {
  lectureId: string;
  lessonId: string;
  sessionId: string;
}

const VideoContainer: React.FunctionComponent<VideoProps> = (props) => {
  const { history, lectureId, lessonId, sessionId } = props;
  const zmClient = useContext(ZoomContext);
  const {
    mediaStream,
    video: { decode: isVideoDecodeReady },
  } = useContext(ZoomMediaContext);
  const videoRef = useRef<HTMLCanvasElement | null>(null);
  const shareRef = useRef<HTMLCanvasElement | null>(null);
  const selfShareRef = useRef<HTMLCanvasElement & HTMLVideoElement | null>(null);
  const shareContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasDimension = useCanvasDimension(mediaStream, videoRef);
  const activeVideo = useActiveVideo(zmClient);
  const user = JSON.parse(localStorage.userInfo);
  const userType: string = user.userType;
  const token = localStorage.getItem("token");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [underStandId, setUnderStandId] = useState<any>();
  const [pfUnderStandId, setPfUnderStandId] = useState<any>();
  const [quizId, setQuizId] = useState<any>();
  const [isUnderstand, setIsUnderstand] = useState<boolean>(false);
  const [isCheckUnderstand, setIsCheckUnderstand] = useState<boolean>(false);
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
  const socket = io.connect("wss://oneboard.connect.o-r.kr:8070");
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



  useEffect(() => {
    socket.emit("init", {
      "userType": userType,
      "room": sessionId
    });

    socket.on("attendance request", (data: any) => {
      if (userType === "S") {
        alert("출석 확인");
        axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/attendance/student`, { params: { "session": `${sessionId}` }, headers: { "X-AUTH-TOKEN": `${token}` } })
          .then((res) => {
            console.log(res);
            const result = res.data.result;
            if (result === "SUCCESS") {
              console.log("hi");
            }
            else {
              console.log("error");
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    )
    // understan
    socket.on("understanding request", (data: any) => {
      setIsUnderstand(true);
      setModalVisible(true);
      setUnderStandId(data.understandId);
      if (userType === "S") {
        return (

          modalVisible && <UnderStandModal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            lessonId={props.lessonId}
            lectureId={props.lectureId}
            sessionId={props.sessionId}
            underStandId={underStandId}
            className="modal-under">이해도 체크</UnderStandModal>
        )
      }
    })
    socket.on("quiz request", (data: any) => {
      console.log(data);
      setModalVisible(true);
      setQuizId(data.quizId);

    })
  }, [])



  const openAttendance = (e: any) => {
    // e.preventDefault(); 
    axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/attendance/professor`, { params: { session: `${sessionId}` } })
      .then((res) => {
        alert("학생들에게 출석요청을 보냈습니다.")
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      })
  }

  const openUnderstand = () => {
    axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/professor`, { params: { session: `${sessionId}` } })
      .then((res) => {
        alert("학생들에게 이해도 평가요청을 보냈습니다.");
        setPfUnderStandId(res.data.data.understandId);
        console.log(underStandId);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const checkUnderstand = () => {
    axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/${pfUnderStandId}/professor`, { headers: { "X-AUTH-TOKEN": `${token}` } })
      .then((res) => {
        const yes = res.data.data.yes;
        const no = res.data.data.no
        console.log(res);
        alert("이해한 사람 수 : " + yes + " " + "이해 못한 사람 수 : " + no);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  // const checkQuiz = () => {
  //   setModalVisible(true);
  //   return (

  //        modalVisible&&<UnderStandModal
  //           visible={modalVisible}
  //           closable={true}
  //           maskClosable={true}
  //           onClose={closeModal}
  //           lessonId={props.lessonId}
  //           lectureId={props.lectureId}
  //           sessionId={props.sessionId}
  //           underStandId={underStandId}
  //           className="modal-under">이해도 체크</UnderStandModal>

  //   )
  // }



  return (
    <div className="viewport">
      {/* {userType === "T" ? (<div>
        <AttendanceBtn onClick={openAttendance}>출석 요청</AttendanceBtn>
        <AttendanceBtn onClick={openUnderstand}>이해도 확인</AttendanceBtn>
        <AttendanceBtn onClick={openModal}>퀴즈 출제</AttendanceBtn>
        <AttendanceBtn onClick={checkUnderstand}>최근 이해도 결과</AttendanceBtn> */}
      {/* <AttendanceBtn onClick={}>최근 퀴즈 결과</AttendanceBtn> */}
      {/* {
          modalVisible && <QuizModal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            lessonId={props.lessonId}
            lectureId={props.lectureId}
            sessionId={props.sessionId}
            quizId={1}
            className="modal-root">퀴즈 출제</QuizModal>
        } */}
      {/* </div>) : (<div>{
       modalVisible && <QuizModal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            lessonId={props.lessonId}
            lectureId={props.lectureId}
            sessionId={props.sessionId}
            quizId={quizId}
            className="modal-root">퀴즈</QuizModal>}</div>)} */}
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
          {isSupportWebCodecs() ? <video
            className={classnames('share-canvas', { hidden: isRecieveSharing })}
            ref={selfShareRef}
          /> : <canvas
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

      <Chat />
    </div>
  );
};

export default VideoContainer;

