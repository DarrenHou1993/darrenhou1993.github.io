import Home from '@/components/Home'

const beforeEach = (toRoute, fromRoute, next) => {
  const to = toRoute.name
  const from = fromRoute.name
  const scrollTop = Vonic.app.pageContentScrollTop()
  let h = sess.get(to)
  if (h && h.history) {
    h.history = false
    sess.set(to, h)
  } else {
    sess.set(from || '/', {
      history: true,
      scrollTop: scrollTop
    })
  }
  next()
}

const afterEach = (toRoute, fromRoute) => {
  const to = toRoute.name
  const from = fromRoute.name
  const h = sess.get(to)
  if (h && h.scrollTop) {
    Vue.nextTick(() => {
      Vonic.app.pageContentScrollTop(h.scrollTop)
    })
  }
}

export default [{
  path: '/',
  name: 'home',
  component: Home
}]
