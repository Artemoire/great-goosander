import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drive: 'C',
  files: [
    { name: 'file.txt' },
    { name: 'folder' },
  ],
  focused: 'folder'
}

const filePanelSlice = createSlice({
  name: 'filePanelSlice',
  initialState,
  reducers: {
    setFocused(state, action) {
      state.focused = action.payload;
    }
  }
})

// export const selectAllPosts = state => state.posts.posts

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find(post => post.id === postId)

// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export const { setFocused } = filePanelSlice.actions;

export const filePanelReducer = filePanelSlice.reducer;