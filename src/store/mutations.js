/**
 * Create by Wangxiaoqin on 2018/8/15
 */


import * as types from './mutation-types.js';

export default {
  [types.SET_NAME](state, name) {
    state.name = name;
  },
  [types.SET_AGE](state, age) {
    state.age = age;
  }
};
