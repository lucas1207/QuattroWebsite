import React, { useMemo, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import {createStyles} from './styles';
import { useStyleguide } from '../../../../hooks/styleguide';
import Input from '../../../../components/Input';

const Contato = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const {styleguide, responsive} = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);

  return (
  <View style={styles.container}>
    <View style={styles.containerLeft}>
      <Text style={styles.textTitle}>
        Fale Conosco
      </Text>
      <View style={styles.imgPlaceHolder}/>
    </View>

    <View style={styles.containerRight}>
      <Input 
        title = 'Nome'
        value = {name}
        setValue = {setName}
      />
      <Input 
        title = 'E-mail'
        value = {email}
        setValue={setEmail}
      />
      <Input 
        multiline = {true}
        title = 'Mensagem'
        value={mensagem}
        setValue={setMensagem}
      />

      <Pressable 
        style={styles.button}
        onPress={()=> alert('Mensagem enviada! Obrigado.')}
        >
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
    </View>
  </View>
  );
}

export default Contato;