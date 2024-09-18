import { supabase } from "../../../config/supabase";
import { getSessionFromLocalStorage } from "../../sessionUtil";
import fetchServiceId from "../services/fetchServiceId";

const createBooking = async (service_name) => {
  const session = getSessionFromLocalStorage();
  const email = session.user.email;
  const { user_data } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();
  const user_id = user_data.id;

  const service_id = await fetchServiceId(service_name);
  const { data } = await supabase
    .from("services")
    .select(
      "id, service_name, service_duration, service_description, service_price"
    )
    .eq("service_id", service_id)
    .single();

  const { error } = await supabase.from("bookings").insert({
    user_id: user_id,
    service_id: service_id,
    service_name: service_name,
    service_duration: data.service_duration,
    service_price: data.service_price,
    booking_date: new Date(),
    created_at: new Date(),
  });

  if (error) {
    console.error("Error creating a booking");
    return null;
  }

  return true;
};

export default createBooking;
