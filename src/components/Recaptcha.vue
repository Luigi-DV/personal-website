<template>
  <div
    id="g-recaptcha"
    class="g-recaptcha"
    :data-sitekey="sitekey">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Recaptcha',
  data () {
    return {
      sitekey: '6LdyuK0fAAAAADj9WOSDoYCTmZ5eqisnl2IZoSjl',
      secretKey: '6LdyuK0fAAAAAEO88lpSVQjEw98xJx5Ja2CLWB84',
      widgetId: 0
    }
  },
  methods: {
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'invisible',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset()
          }
        })
      }
    }
  },
  mounted () {
    // render the recaptcha widget when the component is mounted
    this.render()
  }
}
</script>
