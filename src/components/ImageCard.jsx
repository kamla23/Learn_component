function ImageCard({ link, img, title }) {
  return (
    <div>
      <a href={link}>
        <img src={img} alt={title} width="200" />
      </a>
      <p>{title}</p>
    </div>
  );
}

export default ImageCard;