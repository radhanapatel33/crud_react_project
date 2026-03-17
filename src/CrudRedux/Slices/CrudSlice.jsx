import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// All Data Read
export const getReadAllData = createAsyncThunk('readData', async () => {
    let response = await fetch('https://69b99916e69653ffe6a82f94.mockapi.io/api/v1/users');
    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
});

// Insert Data
export const insertData = createAsyncThunk('insertData', async (data) => {
    let response = await fetch('https://69b99916e69653ffe6a82f94.mockapi.io/api/v1/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
});

// Update Data
export const updateUserData = createAsyncThunk('updateData', async (data) => {
    let response = await fetch(`https://69b99916e69653ffe6a82f94.mockapi.io/api/v1/users/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
});


// Delete Data

export const deleteUserData = createAsyncThunk('Data', async (data) => {
    let response = await fetch(`https://69b99916e69653ffe6a82f94.mockapi.io/api/v1/users/${data.id}`, {
        method: 'DELETE'
    });
    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
});


// -------------------------------------------------------------------------------------------


export const CurdSlice = createSlice({
    name: 'CURD',
    initialState: {
        isLoading: false,
        data: [],
        search: [],
        error: null
    },

    // search by Data

    reducers: {
        searchByData: (state, action) => {
            state.search = action.payload
        }
    },

    extraReducers: (builder) => {
        // Read Data
        builder.addCase(getReadAllData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(getReadAllData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload
            }),
            builder.addCase(getReadAllData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

        //Insert data
        builder.addCase(insertData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(insertData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.push(action.payload);
            }),
            builder.addCase(insertData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            });

        //Update data
        builder.addCase(updateUserData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(updateUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                const { id } = action.payload;
                state.data = state.data.map((value) => value.id == id);
            }),
            builder.addCase(updateUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

        //delete data

        builder.addCase(deleteUserData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(deleteUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                const { id } = action.payload;
                state.data = state.data.map((value) => value.id == id);
            }),
            builder.addCase(deleteUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }

});

export default CurdSlice.reducer;
export const { searchByData } = CurdSlice.actions;
