import PageContainer from "app/components/UI/sectionContainer";
import { insuranceLogoAbsolutePath } from "app/const";
import { toAbsoluteUrl } from "theme/helpers";
import CardGridContainer from "../UI/CardGridContainer";
import { OurClients } from "./OurClients";

function SharedSections() {
  const allies = Object.values(insuranceLogoAbsolutePath).map(l => l);

  const offers = [
    { img: "/media/offers/of1.jpg", },
    { img: "/media/offers/of2.jpg", },
    { img: "/media/offers/of3.jpg", },
  ];
  return (
    <>
      <PageContainer className="bg-gray">
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col">
              <h5>Ofertas</h5>
              <div className="container-fluid">
                <div className="row m-0">
                  {
                    offers.map(offer => (
                      <div className="col-md-auto mt-4">
                        <img
                          src={offer.img}
                          className="home-offer__image"
                        />
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="bg-white">
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5>¿Por qué Seguro Ya?</h5>
              <div className="container">
                <div className="row m-0">
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={toAbsoluteUrl("/media/images/ilustration-01.svg")}
                        alt="ilustration-01"
                      />
                    </div>
                    <div className="my-3 font-primary">
                      <strong>
                        Estamos para ayudarte a entender el mundo de los seguros
                      </strong>
                    </div>
                    <ul className="text-left">
                      <li>
                        Te ofrecemos un proceso de compra fácil, rápido y práctico.
                      </li>
                      <li>
                        El lenguaje de nuestra plataforma es práctico y fácil de entender.
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={toAbsoluteUrl("/media/images/ilustration-03.svg")}
                        alt="ilustration-02"
                      />
                    </div>
                    <div className="my-3 font-primary">
                      <strong>Nos adaptamos a ti</strong>
                    </div>
                    <ul className="text-left">
                      <li>Te ofrecemos soluciones ajustadas a tus necesidades. </li>
                      <li>Te ofrecemos una variedad de productos y de diferentes compañías aseguradoras.</li>
                      <li>Podrás recibir excelentes ofertas.</li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={toAbsoluteUrl("/media/images/ilustration-02.svg")}
                        alt="ilustration-03"
                      />
                    </div>
                    <div className="my-3 font-primary">
                      <strong>
                        Servicio 100% digital
                      </strong>
                    </div>
                    <ul className="text-left">
                      <li>
                        Atención y asesoría inmediata, las 24 horas del día.
                      </li>
                      <li>
                        Contarás con una biblioteca, donde podrás almacenar todos tus seguros y su información.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-100 h-100"></div>
      </PageContainer>
      <PageContainer className="bg-dark-blue">
        <div className="container-fluid text-center text-white ">
          <h5 className="text-white">Nuestros Clientes</h5>
          <OurClients />
        </div>
      </PageContainer>
      <PageContainer>
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5>Nuestros Aliados</h5>
              <div className="container">
                <CardGridContainer data={allies} >
                  {(ally) => (
                    <div className="card w-100 h-100">
                      <div className="card-body overflow-hidden row">
                        <img
                          src={ally}
                          alt="img-logo"
                          style={{ maxHeight: '8rem', maxWidth: '60%' }}
                          className="m-auto"
                        />
                      </div>
                    </div>
                  )}
                </CardGridContainer>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="bg-white">
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5>¿Tienes alguna duda?</h5>
              <span>
                Escribenos a WhastApp o visita nuestra página de preguntas
                frencuentes
              </span>
              <div className="mt-3">
                <a href="https://api.whatsapp.com/message/QOFDDFAB7GWIE1" target="_blank">
                  <button  className="btn btn-secondary secondary-button">                    
                    <img
                      src={toAbsoluteUrl("/media/icons/whatsapp.png")}
                      alt="wa-icon"
                      className="mx-1"
                    />
                    <span className="whatsapp__text" style={{fontSize: "1rem"}}>
                      WhatsApp 
                    </span>

                  </button>
                </a>
                <button className="btn btn-primary primary-button ml-2 w-25">
                  <p className="my-1"> <b> Ver preguntas frencuentes </b> </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default SharedSections;
