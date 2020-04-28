import React from "react";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const buttonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        minWidth: "30px",
        padding: "3px"
      }
    }
  }
});

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelId: "panel-" + props.UID,
      contentId: "content-" + props.UID,
      buttonId: "button-" + props.UID,
      show: false,
      mainClass: props.mainClass,
      contentClass: props.contentClass,
      buttonClass: props.buttonClass
    };

    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setShow = this.setShow.bind(this);

    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.show !== nextState.show ||
      this.props.children !== nextProps.children;
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("touchend", this.onTouchEnd);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("touchend", this.onTouchEnd);
  }

  onMouseUp(event) {
    event.preventDefault();
    let el = document.getElementById(this.state.panelId);
    if (el && event.target && !el.contains(event.target)) {
      this.close();
    }
  }

  onTouchEnd(event) {
    event.preventDefault();
    if (event.changedTouches.length > 0) {
      let touch = event.changedTouches[0];
      let el = document.getElementById(this.state.panelId);
      if (el && touch.target && !el.contains(touch.target)) {
        this.close();
      }
    }
  }

  close() {
    this.setShow(false);
  }

  toggle() {
    this.setShow(!this.state.show);
  }

  setShow(show) {
    if (show) {
      document.getElementById(this.state.panelId).classList.add('active');
      document.getElementById(this.state.contentId).classList.add('active');
      document.getElementById(this.state.buttonId).classList.add('active');
    } else {
      document.getElementById(this.state.panelId).classList.remove('active');
      document.getElementById(this.state.contentId).classList.remove('active');
      document.getElementById(this.state.buttonId).classList.remove('active');
    }
    this.setState({ show: show });
  }

  render() {
    return (
      <div
        id={this.state.panelId}
        className={this.state.mainClass}
      >
        <div
          id={this.state.contentId}
          className={this.state.contentClass}
        >
          {this.props.children}
        </div>
        <div
          id={this.state.buttonId}
          className={this.state.buttonClass}
        >
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.toggle}
            >
              <MenuIcon />
            </Button>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}