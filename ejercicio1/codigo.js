//creamos la funcion constructora de los jugadores y definimos sus atributos
function Jugador (nombre,apellidos,nivel,puntuacion) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nivel = nivel;
    this.puntuacion = puntuacion;
    /**
     * creamos una funcion que indique que el jugador ha matado a un zombie 
     * y sume 1 a la puntuacion, si la puntuacion es 10 se suma 1 nivel
    */
    this.mataZombie = function () {
        
        if (this.puntuacion == 10){
            this.nivel =+ 1;
            this.puntuacion = 0;
        }else{
            this.puntuacion =+ 1;
        }
        console.log("Jugador "+ this.name + " ha matado un zombie!" + " su puntuacion es "+puntuacion+" y su nivel es " + nivel);
    }
    /**
     * Esta funcion es la misma que la anterior pero restando los puntos y niveles
     * si el jugador es atacado por un zombie
     */
    this.esAtacado = function () {
        
        if (this.puntuacion == 0){
            this.nivel =- 1;
            this.puntuacion = 10;
        }else{
            this.puntuacion =- 1;
        }
        console.log("Jugador "+ this.name + " esta siendo atacado!" + " su puntuacion es "+puntuacion+" y su nivel es " + nivel);
    }
    /**
     * Esta funcion indica que cuando el jugador llega a 0 es eliminado 
     * y se resetean sus puntuaciones
     */
    this.eliminado = function () {
        console.log("Jugador "+ this.name +" eliminado!" + " su puntuacion es "+puntuacion+" y su nivel es " + nivel);
        if (this.puntuacion == 0 && this.nivel == 0){
            this.puntuacion = 1;
            this.nivel = 1;
        }
        alert("Jugador "+ this.name + " ha sido eliminado!")
    }
}

let jugador1 = new Jugador("John", "Smith", 1, 1);
let jugador2 = new Jugador("Martin", "Raymund", 1, 1);
let jugador3 = new Jugador("Jose", "Perez", 1, 1);

jugadores = [jugador1, jugador2, jugador3];

jugador1.mataZombie()

