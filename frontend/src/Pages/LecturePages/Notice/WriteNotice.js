import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import palette from "../../../lib/styles/palette";
import Button from "../../../Component/common/Button";
import { withRouter } from "react-router";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 100%;
`;



const WriteAcitonButtonBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteNotice = ({ history }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const exposeDt = moment().format('YYYY-MM-DD HH:mm:ss');
    
    const getTitle = e => {
        setTitle(e.target.value);
        console.log(title);
    }

    const onSubmit = () => {
    /// 무언가 들어갈거
    console.log('title : ' + title);
    console.log('content : ' + content);
    axios
      .post('/lecture/1/notice', {
        title: title,
        content: content,
        exposeDt: exposeDt,
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/LecturePage1/Notice`);
      })
      .catch((res) => {
        console.log('Error : ' + res);
      });
  };

  const onCancel = () => {
    history.goBack();
  };

   const modules = {
             toolbar: [
          //[{ 'font': [] }],
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          ['clean']
        ],
      }

    
const format = [
     'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',    
    ]
    
    const handleText = (editor) => {
        console.log(editor);
        setContent(editor)
    }
 
return (
    <div>
        <TitleInput onChange={getTitle} placeholder="제목" />
        <ReactQuill
            style={{ height: "650px" }}
            theme="snow"
            modules={modules}
            formats={format}
            value={content}
            onChange={(content, delta, source, editor) => handleText(editor.getHTML())}
            
        />
    
    <WriteAcitonButtonBlock>
        <StyledButton cyan onClick={onSubmit}>
          공지사항 등록
        </StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
        </WriteAcitonButtonBlock>
        </div>
)

}

export default withRouter(WriteNotice);