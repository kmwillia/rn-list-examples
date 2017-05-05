import React, { Component } from 'react';
import { VirtualizedList, View, Text } from 'react-native';
import Immutable from 'immutable';
import { immutableSectionsData } from './data';
import styles from './styles';

export default class VirtualizedListExample extends Component {
  _getItem(data, index) {
    return data.get(index);
  }

  _getItemCount(data) {
    const count = data.reduce((acc, value, index) => {
      return acc + value.get('data').size;
    }, 0)
    return count + data.size;
  }

  _keyExtractor(item, index) {
    return item.get('key');
  }

  _renderItem({ item, index }) {
    console.log(item, index);
    return (
      <View style={styles.item}>
        <Text>{item.get('key')}</Text>
      </View>
    );
  }

  render() {
    return (
      <VirtualizedList
        data={immutableSectionsData}
        getItem={this._getItem}
        getItemCount={this._getItemCount}
        renderItem={this._renderItem}
      />
    );
  }
}
