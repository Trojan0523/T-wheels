import { defineComponent, toRefs } from 'vue'
import { IHelloWorldProps } from './types'

const HelloWorld = defineComponent({
  name: 'hello-world',
  props: {
    /**
         * hint message
         */
    msg: {
      type: String,
      default: '',
    },
  },
  setup (props: IHelloWorldProps) {
    const { msg } = toRefs(props)
    return () => (
      <>
        <h1>{msg.value}</h1>
      </>
    )
  },
})

export default HelloWorld
