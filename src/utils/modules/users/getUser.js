import { supabase } from "../../../config/supabase";

const getUser = async (email) => {
  const { data, error } = supabase
    .from("users")
    .select("full_name, username, email, profile_desc, profile_pic, created_at")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return data;
};

export default getUser;
