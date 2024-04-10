import {Text, View} from 'react-native';
import {Expositor} from '../../../core/entities-paso-5/api.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {ApiPoster} from './ApiPoster';

interface Props {
  expositors: Expositor[];
  height?: number;
}

export const PosterCarusel = ({height = 440, expositors}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {expositors.map(expositor => (
          <ApiPoster key={expositor.id} expositor={expositor} />
        ))}
      </ScrollView>
    </View>
  );
};
