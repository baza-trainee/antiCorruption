import './corruptionContainer.scss';
import Corruption from '../Corruption/Corruption';
import { corruptionCases } from '../../utils/constants';

const CorruptionContainer = () => {
  return (
    <section id='home'>
      <div className='corruption-case'>
        <h2 className='corruption-case__title'>Це корупція</h2>
        <ul className='corruption-case__list'>
          {corruptionCases.map(
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
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default CorruptionContainer;
