import { supabase } from "../../../config/supabase";
import { getSessionFromLocalStorage } from "../../sessionUtil";

const updateUser = async (email, updates) => {
  const session = getSessionFromLocalStorage();

  const { error } = await supabase
    .from("users")
    .update(updates)
    .eq("email", email);

  if (error) {
    console.error("Error updating user profile:", error);
    return false;
  }

  console.log("User profile updated successfully");
  return true;
};

export default updateUser;

// To use, pass something like this:
// const email = "zokhcat@gmail.com";
// const updates = {
//   username: "zokhcat",
//   profile_desc: "Where have they been?",
// };
// await updateUser(email, updates);
