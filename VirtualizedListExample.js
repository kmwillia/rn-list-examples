import React, { Component } from 'react';
import { VirtualizedList, View, Text } from 'react-native';
import Immutable from 'immutable';
import { immutableSectionsData } from './data';
import styles from './styles';

export default class VirtualizedListExample extends Component {
  constructor() {
    super();
    let flatIndexCount = 0;
    this.sectionIndices = [];
    this.flatItems = immutableSectionsData.reduce((acc, value, index) => {
      this.sectionIndices.push(flatIndexCount);
      acc = acc.push(value);
      flatIndexCount += value.get('data').size + 1;
      return acc.concat(value.get('data'));
    }, Immutable.List([]));
  }

  _getItem(data, index) {
    return data.get(index);
  }

  _getItemCount(data) {
    return data.size;
  }

  _keyExtractor(item, index) {
    return 1;
  }

  _renderItem({ item, index }) {
    if(this.sectionIndices.includes(index)) return this._renderSectionHeader({ item, index });
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  }

  _renderSectionHeader({ item, index }) {
    return (
      <View style={styles.sectionHeader}>
        <Text>{item.get('key')}</Text>
      </View>
    );
  }

  render() {
    return (
      <VirtualizedList
        data={this.flatItems}
        getItem={this._getItem}
        getItemCount={this._getItemCount.bind(this)}
        renderItem={this._renderItem.bind(this)}
      />
    );
  }
}
