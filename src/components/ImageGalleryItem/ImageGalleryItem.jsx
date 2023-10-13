export const ImageGalleryItem = ({url, alt = 'photo'}) => {
    return (
        <img src={url} alt={alt} />
    )
}