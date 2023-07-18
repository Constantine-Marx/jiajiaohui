import {View} from '@tarojs/components'
import './index.scss'
import Header from "../../containers/Header/Header";
import Footer from '../../component/Footer/Footer';
import Body from "../../containers/Body/Body";

export default function Index() {

  return (
    <View className='tutor' disableScroll='true'>
      <Header class='header' />
      <Body class='body' />
      <Footer class='footer' />
    </View>
  )
}
