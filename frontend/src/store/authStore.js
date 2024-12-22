import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  notes: [],

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // console.log("Logging in...");
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  clearUserData: () =>
    set({ notes: [], accounts: [], isLoading: false, error: null }),

  updateProfile: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put(
        `${API_URL}/auth/update-profile`,
        userData
      );
      set((state) => ({
        user: { ...state.user, ...response.data.user },
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error updating profile",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/auth/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
      useAuthStore.getState().clearUserData();
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/auth/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },
  // Functions for notes

  fetchNotes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/notes`);
      set({ notes: response.data, isLoading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error fetching notes",
        isLoading: false,
      });
    }
  },

  createNote: async (noteData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/notes`, noteData);
      set((state) => ({
        notes: [...state.notes, response.data],
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error creating note",
        isLoading: false,
      });
    }
  },

  updateNote: async (noteId, noteData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put(`${API_URL}/notes/${noteId}`, noteData);
      set((state) => ({
        notes: state.notes.map((note) =>
          note._id === noteId ? response.data : note
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error updating note",
        isLoading: false,
      });
    }
  },

  deleteNote: async (noteId) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/notes/${noteId}`);
      set((state) => ({
        notes: state.notes.filter((note) => note._id !== noteId),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error deleting note",
        isLoading: false,
      });
    }
  },
}));
