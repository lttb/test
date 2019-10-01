const { override, addWebpackAlias, disableEsLint, addPostcssPlugins, addBabelPlugin } = require( 'customize-cra' );
const path = require('path');


module.exports = override(
    disableEsLint(),
    addWebpackAlias({
        src: path.resolve(__dirname, './src')
    }),
    addBabelPlugin(require('reshadow/babel')),
    addPostcssPlugins(
        [
            require("postcss-color-function")({preserveCustomProps: false}),
        ]
    )
);
