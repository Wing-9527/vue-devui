import type { App } from 'vue'
import TimeAxis from './src/time-axis'
import TimeAxisItem from './src/components/time-axis-item'

TimeAxis.install = function(app: App): void {
  app.component(TimeAxis.name, TimeAxis)
  app.component(TimeAxisItem.name, TimeAxisItem)
}

export { TimeAxis,TimeAxisItem }

export default {
  title: 'TimeAxis 时间轴',
  category: '数据展示',
  status: '80%', // TODO: 组件若开发完成则填入"已完成"，并删除该注释
  install(app: App): void {
        app.use(TimeAxis as any)
        app.use(TimeAxisItem as any)
  }
}
