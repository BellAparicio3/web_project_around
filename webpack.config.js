// webpack.config.js
const path = require("path"); // conecta la ruta a la configuración de webpack

module.exports = {
	devtool: 'inline-source-map',
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: ""
  }, 
	target: ['web', 'es5'], // asegúrate de que el código glue de Webpack sea también compatible con ES5
	mode: 'development', // añade el modo de desarrollo aquí, de esta forma
	devServer: {
    static: path.resolve(__dirname, './dist'), // especifica una carpeta desde donde servir la aplicación y su contenido
    compress: true, // esto acelerará la carga de archivos en el modo de desarrollo
    port: 8080, // abrirá tu página en localhost:8080 (puedes usar otro puerto)
    open: true, // se abrirá automáticamente en el navegador después de ejecutar npm run dev
		stats: 'errors-only' //solo sale cuando se producen errores
  },
	module: {
    rules: [ // esto es un array de reglas
      // añádele un objeto que contenga reglas para Babel
      {
        // una expresión regular que busca todos los archivos js
        test: /\.js$/,
        // todos los archivos deben ser procesados por babel-loader
        loader: "babel-loader",
        // excluye la carpeta node_modules, no necesitamos procesar archivos en ella
        exclude: "/node_modules/"
      }
    ]
  }
}

// reescribe el punto de salida mediante la utilidad de la ruta