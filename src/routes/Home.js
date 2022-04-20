import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #ff4757, #eccc68);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 25px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>MOVIES</Title>
        <Subtitle>Find Your movies🎬</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {!loading &&
          data.movies &&
          data.movies.map((m) => <Movie key={m.id} {...m} id={m.id} />)}
      </Movies>
    </Container>
  );
};
