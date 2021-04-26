let L = parseFloat(prompt("¿Cuántos Litros de Leche Produciste hoy?"))

let PG = parseFloat(prompt("¿Cuál es el Precio por Galón de Leche Hoy?"))

//Los Galones Calculados según los Litros de leche producidos
let LG = L / 3.785

let TG = parseInt(LG).toFixed()

//Ganancia de los Galones que se venderán
let GA = TG * PG

//La leche que sobro de llenar los galones 

let LR = (L - (TG * 3.785)).toFixed(3)

console.log(`El día de hoy has generado ${L} litros de leche, por ello \n
            Tienes ${TG} galones de leche \n
            El Precio por Galón es: ${PG} soles\n
            Tú ganancia el día de hoy es: ${GA} soles \n
            La leche restando hoy es: ${LR} litros
            `)


