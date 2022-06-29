// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: "/assets/composers/bach.png" },
    { image: "/assets/composers/beethoven.png" },
    { image: "/assets/composers/brahms.png" },
    { image: "/assets/composers/elgar.png" },
    { image: "/assets/composers/mahler.png" },
    { image: "/assets/composers/mendelssohn.png" },
    { image: "/assets/composers/mozart.png" },
    { image: "/assets/composers/puccini.png" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
