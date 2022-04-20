import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = styled.div`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition-duration: 0.5s;
  transition-property: transform;
  display: block;
  margin: 0px auto;

  &:hover {
    transform: scale(1.1);
  }
`;

export default ({ id, medium_cover_image }) => (
  <Movie>
    <Link to={`/${id}`}>
      <img src={medium_cover_image} />
    </Link>
  </Movie>
);
