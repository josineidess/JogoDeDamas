var troca = false;
var pecas = []
var cont = 0;
function create_table() {
  
    document.getElementById("inicio").setAttribute("hidden", "true");
    let info = document.getElementById("informacoes");
    info.setAttribute("border","1");
    document.getElementById("jogador").innerHTML = "Jogador"
    document.getElementById("nivel").innerHTML = "Nivel";
    document.getElementById("tempo").innerHTML = "Hora";
    

    const table = document.createElement("table");
    table.setAttribute('class', 'tab');
    const tabelaBody = document.createElement("tbody");
    table.style.padding="25px";
   
    //desenha tabela
    for (var i = 0; i < 8; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "" + j);

            //sistema de cores xadrez
            if (!troca) {
                if (j % 2 == 0) {
                    cell.style.backgroundColor = "rgba(17, 29, 82, 0.87)";
                } else {
                    cell.style.color = "white";
                }
            } else {
                if (j % 2 == 1) {
                    cell.style.backgroundColor = "rgba(17, 29, 82, 0.87)";
                } else {
                    cell.style.color = "white";
                }
            }
  
            cell.style.height = "35px";
            cell.style.width = "35px";

            //peças
            var button = document.createElement("button");
            button.setAttribute("id","b"+ i + "" + j);
            var id = cell.getAttribute("id");
            
            button.style.borderRadius = "25px";
            button.style.width = "35px";
            button.style.height = "35px";
            
            if (i >= 0 && i <= 2) {
                if (troca) {
                    if (j % 2 == 0) {
                        button.setAttribute("hidden", "true");
                    }
                } else {
                    if (j % 2 == 1) {
                        button.setAttribute("hidden", "true");
                    }
                }
            }

            if (i >= 3 && i <= 4) {
                button.setAttribute("hidden", "true");
            }

            if (i >= 5 && i <= 7) {
                if (troca) {
                    if (j % 2 == 1) {
                        button.style.backgroundColor = "black";
                    } else {
                        button.setAttribute("hidden", "true");
                    }
                } else {
                    if (j % 2 == 0) {
                        button.style.backgroundColor = "black";
                    } else {
                        button.setAttribute("hidden", "true");
                    }
                }

            }

            pecas.push({id : {
                "casa": document.getElementById(id),
                "button": document.getElementById("b"+id),
            }});
          
            //document.getElementById(id).addEventListener("onclick", click_b(pecas[id].button))
            table.setAttribute("border", "5");
            cell.appendChild(button);
            row.appendChild(cell);
            

        }
      
        troca = !troca;
        tabelaBody.appendChild(row);
    }

    table.appendChild(tabelaBody);
    document.getElementById("game").appendChild(table);
    
}



function click_b(){
  let variavel = ""
  for(let i = 0, j = 0; i < pecas.length;j++){
    variavel += i + "" + j + " : " + pecas[i].id.button + "\n"
    if(j == 7){
      i++;
      j = 0
    }
  }
  alert(variavel)
}