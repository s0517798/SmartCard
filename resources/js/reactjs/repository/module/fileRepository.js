import Repository from "../Repository";

const resource = "/file";

const fileRepository = {
    upload(fd) {
        return Repository.post(`${resource}/upload`, fd);
    },
};

export default fileRepository;
