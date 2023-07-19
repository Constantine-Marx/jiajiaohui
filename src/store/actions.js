export const toHome = () => {
  return {
    type: 'toPage',
    payload: {
      num:0
    }
  }
}

export const toPublish = () => {
  return {
    type: 'toPage',
    payload: {
      num:1
    }
  }
}

export const toUser = () => {
  return {
    type: 'toPage',
    payload: {
      num:2
    }
  }
}
