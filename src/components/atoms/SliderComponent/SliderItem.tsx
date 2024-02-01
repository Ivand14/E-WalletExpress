import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Props } from './sliderDefinitions';
import React from 'react';
import colors from '../../../constant/colors';

const { width } = Dimensions.get('screen');

const SlideItem = ({ item }: { item: Props }) => {



  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: item.image }}
        style={item.styles}
        
      />

      <View style={styles.content}>
        <Text style={styles.description}>{item.information}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height:650,
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.terciary,
    textAlign: 'center',
  },
});