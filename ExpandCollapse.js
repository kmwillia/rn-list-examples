import React, { Component } from 'react';
import { VirtualizedList, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import { sectionsData } from './data';

export default class ExpandCollapse extends Component {
  constructor() {
    super();
    this.state = {
      sectionsExpanded: {},
    };
  }

  _getData() {
    let flatList = [];
    sectionsData.forEach(section => {
      let sectionIndex = flatList.length;
      flatList.push({
        meta: {
          type: 'section',
          sectionIndex: sectionIndex,
        },
        data: section,
      });
      if(this.state.sectionsExpanded[sectionIndex]) {
        section.data.forEach(item => {
          flatList.push({
            meta: {
              type: 'item',
              section: sectionIndex,
            },
            data: item,
          });
        });
      }
    });
    return flatList;
  }

  _keyExtractor(item, index) {
    return index;
  }

  _renderItem({ item, index }) {
    switch(item.meta.type) {
      case 'section':
        return (
          <TouchableOpacity onPress={this._toggleSection.bind(this, index)}>
            <View style={styles.sectionHeader}>
              <Text>{item.data.key}</Text>
            </View>
          </TouchableOpacity>
        );
      case 'itemDivider':
        return (
          <View style={{ height: 0, borderBottomWidth: 1, borderBottomColor: 'pink' }}></View>
        );
      case 'item':
        return (
          <View style={styles.item}>
            <Text>{item.data}</Text>
          </View>
        );
    }
  }

  _toggleSection(sectionIndex) {
    this.setState({
      sectionsExpanded: {
        ...this.state.sectionsExpanded,
        [sectionIndex]: !this.state.sectionsExpanded[sectionIndex],
      },
    });
  }

  render() {
    return (
      <VirtualizedList
        data={this._getData()}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem.bind(this)}
        maxToRenderPerBatch={15}
        initialNumToRender={20}
      />
    );
  }
}