import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(title, description) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            done: false,
          },
        };
      },
    },
    updateTask(state, action) {
      const { id, title, description } = action.payload;
      const task = state.items.find((item) => item.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    toggleTask(state, action) {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
