import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function ProductImage({ images }) {
  const [selectedImage, setSelectedImages] = useState(null);
  const [imageClicked, setImageClicked] = useState(false);

  useEffect(() => {
    setSelectedImages(images[0]);
  }, []);

  return (
    <>
      {
        selectedImage && (
          <ImageContainer>
            <Image onClick={() => setImageClicked(true)} src={selectedImage.src} alt={selectedImage.alt} height='500px' width='400px' />
            {
              images.length > 1 && (
                <ImageGallery>
                  {images.map(image => {
                    return (
                      <Image key={image.id} onClick={() => setSelectedImages(image)} src={image.src} height='100px' width='100px' alt={image.alt} />
                    )
                  })
                  }
                </ImageGallery>
              )
            }
          </ImageContainer>
        )
      }
      {/* {
        imageClicked && (
          <ImagePopup onClick={() => setImageClicked(false)}>
            <Image src={selectedImage.src} alt={selectedImage.alt} height='600px' width='600px'/>
          </ImagePopup>
        )
      } */}
    </>
  )
}

const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  text-align: center;

  img{
    transition: transform .5s ease;
    &:hover{
      transform: scale(1.5);
    }
  }
`

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img{
    transition: transform .5s ease;
    cursor: pointer;
    &:hover{
      transform: scale(1.5);
    }
  }
`

const ImagePopup = styled.div`
  postion: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`

export default ProductImage
