# devsuTest
Prueba de automatizacion E2E y apis

## Prueba E2E
* Decidi por 'https://www.demoblaze.com/' debido a que las otras apps tenian problemas de certificado https.
* La aplicacion esta falto de elementos id (en cypress se recomienda agregar [data-id]) por lo que utilice el selector del DOM para identificar los elementos desados. 

## Prueba API test
* Sigo usando la app de demoblaze para continuar bajo la misma plataforma, las api eran bastante basicas por lo que las request indiferentemente si fallaban o no devolvian codigo 200, salvo por la diferencia que se recibia un mensaje de error que permitia identificar si es valida o no la operacion.

