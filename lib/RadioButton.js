import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class RadioButton extends Component{
    constructor(props){
      super(props)
    }

    unselectedRadioStyle(){
      return {
        height: this.props.size,
	      width: this.props.size,
	      borderRadius: this.props.size / 2,
	      borderWidth: this.props.thickness,
        borderColor: this.props.color,
      }
    }

    selectedRadioStyle(){
      return {
        height: this.props.size / 2,
        width: this.props.size / 2,
        borderRadius: this.props.size / 4,
        backgroundColor: this.props.color,
      }
    }

    render(){
      return(
        <View style={[this.props.style, {opacity: this.props.disabled ? 0.4 : 1}]}>
          <TouchableWithoutFeedback
            disabled={this.props.disabled}
            onPress={() => {
              this.props.onPress(this.props.index, this.props.value)}
            }
          >
            <View style={[styles.radio, this.unselectedRadioStyle()]}>
              {this.props.isSelected ? <View style={this.selectedRadioStyle()} /> : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
}

let styles = StyleSheet.create({
  radio:{
	  alignItems: 'center',
	  justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    alignItems: 'center',
	  justifyContent: 'center',
  }
})

RadioButton.defaultProps = {
  color: '#007AFF'
}
