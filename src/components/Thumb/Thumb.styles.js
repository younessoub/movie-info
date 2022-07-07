import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  animation: thumbAnim 0.5s;
  border: 1px solid grey;
  min-height: 50px;

  :hover {
    opacity: 0.8;
  }

  @keyframes thumbAnim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
