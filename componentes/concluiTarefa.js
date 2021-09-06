const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
};

const concluirTarefa = (evento) => {
    const botaoConcluido = evento.target;

    const tarefaCompleta = botaoConcluido.parentElement;

    tarefaCompleta.classList.toggle('done');
};

