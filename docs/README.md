# Clone Página Carulla

## Descripción

> La carpeta **itgloberspartnercl-custom-crhonometer** contiene un componente que permite mostrar al usuario final una promoción, con una imagen representativa; junto a esta imagen se muestra un conteo regresivo avisando cuanto tiempo falta para el final de promoción

 ![Home](/docs/images/custom_crhonometer.png "Imagen del Home")

### Configuración desde el site-editor
> Desde el site-editor se puede dar una completa configuración al componente, ya que cuenta con opción de calendario donde se puede seleccionar la fecha y hora de la finalización; del mismo modo la opción para seleccionar la imagen que se quiere mostrar para la promoción

![Home](/docs/images/crhonometer_site-editor.png "Imagen del Home")

![Home](/docs/images/crhonometer_site-editor-one.png "Imagen del Home")

### Configuración desde el store-theme

> Desde el store theme también se podrá configurar el componente y pasar los valores necesarios. Tener presente que el formato debe ser (MMM-DD-YYYY,HH:MM:SS), como se muestra a continuación.

``` jsonc
   "chronometer-custom":{
    "title":"Title for the component ",
    "props":{
      "image": "url/image.png",
      "end_date":"Jun-22-2022,20:05:34:000"
    }
  }

```


#### Configuración Inicial

Prepara un espacio de trabajo en como desarrollador para poder trabajar.

##### Clonar el repositorio

Desde el siguiente enlace podrás clonar el repositorio y poder trabajar en el desde la computadora local 
## [clonar repositorio](https://github.com/CarlosGiovannyG/Reto_Uno.git "clonar repositorio") 


Configurar archivo **manifest.json**

Abrir el repositorio en un editor de código, acceder al archivo manifest.json ubicado en la carpeta **reto-one-store-theme** y reemplazar el **vendor** por el suyo y en el campo **name** darle el nombre deseado para el tema

##### Ejemplo

```
  {
  “vendor”:”itgloberspartnercl”,
  “vendor”:”clone-carulla-store.theme”
  }

```

##### Vista local

Antes de hacer link al store theme es necesario clonar y tener linkiados los siguientes componentes custom


- itgloberspartnercl-add-to-cart-info
- itgloberspartnercl-bullets-diagramation
- itgloberspartnercl-custom-crhonometer
- itgloberspartnercl-custom-department-search
- itgloberspartnercl-custom-diagramation-template
- itgloberspartnercl-custom-termometer
- itgloberspartnercl-gilla-promotions
- itgloberspartnercl-html-pdf
- itgloberspartnercl-quick-order
- itgloberspartnercl-whatssapp-button

Cuyas carpetas se encuentran dentro del repositorio. Se debe hacer la misma configuración en los respectivos archivos **manifest.json** de cada componente.

> Linkiar cada componente en su espacio de trabajo y por ultimo Linkiar el store-theme de la tienda.
