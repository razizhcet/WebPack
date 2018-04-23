module.exports = {
    entry: './app/index.js',
    output:{
        path: './dist',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            }
        ]
    }
}