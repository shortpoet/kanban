declare module '*.vue' {
  import { defineComponent } from './node_modules/vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
