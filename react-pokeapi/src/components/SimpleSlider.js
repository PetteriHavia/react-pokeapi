import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import RandomPokemon from "./RandomPokemon";

export const SimpleSlider = ({ pokemon }) => {
  const settings = {
    dots: true,
    slidesToShow: 6,
    slidesToScroll:3,
    draggable: true,
  };

  return (
      <Slider {...settings}>
        {pokemon.map((pokemon) => (
          <RandomPokemon pokemon={pokemon} key={pokemon.name} type={pokemon.types[0].type.name}/>
        ))}
      </Slider>
  );
};
