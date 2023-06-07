// 引入React组件
import {Component} from "react";
// 引入Taro UI组件库中的AtCard组件
import {AtCard} from "taro-ui";
import {ScrollView, View} from "@tarojs/components";

// 引入样式文件
import './Body.scss'
// 引入Taro UI组件库中的ScrollView和View组件

// 定义Body组件
class Body extends Component {

  // 点击事件处理函数
  onActionClick() {
    console.log('开始搜索')
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  // 构造函数，初始化组件状态
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 1, title: 'Card 1'},
        {id: 2, title: 'Card 2'},
        {id: 3, title: 'Card 3'},
        {id: 4, title: 'Card 4'},
        {id: 5, title: 'Card 5'},
        {id: 6, title: 'Card 6'},
        {id: 7, title: 'Card 7'},
        {id: 8, title: 'Card 8'},
        {id: 9, title: 'Card 9'},
        {id: 10, title: 'Card 10'},
        {id: 11, title: 'Card 11'},
        {id: 12, title: 'Card 12'},
        {id: 13, title: 'Card 13'},
        {id: 14, title: 'Card 14'},
        {id: 15, title: 'Card 15'},
        {id: 16, title: 'Card 16'},
        {id: 17, title: 'Card 17'},
        {id: 18, title: 'Card 18'},
        {id: 19, title: 'Card 19'},
        {id: 20, title: 'Card 20'},
      ],
      visibleCards: [], // 可见的卡片
      nextIndex: 0, // 下一个卡片的索引
      batchSize: 10, // 每次加载的卡片数量
    };
  }

  // 组件挂载后执行的函数
  componentDidMount() {
    this.showNextBatch();
  }

  // 加载下一批卡片
  showNextBatch = () => {
    const {cards, nextIndex, batchSize} = this.state;
    const endIndex = nextIndex + batchSize;
    const visibleCards = cards.slice(nextIndex, endIndex);
    this.setState({
      visibleCards: [...this.state.visibleCards, ...visibleCards],
      nextIndex: endIndex,
    });
  };

  // 渲染函数
  render() {

    const {visibleCards} = this.state;
    return (
      <View>
        <ScrollView
          className='body'
          scrollY='true'
          lowerThreshold='20'
          onScrollToLower={this.showNextBatch}
          enableBackToTop='true'
        >
          {
            visibleCards.map((card) => (
                <AtCard
                  key={card.id}
                  title={card.title}
                >
                  Card content
                </AtCard>
              )
            )
          }
        </ScrollView>
      </View>
    )
  }
}

// 导出Body组件
export default Body;
