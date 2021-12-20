
import React, {
  useEffect,
  useContext,
  useState,
  useCallback,
  useReducer,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ZoomVideo, { ConnectionState } from "@zoom/videosdk";
import { message, Modal } from "antd";
import "antd/dist/antd.css";
import produce from "immer";
import Home from "../ZoomSample/feature/home/home";
import Video from "../ZoomSample/feature/video/video";
import VideoSingle from '../ZoomSample/feature/video/video-single';
import Preview from "../ZoomSample/feature/preview/preview";
import ZoomContext from "../ZoomSample/context/zoom-context";
import ZoomMediaContext from "../ZoomSample/context/media-context";
import ChatContext from "../ZoomSample/context/chat-context";
import LoadingLayer from "../ZoomSample/component/loading-layer";
import Chat from "../ZoomSample/feature/chat/chat";
import { ChatClient, MediaStream } from "../index-types";
import "./test.css";
import { generateVideoToken } from "../ZoomSample/utils/util";
import io from "socket.io-client";

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

interface TestProps {
  match: {
    params: {
      lectureId: string,
      lessonId: string,
      sessionId: string
    }
  }
}

interface Myobj {
  userType: string,
  sessionId: string
}

function TestZoom(props: TestProps) {
  const [loading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const [isFailover, setIsFailover] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("closed");
  const [mediaState, dispatch] = useReducer(mediaReducer, mediaShape);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = useState<boolean>(true);
  const init = "init";
  const socket = io.connect("https://oneboard.connect.o-r.kr:8070");
  const zmClient = useContext(ZoomContext);
  const user = JSON.parse(localStorage.userInfo);
  const userType: string = user.userType;
  const userName = user.name;
  const sessionId: string = props.match.params.sessionId;
  const lectureId = props.match.params.lectureId;
  const lessonId = props.match.params.lessonId;
  const token = generateVideoToken(
    "MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e",
    "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq",
    sessionId,
    "",
    "",
    ""
  );



  useEffect(() => {
    const init = async () => {
      await zmClient.init("en-US", "Global", 'zoom.us');
      try {
        setLoadingText("Joining the session...");
        await zmClient.join(sessionId, token, userName, "");
        const stream = zmClient.getMediaStream();
        setMediaStream(stream);
        setIsSupportGalleryView(stream.isSupportMultipleVideos());
        const chatClient = zmClient.getChatClient();
        setChatClient(chatClient);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);

      }
    };
    init();
    return () => {
      ZoomVideo.destroyClient();
    };
  }, [zmClient]);
  const onConnectionChange = useCallback(
    (payload) => {
      if (payload.state === ConnectionState.Reconnecting) {
        setIsLoading(true);
        setIsFailover(true);
        setStatus("connecting");
        const { reason } = payload;
        if (reason === "failover") {
          setLoadingText("Session Disconnected,Try to reconnect");
        }
      } else if (payload.state === ConnectionState.Connected) {
        setStatus("connected");
        if (isFailover) {
          setIsLoading(false);
        }
      } else if (payload.state === ConnectionState.Closed) {
        setStatus("closed");
        if (payload.reason === "ended by host") {
          Modal.warning({
            title: "Meeting ended",
            content: "This meeting has been ended by host",
          });
        }
      }
    },
    [isFailover]
  );
  const onMediaSDKChange = useCallback((payload) => {
    const { action, type, result } = payload;
    dispatch({ type: `${type}-${action}`, payload: result === "success" });
  }, []);
  const onLeaveOrJoinSession = useCallback(async () => {
    if (status === "closed") {
      setIsLoading(true);
      await zmClient.join(sessionId, token, userName, "");
      setIsLoading(false);
    } else if (status === "connected") {
      await zmClient.leave();
      message.warn("You have left the session.");
    }
  }, [zmClient, status]);
  useEffect(() => {
    zmClient.on("connection-change", onConnectionChange);
    zmClient.on("media-sdk-change", onMediaSDKChange);
    return () => {
      zmClient.off("connection-change", onConnectionChange);
      zmClient.off("media-sdk-change", onMediaSDKChange);
    };
  }, [zmClient, onConnectionChange, onMediaSDKChange]);
  return (
    <div className="App">
      {loading && <LoadingLayer content={loadingText} />}
      {!loading && (
        <ZoomMediaContext.Provider value={{ ...mediaState, mediaStream }}>
          <ChatContext.Provider value={chatClient}>


            {/* <Router>
              <Switch>
                <Route
                  path={`/class/${lectureId}/${lessonId}/${sessionId}/${userType}`}
                  render={(props) => (
                    <Home
                      {...props}
                      status={status}
                      onLeaveOrJoinSession={onLeaveOrJoinSession}
                    />
                  )}
                  exact
                />
                <Route
                   path={`/class/${lectureId}/${lessonId}/${sessionId}/${userType}`}
                  render={(props) => (
                    <Home
                      {...props}
                      status={status}
                      onLeaveOrJoinSession={onLeaveOrJoinSession}
                    />
                  )}
                  exact
                />
                <Route
                  path="/preview"
                  component={Preview}
                /> */}
            {/* <Route path={`/class/${lectureId}/${lessonId}/${sessionId}/${userType}`} component= {isSupportGalleryView ? Video : VideoSingle} /> */}
            <Route path={`/class/${lectureId}/${lessonId}/${sessionId}/${userType}`} render={(props) => (
              isSupportGalleryView ? (<Video {...props} lectureId={lectureId} lessonId={lessonId} sessionId={sessionId} />) : (<VideoSingle {...props} lectureId={lectureId} lessonId={lessonId} sessionId={sessionId} />)
            )} />


            {/* <Route path="/chat" component={Chat} />
              </Switch>
            </Router> */}
          </ChatContext.Provider>
        </ZoomMediaContext.Provider>
      )}
    </div>
  );
}

export default TestZoom;

