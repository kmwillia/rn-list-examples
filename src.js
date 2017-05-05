import React, { Component } from 'react';
import { StyleSheet, Picker, View } from 'react-native';
import styles from './styles';
import FlatListExample from './FlatListExample';
import SectionListExample from  './SectionListExample';
import VirtualizedListExample from './VirtualizedListExample';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: 'virtual',
    };
  }

  _onListSelect(itemValue, itemIndex) {
    this.setState({
      list: itemValue,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.list}
          onValueChange={this._onListSelect.bind(this)}
          style={styles.picker}
          mode={'dropdown'}>
          <Picker.Item label={'FlatList'} value={'flat'} />
          <Picker.Item label={'SectionList'} value={'section'} />
          <Picker.Item label={'VirtualizedList'} value={'virtual'} />
        </Picker>
        {this.state.list === 'flat' ? <FlatListExample /> : null}
        {this.state.list === 'section' ? <SectionListExample /> : null}
        {this.state.list === 'virtual' ? <VirtualizedListExample /> : null}
      </View>
    );
  }
}