import {View, Image, StyleSheet, Pressable} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Expositor} from '../../../core/entities-paso-5/api.entity';
import {RootStackParams} from '../../navigations/Navigation';

interface Props {
  expositor: Expositor;
  height?: number;
  width?: number;
}

export const ApiPoster = ({expositor, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {expositoresId: expositor.id})
      }
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={{
            uri: expositor.foto
              ? expositor.foto
              : 'http://feria.programatupotencial.com/Logotipos/user.png',
          }}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imagecontainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
