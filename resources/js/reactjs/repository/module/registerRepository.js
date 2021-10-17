import Repository from "../Repository";

const registerRepository = {
    register(payload) {
        return Repository.post(`/register`, payload);
    },
};

export default registerRepository;
