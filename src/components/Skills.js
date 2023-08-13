import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import '../App.css';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const textItems = {
    Mission: {
      title: 'Mission',
      content: 'Training people of integrity and criticism, in the learning and ethical use of English, provides its students with the essential linguistic knowledge to obtain a better personal, academic and professional training in the language.'
    },
    Vision: {
      title: 'Vision',
      content: 'To be a key institution for continuous learning, with a critical and global perspective, in language teaching without losing our commitment to academic excellence or the quality of all our services, as well as maintaining continuous improvement to adapt to the needs of our users.'
    },
    Values: {
      title: 'Values',
      content: [
        "- Spirit of continuous improvement",
        "- Adaptation to social progress and technological development",
        "- Experimenting and educational innovation",
        "- Professionalism",
        "- Responsibility",
        "- Respect",
        "- Fairness",
        "- Political commitment",
        "- Collaboration",
        "- Participation and shared effort"
      ]
    }
  };

  return (
    <section className="skill" id="skills">
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className={`mb-5 fade-in ${isVisible ? 'visible' : ''}`}>Our Institutional Statutes</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={`owl-carousel owl-theme skill-slider`}
              >
                <div className={`item fade-in ${isVisible ? 'visible' : ''}`}>
                  <h3>{textItems.Mission.title}</h3>
                  <img className="rounded" src="https://www.grupoioe.es/wp-content/uploads/2019/01/110.Definir-la-mision-y-vision-de-una-empresa-1024x494.jpg" alt="Mission" />
                  <div className="w-50 mx-auto"><p>{textItems.Mission.content}</p></div>
                </div>
                <div className={`item fade-in ${isVisible ? 'visible' : ''}`}>
                  <h3>{textItems.Vision.title}</h3>
                  <img className="rounded" src="https://media.istockphoto.com/id/1280810520/es/vector/barco-de-trabajo-en-equipo-de-negocios-personas-en-el-mismo-barco-trabajando-duro-y.jpg?s=612x612&w=0&k=20&c=ELbzxlOsG_XP60GR_lZ1jr0RN0xRi5dhqx6Tt2IXpA0=" alt="Vision" />
                  <div className="w-50 mx-auto"><p>{textItems.Vision.content}</p></div>
                </div>
                <div className={`item fade-in ${isVisible ? 'visible' : ''}`}>
                  <h3>{textItems.Values.title}</h3>
                  <img className="rounded" src="https://img.freepik.com/vector-gratis/trabajo-equipo-barco-papel-busca-trofeo_1150-39742.jpg" alt="Valores" />
                  <div className="w-50 mx-auto" style={{textAlign: 'left'}}><ul className="list-unstyled ps-2">
                      {textItems.Values.content.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul></div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
