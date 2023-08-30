class Promedio {
    constructor(materia, nota1, nota2, nota3) {
        this.materia = materia
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    descripcionmateria(){
        let promedionotas = (this.nota1+this.nota2+this.nota3) /3
        return `En la Materia ${this.materia} tiene las siguientes notas:\n Primer nota: ${this.nota1}\n Segunda nota: ${this.nota2}\n Tercer nota: ${this.nota3}\n Con el promedio de: ${promedionotas}`
    }
}

class Listadematerias {
    constructor() {
        this.listadematerias = []
    }

    agregarmaterias(materia) {
        this.listadematerias.push(materia)
    }

    mostrarmaterias() {
        let listadepromedios = ""
        this.listadematerias.forEach(materia => {
            listadepromedios = listadepromedios + materia.descripcionmateria()+"\n"
        })
        alert ( listadepromedios)
    }
}
const listadematerias = new Listadematerias()
alert("Bienvenido a la calculadora de Promedios")

do {
    let materia = prompt("Dinos cual es la materia que quieres sacar el promedio")
    let nota1 = Number(prompt("ingrese su primer nota"))
    let nota2 = Number(prompt("ingrese su segunda nota"))
    let nota3 = Number(prompt("ingrese su tercer nota"))
    const materias = new Promedio (materia, nota1, nota2, nota3)
    listadematerias.agregarmaterias(materias)

    continuar = confirm("¿Quiere sacar promedios de alguna otra materia?")
} while (continuar);

listadematerias.mostrarmaterias()