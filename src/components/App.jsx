import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { servicePhoto } from "api/services";

export class App extends Component {
  state = {
    images: []
  }

  addImages = async arr => {
    try {
      const response = await servicePhoto(arr);
      this.setState({
        images: response.hits
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Searchbar handlerSubmit={this.addImages} />
        <ImageGallery data={this.state.images} />
        <Button />
        <Loader />
      </div>
    )
  }
}
