import { create } from 'zustand';
import { ISessionSliceType, userSlice } from './userSlice';
import { persist } from 'zustand/middleware';

interface StoreTypes extends ISessionSliceType {}

export const useStore = create<StoreTypes>()(
  persist(
    (...a) => ({
      ...userSlice(...a),
    }),
    { name: 'med-aid-sync' }
  )
);
