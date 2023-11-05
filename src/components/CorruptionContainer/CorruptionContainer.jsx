import { useState, useRef, useEffect } from 'react';

import './corruptionContainer.scss';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import Corruption from '../Corruption/Corruption';
import { corruptionCases } from '../../constants/corruption';
import { firstElementCorruptionCases } from '../../constants/corruption';
import handAnimation from '../../assets/corruption/hand-animation.gif';

const CorruptionContainer = () => {
  const [isElementVisible, setIsElementVisible] = useState(true);
  const ref = useRef(null);
  let isVisible = useElementOnScreen(ref);

  useEffect(() => {
    if (isVisible) setIsElementVisible(true);
  }, [isVisible]);

  setTimeout(() => {
    setIsElementVisible(false);
  }, 4000);

  const listCorruption = corruptionCases.map(
    (
      {
        srcCause,
        srcConseq,
        textCause,
        imageCauseDesktop,
        imageCauseMobileHor,
        imageCauseTablet,
        imageCauseMobile,
        imageConseqDesktop,
        imageConseqMobileHor,
        imageConseqTablet,
        imageConseqMobile,
        textConsequences,
        altCause,
        altConsequences,
      },
      index
    ) => (
      <Corruption
        key={index}
        imageCause={srcCause}
        imageConsequences={srcConseq}
        imageCauseDesktop={imageCauseDesktop}
        imageCauseMobileHor={imageCauseMobileHor}
        imageCauseTablet={imageCauseTablet}
        imageCauseMobile={imageCauseMobile}
        imageConseqDesktop={imageConseqDesktop}
        imageConseqMobileHor={imageConseqMobileHor}
        imageConseqTablet={imageConseqTablet}
        imageConseqMobile={imageConseqMobile}
        textCause={textCause}
        textConsequences={textConsequences}
        altCause={altCause}
        altConsequences={altConsequences}
      ></Corruption>
    )
  );
  return (
    <section id='home'>
      <div className='corruption-case'>
        <div className='corruption-case__container'>
          <h2 className='corruption-case__title'>Це корупція</h2>
          <ul className='corruption-case__list'>
            <div ref={ref}>
              <Corruption
                imageCause={firstElementCorruptionCases.srcCause}
                imageConsequences={firstElementCorruptionCases.srcConseq}
                imageCauseDesktop={
                  firstElementCorruptionCases.imageCauseDesktop
                }
                imageCauseMobileHor={
                  firstElementCorruptionCases.imageCauseMobileHor
                }
                imageCauseTablet={firstElementCorruptionCases.imageCauseTablet}
                imageCauseMobile={firstElementCorruptionCases.imageCauseMobile}
                imageConseqDesktop={
                  firstElementCorruptionCases.imageConseqDesktop
                }
                imageConseqMobileHor={
                  firstElementCorruptionCases.imageConseqMobileHor
                }
                imageConseqTablet={
                  firstElementCorruptionCases.imageConseqTablet
                }
                imageConseqMobile={
                  firstElementCorruptionCases.imageConseqMobile
                }
                textCause={firstElementCorruptionCases.textCause}
                textConsequences={firstElementCorruptionCases.textConsequences}
                altCause={firstElementCorruptionCases.altCause}
                altConsequences={firstElementCorruptionCases.altConsequences}
              >
                {isElementVisible && (
                  <div>
                    <img
                      src={handAnimation}
                      className='corruption-case__hand-animation'
                    />
                  </div>
                )}
              </Corruption>
            </div>
            {listCorruption}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CorruptionContainer;
