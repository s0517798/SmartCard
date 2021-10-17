import RegisterRepository from "./module/registerRepository";
import AuthRepository from "./module/authRepository";
import ProfileRepository from "./module/profileRepository";
import FileRepository from "./module/fileRepository";
import aboutRepository from "./module/aboutRepository";

const repositories = {
    register: RegisterRepository,
    auth: AuthRepository,
    profile: ProfileRepository,
    file: FileRepository,
    about: aboutRepository,
};

const RepositoryFactory = {
    exec: (name) => repositories[name],
};

export default RepositoryFactory;
