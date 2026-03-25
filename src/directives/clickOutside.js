export default {
  beforeMount(el, binding) {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent, true)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent, true)
  }
}