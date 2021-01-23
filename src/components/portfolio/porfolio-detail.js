import React, { Component } from "react";
import axios from "axios";

export default class PorfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      porfolioItem: {},
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://jvazquez.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          porfolioItem: response.data.portfolio_item,
        });
      })
      .catch((error) => {
        console.log("getting Item detail", error);
      });
  }

  render() {
    const {
      banner_image_url,
      description,
      id,
      logo_url,
      name,
      position,
      thumb_image_url,
      url,
    } = this.state.porfolioItem;

    const logoStyles = {
      width: "200px"
    }

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPositon: "center center"
    }

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}> 
          <img src={logo_url} style={logoStyles}/>
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
