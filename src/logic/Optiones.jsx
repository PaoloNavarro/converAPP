const options = [
    { label: 'Longitud', value: 'longitud' },
    { label: 'Masa', value: 'masa' },
    { label: 'Temperatura', value: 'temperatura' },
    { label: 'Tiempo', value: 'tiempo' },
    { label: 'Velocidad', value: 'velocidad' }
];

const optionsLongitud = [
    { label: 'Milímetro', value: 'milimetro' },
    { label: 'Centímetro', value: 'centimetro' },
    { label: 'Metro', value: 'metro' },
    { label: 'Kilómetro', value: 'kilometro' },
    { label: 'Pulgada', value: 'pulgada' },
    { label: 'Pie', value: 'pie' },
    { label: 'Yarda', value: 'yarda' },
    { label: 'Milla', value: 'milla' },
];

const optionsMasa = [
    { label: 'Gramo', value: 'gramo' },
    { label: 'Kilogramo', value: 'kilogramo' },
    { label: 'Tonelada', value: 'tonelada' },
    { label: 'Libra', value: 'libra' },
    { label: 'Onza', value: 'onza' },
];

const optionsTemperatura = [
    { label: 'Celsius', value: 'celsius' },
    { label: 'Fahrenheit', value: 'fahrenheit' },
    { label: 'Kelvin', value: 'kelvin' },
    { label: 'Rankine', value: 'rankine' },
];

const optionsTiempo =[
    { label: 'Segundo', value: 'segundo' },
    { label: 'Minuto', value: 'minuto' },
    { label: 'Hora', value: 'hora' },
    { label: 'Día', value: 'dia' },
    { label: 'Semana', value: 'semana' },
    { label: 'Mes', value: 'mes' },
    { label: 'Año', value: 'año' }
]

const optionsVelocidad =[
    { label: 'Metros por segundo', value: 'metros_por_segundo' },
    { label: 'Kilómetros por hora', value: 'kilometros_por_hora' },
    { label: 'Millas por hora', value: 'millas_por_hora' }
]



const exportObj = { options, optionsLongitud,optionsMasa,optionsTemperatura,optionsTiempo,optionsVelocidad };

export default exportObj;
