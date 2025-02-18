/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('apis', '#controllers/apis_controller.index')
router.post('login', '#controllers/apis_controller.login')

router
  .group(() => {
    router
      .group(() => {
        router.post('register', '#controllers/users_controller.register')
        router.post('login', '#controllers/users_controller.login')
      })
      .prefix('v1')
  })
  .prefix('api')
