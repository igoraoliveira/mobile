const tarefas = [
    { id: 1739220546861, nome: "Estudar JavaScript", concluida: false }
];

function listarTarefas() {
    return tarefas;
}

function adicionarTarefa(nomeTarefa) {
    if (!nomeTarefa || nomeTarefa.trim() === "") {
        console.error("O nome da tarefa não pode ser vazio.");
        return;
    }

    const novaTarefa = {
        id: Date.now().toString(), // Considerando que você quer um ID único
        nome: nomeTarefa,
        concluida: false
    };

    tarefas.push(novaTarefa);
}

function removerTarefa(idTarefa) {
    const posicao = tarefas.findIndex(task => task.id === idTarefa);
    if (posicao !== -1) {
        tarefas.splice(posicao, 1);
    } else {
        console.error("Tarefa não encontrada.");
    }
}

function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.find(tarefa => tarefa.id === idTarefa);
    if (tarefaLocalizada) {
        // Validando se a tarefaModificada tem um nome válido ou se a propriedade 'concluida' é um booleano
        if (tarefaModificada.nome && tarefaModificada.nome.trim() !== "") {
            tarefaLocalizada.nome = tarefaModificada.nome;
        }

        if (typeof tarefaModificada.concluida === "boolean") {
            tarefaLocalizada.concluida = tarefaModificada.concluida;
        } else if (tarefaModificada.concluida !== undefined) {
            console.error("O valor de 'concluida' deve ser um booleano.");
        }
    } else {
        console.error("Tarefa não encontrada.");
    }
}

export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa };
