import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      title
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: ;
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
  font-size: 80px;
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

const SearchBar = styled.input`
  position: absolute;
  top: 30px;
  left: 40px;
  text-align: center;

  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
  &:focus {
    border-color: #eccc68;
    outline: none;
    box-shadow: rgba(236, 204, 104, 0.3) 0px 0px 0px 3px;
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <Container>
      <Header>
        <SearchBar
          value={keyword}
          onChange={onChange}
          placeholder="🔎search"
        ></SearchBar>
        <Title>SUCHA</Title>
        <Subtitle>Welcome to my cinema🎬</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {keyword &&
        data?.movies?.filter((movie) => movie.title.includes(keyword)).length ==
          0 && <Loading>No Movies 😢</Loading>}
      <Movies>
        {!keyword &&
          data?.movies?.map((m) => <Movie key={m.id} {...m} id={m.id} />)}
      </Movies>
      <Movies>
        {keyword &&
          data?.movies
            ?.filter((movie) => movie.title.includes(keyword))
            .map((m) => <Movie key={m.id} {...m} id={m.id} />)}
      </Movies>
    </Container>
  );
};
