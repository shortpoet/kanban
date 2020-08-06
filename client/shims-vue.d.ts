declare module '*.vue' {
  import { defineComponent } from './src/node_modules/vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
