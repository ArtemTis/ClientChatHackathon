import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchChat = createAsyncThunk(
    'chat/fetchChat',
    async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');

        const data = await response.json();
        
        return data;
    }
)

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        status: null,
        error: null
    },
    reducers: {
        addMessageManager: (state, action) => {
            state.messages.push({
                title: action.payload,
                id: state.messages[state.messages.length - 1].id + 1,
                userId: 1,
                completed: true
            })
        },
        addMessageClient: (state, action) => {
            state.messages.push({
                title: action.payload,
                id: state.messages[state.messages.length - 1].id + 1,
                userId: 1,
                completed: false
            })
        },
    },
    extraReducers: {
        [fetchChat.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchChat.fulfilled]: (state, action) => {
            state.status = 'pending';
            state.messages = action.payload;
        },
        [fetchChat.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = 'error';
        },
    }
})


export const { addMessageManager, addMessageClient } = chatSlice.actions;

export default chatSlice.reducer;