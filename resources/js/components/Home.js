import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            src="https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png"
                            alt="First slide"
                            width="900" height="300"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Bootstrap</h3>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="https://cdn.okitup.com/wp-content/uploads/2019/10/logo_laravel.png"
                            width="900" height="300"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Lavarel</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="https://niixer.com/wp-content/uploads/2020/11/javascript.png"
                            width="900" height="300"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>JavaScrip</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <br></br>
                <h2 style={{ textAlign: "center" }}><b>Acerca de...</b></h2>
                <br></br>
                <h4 style={{ textAlign: "center" }}>Somos "AbarrotesCF" nosotros nos encargamos de que tus tiendas de abarootes tengan la tecnología
                    adecuada para poder tener todo organizado. Entre algunas de nuestras funciones que cuenta con esta
                    aplicación son "lecturas de los productos y los empleados, altas de empleados y productos, y
                    actualizaciones de diferentes campos de los productos y empleados."
                </h4>
                <br></br>
            </div>

        </Container>
    );

}

export default Home;