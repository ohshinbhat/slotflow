import { supabase } from "../../../config/supabase";
import { getSessionFromLocalStorage } from "../../sessionUtil";

const createService = async (
  service_name,
  service_duration,
  service_description,
  service_price
) => {
  const session = getSessionFromLocalStorage();
  const email = session.user.email;
  const { data } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  const { error } = await supabase.from("services").insert({
    user_id: data.id,
    service_name: service_name,
    service_duration: service_duration,
    service_description: service_description,
    service_price: service_price,
    created_at: new Date(),
  });

  if (error) {
    console.error("Cannot create service");
    return null;
  }

  return true;
};

export default createService;
