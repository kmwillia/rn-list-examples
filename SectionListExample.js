import React, { Component } from 'react';
import { SectionList, View, Text } from 'react-native';
import { sectionsData } from './data';
import styles from './styles';

export default class SectionListExample extends Component {
  _keyExtractor(item, index) {
    return item;
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  }

  _renderSectionHeader({ section }) {
    return (
      <SectionHeader label={section.key} style={styles.sectionHeader} />
    );
  }

  render() {
    return (
      <SectionList
        sections={sectionsData}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
      />
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}