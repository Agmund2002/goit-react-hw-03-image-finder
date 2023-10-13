import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({data}) => {
    return (
        <ul>
            {data.map(({id, webformatURL}) => (
                <li key={id}>
                    <ImageGalleryItem url={webformatURL}  />
                </li>
            ))}
        </ul>
    )
}