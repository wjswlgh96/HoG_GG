import React from 'react';
import { View, Image } from 'react-native';

import ImagePath from '../../../../../../../../../../assets/images/ImagePath';

const TierImageComponent = (props: any) => {
  const { imageContainer, imageStyle, tier } = props;
  const imagePath = ImagePath();

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
