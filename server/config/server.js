

const serverOptions = {
    port: process.env.SERVER_PORT || 3000,
    host: process.env.HOST || "localhost",
    router: {
        isCaseSensitive: false,
        stripTrailingSlash: true
    },
};

export { serverOptions };
