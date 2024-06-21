import { defineConfig } from "orval";

module.exports = defineConfig(() => {
    return {
        v1: {
            output: {
                mode: "split",
                workspace: "src/gen",
                target: "endpoints",
                schemas: "models",
                client: "react-query",
                prettier: true,
                clean: true,
                override: {
                    useTypeOverInterfaces: true,
                    mutator: {
                        path: "../axios.ts",
                        name: "customInstance",
                    },
                    query: {
                        options: {
                            networkMode: "offlineFirst",
                        },
                    },
                },
            },
            input: {
                target: "./schema.yaml",
            },
        },
    };
});