export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log(`[ROUTER] move to '${to.fullPath}'`)
    next()
  })
}
