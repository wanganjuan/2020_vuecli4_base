const _check = (option, _data) => {
  if (!_data) {
    return
  }
  if (option === 'username') {
    if (!_data.username) {
      _data.usernameErrorMsg = '请输入正确用户名'
      return false
    }
  } else {
    if (!_data.password) {
      _data.passwordErrorMsg = '请输入密码'
      return false
    }
  }
  return true
}

export default _check