import axios from 'axios'
import FormData from 'form-data'
import env from '#start/env'

export default class UserService {

  private static readonly BASE_URL = env.get('API_WP')
  private static client = axios.create({ baseURL: UserService.BASE_URL })

  public static async login(params: any) {
    const { data } = await UserService.client.post('/jwt-auth/v1/token', params)
    return data
  }

  public static async register(params: any) {
    const data = new FormData()
    data.append('username', params.token)
    data.append('email', params.email)
    data.append('password', params.password)
    const config = {
      method: 'post',
      url: 'https://dev.butuhrumah.com/wp-json/wp/v2/users',
      headers: {
        'Authorization': 'Bearer ' + params.token,
      },
      data : data
    }

    const { resp } = await axios.request(config)
    return resp
  }
}
