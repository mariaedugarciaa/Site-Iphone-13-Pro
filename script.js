// Seleciona todos os elementos <li> dentro do elemento com ID "image-picker"
const buttons = document.querySelectorAll("#image-picker li");

// Seleciona o elemento de imagem com ID "product-image"
const image = document.querySelector("#product-image");

// Itera por cada botão (elemento <li>) adicionado ao evento de clique
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Exibe o evento de clique no console para depuração
    console.log(e);

    // Remove a classe 'selected' de todos os botões
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    // Identifica o elemento que foi clicado
    const button = e.target;

    // Obtém o valor do atributo "id" do elemento clicado
    const id = button.getAttribute("id");

    // Adiciona a classe 'selected' ao botão clicado para marcar a seleção
    button.querySelector(".color").classList.add("selected");

    // Adiciona a classe 'changing' à imagem para ativar uma possível animação de transição
    image.classList.toggle("changing");

    // Altera o atributo 'src' da imagem para exibir a imagem correspondente ao ID do botão
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    // Remove a classe 'changing' da imagem após 200ms para encerrar a animação de transição
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});