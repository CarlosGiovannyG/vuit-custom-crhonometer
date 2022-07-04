import React from 'react'
import PropTypes from "prop-types"
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'
import ChronometerDisplay from './ChronometerDisplay'

type ChronometerProps = {
  image: string
  end_date: string
}

const Chronometer = ({ image, end_date }: ChronometerProps) => {

  const CSS_HANDLES = ['container', 'containerImage', 'stylesImage', 'containerDisplay']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.container}>
      <div className={handles.containerImage}>
        <img className={handles.stylesImage} src={image} alt="Imagen Promocion" />
      </div>
      <div className={handles.containerDisplay}>
        <ChronometerDisplay futureDate={end_date} />
      </div>
    </div>
  )
}

Chronometer.prototype = {
  image: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired
}

Chronometer.defaultProps = {
  image: "ImagenPromoción",
  end_date: "Sat Dec 31 2022 23:59:00"
}

Chronometer.schema = {
  title: "Crónometro promoción",
  type: "object",
  properties: {
    image: {
      title: "Imagen de la promoción",
      type: "string",
      description: "Agregar una imagen que haga referencia a lapromoción",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    end_date: {
      title: "Tiempo de duración",
      type: "string",
      description: "Ingresar la fecha que termina la promoción",
      widget: {
        "ui:widget": "date-time"
      }
    }
  }
}


export default Chronometer
