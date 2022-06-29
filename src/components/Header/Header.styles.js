import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  & h1 {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.large};
  }
  & ul {
    display: flex;
    column-gap: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
