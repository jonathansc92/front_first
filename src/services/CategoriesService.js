import http from "../../http-common";

class CategoriesService {
  async get() {
    return await http.get('/categories');
  }
  async find(id) {
    return await http.get(`/categories/${id}`);
  }
  async create(data) {
    return await http.post(`/categories`, data);
  }
  async update(data, id) {
    return await http.put(`/categories/${id}`, data);
  }
  async delete(id) {
    return await http.delete(`/categories/${id}`);
  }
}
export default new CategoriesService()