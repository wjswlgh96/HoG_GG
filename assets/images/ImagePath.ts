const basePath = '../images/ranked_emblems/';

const ImagePath = () => {
  const image: any = {
    Iron: require(`${basePath}IRON.png`),
    Bronze: require(`${basePath}BRONZE.png`),
    Silver: require(`${basePath}SILVER.png`),
    Gold: require(`${basePath}GOLD.png`),
    Platinum: require(`${basePath}PLATINUM.png`),
    Diamond: require(`${basePath}DIAMOND.png`),
    Master: require(`${basePath}MASTER.png`),
    Grandmaster: require(`${basePath}GRANDMASTER.png`),
    Challenger: require(`${basePath}CHALLENGER.png`),
  };

  return image;
};

export default ImagePath;
