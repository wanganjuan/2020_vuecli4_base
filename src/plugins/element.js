import Vue from 'vue'
import {
  Option, Select, Step, Steps, Table, TableColumn, Dialog, Pagination, Tooltip, MessageBox, Message, Checkbox, Input, DatePicker, TimeSelect, TimePicker, Radio, Upload, Popover, Loading, Dropdown, DropdownMenu, DropdownItem, Button,
  Tabs, TabPane, Row, Col, Carousel, CarouselItem, Menu, Submenu, MenuItem, MenuItemGroup, Switch, Autocomplete, Transfer,
  Form, FormItem, CheckboxGroup, Notification, Progress, RadioGroup, Alert, Tag, Cascader, Breadcrumb, BreadcrumbItem,
  InputNumber, RadioButton, CheckboxButton, Card, Slider, Tree
} from 'element-ui'
Vue.use(Option)
Vue.use(Select)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Upload)
Vue.use(Popover)
Vue.use(Loading)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Switch)
Vue.use(Autocomplete)
Vue.use(Transfer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(CheckboxGroup)
Vue.use(Progress)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Cascader)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(InputNumber)
Vue.use(RadioButton)
Vue.use(Button)
Vue.use(CheckboxButton)
Vue.use(Card)
Vue.use(Slider)
Vue.use(Tree)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$ELEMENT = { size: 'small' }
