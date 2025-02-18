import type { HttpContext } from '@adonisjs/core/http'
import ApiService from '#services/api_service'

export default class ApisController {
  public async index() {
    return ApiService.all()
  }
  public async login({ request }: HttpContext) {
    const payload = request.all()
    return ApiService.login(payload)
  }
}
