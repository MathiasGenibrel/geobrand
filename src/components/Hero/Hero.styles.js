import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  background: url("./assets/building.webp");
  background-size: cover;
  background-position: 0 90%;
  aspect-ratio: 16/9;
  margin: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.fourth};
  & h2 {
    font-size: calc(${({ theme }) => theme.font.size.large} * 1.5);
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
  & > p {
    font-size: ${({ theme }) => theme.font.size.small};
    opacity: 0.8;
  }
  & form {
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${({ theme }) => theme.spacing.small};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
    & input {
      background: none;
      border: none;
      background-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.fourth};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }
`;
