import PageSpread from "../PageSpread";

const BookDesign = () => {
  const images = [
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250371004805140/2.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250371281637497/3.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250371516506173/4.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250371747196938/5.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250371994669088/6.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250372275675156/7.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/142745451207065600/1121400431516594318/FuckUFaith.jpg", // REPLACE THIS LINK
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250372514754582/8.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250372791586836/9.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250373047427163/10.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250472536309810/11.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250472783786054/12.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250473085784144/13.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250473345822810/14.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250473605877841/15.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250473870098562/16.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250474188877844/17.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121250474482487346/18.jpg",
    ],
  ];

  return (
    <div>
      <h2>BOOK DESIGN</h2>
      <p>
        Some spreads from a final project for one of my design classes. We were
        assigned with designing a thirty-six paged bake book that included 3
        cake and 3 cupcake recipes.
      </p>
      <a
        id="BookDownload"
        href="\src\assets\BookDesign\CookbookLayout_EmersonDesignProject.pdf"
        download
      >
        Download full book
      </a>

      <div className="bookDesign">
        {images.map((imagePairs, i) => (
          <PageSpread images={imagePairs} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BookDesign;
