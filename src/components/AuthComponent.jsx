import { useState } from "react";
import { supabase } from "../config/supabase";
import { useEffect } from "react";

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("error signing with google");
  }
};

const AuthComponent = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check for an existing session when the component mounts
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        console.log("Existing session found:", session);
      } else {
        console.log("No existing session found");
      }
    });

    // Set up a listener for auth state changes
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

    // Clean up the subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <button onClick={signInWithGoogle}> Sign In with Google</button>
      {session && <p>Signed in as: {session.user.email}</p>}
    </div>
  );
};

export default AuthComponent;
