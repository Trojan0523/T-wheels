import { defineComponent, computed, toRefs } from 'vue'
import { IButtonProps } from './types'

export const Button = defineComponent({
  name: 'button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    level: {
      type: String,
      default: 'normal', // TODO: optimize to enum
    },
  },
  setup (props: IButtonProps, { slots }) {
    const { theme, size, disabled, loading, level } = toRefs(props)
    const classes = computed(() => {
      return {
        [`trojan-theme-${theme.value}`]: theme,
        [`trojan-size-${size.value}`]: size,
        [`trojan-level-${level.value}`]: level,
      }
    })
    return () => (
      <>
        <button class={`trojan-button ${classes.value}`} disabled={disabled.value}>
          { loading ? <span class="trojan-loadingIndicator"></span> : null }
          { slots.default ? slots.default() : '' }
          {/* <slot /> */}
        </button>
      </>
    )
  },
})
