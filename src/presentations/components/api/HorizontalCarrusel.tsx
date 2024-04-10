import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import {Expositor} from '../../../core/entities-paso-5/api.entity';
import {ApiPoster} from './ApiPoster';
import {useEffect, useRef} from 'react';

interface Props {
  expositor: Expositor[];
  nombre?: string;
  loadNextPage?: () => void;
}
export const HorizontalCarrusel = ({
  expositor,
  nombre,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [expositor]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (isEndReached) return;
    isLoading.current = true;
    //cargar siguientes expositores
    loadNextPage && loadNextPage();
  };
  return (
    <View style={{height: nombre ? 260 : 220}}>
      {nombre && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {nombre}
        </Text>
      )}
      <FlatList
        data={expositor}
        renderItem={({item}) => (
          <ApiPoster expositor={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
