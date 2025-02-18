// import type { HttpContext } from '@adonisjs/core/http'
import ApiService from '#services/api_service'

export default class ApisController {
  public async index() {
    return ApiService.all()
  }
}
