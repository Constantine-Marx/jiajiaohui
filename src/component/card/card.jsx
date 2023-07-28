import React,{Component} from 'react';
import { View, Text } from '@tarojs/components';

import styles from './test.module.scss'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city:'广州海珠区',
      level:'小学/五年级',
      pay:'800元',
      id:19438,
      count:'2',
      location:'广州市海珠区工业大道北榕景路112~166号'

    }
  }
  render() {
  return (
      <View className={styles.test}>
          <Text className={styles.txt}>Hello world!</Text>
      </View>
  );
  }
}
