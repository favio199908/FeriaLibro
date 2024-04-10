import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigations/Navigation';

import {useAp} from '../../hooks/useApi-paso-4/useAp';
import {ApHeader} from '../../components/ap/ApHeader';
import {ApDetails} from '../../components/ap/ApDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {expositoresId} = route.params;
  // const {expositoresId} = useRoute().params;
  console.log({expositoresId});
  const {isLoading, movie} = useAp(expositoresId);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      <ApHeader
        foto={movie!.foto}
        nombre={movie!.nombre}
        profesion={movie!.profesion}
      />
      <ApDetails expositor={movie!} />
    </ScrollView>
  );
};
