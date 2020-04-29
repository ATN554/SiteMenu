import React from "react";
import "./styles.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Skeleton from "@material-ui/lab/Skeleton";
import CardContent from "@material-ui/core/CardContent";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "1px"
      }
    },
    MuiCardHeader: {
      root: {
        padding: "4px 54px 4px 54px"
      }
    },
    MuiCardContent: {
      root: {
        padding: "4px",
        height: "calc(100% - 72px)",
        "&:last-child": {
          paddingBottom: "4px"
        }
      }
    }
  }
});

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      showPanel: false,
      panelId: "id1",
      contentId: "id2",
    }

    this.setShowPanel = this.setShowPanel.bind(this);
  }

  setShowPanel(show) {
    if (show) {
      document.getElementById(this.state.panelId).classList.add("active");
      document.getElementById(this.state.contentId).classList.add("active");
    } else {
      document.getElementById(this.state.panelId).classList.remove("active");
      document.getElementById(this.state.contentId).classList.remove("active");
    }
    this.setState({ showPanel: show });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Backdrop
          style={{zIndex: 2}}
          open={this.state.showPanel}
          onClick={() => this.setShowPanel(false)}
          transitionDuration={{
            appear: 0,
            enter: 250,
            exit: 600,
          }}
        />

        <div className="menu-button">
          <IconButton
            variant="contained"
            onClick={() => this.setShowPanel(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <div className="close-button">
          <IconButton
            variant="contained"
            onClick={() => alert("Закрыть фрейм")}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div id={this.state.panelId} className="panel-left">
          <div id={this.state.contentId} className="panel-left-content">
            <div>Меню</div>
          </div>
        </div>

        <Card>
          <CardHeader
            title="Фрейм приложения"
            titleTypographyProps={{ variant: "body2" }}
            subheader="29 апреля 2020 г. 10:03:50"
            subheaderTypographyProps={{ variant: "caption" }}
          />
          <CardContent>
            <iframe
              title="Фрейм приложения"
              src="https://material.io/resources/icons/?style=baseline"
              width="100%"
              height="100%"
              loading="lazy"
              frameBorder="0"
            />
          </CardContent>
        </Card>
      </ThemeProvider>
    );
  }
}
