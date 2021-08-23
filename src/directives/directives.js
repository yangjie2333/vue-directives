export default {
  bind (el,binding,vnode) {
    console.log(el);
    console.log(vnode);
    const opt = el.getElementsByClassName(binding.value.className)
    console.log(opt[binding.value.currentIndex]);
    opt[binding.value.cerrentIndex].className += ` ${binding.value.activeClass}`
  },
  update(el,binding,vnode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    const opt = el.getElementsByClassName(binding.value.className)
    console.log(opt[binding.oldValue.cerrentIndex].className);
    opt[binding.oldValue.cerrentIndex].className = binding.oldValue.className
    opt[binding.value.cerrentIndex].className += ` ${binding.value.activeClass}`
  }
}