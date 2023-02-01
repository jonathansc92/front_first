import http from "../../http-common";

class CategoriesService {
  async get() {
    return await http.get('/categories');
  }
}
export default new CategoriesService()