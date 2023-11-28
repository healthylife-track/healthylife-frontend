// sessionSlice.ts
import { IUserTypes } from '@/types/auth.type';
import { StateCreator } from 'zustand';

export interface ISessionSliceType {
  user: IUserTypes | null;
  setUser: (data: IUserTypes) => void;
  clearUser: () => void;
}

export const userSlice: StateCreator<ISessionSliceType> = (set) => ({
  user: null,
  setUser: (data) => {
    set({ user: data });
  },
  clearUser: () => {
    set({ user: null });
  },
});
