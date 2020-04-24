import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login/userLogin',
    method: 'post',
    data: {
      username,
      password
    },
    transformRequest: [function (data) {
      //`transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
      var formData = new FormData();
      formData.append('username',data.username);
      formData.append('password',data.password);
      return formData;
    }],
    
  })
}

export function getmyinfo(token) {
  return request({
    url: '/myinfo',
    method: 'get',
    data:{
      token,
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

//注册
export function createAdmin(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data: data
  })
}
//更新信息
export function updateUser(id, data) {
  return request({
    url: '/user/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/user/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/user/delete/' + id,
    method: 'post'
  })
}
//获取权限
export function getRoleByAdmin(id) {
  return request({
    url: '/user/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/user/role/update',
    method: 'post',
    data: data
  })
}
