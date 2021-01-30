# my-projects

## Project setup

npm install

### Compiles and hot-reloads for development

npm run serve

### Compiles and minifies for production

npm run build

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Customize configuratio

思路.表单的数据绑定,v-model 属性,自定义名字给 data 数据,
密码框隐藏 type=password/
表单验证:ui 中输入 form 属性绑定 rules 属性,数据中定义名字 k 开始验证规则复制(require,message,tigger),.输入框外面部分用 prop 接收
表单重置:表单的实例对象定义 ref ='',为按钮绑定单击事件,定义名字,在行为区写方法,\$refs.引用对象.resetFields
登录按钮:
