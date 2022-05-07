const CracoAlias = require('craco-alias')

export default {
  plugins: [
    {
       plugin: CracoAlias,
       options: {
          source: 'tsconfig',
          // baseUrl SHOULD be specified
          // plugin does not take it from tsconfig
          baseUrl: './src',
          /* tsConfigPath should point to the file where 'baseUrl' and 'paths'
          are specified*/
          tsConfigPath: './tsconfig.paths.json'
       }
    }
 ],
  style: {
    sass: {
      loaderOptions: {
        // Global scss
        additionalData: `
          @import 'src/styles';
        `,
      },
    },
  },
}

// https://medium.com/@zaeemkhaliq/how-to-globally-access-sass-scss-variables-in-react-app-563212667ae
