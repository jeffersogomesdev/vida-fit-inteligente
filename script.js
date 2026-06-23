function calcularCalorias(){
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const idade = Number(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const objetivo = document.getElementById("objetivo").value;
    const resultado = document.getElementById("resultado");

    if(!peso || !altura || !idade || !sexo || !objetivo){
        resultado.innerHTML = "⚠️ Preencha todos os campos.";
        return;
    }

    let metabolismo;

    if(sexo === "homem"){
        metabolismo = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
        metabolismo = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    let calorias = metabolismo * 1.4;
    let mensagemObjetivo = "";

    if(objetivo === "emagrecer"){
        calorias -= 400;
        mensagemObjetivo = "Para emagrecer, mantenha um déficit calórico leve e sustentável.";
    } else if(objetivo === "massa"){
        calorias += 300;
        mensagemObjetivo = "Para ganhar massa, aumente as calorias com bons alimentos e treine com constância.";
    } else if(objetivo === "manter"){
        mensagemObjetivo = "Para manter o peso, busque equilíbrio entre alimentação e atividade física.";
    } else if(objetivo === "condicionamento"){
        calorias += 100;
        mensagemObjetivo = "Para melhorar o condicionamento, combine boa alimentação com treinos regulares.";
    }

    resultado.innerHTML = `
        <p>🔥 Meta diária aproximada: <strong>${Math.round(calorias)} kcal</strong></p>
        <p>${mensagemObjetivo}</p>
        <p>🥗 Lembre-se: resultados reais vêm da constância, não de dietas loucas.</p>
    `;
}

function mostrarTreino(tipo){
    const treinoResultado = document.getElementById("treinoResultado");

    if(tipo === "casa"){
        treinoResultado.innerHTML = `
            <div class="card">
                <h3>🏠 Treino Casa A</h3>
                <p>Agachamento livre — 3x12</p>
                <p>Flexão na parede — 3x10</p>
                <p>Abdominal curto — 3x15</p>
                <p>Caminhada — 20 minutos</p>
            </div>

            <div class="card">
                <h3>🏠 Treino Casa B</h3>
                <p>Afundo alternado — 3x10</p>
                <p>Ponte de glúteos — 3x15</p>
                <p>Prancha — 3x20 segundos</p>
                <p>Polichinelo adaptado — 3x20</p>
            </div>

            <div class="card">
                <h3>🏠 Treino Casa C</h3>
                <p>Agachamento sumô — 3x12</p>
                <p>Elevação de joelhos — 3x20</p>
                <p>Mountain climber leve — 3x20</p>
                <p>Alongamento final — 5 minutos</p>
            </div>
        `;
    }

    if(tipo === "ginasio"){
        treinoResultado.innerHTML = `
            <div class="card">
                <h3>🏋️ Treino Ginásio A</h3>
                <p>Passadeira — 15 minutos</p>
                <p>Leg Press — 3x12</p>
                <p>Puxada frontal — 3x12</p>
                <p>Abdominal máquina — 3x15</p>
            </div>

            <div class="card">
                <h3>🏋️ Treino Ginásio B</h3>
                <p>Bicicleta — 15 minutos</p>
                <p>Cadeira extensora — 3x12</p>
                <p>Supino máquina — 3x12</p>
                <p>Prancha — 3x20 segundos</p>
            </div>

            <div class="card">
                <h3>🏋️ Treino Ginásio C</h3>
                <p>Elíptico — 15 minutos</p>
                <p>Mesa flexora — 3x12</p>
                <p>Remada baixa — 3x12</p>
                <p>Desenvolvimento ombro — 3x12</p>
            </div>
        `;
    }
}

const alimentos = {
    arroz: 130,
    frango: 165,
    banana: 89,
    ovo: 70,
    aveia: 389,
    batatadoce: 86
};

function calcularRefeicao(){
    const texto = document.getElementById("refeicao").value.toLowerCase();
    const resultado = document.getElementById("resultadoRefeicao");

    if(!texto.trim()){
        resultado.innerHTML = "⚠️ Digite pelo menos um alimento.";
        return;
    }

    const linhas = texto.split("\n");
    let total = 0;
    let detalhes = "";

    linhas.forEach(linha => {
        const partes = linha.trim().split(" ");
        const quantidade = Number(partes[0]);
        const alimento = partes[1];

        if(alimentos[alimento] && quantidade){
            let calorias;

            if(alimento === "ovo" || alimento === "banana"){
                calorias = alimentos[alimento] * quantidade;
            } else {
                calorias = (alimentos[alimento] * quantidade) / 100;
            }

            total += calorias;
            detalhes += `<p>${quantidade} ${alimento} = ${Math.round(calorias)} kcal</p>`;
        }
    });

    resultado.innerHTML = `
        <h3>Resultado da refeição</h3>
        ${detalhes}
        <p><strong>Total consumido: ${Math.round(total)} kcal</strong></p>
        <p>🥗 Compare esse valor com sua meta diária da calculadora.</p>
    `;
}

function desbloquearPremium(){
    const premium = document.getElementById("premiumConteudo");

    premium.innerHTML = `
        <div class="card">
            <h3>👑 Área Premium</h3>
            <p>🏋️ Treino Intermediário</p>
            <p>🏋️ Treino Avançado</p>
            <p>🥗 Receitas Exclusivas</p>
            <p>📈 Acompanhamento Semanal</p>
            <br>
            <p>Em breve integração com pagamento.</p>
        </div>
    `;
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}