import React from "react";
import axios from "axios";
import FactionList from "./FactionList";
import SingleFaction from "./SingleFaction";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      factions: [],
      selectedFaction: {},
    };
    this.selectFaction = this.selectFaction.bind(this);
    this.resetSelection = this.resetSelection.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/api/faction");
      const factions = res.data;
      this.setState({ factions });
    } catch (ex) {
      console.log(ex);
    }
  }

  async selectFaction(factionId) {
    try {
      const res = await axios.get(`/api/faction/${factionId}`);
      const selectedFaction = res.data;
      this.setState({ selectedFaction });
    } catch (ex) {
      console.log(ex);
    }
  }

  //Doubtful that this needs to be async or in a try catch but not the priority here
  async resetSelection() {
    try {
      const selectedFaction = {};
      this.setState({ selectedFaction });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <div id="main" className="container">
        {this.state.selectedFaction.id ? (
          <SingleFaction
            selectedFaction={this.state.selectedFaction}
            resetSelection={this.resetSelection}
          />
        ) : (
          <FactionList
            factions={this.state.factions}
            selectFaction={this.selectFaction}
          />
        )}

        {this.state.selectedFaction.id ? (
          <p onClick={() => this.resetSelection()}>
            Click here to return to factions
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
