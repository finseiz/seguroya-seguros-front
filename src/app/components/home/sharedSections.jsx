import PageContainer from "app/components/UI/sectionContainer";
import { InsuranceLogo } from "app/const";
import { toAbsoluteUrl } from "theme/helpers";
import CardGridContainer from "../UI/CardGridContainer";

function SharedSections() {
  const allies = [InsuranceLogo.COLMENA, InsuranceLogo.BOLIVAR];

  const offers = [
    {
      img: "/media/images/tmp02.jpg",
      title: "¡Seguro por Kilometro!",
      content: (
        <ul>
          <li>Beneficio</li>
        </ul>
      ),
    },
    {
      img: "/media/images/tmp02.jpg",
      title: "15% dcto en salud ",
      content: (
        <ul>
          <li>Beneficio</li>
        </ul>
      ),
    },
    {
      img: "/media/images/tmp02.jpg",
      title: "¡Seguro por Kilometro!",
      content: (
        <ul>
          <li>Beneficio</li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <PageContainer className="bg-gray">
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5>Ofertas</h5>
              <div className="container-fluid">
                <CardGridContainer data={offers} size="4">
                  {(offer) => (
                    <div
                      className="card w-100 h-100 overflow-hidden"
                      style={{ borderRadius: "10px" }}
                    >
                      <img src={toAbsoluteUrl(offer.img)} alt="" />
                      <div className="card-body">
                        <div className="card-title">{offer.title}</div>
                        <div className="card-text text-left">
                          {offer.content}
                        </div>
                        <button className="btn btn-primary primary-button ml-2">
                          Ver más
                        </button>
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
                        Estamos para ayudarte a aprender y entender el mundo de
                        los seguros
                      </strong>
                    </div>
                    <ul className="text-left">
                      <li>
                        Queremos hacer de los seguros un mundo más entendible.
                      </li>
                      <li>
                        Estamos para apoyarte y asesorarte en caso de accidente.
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={toAbsoluteUrl("/media/images/ilustration-02.svg")}
                        alt="ilustration-02"
                      />
                    </div>
                    <div className="my-3 font-primary">
                      <strong>Nos adaptamos a ti</strong>
                    </div>
                    <ul className="text-left">
                      <li>Te entregamos en forma digital tu SOAT.</li>
                      <li>Te atendemos las 24 horas al día.</li>
                      <li>Te entregamos en el momento que tu dispongas.</li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="image-wrapper">
                      <img
                        src={toAbsoluteUrl("/media/images/ilustration-03.svg")}
                        alt="ilustration-03"
                      />
                    </div>
                    <div className="my-3 font-primary">
                      <strong>
                        Estamos para ayudarte a aprender y entender el mundo de
                        los seguros
                      </strong>
                    </div>
                    <ul className="text-left">
                      <li>
                        Queremos hacer de los seguros un mundo más entendible.
                      </li>
                      <li>
                        Estamos para apoyarte y asesorarte en caso de accidente.
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
        <div className="container-fluid text-center text-white">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5 className="text-white">Nuestros Clientes</h5>
              <div className="container">
                <div className="row m-0">
                  <div className="col-3">
                    <div className="profile-image">
                      <img
                        src={toAbsoluteUrl("/media/images/tmp01.png")}
                        alt="author_photo"
                      />
                    </div>
                  </div>
                  <div className="col-9 text-left">
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam”.
                    </p>

                    <p>
                      <strong>Carolina Gómez Botero</strong>
                    </p>
                    <p>
                      <strong>Directora Ejecutiva Colgate S.A.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="container-fluid text-center h-100">
          <div className="row h-100 m-0">
            <div className="col align-self-center">
              <h5>Nuestros Aliados</h5>
              <div className="container">
                <CardGridContainer data={allies} limit={3}>
                  {(ally) => (
                    <div className="card w-100 h-100">
                      <div className="card-body overflow-hidden">
                        <img
                          src={toAbsoluteUrl(`/media/logos/${ally}`)}
                          alt="img-logo"
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
                <button className="btn btn-secondary secondary-button">
                  WhatsApp
                </button>
                <button className="btn btn-primary primary-button ml-2">
                  Ver preguntas frencuentes
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
