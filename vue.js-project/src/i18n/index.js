import Vue from 'vue'
import VueI18n from "vue-i18n";
Vue.use(VueI18n); // 全局挂载

export const i18n = new VueI18n({
  locale:sessionStorage.getItem('locale')||'zh',//首次登录经过测试发现是获取不到locale属性，所以当获取不到时默认中文
  messages: {
    zh: require("./lan/zh"), // 中文语言包
    en: require("./lan/en") // 英文语言包
  }
});

export default i18n;