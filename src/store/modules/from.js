const state = {
  pendingReview: [],
  rejected: [],
  examinationPassed: [],
  pendingReviewNum:0,
  rejectedNum:0,
  examinationPassedNum:0,
  baseColor: '#2270e9'
}

const mutations = {
  SetPendingReview: (state, from) => {
    state.pendingReview = from
    state.pendingReviewNum = from.length
    console.log(state.pendingReviewNum)
  },
  SetRejected: (state, from) => {
    from[0].status = '已驳回'
    state.rejected.push(from[0])
    state.rejectedNum = state.rejected.length
  },
  SetExaminationPassed: (state, from) => {
    from[0].status = '已通过'
    console.log(from)
    state.examinationPassed.push(from[0])
    state.examinationPassedNum = state.examinationPassed.length
  }
}

const actions = {
  pendingReview (ctx, from) {
    ctx.commit('pendingReview',from)
  },
  rejected (ctx, from) {
    ctx.commit('rejected',from)
  },
  examinationPassed (ctx, from) {
    ctx.commit('examinationPassed',from)
  }
}

export default {
  state,
  mutations,
  actions
}