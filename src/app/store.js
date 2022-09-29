import { configureStore } from '@reduxjs/toolkit'
import { filePanelReducer } from '../features/files/filePanelSlice'

export default configureStore({
  reducer: {
    filePanel: filePanelReducer
  }
})
