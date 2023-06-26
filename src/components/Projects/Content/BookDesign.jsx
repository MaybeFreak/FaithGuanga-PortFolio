import PageSpread from "../PageSpread";

const BookDesign = () => {
  const images = [
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1122563764043141292/2.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807220389195868/3.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807220619878441/4.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807220842188851/5.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807221093838859/6.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807221328715846/7.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807346167980092/c_h_e_e_s_e_c_a_k_e.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807221571997706/8.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807221811064842/9.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807222062718986/10.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807262680354937/11.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807263062044792/12.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807263338860544/13.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807263632465920/14.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807264018346024/15.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807264316133477/16.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807264622325911/17.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807264899141763/18.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1122563764303175740/19.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1122563764856832021/20.jpg",
    ],
    [
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807346503532734/Cover.jpg",
      "https://cdn.discordapp.com/attachments/450739294571724825/1121807345551425596/21.jpg",
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
