import api from './api';

export const get = () => api.get('/users');

export const getById = (id) => api.get(`/users/${id}`);

export const create = (data) => api.post(`/users`, data);

export const update = (id, data) => api.put(`/users/${id}`, data);

export const remove = (id) => api.delete(`/users/${id}`);
