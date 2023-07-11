import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ActivityIndicator, Image } from "react-native";

import { createStyles } from "./styles";
import { useStyleguide } from "../../../../hooks/styleguide";
import Input from "../../../../components/Input";
import { usePositions } from "../../../../hooks/positions";


import emailjs from '@emailjs/browser';
import imageSource from '../../../../assets/imgs/fotoContactResized.jpg'

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [mensagemError, setMensagemError] = useState(false)

  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false)
  

  const { setPositions } = usePositions();

  const { styleguide, responsive } = useStyleguide();
  const styles = useMemo(() => createStyles(styleguide), [styleguide]);


  const publicKey = 'TfkeqHyVN2RmMXF5O'
  const privateKey = 'KqekVAhhtSvGkCjBxwz61'
  const serviceId = 'service_m083klh'
  const templateId = 'template_urbjxbj'

  function isValidEmail(email) {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
  }

  const validadeForm = () => {

     
    if(name === '') {
      setNameError(true)
      return false
    } else {
      setNameError(false)
    }

    if (!isValidEmail(email)) {
      setEmailError(true)
      return false
    } else {
      setEmailError(false)
    }


   if(mensagem === '') {
      setMensagemError(true)
      return false
    } else {
      setMensagemError(false)
    }

   return true

   
  }

  const handleEmail = () => {
    
    if(!validadeForm()) {
      return
    } else {
      setLoading(true)
      let templateParams = {
        to_email: 'enningerlucas@gmail.com',
        from_name: name,
        email,
        message: mensagem
      }
  
      console.log(templateParams)
  
      emailjs.send(serviceId,templateId, templateParams, publicKey).then(
        function (response) {
          setEmailError(false)
          setLoading(false)
          setNameError(false)
          setMensagemError(false)
          alert('Mensagem enviada com sucesso')
          setEmail('')
          setName('')
          setMensagem('')
        },
        function (error) { 
          console.log('FAILED...', error);
          setLoading(false)
          alert('Erro ao enviar a mensagem, tente novamente')
        }
      )
    }

   

  }

  return (
    <View
      onLayout={(e) => {
        setPositions((prevState) => {
          return { ...prevState, contact: e.nativeEvent.layout.y };
        });
      }}
      style={[styles.container,{flexDirection: responsive === 'web' ? 'row' : 'column' }]}
    >
      {responsive === "web" && (
        <View style={styles.containerLeft}>
          <Text style={styles.textTitle}>Fale Conosco</Text>
          <Image source={imageSource} style={styles.imgPlaceHolder} />
        </View>
      )}

      {responsive === 'mobile' &&   <Text style={styles.textTitle}>Fale Conosco</Text>}
      <View
        style={[
          styles.containerRight,
          {
            width: responsive === "mobile" ? "100%" : "55%",
            minWidth: 450,
          },
        ]}
      >
        <Input textError={'* Campo obrigatório'} error={nameError}  title="Nome" value={name} setValue={setName} />
        <Input textError={'* Email inválido'} error={emailError} title="E-mail" value={email} setValue={setEmail} />
        <Input
        textError={'* Campo obrigatório'} 
        error={mensagemError}
          multiline={true}
          title="Mensagem"
          value={mensagem}
          setValue={setMensagem}
        />

        <Pressable
          style={styles.button}
          onPress={() => handleEmail()}
        >
         {loading ? <ActivityIndicator size='small' color='white'/> :  <Text style={styles.buttonText}>Enviar</Text>}
        </Pressable>
      </View>
    </View>
  );
};

export default Contato;
