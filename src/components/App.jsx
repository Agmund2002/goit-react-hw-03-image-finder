import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { servicePhoto } from 'api/services';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.addImages();
    }
  }

  async addImages() {
    try {
      const { inputValue, page } = this.state;
      const response = await servicePhoto(inputValue, page);
      this.setState({
        images: [...this.state.images, ...response.hits],
      });
    } catch (error) {
      console.log(error);
    }
  }

  getInputValue = value => {
    this.setState({
      images: [],
      inputValue: value,
      page: 1
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      }
    })
  };

  render() {
    return (
      <div>
        <Searchbar handlerSubmit={this.getInputValue} />
        <ImageGallery data={this.state.images} />
        <Button handlerClick={this.loadMore} />
        <Loader />
      </div>
    );
  }
}
