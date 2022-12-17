import api from './api';

export const get = () => api.get('/medias');

export const getById = (id) => api.get(`/medias/${id}`);

export const create = (data) => api.post(`/medias`, data);

export const update = (id, data) => api.put(`/medias/${id}`, data);

export const remove = (id) => api.delete(`/medias/${id}`);

export const getTopMedias = () => api.get('/medias/popular');
