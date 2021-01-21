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

export default class ServicesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: {},
      color: "",
      service: "",
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
          <p className="list-item__discount__text">Gratis 30 min</p>
        </div>
        <ListItem className="" onClick={this.props.handler}>
          <ListItemAvatar>
            <Avatar
              className="list-item__avatar"
              alt={this.props.company}
              src={this.state.logo}
            />
          </ListItemAvatar>
          <ListItemText
            className="list-item__code"
            primary={this.props.code}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
          <ListItemSecondaryAction>
            {/* <Checkbox edge="end" /> */}
            {/* <FileCopyIcon /> */}
            <i className="far fa-clone"></i>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}
