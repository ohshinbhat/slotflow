import { supabase } from "../../../config/supabase";
import { getSessionFromLocalStorage } from "../../sessionUtil";

const getServices = async () => {
  const session = getSessionFromLocalStorage();
  const email = session.user.email;

  const { user_data } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  const { data, error } = await supabase
    .from("services")
    .select(
      "service_name, service_duration, service_description, service_price"
    )
    .eq("id", user_data.id);

  if (error) {
    console.error("Error fetching services");
    return null;
  }

  return data;
};

export default getServices;
