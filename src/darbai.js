import React, { Component } from "react";
import darbas1 from "./images/darbas1.png";
import darbas2 from "./images/darbas2.jpg";
import darbas3 from "./images/darbas3.png";

class Darbai extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      darbai: [
        { src: darbas1, description: "Brandingo dizainas | Pakelio dizainas | Fizinis produktas" },
        { src: darbas2, description: "Vizualinis dizainas | Skaitmeninė iliustracija" },
        { src: darbas3, description: "Vizualinis dizainas | Skaitmeninė tapyba | Veikėjo dizainas" },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      this.handlePrev();
    } else if (event.key === "ArrowRight") {
      this.handleNext();
    }
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.darbai.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.darbai.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { currentIndex, darbai } = this.state;
    const currentDarbas = darbai[currentIndex];

    return (
      <div className="carousel-container">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={currentDarbas.src}
              alt="Darbas"
              style={{
                width: "35%",
                height: "auto",
              }}
              className="carousel-image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={this.handlePrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={this.handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <p>{currentDarbas.description}</p>
      </div>
    );
  }
}

export default Darbai;
