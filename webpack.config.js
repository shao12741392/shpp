module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:__dirname+'/dist',
        filename:'i.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/,
            loader:['style-loader', 'css-loader',  'less-loader', ]
          },
        ],
      },
}