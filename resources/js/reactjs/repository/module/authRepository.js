import Repository from "../Repository";

const resource = "/auth";

const fileRepository = {
    login(payload) {
        return Repository.post(`${resource}/login`, payload);
    },
    logout() {
        return Repository.post(`${resource}/logout`);
    },
    changePasswords(payload) {
        return Repository.post(`${resource}/change-password`, payload);
    }
};

export default fileRepository;
