import styled from "styled-components";
import { green, red, blue, orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

console.log(green);

export const Button = styled.div`
  /* Style */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  transition: 0.1s;
  font-size: 1.5em;
  box-shadow: inset 0 20px 4px -21px rgba(255, 255, 255, 0.4),
    0 19px 13px 0 rgba(0, 0, 0, 0.3);
  /* color: #88b4f7; */
  position: relative;
  z-index: 2;
  border: 4px solid #000000; // #303030;
  /* Effects */
  &:hover {
    opacity: 0.95;
  }
  &.active {
    background-image: ${(props) =>
      props.bg
        ? `linear-gradient(to top, ${props.bg} 0%, ${props.bg} 100%)`
        : `linear-gradient(to top, #151515 0%, #1d1d1d 100%)`};
    box-shadow: inset 0 16px 14px -21px transparent,
      0 0px 13px 0 rgba(0, 0, 0, 0.3), inset 0 0 30px 7px rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  /* Size */
  ${({ lg, md, sm, xs, block }) => {
    let style = "";
    switch (true) {
      case lg:
        style = `width: 200px; height: 100px;`;
        break;
      case md:
        style = `width: 150px; height: 75px;`;
        break;
      case sm:
        style = `width: 130px; height: 65px;`;
        break;
      case xs:
        style = `width: 100px; height: 50px;`;
        break;
      case block:
        style = `width: 100%; height: 65px;`;
        break;
      default:
        style = `width: 130px; height: 65px;`;
    }
    if (block) {
      style = `width: 100%;` + style.substring(style.indexOf("height"));
    }
    return style;
  }}

  /* Border radius orientation */
  ${({ top, bottom, left, right }) => {
    switch (true) {
      case top:
        return `border-top-left-radius: 7px;border-top-right-radius: 7px;`;
      case bottom:
        return `border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;`;
      case left:
        return `border-top-left-radius: 7px;border-bottom-left-radius: 7px;`;
      case right:
        return `border-top-right-radius: 7px;border-bottom-right-radius: 7px;`;
      default:
        return `border-radius: 7px;`;
    }
  }}

/* State */
${({ active }) => {
    switch (true) {
      case active:
        return `background-image: linear-gradient(to top, #151515 0%, #1d1d1d 100%);
                box-shadow: inset 0 16px 14px -21px transparent,
                0 0px 13px 0 rgba(0, 0, 0, 0.3), inset 0 0 7px 2px rgba(0, 0, 0, 0.4);
                z-index: 0;`;
      default:
        return "";
    }
  }}

  /* Bg */
  ${({ bg }) => {
    switch (bg) {
      case "red":
        return `background-image: linear-gradient(to top right, ${red[900]} 0%, ${red[400]} 100%);`;
      case "green":
        return `background-image: linear-gradient(to top right, ${green[900]} 0%, ${green[400]} 100%);`;
      case undefined:
        return `background-image: linear-gradient(to top, #242424 0%, #303030 100%);`;
      default:
        const theme = createMuiTheme({
          palette: {
            primary: {
              main: bg,
            },
          },
        });
        return `background-image: linear-gradient(to top right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%); color:${theme.palette.primary.contrastText}`;
    }
  }}
`;
