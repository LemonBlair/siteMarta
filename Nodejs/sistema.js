var os = require("os"); /*No se pone ruta porque está en el core de node*/
console.log("El sistema operativo es", os.platform()); /*En el caso del ordenador de clase es win32, Windows 32 bits (procesador), aunque la versión de windows es 64bits*/
console.log("La versión del sistema operativo es", os.release()); /*La versión: 6.1.7601*/
console.log("La memoria RAM del sistema en bytes es", os.totalmem()); /*Este ordenador tiene 8GB, aquí lo escribe en bytes*/
console.log("La memoria RAM libre del sistema en bytes es", os.freemem()); /*Memoria RAM libre en el momento*/
