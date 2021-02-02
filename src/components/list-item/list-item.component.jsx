import React, { Component } from "react";
import "./list-item.styles.scss";
import "../../utils/variables.scss";
import felyxlogo from "../../assets/img/logos/logo_felyx.svg";
import checklogo from "../../assets/img/logos/logo_check.svg";
import gologo from "../../assets/img/logos/logo_go.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default class ServicesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: {},
      color: "",
      service: "",
      copied: false,
    };
  }

  setCompany() {
    const company = this.props.company;
    switch (company) {
      case "Felyx":
        this.setState({ logo: felyxlogo, color: "felyx-bg-color" });
        break;
      case "Check":
        this.setState({ logo: checklogo, color: "check-bg-color" });
        break;
      case "Go Share":
        this.setState({ logo: gologo, color: "go-bg-color" });
        break;
      default:
        break;
    }
  }

  setCopied = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 300);
  };

  componentDidMount() {
    this.setCompany();
  }
  render() {
    return (
      <div
        className={
          this.props.id === this.props.active
            ? "list-item center selected"
            : "list-item center "
        }
      >
        <div className={"list-item__discount " + this.state.color}>
          <p className="list-item__discount__text">{this.props.discountType}</p>
        </div>
        <ListItem className="" onClick={this.props.handler}>
          <ListItemAvatar>
            <Avatar
              className="list-item__avatar"
              alt={this.props.company}
              src={this.state.logo}
            />
          </ListItemAvatar>
          <CopyToClipboard text={this.props.code}>
            <ListItemText
              className="list-item__code"
              primary={this.props.code}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              onClick={() => {
                this.setCopied();
                this.props.handleOpen();
              }}
            />
          </CopyToClipboard>

          <ListItemSecondaryAction>
            <CopyToClipboard text={this.props.code}>
              <i
                className={
                  this.state.copied ? "far fa-clone copied" : "far fa-clone"
                }
                onClick={() => {
                  this.setCopied();
                  this.props.handleOpen();
                }}
              ></i>
            </CopyToClipboard>
          </ListItemSecondaryAction>
        </ListItem>
        <Snackbar
          open={this.props.alertStatus}
          autoHideDuration={1500}
          onClose={this.props.handleClose}
        >
          <Alert severity="success">Code gekopieerd!</Alert>
        </Snackbar>
      </div>
    );
  }
}
