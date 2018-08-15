/**
 * Create by Wangxiaoqin on 2018/8/15
 */

import * as types from './mutation-types.js';

export default {
  nameAsyn({commit}, {age, name}) {
    commit(types.SET_NAME, name);
    commit(types.SET_AGE, age);
  }
};
