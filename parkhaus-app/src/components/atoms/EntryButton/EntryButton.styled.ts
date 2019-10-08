import styled from "styled-components";

export const StyledButton = styled.button`
  margin-left: 2em;
  text-align: left;
  width: 120px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  :hover {
    animation-name: driveLUL;
    animation-duration: 12000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  img {
    margin-top: -25px;
    margin-left: -2.5em;
    padding-right: 15px;
    width: 150px;
    height: 100px;
  }

  img:active {
    zoom: 1.5;
  }

  @-moz-keyframes driveLUL {
    from {
      -moz-transform: translate(0);
    }
    to {
      -moz-transform: translate(500%);
    }
  }
  @-webkit-keyframes driveLUL {
    from {
      -webkit-transform: translate(0);
    }
    to {
      -webkit-transform: translate(500%);
    }
  }
  @keyframes driveLUL {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(500%);
    }
  }
`;
