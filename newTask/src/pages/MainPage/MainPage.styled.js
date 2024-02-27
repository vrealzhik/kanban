import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const LoaderText = styled.p`
  color: var(--Font-90, #000);
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.6px;
`;
