import { useNavigate } from "react-router-dom";
import { getSessionFromLocalStorage } from "./sessionUtil";
import { supabase } from "../config/supabase";

const checkUserEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("email")
    .eq("email", email);

  if (error) {
    console.error("Error checking for email:", error);
    return false;
  }

  return data.length > 0;
};

const insertUser = async () => {
  const navigate = useNavigate();
  const session = getSessionFromLocalStorage();

  const userExists = await checkUserEmail(session.user.email);

  if (userExists) {
    console.log("User already exists, redirecting to /dashboard");
    navigate("/dashboard");
    return false;
  }

  const { error } = await supabase.from("users").insert({
    full_name: session.user.user_metadata.full_name,
    username: "",
    email: session.user.email,
    profile_desc: "",
    profile_pic: session.user.user_metadata.avatar_url,
    created_at: new Date(),
  });

  navigate("/createProfile");
  return true;
};

export default insertUser;
