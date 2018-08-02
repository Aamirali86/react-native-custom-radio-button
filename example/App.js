import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton, RadioGroup } from 'react-native-custom-radio-button';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
        text: 'Nothing selected'
    }
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(index, value){
    console.log(index)
    this.setState({
      text: `${value}`
    })
  }

  render(){
    return(
      <View style={styles.container}>

      {/* Simple Radio group */}
        <RadioGroup
          onSelect = {(index, value) => this.onSelect(index, value)}
        >
          <RadioButton value={'React native'}>
            <Text style={styles.title}>React native</Text>
          </RadioButton>

          <RadioButton value={'Javascript'}>
            <Text style={styles.title}>Javascript</Text>
          </RadioButton>

          <RadioButton value={'Flexbox'}>
            <Text style={styles.title}>Flexbox</Text>
          </RadioButton>

        </RadioGroup>
              
        <Text style={styles.text}>{this.state.text}</Text>


        <View style={{marginTop: 50}} />


        {/* Custom Radio group */}
        <RadioGroup
          size={24}
          thickness={2}
          selectedIndex={1}
          onSelect = {(index, value) => this.onSelect(index, value)}
        >
          <RadioButton 
            value='Red color'
            color='red'>
            <Text style={styles.title}>Red color</Text>
          </RadioButton>

          <RadioButton 
            value='Green color'
            color='green'>
            <Text style={styles.title}>Green color</Text>
          </RadioButton>

          <RadioButton 
            value='Blue color'
            color='blue'>
            <Text style={styles.title}>Blue color</Text>
          </RadioButton>
        </RadioGroup>
        
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
      marginTop: 40,
      padding: 20
  },
  title: {
    marginLeft: 10, 
    marginTop: 2
  },
  text: {
      marginTop: 15,
      paddingLeft: 10,
      fontSize: 14,
  },
})