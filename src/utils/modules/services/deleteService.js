import { supabase } from "../../../config/supabase";
import fetchServiceId from "./fetchServiceId";

const deleteService = async (service_name) => {
  const id = await fetchServiceId(service_name);

  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) {
    console.error("Error deleting a service");
    return null;
  }

  return true;
};

export default deleteService;
