Seguros Bolivar
GET http://localhost:8080/api/segurosbolivar/listaCiudades
POST http://localhost:8080/api/segurosbolivar/liquidacion
body {
"placaVehiculo": "EMR901",
"tipoDocumentoTomador": "CC",
"numeroDocumentoTomador": 1026253336,
"nombresTomador": "Gustavo Emilio",
"apellidosTomador": "Gomez Rodriguez",
"fechaNacimientoTomador": "1968-11-26",
"generoConductor": "M",
"claveAsesor": 38867,
"sumaAccesorios": 0,
"ciudadMovilizacion": 14000,
"ceroKm": "false",
"periodoFact": 12,
"opcionPA": "S"
}
POST http://localhost:8080/api/segurosbolivar/cotizacion
{
"mailTomador": "test@gmail.com",
"celTomador": "3112223344",
"dirTomador": "Av El Dorado 68B-31",
"ciuTomador": 14000,
"nomConductor": "Juan Perez",
"sexoConductor": "M",
"fecNacConductor": "1979-01-01",
"placaVeh": "EMR901",
"numLiquidacion": 29744875440
}

https://stg-conecta.segurosbolivar.com

Tus credenciales de acceso son:

- Usuario: 901086643

- Contraseña: Conecta6643
