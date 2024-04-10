import {Text, View} from 'react-native';
import {useApi} from '../../hooks/useApi-paso-4/useApi';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarusel} from '../../components/api/PosterCarusel';
import {HorizontalCarrusel} from '../../components/api/HorizontalCarrusel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, expositors, agendaFecha, expositorNextPage} = useApi();
  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarusel expositors={expositors} />
        <HorizontalCarrusel
          expositor={expositors}
          nombre="expositors"
          loadNextPage={expositorNextPage}
        />
      </View>
    </ScrollView>
  );
};
