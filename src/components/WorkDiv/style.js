import styled from "styled-components";

export const Frame = styled.div`
  position: relative;
  height: 100vh;
  width: 50vw;
  background-image: ${(props) =>
    props.background
      ? `url(${props.background})`
      : `url("https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80")`
    };
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  opacity: ${props => props.isRunning ? 1 : 0.2};
`;

export const CTA = styled.p`
  color: white;
  font-size: 30px;
  width: 30%;
  font-weight: 500;
  line-height: 113%;
`;

export const HrsMins = styled.p`
  color: white;
  font-size: 4.5rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 7%;
  left: 8%;
`;

export const Icon = styled.img`
  filter: brightness(0) invert(1);

  &:nth-child(1n + 2) {
    margin-left: 8%;
  }
`;

export const Upper = styled.div`
  position: absolute;
  top: 3%;
  left: 8%;
`;
