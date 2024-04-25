const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");
const initialState = {
  loading: false,
  users: [],
  error: "",
};
//Generates pending, fulfilled and rejected anction types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((item) => item.id));
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = action.error.message;
      state.users = [];
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;