import React from 'react';
import { View, Image } from 'react-native';

const imagePath: any = {
  Iron: require('../../../../../images/ranked_emblems/IRON.png'),
  Bronze: require('../../../../../images/ranked_emblems/BRONZE.png'),
  Silver: require('../../../../../images/ranked_emblems/SILVER.png'),
  Gold: require('../../../../../images/ranked_emblems/GOLD.png'),
  Platinum: require('../../../../../images/ranked_emblems/PLATINUM.png'),
  Diamond: require('../../../../../images/ranked_emblems/DIAMOND.png'),
  Master: require('../../../../../images/ranked_emblems/MASTER.png'),
  Grandmaster: require('../../../../../images/ranked_emblems/GRANDMASTER.png'),
  Challenger: require('../../../../../images/ranked_emblems/CHALLENGER.png'),
};

const TierImageComponent = (props: any) => {
  const { imageContainer, imageStyle, tier } = props;

  return tier === 'Unranked' ? (
    <View style={imageContainer}>
      <Image style={{ ...imageStyle, opacity: 0.3 }} source={imagePath.Iron} />
    </View>
  ) : (
    <View style={imageContainer}>
      <Image style={imageStyle} source={imagePath[tier]} />
    </View>
  );
};

export default TierImageComponent;
