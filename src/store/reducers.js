import {ON_SELECT, OFF_SELECT} from "./constants";

function reducers(state = OFF_SELECT, action) {
    const {type, data} = action;
    switch (type) {
        case ON_SELECT:
            switch (data.id) {
                case "index_timeSort":
                    return {
                        isSelect_0: true,
                    }
                case "index_priceSort":
                    return {
                        isSelect_1: true,
                    }
                case "index_stateSort":
                    return {
                        isSelect_2: true,
                    }
                case "index_regionSort":
                    return {
                        isSelect_3: true,
                    }
                case "publish_grade":
                    return {
                        isPublishGrade: true,
                    }
                case "publish_subject":
                    return {
                        isPublishSubject: true,
                    }
                case "publish_frequency":
                    return {
                        isPublishFrequency: true,
                    }
                case "publish_startDate":
                    return {
                        isPublishStartDate: true,
                    }
                case "publish_education":
                    return {
                        isPublishEducation: true,
                    }
                case "publish_gender":
                    return {
                        isPublishGender: true,
                    }
                case "publish_experience":
                    return {
                        isPublishExperience: true,
                    }
                case "publish_career":
                    return {
                        isPublishCareer: true,
                    }
                case "publish_courseFormat":
                    return {
                        isPublishCourseFormat: true,
                    }
                case "publish_fee":
                    return {
                        isPublishFee: true,
                    }
                default:
                    return state;
            }
        case OFF_SELECT:
            switch (data.id) {
                case 'index_timeSort':
                    return {
                        isSelect_0: false,
                    }
                case 'index_priceSort':
                    return {
                        isSelect_1: false,
                    }
                case "index_stateSort":
                    return {
                        isSelect_2: false,
                    }
                case "index_regionSort":
                    return {
                        isSelect_3: false,
                    }
                case "publish_grade":
                    return {
                        isPublishGrade: false,
                    }
                case "publish_subject":
                    return {
                        isPublishSubject: false,
                    }
                case "publish_frequency":
                    return {
                        isPublishFrequency: false,
                    }
                case "publish_startDate":
                    return {
                        isPublishStartDate: false,
                    }
                case "publish_education":
                    return {
                        isPublishEducation: false,
                    }
                case "publish_gender":
                    return {
                        isPublishGender: false,
                    }
                case "publish_experience":
                    return {
                        isPublishExperience: false,
                    }
                case "publish_career":
                    return {
                        isPublishCareer: false,
                    }
                case "publish_courseFormat":
                    return {
                        isPublishCourseFormat: false,
                    }
                case "publish_fee":
                    return {
                        isPublishFee: false,
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default reducers;
