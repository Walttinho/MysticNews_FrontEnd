import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.4rem;
  background-color: #fff;
  padding: 1rem;
`;

export const CardBody = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 35%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
