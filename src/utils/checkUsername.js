import { supabase } from "../config/supabase";

const checkUsername = async (email) => {
  const { data, error } = supabase
    .from("users")
    .select("username")
    .eq("email", email)
    .single();

  if (error) {
    console.error("Error checking username:", error);
    return false;
  }

  return data.username !== "";
};

export default checkUsername;
