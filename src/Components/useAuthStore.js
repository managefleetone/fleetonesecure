import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
  user: null,
  error: null,
  login: async (username, password) => {
    try {
      const response = await axios.post("https://fleetonesecure.onrender.com/login", {
        username,
        password,
      });

      if (response?.data.success) {
        set({
          user: {
            username: response?.data.username,
            password: response?.data.password,
            success: response?.data.success,
          },
          error: null,
        });
        return true;
      } else {
        set({
          user: {
            username: null,
            password: null,
            success: response?.data?.success,
          },
          error: "Invalid",
        });
      }
    } catch (error) {
      set({ user: null, error: "Login failed" });
      return false;
    }
  },
  logout: () => set({ user: null, error: null }),
}));
