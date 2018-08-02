import React, { Component } from 'react'
import { View } from 'react-native';

export default  class RadioGroup extends Component{
    constructor(props){
      super(props)

      this.state = {
          selectedIndex: this.props.selectedIndex,
      }
      this.onSelect = this.onSelect.bind(this)
    }

    onSelect(index, value){
      this.setState({
        selectedIndex: index
      })
      this.props.onSelect(index, value)
    }

    render() {
      var radioButtons = React.Children.map(this.props.children, (radioButton, index) => {
        let isSelected = this.state.selectedIndex == index
        const onPress = (index, value) => this.onSelect(index, value)
        return (
          <View style={{flexDirection: 'row', padding: 5}}>
            {
              React.cloneElement(radioButton, {
                index: index,
                isSelected: isSelected,
                onPress: onPress,
                ...radioButton.props,
                ...this.props
              })
            }

            {radioButton.props.children} {/*TextView */}
          </View>
        )
      })

      return(
        <View>
          {radioButtons}
        </View>
      )
    }
}

RadioGroup.defaultProps = {
    size: 20,
    thickness: 1,
}
