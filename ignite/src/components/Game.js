import React from "react";
// Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { smallImage } from "../utils";
const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    document.body.style.overflow = "hidden";
    const detail = dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={onClickHandler}>
      {/* // back to home but the react-router path has changed */}
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
