export const getSessionFromLocalStorage = () => {
  const storedSession = localStorage.getItem("supabaseSession");
  return storedSession ? JSON.parse(storedSession) : null;
};

// Use the utility function
// const session = getSessionFromLocalStorage();
