import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, coltext, colbtn, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(colbtn)} onPress={onPress}>
      <Text style={styles.title(coltext)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: colbtn =>(
    {
      backgroundColor: colbtn === 'orange' ? '#FF8400' :  colbtn ,
      paddingVertical: 10,
      borderRadius: 10,
    }
  ),
  title:coltext=>(
    {
      color: coltext === 'white' ? 'white' : 'black',
      fontSize: 22,
      textAlign: 'center',
      fontFamily:'Nunito-Bold',
      
    }
  )
});
