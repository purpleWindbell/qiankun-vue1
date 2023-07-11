module.exports = {
    plugins: {
      'postcss-selector-namespace': {
        namespace(css) {
          // 不需要添加命名空间的文件
          if (css.includes('unNamespace')) return '';
          return '.vue1-css'
        }
      }
    }
  }