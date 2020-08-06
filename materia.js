class materia {

    constructor(nome, cor, dias) {

        this.dias = dias

        this.cor = cor;
        this.nome = nome;
    }
}
 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var nome;
var materias = new Array(4);
var cor = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var seg, ter, qua, qui, sex;
var i = 0;
//adiciona as materias em um array e depois imprime na view
function adicionar() {

    nome = document.getElementById("nome").value;

    seg = document.getElementById("seg").value.split(",");
    ter = document.getElementById("ter").value.split(",");
    qua = document.getElementById("qua").value.split(",");
    qui = document.getElementById("qui").value.split(",");
    sex = document.getElementById("sex").value.split(",");

    materias[i] = new materia(nome, cor[getRandomInt(0,50)], [seg, ter, qua, qui, sex]);
    document.getElementById("box").innerHTML += "<div id='card3' style='background-color: " + materias[i].cor + ";' class='four columns'> " + materias[i].nome + "<br>" + materias[i].dias[0] + "</div>";
    i++;
}

var horarioIguais = 0;
//true quando dois valores são iguais
function checarIgual(array1, array2) {


    for (var i = 0; i < array1.length; i++) {

        for (var j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {

                horarioIguais++;
                return true;
            }
        }
    }
}

function gerar() {

    for (var x = 0; x < materias.length; x++) {

        var text = "";
        var atributes = x.toString();

        for (var y = 0; y < materias.length; y++) {
            if (y > x) {
                for (var z = 0; z < materias.length; z++) {
                    checarIgual(materias[x].dias, materias[y].dias);

                }

                // se não tiver nenhum horario que se repete
                if (horarioIguais == 0) {
                    atributes += "," + y;

                    text += materias[x].nome + " com " + materias[y].nome + "| Aulas: " + materias[x].dias + " ; " + materias[y].dias + "<br>";

                }

                horarioIguais = 0;
            }
        }

        // quando a aula mudar

        // adiciona uma div com a estrutura= começo da tag  + texto do meio + fechamento da tag 

        document.getElementById("teste").innerHTML += "<div id='card3' style='background-color:" + cor[getRandomInt(0,50)] + "' onclick='gerarTabela([" + atributes + "])'>" + text + "</div>";

        total = 0;
        text = " <div id='card3' background-color:'" + cor + "'>";
    }

}

function gerarTabela(x) {
    alert(x.length);

}