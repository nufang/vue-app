/*
通过mutations间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
} from './mutations-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo
} from "../api";

export default {
  async getAddress ({commit,state}){
    const geohash = state.latitude +','+ state.longitude;
    const result = await reqAddress(geohash);
    if(result.code === 0){
      const  address = result.data;
      commit(RECEIVE_ADDRESS,{address});
    }
  },

  async getCategorys ({commit}){
    const result = await reqFoodCategorys();
    if(result.code === 0){
      const  categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys});
    }
  },

  async getShops ({commit,state}){
    const {longitude, latitude} = state;
    const result = await reqShops(longitude,latitude);
    if(result.code === 0){
      const  shops = result.data;
      commit(RECEIVE_SHOPS,{shops});
    }
  },

  //同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo();
    if(result.code === 0){
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  }
}
