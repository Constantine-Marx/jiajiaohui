import React from 'react';
import {Text, View} from "@tarojs/components";
import './publish.scss'
import {Row, Col, Input, Form, Cell} from "@nutui/nutui-react-taro";
import {Button, InputNumber, TextArea, Picker} from '@nutui/nutui-react';
import store from "../../store";
import {
    createOffSelectAction, createOnSelectAction,
} from "../../store/actions";
import {AtIcon} from "taro-ui";


const frequencyList = [
    {text: '1次/周', value: '1次/周'},
    {text: '2次/周', value: '2次/周'},
    {text: '3次/周', value: '3次/周'},
    {text: '4次/周', value: '4次/周'},
    {text: '5次/周', value: '5次/周'},
    {text: '6次/周', value: '6次/周'},
    {text: '7次/周', value: '7次/周'},
]

const gradeList = [
    {
        text: '一年级',
        value: '一年级'
    },
    {
        text: '二年级',
        value: '二年级'
    },
    {
        text: '三年级',
        value: '三年级'
    },
    {
        text: '四年级',
        value: '四年级'
    },
    {
        text: '五年级',
        value: '五年级'
    },
    {
        text: '六年级',
        value: '六年级'
    },
    {
        text: '初一',
        value: '初一'
    },
    {
        text: '初二',
        value: '初二'
    },
    {
        text: '初三',
        value: '初三'

    },
    {
        text: '高一',
        value: '高一'
    },
    {
        text: '高二',
        value: '高二'
    },
    {
        text: '高三',
        value: '高三'
    }
]

const subjectList = [
    {
        value: '语文',
        label: '语文'
    },
    {
        value: '数学',
        label: '数学'
    },
    {
        value: '英语',
        label: '英语'
    },
    {
        value: '物理',
        label: '物理'
    },
    {
        value: '化学',
        label: '化学'
    },
    {
        value: '生物',
        label: '生物'
    },
    {
        value: '政治',
        label: '政治'
    },
    {
        value: '历史',
        label: '历史'
    },
    {
        value: '地理',
        label: '地理'
    },
    {
        value: '其他',
        label: '其他'
    }
]

const startDateList = [
    {
        text: "随时开始", value: "随时开始"
    },
    {
        text: '本周内', value: "本周内"
    },
    {
        text: '两周内', value: "两周内"
    },
    {
        text: '本月内', value: "本月内"
    }
]

const courseFormatList = [
    {
        text: "一对一", value: "一对一"
    },
    {
        text: "一对多", value: "一对多"
    },
    {
        text: "一对二", value: "一对二"
    },
    {
        text: "多对一", value: "多对一"
    }
]

const educationList = [
    {
        text: "本科及以上", value: "本科及以上"
    },
    {
        text: "研究生及以上", value: "研究生及以上"
    },
    {
        text: "博士及以上", value: "博士及以上"
    }
]

const genderList = [
    {
        text: "男", value: "男"
    },
    {
        text: "女", value: "女"
    }
]

const experienceList = [
    {
        text: "无要求", value: "无要求"
    },
    {
        text: "有一定经验", value: "有一定经验"
    },
    {
        text: "有丰富经验", value: "有丰富经验"
    }
]

const careerList = [
    {
        text: "兼职老师", value: "兼职老师"
    },
    {
        text: "专职老师", value: "专职老师"
    },
    {
        text: "学校老师", value: "学校老师"
    }
]

const feeList = [
    {
        text: "70/h", value: "70/h"
    },
    {
        text: "80/h", value: "80/h"
    },
    {
        text: "90/h", value: "90/h"
    },
    {
        text: "100/h", value: "100/h"
    },
    {
        text: "110/h", value: "110/h"
    },
    {
        text: "120/h", value: "120/h"
    },
    {
        text: "130/h", value: "130/h"
    },
    {
        text: "140/h", value: "140/h"
    },
    {
        text: "150/h", value: "150/h"
    }
]

