import PreviewComponent from './preview.vue'
var $vm
export default {
  install:function (vue) {
    var Preview = Vue.extend(PreviewComponent)
    if (!$vm) {
      $vm = new Preview({el: document.createElement('div')})
      document.body.appendChild($vm.$el)
    }
    var preview = {
      open:function (index, list, params) {
        $vm.open(index, list, params)
      },
      close:function () {
        $vm.close()
      }
    }
    Vue.$preview = preview
    Vue.mixin({
      created: function () {
        this.$preview = Vue.$preview
      }
    })
  }
}
