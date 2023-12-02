import { useEffect, useState } from "react";
import useScript from "../components/useScript";
import ConnectionManager from "../ConnectionManager";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Inicio() {
  useScript("/static/js/jquery-1.11.0.min.js");
  useScript("https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js");
  useScript("/static/js/bootstrap.bundle.min.js");
  useScript("/static/js/plugins.js");
  useScript("/static/js/script.js");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const init = async () => {
      let connection = new ConnectionManager();
      let response = await connection.getMovies();
      setProducts(response);
    };
    init();
  }, []);

  const productsBillboard = products.slice(0, 2);

  return (
    <>
      <Header />

      <section
        id="billboard"
        className="position-relative overflow-hidden bg-light-blue"
      >
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            {productsBillboard.map((productBillboard) => (
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          ¡Productos exclusivos!
                        </h1>
                        <Link
                          to={`/producto/${productBillboard._id}`}
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Ver aquí
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img
                          width={502}
                          height={677}
                          src={productBillboard.image}
                          alt="banner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-icon swiper-arrow swiper-arrow-prev">
          <svg className="chevron-left">
            <use xlinkHref="#chevron-left" />
          </svg>
        </div>
        <div className="swiper-icon swiper-arrow swiper-arrow-next">
          <svg className="chevron-right">
            <use xlinkHref="#chevron-right" />
          </svg>
        </div>
      </section>

      <section id="company-services" className="padding-large">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 pb-3">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className="cart-outline">
                    <use xlinkHref="#cart-outline" />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h3 className="card-title text-uppercase text-dark">
                    Pronto despacho
                  </h3>
                  <p>Estamos trabajando para enviar tu pedido a cualquier ciudad del país</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-3">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className="quality">
                    <use xlinkHref="#quality" />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h3 className="card-title text-uppercase text-dark">
                    Calidad garantizada
                  </h3>
                  <p>Nuestros productos están confeccionados con la mejor calidad para que sean duraderos y puedas disfrutarlos por mucho tiempo</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-3">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className="price-tag">
                    <use xlinkHref="#price-tag" />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h3 className="card-title text-uppercase text-dark">
                    Ofertas
                  </h3>
                  <p>Contamos con la mejor relación precio/calidad ¡Compruébalo tu mismo!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-3">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className="shield-plus">
                    <use xlinkHref="#shield-plus" />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h3 className="card-title text-uppercase text-dark">
                    100% pago seguro
                  </h3>
                  <p>Pronto implementaremos nuestro servicio de compra on line, con toda la seguridad del mercado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mobile-products"
        className="product-store position-relative padding-large no-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">
                Productos
              </h2>
              <div className="btn-right">
                <a
                  href="shop.html"
                  className="btn btn-medium btn-normal text-uppercase"
                >
                 
                </a>
              </div>
            </div>
            <div className="swiper product-swiper">
              <div className="swiper-wrapper">
                {products.map((product) => (
                  <div key={product._id} className="swiper-slide">
                    <Link to={`/producto/${product._id}`}>
                      <div className="product-card position-relative">
                        <div className="image-holder">
                          <img
                            src={product.image}
                            alt="product-item"
                            className="img-fluid"
                          />
                        </div>
                        <div className="cart-concern position-absolute">
                          <div className="cart-button d-flex">
                            <Link
                              to={`/producto/${product._id}`}
                              className="btn btn-medium btn-black"
                            >
                              Pronto compra on line
                              <svg className="cart-outline">
                                <use xlinkHref="#cart-outline"></use>
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                          <h3 className="card-title text-uppercase">
                            <Link to={`/producto/${product._id}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <span className="item-price text-primary">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center"></div>
      </section>

      <Footer />
    </>
  );
}
