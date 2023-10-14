import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  modalOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  modalClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { url, src, alt } = this.props;

    return (
      <button type="button" onClick={this.modalOpen}>
        <img src={url} alt={alt} loading="lazy" />
        <Modal src={src} alt={alt} isOpen={this.state.isOpen} handlerClose={this.modalClose} />
      </button>
    );
  }
}
