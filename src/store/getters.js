const getters = {
  pendingReview: state => state.from.pendingReview,
  rejected: state => state.from.rejected,
  examinationPassed: state => state.from.examinationPassed,
  pendingReviewNum: state => state.from.pendingReviewNum,
  rejectedNum: state => state.from.rejectedNum,
  examinationPassedNum: state => state.from.examinationPassedNum
}
export default getters