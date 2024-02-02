import { createSlice } from "@reduxjs/toolkit";

const Archieve = createSlice({
  name: "Archieve",
  initialState: {
    ArchieveProjects: [],
    ArchieveTags:[],
  },
  reducers: {
    addArchieveProjects(state, action) {
      state.ArchieveProjects.push(action.payload);
    },
    deleteArchieveProjectForever(state, action) {
        const ProjectIdToDelete = action.payload;
        state.ArchieveProjects = state.ArchieveProjects.filter(Project => Project.id !== ProjectIdToDelete);
      },
    addArchieveTags(state, action) {
      state.ArchieveTags.push(action.payload);
    },
    deleteArchieveTagsForever(state, action) {
        const TagsIdToDelete = action.payload;
        state.ArchieveTags = state.ArchieveTags.filter(Tags => Tags.id !== TagsIdToDelete);
      },
  },
});

export const { addArchieveProjects, addArchieveTags ,deleteArchieveProjectForever, deleteArchieveTagsForever} = Archieve.actions;
export const ArchieveReducer = Archieve.reducer;
