import Footer from "../../component/Footer/Footer";
import {Text, View,Image} from "@tarojs/components";

import './publish.scss'

export default function Publish() {

    return (
      <View className='publish'>
        <Text>publish</Text>
        <View className={'publish__body'}>
          <Image src={'https://i.postimg.cc/GhDTz62d/code.jpg'} className={'publish__body__img'}/>
        <Footer class='footer' />
        </View>
      </View>
    )
}
