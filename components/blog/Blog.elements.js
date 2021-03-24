import styled from "styled-components";

export const StarredPost = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  margin: 2rem 0rem;
  gap: 1rem;
  align-items: flex-start;
`;

export const StarredImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const StarredDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardHead = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  &:hover {
    transform: scale(1.2);
    transition: ease 0.5s;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
`;

export const ReadButton = styled.a`
  width: 100%;
  height: 35px;
  padding: 1rem;
  color: black;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border: 1px solid #0d0504;
  border-radius: 3px;

  &:hover {
    background-color: #0d0504;
    color: white;
    transition: ease 0.5s;
  }
`;

export const PostTitle = styled.h2`
  padding: 1rem 0rem;
  font-size: 2rem;
  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;
export const PostDescription = styled.p`
  padding-bottom: 1rem;
  font-size: 22px;
  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;
