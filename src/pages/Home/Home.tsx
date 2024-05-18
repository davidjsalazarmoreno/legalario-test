import { useState } from 'react'
import ImagePreview from '../../components/ImagePreview/ImagePreview'
import PhotoPreview from '../../components/PhotoPreview/PhotoPreview'

const Home = () => {
  const [count, setCount] = useState(0)
  // https://placehold.co/600x400
  return (
    <>
      <>
        <ImagePreview isLoading={false} url="" />
        <PhotoPreview isLoading={false} url="" />
        {/* Image viewer que manejara un placeholder cuando este vacio */}


        {/* Dos pestanias, uno que diga sube la foto y otro que diga toma la foto con tu camara */}

        {/* Ruta de subida pestania 1:
            1. El usuario sube la foto
            2. Se valida que sea JPG o PNG
            3. Se coloca una imagen de carga
            4. Se simula la subida de la imagen
            5. Se muestra la imagen subida
        */}

        {/* Ruta de subida pestania 2:
            1. Se solicita permiso para acceder a la camara
            2. Se toma la foto
            3. Se muestra la imagen tomada
            4. Se permite descartar la foto para volver al paso 2
        */}

        {/* Si tanto la camara como la foto estan tomadas se permite el avance con un boton adicional */}
      </>
    </>
  )
}

export default Home
