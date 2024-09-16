import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { supabase } from "../config/supabase";

const signInWithGoogle = async (navigate) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("Error signing in with Google:", error.message);
  } else if (data.session) {
    localStorage.setItem('supabaseSession', JSON.stringify(data.session));
    navigate('/create-profile'); // Navigate to the create profile page after signing in
  }
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
  } else {
    localStorage.removeItem('supabaseSession');
    console.log("Logged out successfully");
  }
};

const AuthComponent = () => {
  const [session, setSession] = useState(() => {
    const storedSession = localStorage.getItem('supabaseSession');
    return storedSession ? JSON.parse(storedSession) : null;
  });
  
  const navigate = useNavigate(); // Initialize useNavigate for page redirection

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        localStorage.setItem('supabaseSession', JSON.stringify(session));
        setSession(session);
      } else {
        localStorage.removeItem('supabaseSession');
        setSession(null);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        console.log("Session stored:", session);
      } else {
        console.log("Session cleared");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {!session ? (
          <button 
            onClick={(e) => { signInWithGoogle(navigate) }} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In with Google
          </button>
        ) : (
          <>
            <p className="text-gray-700 text-lg mb-4">Signed in as: {session.user.email}</p>
            <button 
              onClick={(e) => { signOut() }} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
