import PreviewImage from "../PreviewImage";

const SocialGraphics = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861102412795966/491_1080x1920_instastory1.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861102643499018/491_1600x900_twitter_instream3.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861102878363718/491_1600x900_twitter_instream5.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861101674602558/484_igstory2.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861101922062446/484_twitter_instream1.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861102156959824/484_twitter_instream3.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861103100678144/Facebook_banner_483.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861103352324177/Instastory3_483.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861103662698507/In-stream_twitter3_483.jpg",
  ];

  return (
    <div>
      <h2>SOCIAL GRAPHICS</h2>
      <p>
        A collection of social graphics (including Instagram, Twitter, and
        Facebook) that were created to promote Ploughshares’ seasonal
        publication.
      </p>
      <div className="pictureCollection">
        {images.map((imageURL, i) => (
          <PreviewImage src={imageURL} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SocialGraphics;
