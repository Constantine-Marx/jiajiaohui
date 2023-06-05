import Footer from "../../component/Footer/Footer";
import {Text, View} from "@tarojs/components";

import './publish.scss'

export default function Publish() {

    return (
      <View className='publish'>
        <Text>publish</Text>
        <View className={'publish__body'}>
        <Footer class='footer' />
        </View>
      </View>
    )
}
