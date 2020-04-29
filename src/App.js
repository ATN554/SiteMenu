import React from "react";
import "./styles.css";
import "./panel-left.css";
import Panel from "./Panel.js";
import Frame from "./Frame.js";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        minWidth: "30px",
        padding: "3px"
      }
    },
    MuiCard: {
      root: {
        width: "100%",
        height: "100%"
      }
    },
    MuiCardHeader: {
      root: {
        padding: "8px"
      }
    },
    MuiCardContent: {
      root: {
        padding: "8px",
        '&:last-child': {
          paddingBottom: "8px"
        }
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Panel
        UID="id1"
        mainClass="panel-left"
        contentClass="panel-left-content"
        buttonClass="panel-left-button"
      >
        <div>AAA</div>
      </Panel>
      <div>
       MENU
      </div>
      <Frame
        UID="id2"
        title="Фрейм приложения"
        subtitle="29 апреля 2020 г. 10:03:50"
        url=""
        onClose={() => {alert("Закрытие фрейма")}}
      />
    </ThemeProvider>
  );
}
