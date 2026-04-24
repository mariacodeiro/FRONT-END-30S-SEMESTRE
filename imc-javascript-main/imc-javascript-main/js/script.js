function calcular() {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);




    if (nome.trim().length == 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha os campos: nome, peso e altura corretamente.");
        return false;
    }
    const IMC = calcularIMC(peso, altura);
    const textoSituacao = gerarTextoIMC(IMC);

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(IMC);
    console.log(textoSituacao);


    const objIMC = {
        nome: nome,
        peso: peso,
        altura: altura,
        IMC: IMC,
        textoSituacao: textoSituacao
    };

    const retorno = cadastrarNaAPI(objIMC);

    if (retorno) {

        const tabela = document.getElementById("cadastro");
        const linha =
            `<tr>
                    <td>${nome}</td>
                    <td>${altura.toFixed(2)}</td>
                    <td>${peso}</td>
                    <td>${IMC.toFixed(1)}</td>
                    <td>${textoSituacao}</td>
                </tr>`

                document.getElementById("nome").value = "";
                document.getElementById("altura").value = "";
                document.getElementById("peso").value = "";
              alert(`${nome} foram cadastrado com sucesso`);


        tabela.innerHTML += linha;

    } else {
        alert("Ocorreu um erro ao cadastrar os dados na API. Por favor, tente novamente.");
    }

    return false;
}


async function cadastrarNaAPI(objIMC) {
    try {
        const resposta = await fetch('http://localhost:3000/imc', {
            method: 'POST',
            body: JSON.stringify(objIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }


        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function calcularIMC(peso, altura) {
    const IMC = peso / (altura * altura);
    return IMC;
}

function gerarTextoIMC(IMC) {
    if (IMC < 16) {
        return "Magreza grave"
    } else if (IMC < 17) {
        return "Magreza leve"
    }
    else if (IMC < 18.5) {
        return "Magreza leve"
    }
    else if (IMC < 25) {
        return "Saudável"
    }
    else if (IMC < 30) {
        return "Sobrepeso"
    }
    else if (IMC < 35) {
        return "Obesidade Grau I"
    }
    else if (IMC < 40) {
        return "Obesidade Grau II (considerada severa)"
    }
    else {
        return "Obesidade Grau III (considerada mórbida)"
    }




}
async function buscarIMCs() {
    try {
        const retorno = await fetch('http://localhost:3000/imc');
        const dadoRetornados = await retorno.json();
        console.log(dadoRetornados);

        const tabela = document.getElementById("cadastro");
    for(let i = 0; i < dadoRetornados.length; i++) {
         tabela.innerHTML += linha; `<tr>
                    <td>${dadoRetornados.nome}</td>
                    <td>${dadoRetornados.altura.toFixed(2)}</td>
                    <td>${dadoRetornados.peso}</td>
                    <td>${dadoRetornados.IMC.toFixed(1)}</td>
                    <td>${dadoRetornados.textoSituacao}</td>
                </tr>`



       
    }

    tabela.innerHTML = template;

    } catch (error) {

        console.log(error);
    }
    
}
buscarIMCs();