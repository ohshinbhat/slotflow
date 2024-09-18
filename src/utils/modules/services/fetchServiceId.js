const fetchServiceId = async (serviceName) => {
  const { data, error } = await supabase
    .from("services")
    .select("id")
    .eq("service_name", serviceName)
    .single();

  if (error || !data) {
    console.error("Error fetching service_id:", error);
    return null;
  }

  return data.id;
};

export default fetchServiceId;
