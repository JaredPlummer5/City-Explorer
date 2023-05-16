import React from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';

export default function Movie(props) {
    let carouselHTML
    carouselHTML = (props.movieData.map((element, idx) => (

        <Carousel.Item key={element.id}>
            <img
                className="d-block w-100"
                src={element.poster_path}
                alt={element.overview}
                style={{ width: '100%', height: '600px' }}
            />

            <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <h4 style={{ color: 'white' }}>{element.title}</h4>
                <p style={{ color: 'lightgray' }}>Vote: {element.vote_average}</p>
                <p style={{ color: 'lightgray' }}>Released : {element.release_date}</p>
                <p style={{ color: 'lightgray' }}>Popularity: {element.popularity}</p>
                <p style={{ color: 'lightgray' }}>Description: {element.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>

    )
    ))
    function handleClose() {
        props.setShow(false);
    }

    return (
        <Modal show={props.show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Movies</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Carousel>
                    {carouselHTML}

                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
