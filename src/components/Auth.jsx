import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../config/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared"

function _Auth() {
return(
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />
)
}

export default _Auth;