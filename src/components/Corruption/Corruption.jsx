import { useMediaQuery } from 'react-responsive';
import { useRef, useState, useEffect } from 'react';

import './corruption.scss';
import { defineSliderPosition } from '../../utils/index';
import arrowIcon from '../../assets/corruption/arrow-icon.svg';

const Corruption = ({
  imageCause,
  imageConsequences,
  imageCauseDesktop,
  imageCauseMobileHor,
  imageCauseTablet,
  imageCauseMobile,
  imageConseqDesktop,
  imageConseqMobileHor,
  imageConseqTablet,
  imageConseqMobile,
  textCause,
  textConsequences,
  altCause,
  altConsequences,
}) => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.97);
  const imageContainer = useRef(undefined);

  const isMobilePosition = useMediaQuery({ maxWidth: 679 });
  const isTabletPosition = useMediaQuery({ minWidth: 680, maxWidth: 1139 });
  const isDesktopPosition = useMediaQuery({ minWidth: 1140, maxWidth: 1919 });
  const isMaxDesktopPosition = useMediaQuery({ minWidth: 1920 });

  useEffect(() => {
    if (isMobilePosition) {
      setImageRevealFraq(0.97);
    } else if (isTabletPosition) {
      setImageRevealFraq(0.984);
    } else if (isDesktopPosition) {
      setImageRevealFraq(0.978);
    } else if (isMaxDesktopPosition) {
      setImageRevealFraq(0.984);
    }
  }, [
    isMobilePosition,
    isTabletPosition,
    isDesktopPosition,
    isMaxDesktopPosition,
  ]);

  console.log(imageRevealFraq);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    const slider =
      (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
    setImageRevealFraq(() => {
      return defineSliderPosition(
        isMobilePosition,
        isTabletPosition,
        isMaxDesktopPosition,
        xPosition,
        containerBoundingRect,
        slider
      );
    });
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (e) => {
    slide(e.clientX);
  };

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };
  return (
    <li ref={imageContainer} className='corruption-case__item'>
      <div
        style={{
          clipPath: `polygon(0 0,${imageRevealFraq * 100}% 0,${
            imageRevealFraq * 100
          }% 100%,0 100% )`,
        }}
        className='corruption-case__item--cause'
      >
        <div className='item--cause__text-box'>
          <p
            className={imageRevealFraq < 0.031 ? 'hidden' : 'item--cause__text'}
          >
            {textCause}
          </p>
        </div>

        <picture>
          <source
            srcSet={imageCauseDesktop}
            media='(min-width:1440px)'
            sizes='(min-width:1440px) 1140px'
          />
          <source
            srcSet={imageCauseMobileHor}
            media='(orientation:"landscape")'
            sizes='(min-width:844px) 680px'
          />
          <source
            srcSet={imageCauseTablet}
            media='(min-width:744px)'
            sizes='(min-width:744px) 680px'
          />
          <source
            srcSet={imageCauseMobile}
            media='(max-width:743px)'
            sizes='(max-width:743px) 370px'
          />

          <img
            src={imageCause}
            className='corruption-case__image'
            loading='lazy'
            alt={altCause}
          />
        </picture>
      </div>

      <div className='corruption-case__item--consequences'>
        <div className='item--consequences__text-box'>
          <p
            className={
              imageRevealFraq > 0.969 ? 'hidden' : 'item--consequences__text'
            }
          >
            {textConsequences}
          </p>
        </div>

        <picture>
          <source
            srcSet={imageConseqDesktop}
            media='(min-width:1440px)'
            sizes='(min-width:1440px) 1140px'
          />
          <source
            srcSet={imageConseqMobileHor}
            media='(orientation:"landscape")'
            sizes='(min-width:844px) 680px'
          />
          <source
            srcSet={imageConseqTablet}
            media='(min-width:744px)'
            sizes='(min-width:744px) 680px'
          />
          <source
            srcSet={imageConseqMobile}
            media='(max-width:743px)'
            sizes='(max-width:743px) 370px'
          />
          <img
            src={imageConsequences}
            className='corruption-case__image'
            loading='lazy'
            alt={altConsequences}
          />
        </picture>
      </div>

      <div
        style={{ left: `${imageRevealFraq * 100}%` }}
        className='corruption-case__slider'
      >
        <div className='slider__container'>
          <div className='slider__line'></div>
          <div
            style={{ touchAction: 'none' }}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className='slider__circle'
          >
            <img src={arrowIcon} alt='Arrow icon' className='slider__icon' />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Corruption;
