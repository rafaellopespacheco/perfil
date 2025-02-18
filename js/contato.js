document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let statusMessage = document.getElementById("status");

    try {
      let response = await fetch(
        "https://formsubmit.co/rafael.pachecos2007@gmail.com",
        {
          // Substitua pelo seu e-mail ou backend
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        statusMessage.innerText = "Mensagem enviada com sucesso!";
        statusMessage.style.color = "green";
        this.reset();
      } else {
        statusMessage.innerText = "Erro ao enviar a mensagem.";
        statusMessage.style.color = "red";
      }
    } catch (error) {
      statusMessage.innerText = "Falha na conexão. Tente novamente.";
      statusMessage.style.color = "red";
    }
  });
