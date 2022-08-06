<template>
  <div id="comment"></div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    id: Number
  },
  data () {
    return {
      rootObserver: null
    }
  },
  methods: {
    appendComment (id, theme) {
      const parent = document.getElementById('comment')
      const childs = document.getElementsByClassName('utterances')
      if (childs?.length) {
        parent.removeChild(childs[0])
      }
      const divElm = document.createElement('div')
      const scriptElm = document.createElement('script')
      Object.assign(scriptElm, {
        type: 'text/javascript',
        async: true,
        crossOrigin: 'anonymous',
        src: 'https://utteranc.es/client.js'
      })
      scriptElm.setAttribute('issue-number', id)
      scriptElm.setAttribute('theme', theme)
      scriptElm.setAttribute('repo', 'lijunlin2022/blog-comments')
      parent.appendChild(scriptElm)
    },
    observeRootNode (id) {
      const rootNode = document.documentElement
      const config = { attributes: true }
      const callback = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.attributeName === 'class') {
            this.appendComment(id, rootNode.className.includes('dark') ? 'github-dark' : 'github-light')
          }
        }
      }
      const observer = new MutationObserver(callback)
      observer.observe(rootNode, config)
      return observer
    }
  },
  mounted () {
    this.appendComment(this.id, 'github-light')
    this.rootObserver = this.observeRootNode(this.id)
  },
  unmounted () {
    this.rootObserver.disconnect()
  }
}
</script>