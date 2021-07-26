var p = document.getElementById("pteste");
var pecas = {};
var troca = false;

var cont = 0;
console.log(pecas);

function muda_cor() {
    p.style.getPropertyValue("color") == "red" ?
        (p.style.color = "green") :
        (p.style.color = "red");
}

function gerar_tabela() {
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i <= 7; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j <= 7; j++) {
            //casas
            var cell = document.createElement("td");
            cell.style.height = "20px";
            cell.style.width = "20px";

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
            //peças
            var btn = document.createElement("BUTTON");
            btn.style.height = "20px";
            btn.style.width = "20px";
            btn.style.borderRadius = "15px";
            //esconder peças que não devem aparecer

            if (i >= 0 && i <= 2) {
                if (troca) {
                    if (j % 2 == 0) {
                        btn.setAttribute("hidden", "true");
                    }
                } else {
                    if (j % 2 == 1) {
                        btn.setAttribute("hidden", "true");
                    }
                }
            }
            if (i >= 3 && i <= 4) {
                btn.setAttribute("hidden", "true");
            }

            //definir cor
            if (i >= 5 && i <= 7) {
                if (troca) {
                    if (j % 2 == 1) {
                        btn.style.backgroundColor = "black";
                    } else {
                        btn.setAttribute("hidden", "true");
                    }
                } else {
                    if (j % 2 == 0) {
                        btn.style.backgroundColor = "black";
                    } else {
                        btn.setAttribute("hidden", "true");
                    }
                }
            }

            pecas[cont] = {
                button: btn,
                cor: btn.getAttribute.color,
                visivel: btn.getAttribute.hidden,
            };

            cont += 1; //contador de casas
            cell.appendChild(btn);
            row.appendChild(cell);
        }
        troca = !troca;
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

function acao(element) {
    for (let i = 0; i <= 7; i++) {
        if (pecas[i].button == element) {

        }
    }
}
