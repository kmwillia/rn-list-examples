import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { flatData } from './data';
import styles from './styles';

export default class FlatListExample extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  }

  _keyExtractor(item, index) {
    return item;
  }

  _onRefresh() {
    this.setState({
      refreshing: true
    });
    setTimeout(() => { this.setState({ refreshing: false }); }, 1000);
  }

  render() {
    return (
      <FlatList
        data={flatData}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onRefresh={this._onRefresh.bind(this)}
        refreshing={this.state.refreshing}
      />
    );
  }
}