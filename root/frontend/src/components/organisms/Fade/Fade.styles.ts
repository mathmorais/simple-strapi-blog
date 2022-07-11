import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 50% {
    opacity: 1;
  }
`;

export const FadeContainer = styled.div`
  animation: ${fadeIn} 1s ease;
`;
