import request from '@/utils/request';

//查询最新课程
export function mostNew( data ) {
   return request({
      url: '/api/course/mostNew',
      method: 'post',
      data
   })
}