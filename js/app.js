function relogio(){
    let horas = document.getElementById('hora');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;

    
}

let interval = setInterval(relogio, 1000);

