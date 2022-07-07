import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65)),
    url(${(props) => props.image}), var(--darkGrey);

  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 60px;
  max-width: var(--maxWidth);
  position: absolute;
  bottom: 40px;
  @media screen and (max-width: 720px) {
    padding: 20px;
  }
`;

export const Text = styled.div`
  z-index: 100;
  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
`;
