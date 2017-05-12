import React, { Component } from 'react';
import { VirtualizedList, View, Text } from 'react-native';
import styles from './styles';
import { typedListData } from './data';

export default class TypedListWrapper extends Component {
  render() {
    let sectionData = typedListData.get('sections');
    let aggregateRowData = typedListData.get('rowsForSections');
    let sectionIdentifier = typedListData.get('sectionKey');
    return (
      <TypedList
        listData={{sectionData, aggregateRowData, sectionIdentifier}}
        renderRow={(rowData) => {
          return (
            <View style={styles.item}>
              <Text>{rowData.get('name')}</Text>
            </View>
          );
        }}
        renderSectionHeader={(sectionData) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{sectionData.get('title')}</Text>
            </View>
          );
        }}
      />
    );
  }
}

class TypedList extends Component {
  _flattenData() {
    let {sectionData, aggregateRowData, sectionIdentifier} = this.props.listData;
    let flatList = [];
    sectionData.forEach(section => {
      flatList.push({
        type: 'section',
        data: section
      });
      aggregateRowData.get(section.get(sectionIdentifier)).forEach(row => {
        flatList.push({
          type: 'row',
          data: row
        });
      });
    });
    return flatList;
  }

  _keyExtractor(item, index) {
    return index;
  }

  _getItem(data, index) {
    return data[index];
  }

  _getItemCount(data) {
    return data.length;
  }

  _renderItem({ item, index }) {
    if(item.type === 'row') {
      return this.props.renderRow(item.data);
    }
    return this.props.renderSectionHeader(item.data);
  }

  render() {
    return (
      <VirtualizedList
        data={this._flattenData()}
        keyExtractor={this._keyExtractor}
        getItem={this._getItem}
        getItemCount={this._getItemCount}
        renderItem={this._renderItem.bind(this)}
      />
    );
  }
}