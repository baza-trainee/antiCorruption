import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero__container grid-container">
        <h2 className="hero__title">
          В цю гру
          <span className="hero__title-unit">грають </span>
          <span className="hero__title-end">двоє</span>
        </h2>
        <p className="hero__content">
          Проект, створений для запобігання корупції, поширення історій та
          шляхів боротьби з нею
        </p>
      </div>
    </section>
  );
};

export default Hero;