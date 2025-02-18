import axios from 'axios'
import env from '#start/env'

export default class ApiService {

  private static readonly BASE_URL = env.get('MY_API')
  private static client = axios.create({ baseURL: ApiService.BASE_URL })

  public static async all() {
    const { data } = await ApiService.client.get('/users')
    return data
  }
}
