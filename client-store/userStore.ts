// sessionSlice.ts
import { IUserTypes } from '@/types/auth.type';
import { StateCreator } from 'zustand';

export interface ISessionSliceType {
  user: IUserTypes | null;
  sessionCookie: string | null;
  setUser: (data: IUserTypes) => void;
  setSessionCookie: (cookie: string) => void;
  clearUser: () => void;
}

export const userSlice: StateCreator<ISessionSliceType> = (set) => ({
  user: null,
  sessionCookie: null,
  setUser: (data) => {
    set({ user: data });
  },
  setSessionCookie: (cookie) => set({ sessionCookie: cookie }),
  clearUser: () => {
    set({ user: null });
  },
});
