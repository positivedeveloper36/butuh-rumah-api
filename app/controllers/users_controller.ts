import type { HttpContext } from '@adonisjs/core/http'
import UserService from "#services/user_service";

export default class UsersController {
  public async register({ request }: HttpContext) {
    const payload = request.all()
    return UserService.register(payload)
  }
  public async login({ request }: HttpContext) {
    const payload = request.all()
    return UserService.login(payload)
  }
}
