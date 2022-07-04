import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList/ImageList";

import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
  state = { imagesData: [] };

  async onSearchSubmit(term) {
    const res = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });

    this.setState({ imagesData: res.data.results });
  }

  render() {
    return (
      <div className="App">
        <SearchBar test="test" onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList imagesData={this.state.imagesData} />
        <p>{this.state.imagesData.length}</p>
      </div>
    );
  }
}

export default App;
