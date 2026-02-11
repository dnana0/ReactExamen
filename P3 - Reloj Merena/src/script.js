let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let horaFinal;
let minutosFinal;
let segundosFinal;
let horaActual = Temporal.Now.plainTimeISO();
const horaAlarma = Temporal.PlainTime.from("14:30:00");
console.log(horaActual.hour);
let diferencia = horaActual.until(horaAlarma);
console.log(diferencia);

horas.textContent = horaAlarma.hour - horaActual.hour;

let duracion = Temporal.Duration.from({
  hours: 0,
  minutes: 30,
  seconds: 0,
});

function actualizarReloj() {
  setTimeout(() => {
    horaActual = Temporal.Now.plainTimeISO();
    if (horaActual.hour > 16) {
      duracion = Temporal.Duration.from({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      duracion = Temporal.Duration.from({
        hours: horaAlarma.hour - horaActual.hour,
        minutes: 60 - duracion.minutes,
        seconds: 60 - horaActual.second,
      });
      horas.textContent = duracion.hours;
      minutos.textContent = duracion.minutes;
      segundos.textContent = duracion.seconds;
    }
    vuelta();
  }, 1000);
}
function vuelta() {
  actualizarReloj();
}

actualizarReloj();
