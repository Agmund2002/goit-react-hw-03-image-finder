import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({data}) => {
    return (
        <ul>
            {data.map(({id, webformatURL, largeImageURL, tags}) => (
                <li key={id}>
                    <ImageGalleryItem url={webformatURL} src={largeImageURL} alt={tags[0]} />
                </li>
            ))}
        </ul>
    )
}