/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './src/components/VideoItem';
import data from './src/data.json';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./src/images/logo.png')} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon name='videocam' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name='search' size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name='account-circle' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video) => <VideoItem video={video.item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() =>  <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} /> }
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name='home' size={25} color='red'/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name='whatshot' size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name='subscriptions' size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name='notifications' size={25} />
            <Text style={styles.tabTitle}>Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name='folder' size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  body: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    color: '#3C3C3C',
    paddingTop: 2,
  }
});
