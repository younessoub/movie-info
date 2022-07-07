import styled from "styled-components";

const Spinner = styled.div`
  border: 10px solid black;
  border-bottom: 10px solid grey;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 10px auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
