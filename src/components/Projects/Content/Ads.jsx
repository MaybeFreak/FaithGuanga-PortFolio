import PreviewImage from "../PreviewImage";

const Ads = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861932411027466/EWCOneMonthCountdown-1080x1080_instagrampost1.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861933979697192/LitHub_Package_Ad-_Instagram_Promotion2_1080x1920.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861932822077470/EWCOneMonthCountdown-1080x1080_instagrampost2.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861934298468382/Mass_Poetry_Ad1.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116861933514133666/EWCOneMonthCountdown-1600x900_twitter2.jpg",
  ];

  return (
    <div>
      <h2>ADS</h2>
      <p>
        A collection of advertisements that were created to promote
        Ploughshares’ annual Emerging Writer’s Contest.
      </p>
      <div className="pictureCollection">
        {images.map((imageURL, i) => (
          <PreviewImage src={imageURL} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Ads;
