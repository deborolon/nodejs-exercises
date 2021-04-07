/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto
que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula
y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará
al terminar la función. Si se no se recibe un string retornará -1.
*/
const texto = "Esto es un ejercicio de NODE JS para el curso de Educación IT";

function contarVocales(texto) {
    if (typeof texto === "string") {
        const regex = /[^aeiou]+/gi;
        let vocales = texto.split(regex).join("");
        let resultado = vocales.split("");
        let final = resultado.length;
        return final;
    } else {
        return -1;
    }
}

contarVocales(texto);

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules
(para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá
un string con la url del repo.
*/

function urlRepo() {
    let repoGithub = "https://github.com/deborolon/exercises-node.git";
    return repoGithub;
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos
llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará
en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras
encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre
un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto
no es válido, se devolverá -1.
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/

const crearClase = () => {
    return class ES6 {
        constructor(entrada) {
            this.texto = entrada;
            ES6.contadorInstancias = (ES6.contadorInstancias || 0) + 1;
        }

        contadorPalabras() {
            if (typeof this.texto === "string") {
                return this.texto === "" ? 0 : this.texto.split(" ").length;
            } else {
                return -1;
            }
        }

        hayNumeros() {
            if (typeof this.texto === "string") {
                let numeros = this.texto.match(/\d+/);
                return numeros !== null ? true : false;
            } else {
                return -1;
            }
        }
    };
};

module.exports = {
    contarVocales,
    urlRepo,
    crearClase,
};
