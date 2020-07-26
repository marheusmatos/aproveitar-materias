class materia{

    constructor(nome, cor, dias){

        this.dias = dias

        this.cor= cor;
        this.nome= nome;
    }



}


var nome;
var materias= new Array(4);
var cor;

var seg, ter,qua,qui,sex;

var i=0;
function adicionar(){

    nome = document.getElementById("nome").value;

    seg= document.getElementById("seg").value.split(",");
    ter= document.getElementById("ter").value.split(",");
    qua= document.getElementById("qua").value.split(",");
    qui= document.getElementById("qui").value.split(",");
    sex= document.getElementById("sex").value.split(",");

    cor = "rgb(" +  (Math.floor(Math.random() * 204)+50) + "," + (Math.floor(Math.random() * 204)+50) + "," + (Math.floor(Math.random() * 204)+50) + ");";

    materias[i] = new materia(nome, cor, seg, ter, qua, qui, sex);
    document.getElementById("box").innerHTML+= "<div id='card3' style='background-color: " + cor + ";' class='four columns'> " + materias[i].nome +  "<br>" + materias[i].seg + "</div>";
    i++;
}
 
var score=0;
 var peso=0;

//true quando dois valores são iguais
function checarIgual(array1, array2){
    
    for(var i=0; i<array1.length;i++){
        
        for(var j=0;j<array2.length;j++){
            
            if(array1[i]== array2[j]){

                score++;
                return true;
               }else{
                   
                   peso++;
               }
            
        }
        
        
    }
    
}

function gerar(){

var cor = "rgb(" +  (Math.floor(Math.random() * 184)+70) + "," + (Math.floor(Math.random() * 184)+70) + "," + (Math.floor(Math.random() * 184)+70) + ");";
    
   materias[0] = new materia("a", "cor",[[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3]]);
    materias[1] = new materia("b", "cor",[[1,2],[1,2],[1,2],[1,2],[1,2]]);
    materias[2] = new materia("c", "cor",[[3,4],[7,8],[7,8],[7,8],[7,8]]);//3 4
    materias[3] = new materia("d", "cor",[[5,6],[5,6],[5,6],[5,6],[5,6]]);
    materias[4] = new materia("e", "cor",[[3,4],[3,4],[3,4],[3,4],[3,4]]);
  //  var aproveitamento= new Array(6);
for(var x=0; x<materias.length;x++){
    
for(var y=0; y<materias.length;y++){
    
    if(y>x){
        for(var z=0;z<materias.length;z++){
            
            checarIgual(materias[x].dias[z], materias[y].dias[z]);
            
            
        }
       
        if(score==0){
            
     
     
      //  aproveitamento[a]= y;

            
         //   a++;
            document.getElementById("teste").innerHTML+="<div id='click' style='padding:1%;margin-top:1%;background-color: " +cor+ "border-radius:10px'>" + materias[x].nome + " com " + materias[y].nome + " | Total de pontos:" + peso+"| Aulas: " + materias[x].dias + " ; " + materias[y].dias;
    
       
        }
        score=0;
        peso=0;
        
    }
}
  // quando a aula mudar

                  document.getElementById("teste").innerHTML+= "</div>"; 
                total=0;
                cor= "rgb(" +  (Math.floor(Math.random() * 204)+50) + "," + (Math.floor(Math.random() * 204)+50) + "," + (Math.floor(Math.random() * 204)+50) + ");";;
         
      
}

    
}