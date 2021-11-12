import React, { useCallback, useEffect } from 'react';
import Editor from './NoticeEditor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initalize } from '../../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initalize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
