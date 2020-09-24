module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["import"],
    rules: {
        "import/default": "error",
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": "typescript",
    }

}


