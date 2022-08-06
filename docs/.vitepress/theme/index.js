import DefaultTheme from 'vitepress/theme'
import Comment from '../components/utterances-comment/utterances-comment.vue'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Comment', Comment)
  }
}
