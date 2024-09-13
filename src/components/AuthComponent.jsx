import { useState } from "react";
import { supabase } from "../config/supabase";
import { useEffect } from "react";

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("error signing with google");
  } else if (data.session) {
    localStorage.setItem('supabaseSession', JSON.stringify(data.session));
  }

};

const AuthComponent = () => {
  const [session, setSession] = useState(() => {
    const storedSession = localStorage.getItem('supabaseSession');
    return storedSession ? JSON.parse(storedSession) : null;
  });

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
    <div>
      <button onClick={signInWithGoogle}> Sign In with Google</button>
      {session && <p>Signed in as: {session.user.email}</p>}
    </div>
  );
};

export default AuthComponent;
