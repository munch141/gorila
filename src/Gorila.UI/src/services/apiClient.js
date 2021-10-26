import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
});

export default {
  async getAll() {
    const result = await axiosInstance.get('/products');

    return result.data;
  },

  async get(id) {
    return { id, name: 'Product' };
  },

  async addAsync(product) {
    const result = await axiosInstance.post('/products', product);

    return result.data;
  },

  async delete(id) {
    const result = await axiosInstance.delete(`/products/${id}`);

    return result.data;
  },
};