export default class Publish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            gradeTitle: '请选择学生年级',
            subjectTitle: '请选择学科',
            frequencyTitle: '请选择辅导频率',
            startDateTitle: '请选择开始日期',
            formTitle: '请选择辅导形式',
            addressTitle: '请选择辅导地点',
            educationTitle: '本科',
            genderTitle: '武装直升机',
            experienceTitle: '无要求',
            careerTitle: '无要求',
            courseFormatTitle: '请选择课程形式',
            FeeTitle: '请选择课时费'
        };

    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
            console.log(store.getState())
        })
    }

    onGradeConfirm = (gradeList, value) => {
        console.log(value)
        this.setState({
            gradeTitle: value
        })
        store.dispatch(createOffSelectAction("publish_grade"))
    }

    onFeeConfirm = (feeList, value) => {
        console.log(value)
        this.setState({
            FeeTitle: value
        })
        store.dispatch(createOffSelectAction("publish_fee"))
    }
    onSubjectConfirm = (subjectList, value) => {
        this.setState({
            subjectTitle: value
        })
        store.dispatch(createOffSelectAction("publish_subject"))
    }

    onFrequencyConfirm = (frequencySelector, value) => {
        console.log(value)
        this.setState({
            frequencyTitle: value
        })
        store.dispatch(createOffSelectAction("publish_frequency"))
    }

    onStartDateConfirm = (startDateList, value) => {
        console.log(value)
        this.setState({
            startDateTitle: value
        })
        store.dispatch(createOffSelectAction("publish_startDate"))
    }

    onCourseFormatConfirm = (courseFormatList, value) => {
        console.log(value)
        this.setState({
            courseFormatTitle: value
        })
        store.dispatch(createOffSelectAction("publish_courseFormat"))
    }

    onEducationConfirm = (educationList, value) => {
        console.log(value)
        this.setState({
            educationTitle: value
        })
        store.dispatch(createOffSelectAction("publish_education"))
    }

    onGenderConfirm = (genderList, value) => {
        console.log(value)
        this.setState({
            genderTitle: value
        })
        store.dispatch(createOffSelectAction("publish_gender"))
    }

    onExperienceConfirm = (experienceList, value) => {
        console.log(value)
        this.setState({
            experienceTitle: value
        })
        store.dispatch(createOffSelectAction("publish_experience"))
    }

    onCareerConfirm = (careerList, value) => {
        console.log(value)
        this.setState({
            careerTitle: value
        })
        store.dispatch(createOffSelectAction("publish_career"))
    }

    render() {
        return (
            <View className='publish'>
                <View className='publish__parent'>
                    <View className='publish__parent__title'
                          style={
                              {
                                  margin: "20px 0 10px 20px",
                              }
                          }
                    >
                        <Text className='publish__parent__title__text'
                              style={
                                  {
                                      fontWeight: "bold",
                                      flex: "1 0 0",
                                      fontSize: "20px",
                                  }
                              }>
                            委托人信息
                        </Text>
                    </View>
                    <View style={{
                        display: "flex",
                        width: "90%",
                        padding: "0 0 10px 0",
                        margin: "0 auto",
                        align: "center",
                        backgroundColor: "white",

                    }}>
                        <Row>
                            <View
                                style={
                                    {
                                        fontWeight: "bold",
                                        margin: "20px 15px", // or "15pt"
                                        fontSize: "16px",
                                    }
                                }>
                                <Col span="8">
                                    <Text id="name1">
                                        委托人姓名
                                    </Text>
                                </Col>
                            </View>
                            <View style={
                                {
                                    margin: "0 15px 20px 0", // or "15pt"
                                }
                            }>
                                <Col span="14">
                                    <Input placeholder="请输入姓名"/>
                                </Col>
                            </View>
                        </Row>
                    </View>
                </View>

                <View className='publish__student'>
                    <View className='publish__student__title'
                          style={
                              {
                                  margin: "20px 0 10px 20px",
                                  padding: "10px 0 0 0"
                              }
                          }
                    >
                        <Text className='publish__parent__title__text'
                              style={
                                  {
                                      fontWeight: "bold",
                                      flex: "1 0 0",
                                      fontSize: "20px",
                                  }
                              }>
                            学生情况信息
                        </Text>
                    </View>

                    <View className={"publish__student__info"}
                          style={
                              {
                                  width: "90%",
                                  margin: "0 auto",
                              }
                          }>
                        <View className='publish'>
                            <View className='publish__student'>
                                <View className='publish__form'>
                                    <Form>
                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        *
                                                    </Text>
                                                    <Text id='name1'>学生年级</Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(
                                                                createOnSelectAction(
                                                                    'publish_grade'
                                                                )
                                                            )
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.gradeTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(
                                                            gradeList,
                                                            value
                                                        ) =>
                                                            this.onGradeConfirm(
                                                                gradeList,
                                                                value
                                                            )
                                                        }
                                                        options={gradeList}
                                                        visible={store.getState().isPublishGrade}
                                                        onClose={() =>
                                                            store.dispatch(
                                                                createOffSelectAction(
                                                                    'publish_grade'
                                                                )
                                                            )
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        *
                                                    </Text>
                                                    <Text id='name1'>学生科目</Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(
                                                                createOnSelectAction(
                                                                    'publish_subject'
                                                                )
                                                            )
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.subjectTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(
                                                            subjectList,
                                                            value
                                                        ) =>
                                                            this.onSubjectConfirm(
                                                                subjectList,
                                                                value
                                                            )
                                                        }
                                                        options={subjectList}
                                                        visible={store.getState().isPublishSubject}
                                                        onClose={() =>
                                                            store.dispatch(
                                                                createOffSelectAction(
                                                                    'publish_subject'
                                                                )
                                                            )
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        *
                                                    </Text>
                                                    <Text id='name1'>上课频率</Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(
                                                                createOnSelectAction(
                                                                    'publish_frequency'
                                                                )
                                                            )
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.frequencyTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(
                                                            frequencyList,
                                                            value
                                                        ) =>
                                                            this.onFrequencyConfirm(
                                                                frequencyList,
                                                                value
                                                            )
                                                        }
                                                        options={frequencyList}
                                                        visible={store.getState().isPublishFrequency}
                                                        onClose={() =>
                                                            store.dispatch(
                                                                createOffSelectAction(
                                                                    'publish_frequency'
                                                                )
                                                            )
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name1'
                                                          space='nbsp'
                                                    >{'  开始日期'}</Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(
                                                                createOnSelectAction(
                                                                    'publish_startDate'
                                                                )
                                                            )
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.startDateTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(
                                                            startDateList,
                                                            value
                                                        ) =>
                                                            this.onStartDateConfirm(
                                                                startDateList,
                                                                value
                                                            )
                                                        }
                                                        options={startDateList}
                                                        visible={store.getState().isPublishStartDate}
                                                        onClose={() =>
                                                            store.dispatch(
                                                                createOffSelectAction(
                                                                    'publish_startDate'
                                                                )
                                                            )
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text
                                                        style={{
                                                            color: 'red',
                                                        }}
                                                    >
                                                        *
                                                    </Text>
                                                    <Text id='name6' space='nbsp'>
                                                        {'课程薪酬'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(createOnSelectAction('publish_fee'))
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.FeeTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(feeList, value) =>
                                                            this.onFeeConfirm(feeList, value)
                                                        }
                                                        options={feeList}
                                                        visible={store.getState().isPublishFee}
                                                        onClose={() =>
                                                            store.dispatch(createOffSelectAction('publish_fee'))
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>


                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name2' space='nbsp'>
                                                        {'  课程形式'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(
                                                                createOnSelectAction('publish_courseFormat')
                                                            )
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.courseFormatTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(courseFormatList, value) =>
                                                            this.onCourseFormatConfirm(courseFormatList, value)
                                                        }
                                                        options={courseFormatList}
                                                        visible={store.getState().isPublishCourseFormat}
                                                        onClose={() =>
                                                            store.dispatch(
                                                                createOffSelectAction('publish_courseFormat')
                                                            )
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                    </Form>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>

                <View className='publish__teacher'>
                    <View className='publish__student__title'
                          style={
                              {
                                  margin: "20px 0 10px 20px",
                                  padding: "10px 0 0 0"
                              }
                          }
                    >
                        <Text className='publish__parent__title__text'
                              style={
                                  {
                                      fontWeight: "bold",
                                      flex: "1 0 0",
                                      fontSize: "20px",
                                  }
                              }>
                            对家教的要求
                        </Text>
                    </View>

                    <View className={"publish__student__info"}
                          style={
                              {
                                  width: "90%",
                                  margin: "0 auto",
                              }
                          }>
                        <View className='publish'>
                            <View className='publish__student'>
                                <View className='publish__form'>
                                    <Form
                                        labelPosition="right"
                                        footer={
                                            <>
                                                <Row gutter="5">
                                                    <Col span="12">
                                                        <Button block type="primary" color="black">
                                                            邀请填写
                                                        </Button>
                                                    </Col>

                                                    <Col span="12">
                                                        <Button block type="primary" color="#334BEB">
                                                            提交
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </>
                                        }
                                    >
                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name3' space='nbsp'>
                                                        {'  学历'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(createOnSelectAction('publish_education'))
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.educationTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(educationList, value) =>
                                                            this.onEducationConfirm(educationList, value)
                                                        }
                                                        options={educationList}
                                                        visible={store.getState().isPublishEducation}
                                                        onClose={() =>
                                                            store.dispatch(createOffSelectAction('publish_education'))
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name4' space='nbsp'>
                                                        {'  性别'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(createOnSelectAction('publish_gender'))
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.genderTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(genderList, value) =>
                                                            this.onGenderConfirm(genderList, value)
                                                        }
                                                        options={genderList}
                                                        visible={store.getState().isPublishGender}
                                                        onClose={() =>
                                                            store.dispatch(createOffSelectAction('publish_gender'))
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name5' space='nbsp'>
                                                        {'  经验'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(createOnSelectAction('publish_experience'))
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.experienceTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(experienceList, value) =>
                                                            this.onExperienceConfirm(experienceList, value)
                                                        }
                                                        options={experienceList}
                                                        visible={store.getState().isPublishExperience}
                                                        onClose={() =>
                                                            store.dispatch(createOffSelectAction('publish_experience'))
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                        <Row>
                                            <View
                                                style={{
                                                    margin: '20px 15px', // or "15pt"
                                                    fontSize: '16px',
                                                }}
                                            >
                                                <Col span='8'>
                                                    <Text id='name6' space='nbsp'>
                                                        {'  职业'}
                                                    </Text>
                                                </Col>
                                            </View>
                                            <View
                                                style={{
                                                    margin: '0 15px 20px 0', // or "15pt"
                                                }}
                                            >
                                                <Col span='14'>
                                                    <Text
                                                        title=''
                                                        onClick={() =>
                                                            store.dispatch(createOnSelectAction('publish_career'))
                                                        }
                                                        style={{
                                                            color: '#000',
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        {this.state.careerTitle}
                                                    </Text>
                                                    <Picker
                                                        onConfirm={(careerList, value) =>
                                                            this.onCareerConfirm(careerList, value)
                                                        }
                                                        options={careerList}
                                                        visible={store.getState().isPublishCareer}
                                                        onClose={() =>
                                                            store.dispatch(createOffSelectAction('publish_career'))
                                                        }
                                                    />
                                                </Col>
                                            </View>
                                        </Row>

                                    </Form>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>

                <View className='publish__fee'>
                    <View className='publish__student__title'
                          style={
                              {
                                  margin: "20px 0 10px 20px",
                                  padding: "10px 0 0 0"
                              }
                          }
                    >
                        <Text className='publish__parent__title__text'
                              style={
                                  {
                                      fontWeight: "bold",
                                      flex: "1 0 0",
                                      fontSize: "20px",
                                  }
                              }>
                            信息费估算
                        </Text>
                        <AtIcon value={"help"} size={"20px"} color={"#000"}/>
                    </View>
                </View>

            </View>
        )


    }
}
