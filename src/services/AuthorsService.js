import http from "../../http-common";

class AuthorsService {
  async get() {
    return await http.get('/authors');
  }
  async find(id) {
    return await http.get(`/authors/${id}`);
  }
  async create(data) {
    return await http.post(`/authors`, data);
  }
  async update(data, id) {
    return await http.put(`/authors/${id}`, data);
  }
  async delete(id) {
    return await http.delete(`/authors/${id}`);
  }
}
export default new AuthorsService()