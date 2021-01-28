import React, { Component } from "react";
import "./faq-download-list-item.styles.scss";
import felyxlogo from "../../assets/img/logos/logo_felyx.svg";
import checklogo from "../../assets/img/logos/logo_check.svg";
import gologo from "../../assets/img/logos/logo_go.png";
import playstore from "../../assets/img/download_locations/Google_Play_Store_Badge_EN.svg";
import appstore from "../../assets/img/download_locations/App_Store_Badge_EN.svg";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default class ServicesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: {},
      color: "",
      service: "",
      androidLink: "",
      iosLink: "",
    };
  }

  setCompany() {
    const company = this.props.company;
    switch (company) {
      case "Felyx":
        this.setState({
          logo: felyxlogo,
          color: "felyx-bg-color",
          androidLink:
            "https://play.google.com/store/apps/details?id=com.felyx.android",
          iosLink: "https://apps.apple.com/app/id1250107307",
        });
        break;
      case "Check":
        this.setState({
          logo: checklogo,
          color: "check-bg-color",
          androidLink:
            "https://play.google.com/store/apps/details?id=app.ridecheck.android",
          iosLink: "https://apps.apple.com/NL/app/id1484477681",
        });
        break;
      case "Go Share":
        this.setState({
          logo: gologo,
          color: "go-bg-color",
          androidLink:
            "https://play.google.com/store/apps/details?id=nl.gosharing.gourban.app",
          iosLink: "https://apps.apple.com/nl/app/go-sharing/id1477465763",
        });
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
      <div className="download-list-item ">
        <ListItem className="" onClick={this.props.handler}>
          <ListItemAvatar>
            <Avatar
              className="download-list-item__avatar"
              alt={this.props.company}
              src={this.state.logo}
            />
          </ListItemAvatar>
          <ListItemText
            className="download-list-item__code"
            primary={this.props.code}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
          <div className="download-list">
            <span>
              <a
                className="download-list--android"
                href={this.state.androidLink}
                target="_blank"
              >
                <img src={playstore} />
              </a>
            </span>
            <span>
              <a
                className="download-list--ios"
                target="_blank"
                href={this.state.iosLink}
              >
                <img src={appstore} />
              </a>
            </span>
          </div>
        </ListItem>
        <hr />
      </div>
    );
  }
}
