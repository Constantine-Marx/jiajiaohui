import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import styles from './card.module.scss';

export default function Card(props) {
  const data = {};

  return (
    <View className={`flex-row items-center ${styles['page']} ${styles['space-x-24']}`}>
      <View className={`flex-col shrink-0 ${styles['section']}`}>
        <Text className={`self-start ${styles['font_2']} ${styles['text']}`}>单号:19438</Text>
        <View className={`flex-col items-start ${styles['group_2']} ${styles['space-y-14']}`}>
          <Text className={`${styles['text_3']}`}>广州海珠区</Text>
          <Text className={`${styles['text_4']}`}>小学/五年级</Text>
        </View>
        <View className={`flex-row items-center self-start ${styles['button']} ${styles['space-x-6']}`}>
          <Text className={`${styles['font_4']} ${styles['text_7']}`}>复制</Text>
          <Image
            className={`shrink-0 ${styles['image_3']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648c7e245a7e3f0310f8f77e/648c7ea27446740011557075/16899488178601805908.png"
          />
        </View>
      </View>
      <View className={`flex-col flex-auto ${styles['space-y-12']}`}>
        <View className={`flex-row justify-between items-center`}>
          <View className={`flex-row items-center ${styles['space-x-6']}`}>
            <Image
              className={`shrink-0 ${styles['image']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648c7e245a7e3f0310f8f77e/648c7ea27446740011557075/16899488178566278114.png"
            />
            <Text className={`${styles['font_1']}`}>预计信息费收入</Text>
          </View>
          <Text className={`${styles['font_2']}`}>更新于 1天前</Text>
        </View>
        <View className={`flex-row ${styles['group']} ${styles['space-x-4']}`}>
          <Text className={`self-center ${styles['font_3']} ${styles['text_2']}`}>800元</Text>
          <Image
            className={`self-start ${styles['image_2']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648c7e245a7e3f0310f8f77e/648c7ea27446740011557075/16899488178591159256.png"
          />
        </View>
        <View className={`flex-row items-center ${styles['space-x-6']}`}>
          <Image
            className={`${styles['image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648c7e245a7e3f0310f8f77e/648c7ea27446740011557075/16899488178617303050.png"
          />
          <Text className={`${styles['font_1']}`}>订单状态</Text>
        </View>
        <View className={`flex-row ${styles['group_3']} ${styles['space-x-16']}`}>
          <Text className={`${styles['font_3']} ${styles['text_5']}`}>进行中</Text>
          <View className={`flex-col justify-start items-center ${styles['section_2']}`}>
            <View>
              <Text className={`${styles['font_4']}`}>已有</Text>
              <Text className={`${styles['text_6']}`}>2</Text>
              <Text className={`${styles['font_4']}`}>人申请</Text>
            </View>
          </View>
        </View>
        <View className={`flex-row items-center ${styles['space-x-6']}`}>
          <Image
            className={`${styles['image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648c7e245a7e3f0310f8f77e/648c7ea27446740011557075/16899488178627859839.png"
          />
          <Text className={`${styles['font_2']}`}>广州市海珠区工业大道北榕景路112~166号</Text>
        </View>
      </View>
    </View>
  );
}