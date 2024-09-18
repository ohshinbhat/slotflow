import { supabase } from "../../../config/supabase";
import fetchServiceId from "./fetchServiceId";

const updateService = async (service_name, updates) => {
  const id = await fetchServiceId(service_name);

  const { error } = await supabase
    .from("users")
    .update(updates)
    .eq("service_name", service_name);

  if (error) {
    console.error("Error updating service:", error);
    return null;
  }

  return true;
};

export default updateService;
