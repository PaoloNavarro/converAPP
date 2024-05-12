const conversiones = {
    longitud: {
            milimetro: {
                centimetro: 0.1,
                metro: 0.001,
                kilometro: 0.000001,
                pulgada: 0.0393701,
                pie: 0.00328084,
                yarda: 0.00109361,
                milla: 0.000000621371,
            },
            centimetro: {
                milimetro: 10,
                metro: 0.01,
                kilometro: 0.00001,
                pulgada: 0.393701,
                pie: 0.0328084,
                yarda: 0.0109361,
                milla: 0.00000621371,
            },
            metro: {
                milimetro: 1000,
                centimetro: 100,
                kilometro: 0.001,
                pulgada: 39.3701,
                pie: 3.28084,
                yarda: 1.09361,
                milla: 0.000621371,
            },
            kilometro: {
                milimetro: 1000000,
                centimetro: 100000,
                metro: 1000,
                pulgada: 39370.1,
                pie: 3280.84,
                yarda: 1093.61,
                milla: 0.621371,
            },
            pulgada: {
                milimetro: 25.4,
                centimetro: 2.54,
                metro: 0.0254,
                kilometro: 0.0000254,
                pie: 0.0833333,
                yarda: 0.0277778,
                milla: 0.000015783,
            },
            pie: {
                milimetro: 304.8,
                centimetro: 30.48,
                metro: 0.3048,
                kilometro: 0.0003048,
                pulgada: 12,
                yarda: 0.333333,
                milla: 0.000189394,
            },
            yarda: {
                milimetro: 914.4,
                centimetro: 91.44,
                metro: 0.9144,
                kilometro: 0.0009144,
                pulgada: 36,
                pie: 3,
                milla: 0.000568182,
            },
            milla: {
                milimetro: 1609344,
                centimetro: 160934,
                metro: 1609.34,
                kilometro: 1.60934,
                pulgada: 63360,
                pie: 5280,
                yarda: 1760,
            },
    },
    masa: {
            gramo: {
                kilogramo: 0.001,
                tonelada: 0.000001,
                libra: 0.00220462,
                onza: 0.035274,
            },
            kilogramo: {
                gramo: 1000,
                tonelada: 0.001,
                libra: 2.20462,
                onza: 35.274,
            },
            tonelada: {
                gramo: 1000000,
                kilogramo: 1000,
                libra: 2204.62,
                onza: 35274,
            },
            libra: {
                gramo: 453.592,
                kilogramo: 0.453592,
                tonelada: 0.000453592,
                onza: 16,
            },
            onza: {
                gramo: 28.3495,
                kilogramo: 0.0283495,
                tonelada: 0.0000283495,
                libra: 0.0625,
            },
    },
    temperatura: {
            convertir: (valor, desde, hacia) => {
                switch (desde) {
                case 'celsius':
                    return hacia === 'fahrenheit' ? (valor * 9/5) + 32 :
                        hacia === 'kelvin' ? valor + 273.15 :
                        hacia === 'rankine' ? (valor + 273.15) * 9/5 : valor;
                case 'fahrenheit':
                    return hacia === 'celsius' ? (valor - 32) * 5/9 :
                        hacia === 'kelvin' ? (valor + 459.67) * 5/9 :
                        hacia === 'rankine' ? valor + 459.67 : valor;
                case 'kelvin':
                    return hacia === 'celsius' ? valor - 273.15 :
                        hacia === 'fahrenheit' ? (valor * 9/5) - 459.67 :
                        hacia === 'rankine' ? valor * 1.8 : valor;
                case 'rankine':
                    return hacia === 'celsius' ? (valor - 491.67) * 5/9 :
                        hacia === 'fahrenheit' ? valor - 459.67 :
                        hacia === 'kelvin' ? valor * 5/9 : valor;
                default:
                    return valor;
                }
            },
    },
    tiempo: {
            segundo: {
            minuto: 1/60,
            hora: 1/3600,
            dia: 1/86400,
            semana: 1/604800,
            mes: 1/2.628e+6,
            año: 1/3.154e+7,
            },
            minuto: {
            segundo: 60,
            hora: 1/60,
            dia: 1/1440,
            semana: 1/10080,
            mes: 1/43800,
            año: 1/525600,
            },
            hora: {
            segundo: 3600,
            minuto: 60,
            dia: 1/24,
            semana: 1/168,
            mes: 1/730,
            año: 1/8760,
            },
            dia: {
            segundo: 86400,
            minuto: 1440,
            hora: 24,
            semana: 1/7,
            mes: 1/30.417,
            año: 1/365,
            },
            semana: {
            segundo: 604800,
            minuto: 10080,
            hora: 168,
            dia: 7,
            mes: 1/4.345,
            año: 1/52.143,
            },
            mes: {
            segundo: 2.628e+6,
            minuto: 43800,
            hora: 730,
            dia: 30.417,
            semana: 4.345,
            año: 1/12,
            },
            año: {
            segundo: 3.154e+7,
            minuto: 525600,
            hora: 8760,
            dia: 365,
            semana: 52.143,
            mes: 12,
            },
        },
    velocidad: {
            metros_por_segundo: {
            kilometros_por_hora: 3.6,
            millas_por_hora: 2.23694,
            },
            kilometros_por_hora: {
            metros_por_segundo: 1/3.6,
            millas_por_hora: 0.621371,
            },
            millas_por_hora: {
            metros_por_segundo: 1/2.23694,
            kilometros_por_hora: 1.60934,
            },
        },
      
  };
  
  const convertirUnidades = (unidadSeleccionada, desdeSeleccionado, hastaSeleccionado, inputValue) => {
      if (conversiones[unidadSeleccionada]) {
          if (unidadSeleccionada === 'temperatura') {
              return (conversiones.temperatura.convertir(inputValue, desdeSeleccionado, hastaSeleccionado)).toFixed(2);
          } else {
              const conversionDesde = conversiones[unidadSeleccionada][desdeSeleccionado];
              const conversionHasta = conversiones[unidadSeleccionada][hastaSeleccionado];
  
              if (conversionDesde && conversionHasta) {
                  return (inputValue * conversionDesde[hastaSeleccionado]).toFixed(5);
              }
          }
      }
  
      return 0; // Valor predeterminado si no hay conversión válida
  };
  
  export default convertirUnidades;
  