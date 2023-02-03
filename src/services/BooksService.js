import http from "../../http-common";

class BooksService {
  async get() {
    return await http.get('/books');
  }
  async find(id) {
    return await http.get(`/books/${id}`);
  }
  async create(data) {
    return await http.post(`/books`, data);
  }
  async update(data, id) {
    return await http.put(`/books/${id}`, data);
  }
  async delete(id) {
    return await http.delete(`/books/${id}`);
  }
}
export default new BooksService()