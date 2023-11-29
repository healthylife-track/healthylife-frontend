import { create } from 'zustand';
import { ISessionSliceType, userStore } from './userStore';
import { persist } from 'zustand/middleware';

interface StoreTypes extends ISessionSliceType {}

export const useStore = create<StoreTypes>()(
  persist(
    (...a) => ({
      ...userStore(...a),
    }),
    { name: 'med-aid-sync' }
  )
);
