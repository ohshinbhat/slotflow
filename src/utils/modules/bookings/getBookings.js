import { supabase } from "../../../config/supabase";
import { getSessionFromLocalStorage } from "../../sessionUtil";

const getBookings = async (service_name) => {
  const session = getSessionFromLocalStorage();
  const email = session.user.email;
  const { user_data } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();
  const user_id = user_data.id;

  const service_id = await fetchServiceId(service_name);

  const { data, error } = await supabase
    .from("bookings")
    .select(
      "service_name, service_duration, service_description, serivce_price, booking_date"
    )
    .eq("service_id", service_id);

  if (error) {
    console.error("Error getting all bookings of the specified service");
    return null;
  }

  return data;
};

export default getBookings;
