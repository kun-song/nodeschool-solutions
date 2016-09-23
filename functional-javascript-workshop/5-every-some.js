/**
 * Array.prototype.every()
 *
 * 所有元素调用 callback 都返回 true，every() 才返回 true
 *
 * Array.prototype.some()
 *
 * 任意一个元素返回 true，some() 就返回 true
 */
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(sub_user =>
      goodUsers.some(good_user =>
        good_user.id === sub_user.id));
  }
}

module.exports = checkUsersValid;
