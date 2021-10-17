const LocalStorageService = {
    getToken: () => {
        return localStorage.getItem("token");
    },
    deleteToken: () => {
        localStorage.removeItem("token");
    },
    deletePersistAuth: () => {
        localStorage.removeItem("persist:auth");
    },
    deletePersistProfile: () => {
        localStorage.removeItem("persist:profile");
    },
};

export default LocalStorageService;
