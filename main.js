    let $ = document.querySelector.bind(document);

    const criarTarefa = (evento) => {

        evento.preventDefault();

        const lista = $('[data-list]');
        const input = $('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add("task");
        const conteudo = `<p class="content">${valor}</p>`;
        
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        input.value = '';
    }
    const novaTarefa = $('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);

