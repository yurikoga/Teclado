document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona os elementos principais
    const displaySpan = document.getElementById('displayText');
    const keys = document.querySelectorAll('.key');

    // 2. Variável para armazenar o texto digitado (inicia com o valor da imagem)
    let currentText = "codingne";

    // 3. Adiciona ouvintes de evento para cada tecla
    keys.forEach(key => {
        key.addEventListener('click', () => {
            
            // Pega o valor da tecla (do atributo data-key)
            let keyClicked = key.getAttribute('data-key');
            
            // Trata as ações
            if (keyClicked === " ") { // Tecla SPACE
                currentText += " "; // Adiciona um espaço
            } else {
                // Adiciona o caractere (maiúsculo ou minúsculo conforme o HTML)
                // O HTML está maiúsculo, mas o texto da imagem é minúsculo.
                // Vou converter para minúsculo conforme o display da imagem.
                currentText += keyClicked.toLowerCase();
            }

            // Atualiza o display
            updateDisplay();
        });
    });

    // 4. Função para atualizar o texto no display
    function updateDisplay() {
        // Se o texto estiver vazio, mostra nada
        displaySpan.innerText = currentText;
        
        // Rolagem automática para o final, para sempre ver o último caractere
        // (Opcional, mas melhora a experiência)
        const displayContainer = document.querySelector('.display-container');
        displayContainer.scrollTop = displayContainer.scrollHeight;
    }

    // Inicializa o display com o texto inicial
    updateDisplay();
});
