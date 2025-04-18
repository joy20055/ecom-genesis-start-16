
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log("Auth state changed:", event);
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setIsLoading(false);

        // Store session in localStorage for components that still rely on it
        if (newSession?.user) {
          localStorage.setItem(
            "user", 
            JSON.stringify({
              id: newSession.user.id,
              name: newSession.user.user_metadata.name || "User",
              email: newSession.user.email,
              phone: newSession.user.phone || "",
              createdAt: newSession.user.created_at
            })
          );
        } else {
          localStorage.removeItem("user");
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsLoading(false);
      
      // Store session in localStorage for components that still rely on it
      if (currentSession?.user) {
        localStorage.setItem(
          "user", 
          JSON.stringify({
            id: currentSession.user.id,
            name: currentSession.user.user_metadata.name || "User",
            email: currentSession.user.email,
            phone: currentSession.user.phone || "",
            createdAt: currentSession.user.created_at
          })
        );
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
