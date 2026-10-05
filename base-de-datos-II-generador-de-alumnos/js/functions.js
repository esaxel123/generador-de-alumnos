var contenidoGenerado = "";

const listaApellidosMexicanos = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];
const listaApellidosRusos = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];
const listaNombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];
const listaNombresFranceses = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];
function generar() {
    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    contenidoGenerado = "INSERT INTO alumnos VALUES \n";

    var numeroControlBase = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = document.getElementById('registros').value;
    var segundoNombreFrances = "";

    for (let i = 0; i < cantidadRegistros; i++) {

        let apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        let apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];
        let agregarSegundoNombre = Math.random() < 0.5;

        let apellidoSecundario;
        if (apellidoRuso === "NULL") {
            apellidoSecundario = "NULL";
        } else {
            apellidoSecundario = `UPPER('${apellidoRuso}')`;
        }

        nombreCompleto = "";
        segundoNombreFrances = "";

        if (!agregarSegundoNombre) {
            nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];
        } else {
            nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];
            segundoNombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${segundoNombreFrances}`;
        }

        contenidoGenerado += `(${numeroControlBase + i},UPPER('${apellidoMexicano}'), ${apellidoSecundario}, '${nombreCompleto}','a${numeroControlBase + i}@unison.mx'),\n`;
    }

    contenidoGenerado = contenidoGenerado.slice(0, -2) + ";";
    document.getElementById("salida").innerText = contenidoGenerado;
}

function generarSQLCSV() {

    contenidoGenerado = "matricula, apellido1, apellido2, nombre, correo\n";

    var numeroControlBase = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = document.getElementById('registros').value;
    var segundoNombreFrances = "";

    for (let i = 0; i < cantidadRegistros; i++) {

        let apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        let apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];
        let agregarSegundoNombre = Math.random() < 0.5;

        let apellidoSecundario;
        if (apellidoRuso === "NULL") {
            apellidoSecundario = "NULL";
        } else {
            apellidoSecundario = apellidoRuso;
        }

        nombreCompleto = "";
        segundoNombreFrances = "";

        if (!agregarSegundoNombre) {
            nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];
        } else {
            nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];
            segundoNombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${segundoNombreFrances}`;
        }

        contenidoGenerado += `${numeroControlBase + i},${apellidoMexicano},${apellidoSecundario},${nombreCompleto},a${numeroControlBase + i}@unison.mx\n`;
    }

    document.getElementById("salida").innerText = contenidoGenerado;
}

function generarJSON() {

    contenidoGenerado = "[";
    var numeroControlBase = 224250000;
    var cantidadRegistros = document.getElementById('registros').value;

    for (let i = 0; i < cantidadRegistros; i++) {

        let apellidoMexicano = listaApellidosMexicanos[Math.floor(Math.random() * listaApellidosMexicanos.length)];
        let apellidoRuso = listaApellidosRusos[Math.floor(Math.random() * listaApellidosRusos.length)];
        let agregarSegundoNombre = Math.random() < 0.5;

        let apellidoSecundario = (apellidoRuso === "NULL") ? "null" : `"${apellidoRuso}"`;

        let nombreCompleto = listaNombresMexicanos[Math.floor(Math.random() * listaNombresMexicanos.length)];

        if (agregarSegundoNombre) {
            let segundoNombreFrances = listaNombresFranceses[Math.floor(Math.random() * listaNombresFranceses.length)];
            nombreCompleto += ` ${segundoNombreFrances}`;
        }

        contenidoGenerado += `
    {
        "matricula": ${numeroControlBase + i},
        "apellido1": "${apellidoMexicano}",
        "apellido2": ${apellidoSecundario},
        "nombre": "${nombreCompleto}",
        "correo": "a${numeroControlBase + i}@unison.mx"
    }`;

        if (i < cantidadRegistros - 1) {
            contenidoGenerado += ",";
        }
    }

    contenidoGenerado += "\n]";
    document.getElementById("salida").innerText = contenidoGenerado;
}

function guardarArchivo() {

    var enlaceDescarga = document.createElement("a");

    enlaceDescarga.setAttribute(
        "href",
        "data:text/plain;charset=UTF-8," + encodeURIComponent(contenidoGenerado)
    );

    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo SQL");
            break;
        case "2":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo Postgres");
            break;
        case "3":
            enlaceDescarga.setAttribute("download", "sistema_escolar.csv");
            alert("Generando archivo CSV");
            break;
        case "4":
            enlaceDescarga.setAttribute("download", "sistema_escolar.json");
            alert("Generando archivo JSON");
            break;
    }

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}