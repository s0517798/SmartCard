import Repository from "../Repository";

const resource = "/about";

const aboutRepository = {
    fetchAll() {
        return Repository.get(`${resource}`);
    },

    fetchNoSelect() {
        return Repository.get(`${resource}/noSelect`);
    },

    postData(payload) {
        return Repository.post(`${resource}/social-link`, payload);
    },

    putSortAbout(payload) {
        return Repository.put(`${resource}/social-link/order`, payload);
    },

    putData(id, payload) {
        return Repository.put(`${resource}/social-link/${id}`, payload);
    },

    deleteItem(id) {
        return Repository.delete(`${resource}/social-link/${id}`);
    },
};

export default aboutRepository;
