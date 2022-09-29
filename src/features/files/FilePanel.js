import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFocused } from './filePanelSlice';

const FileData = ({ file }) => {
  const focused = useSelector(state => state.filePanel.focused);
  const dispatch = useDispatch();
  const onClicked = e => dispatch(setFocused(file.name));
  return (
    <p
      onClick={onClicked}
    >
      {file.name}{focused === file.name ? '<' : ''}
    </p>
  );
}

export const FilePanel = () => {

  const panelRef = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const files = useSelector(state => state.filePanel.files)

  let content = files.map(file => (<FileData key={file.name} file={file} />))
  let keyDown = e => {
    console.log(e);
  }

  return (
    <div className="file-panel" onKeyDown={keyDown} tabIndex="0" ref={panelRef}>
      <h2>Files</h2>
      {content}
    </div>
  )
}