

const serverOptions = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
    router: {
        isCaseSensitive: false,
        stripTrailingSlash: true
    },
};

export { serverOptions };
