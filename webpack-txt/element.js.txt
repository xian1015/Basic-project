import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Container,
  Header,
  Main,
  Footer,
  Menu,
  MenuItem,
  Avatar,
  Input,
  InputNumber,
  Carousel,
  CarouselItem,
  Divider,
  Card,
  Pagination,
  Tree,
  Breadcrumb,
  BreadcrumbItem,
  Image,
  Button,
  Tooltip,
  Loading,
  MessageBox,
  Message,
  Notification,
  Table,
  TableColumn,
  Select,
  Option,
  Autocomplete
} from 'element-ui'
import OnlyMessage from '@/utils/onlyMsg'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Avatar)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Tree)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Image)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading.directive)
Vue.use(Select)
Vue.use(Option)
Vue.use(Autocomplete)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$onlyMsg = OnlyMessage
