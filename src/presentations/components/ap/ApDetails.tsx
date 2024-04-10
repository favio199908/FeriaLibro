import {Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import {FullExpositor, Salone} from '../../../core/entities-paso-5/api.entity';

interface Props {
  expositor: FullExpositor;
}

export const ApDetails = ({expositor}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Nacionalidad
        </Text>
        <Text style={{marginLeft: 5}}>{expositor.nacionalidad}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Ciudad
        </Text>
        <Text style={{marginLeft: 5}}>{expositor.ciudad}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Radicatoria
        </Text>
        <Text style={{marginLeft: 5}}>{expositor.radicatoria}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Celular
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{expositor.telefono1}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Fecha De Nacimiento
        </Text>
        <Text style={{marginLeft: 5}}>{expositor.fecha_nacimiento}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Biografia
        </Text>
        <Text style={{fontSize: 16}}>{expositor.biografia}</Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}></Text>
      </View>
    </>
  );
};
