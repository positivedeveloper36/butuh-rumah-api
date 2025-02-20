import axios from 'axios'
import env from '#start/env'

export default class ApiService {

  private static readonly BASE_URL = env.get('MY_API')
  private static client = axios.create({ baseURL: ApiService.BASE_URL })

  public static async all() {
    const { data } = await ApiService.client.get('/users')
    return data
  }
  public static async login(params: any) {
    try {
      const { data } = await ApiService.client.post('/login', params)
      return data
    } catch (error) {
      return error.response.data
    }
  }
  public static async register(params: any) {
    try {
      const { data } = await ApiService.client.post('/register', params)
      return data
    } catch (error) {
      // console.log(error.response) // this is the main part. Use the response property from the error object
      const { response } = error
      const { request, ...errorObject } = response // take everything but 'request'
      // console.log(errorObject)
      return response.data
    }
  }
}
