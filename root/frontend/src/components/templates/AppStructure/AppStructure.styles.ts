import styled from "styled-components";

export const AppStructureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  min-height: 100vh;
  background: ${({ theme: { colors } }) => colors.black};
`;

export const AppStructureMain = styled.main`
  width: 100%;
  flex: 1;
  padding: 35px;
  max-width: 900px;
  margin: auto;
`;
