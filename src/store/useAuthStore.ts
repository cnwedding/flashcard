import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  isInitializing: boolean;
  setUser: (user: User | null) => void;
  setInitializing: (val: boolean) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isInitializing: true,
  setUser: (user) => set({ user, isInitializing: false }),
  setInitializing: (val) => set({ isInitializing: val }),
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));

// Set up listener for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  useAuthStore.getState().setUser(session?.user ?? null);
});

// Initialize the store with the current session
supabase.auth.getSession().then(({ data: { session } }) => {
  useAuthStore.getState().setUser(session?.user ?? null);
});
