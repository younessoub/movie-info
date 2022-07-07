import { Wrapper, Content } from "./Movies.styles";

const Movies = (props) => {
  return (
    <Wrapper>
      <h1>{props.header}</h1>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default Movies;
