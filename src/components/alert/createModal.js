import React,{useState, useContext} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

//Components

//Style
import styles from './style'

const CreateModal = (props) => {
  return (
    <View style={styles.createContainer}>
      {props.check ?
        <Text style={styles.header}>Create New Product</Text>
        :
        <Text style={styles.header}>Edit Product</Text>
      }
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeName}
          value={props.name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={props.onChangePrice}
          value={props.price}
          placeholder="Price"
        />
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeCurrency}
          value={props.currency}
          placeholder="Currency"
        />
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeImage}
          value={props.image}
          placeholder="Image link"
        />
      </View>
      <View>
        {props.check ? 
          <TouchableOpacity style={styles.createBtn} onPress={props.create} activeOpacity={0.8}>
            <Text style={styles.textWhite}>Create</Text>
          </TouchableOpacity>
          :
        <TouchableOpacity style={styles.createBtn} onPress={props.update} activeOpacity={0.8}>
          <Text style={styles.textWhite}>Update</Text>
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default CreateModal