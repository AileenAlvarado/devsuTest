# devsuTest
Prueba de automatizacion E2E y apis

## Prueba E2E
* se decidio por 'https://www.demoblaze.com/' debido a que las otras apps tenian problemas de certificado https.
* La aplicacion esta falto de elementos id (en cypress se recomienda agregar [data-id]) por lo que utilice el selector del DOM para identificar los elementos desados. 