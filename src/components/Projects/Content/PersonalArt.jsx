import PreviewImage from "../PreviewImage";

const PersonalArt = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/450739294571724825/1116870729888174212/koi_fish_green.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116870730194370632/koi_fish_orange.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116870730479571054/koi_fish_purple.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116870730819321986/koi_fish_red.jpg",
    "https://cdn.discordapp.com/attachments/450739294571724825/1116870731129688084/koi_fish_yellow.jpg",
  ];

  return (
    <div>
      <h2>PERSONAL ART</h2>
      <p>
        Koi fish are one of my favorite things to digitally design, so I have
        created a collection of them during my free time!
      </p>
      <div className="pictureCollection">
        {images.map((imageURL, i) => (
          <PreviewImage src={imageURL} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PersonalArt;
