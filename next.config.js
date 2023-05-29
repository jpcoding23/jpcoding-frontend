/** @type {import('next').NextConfig} */
// const path = require('./sass/main.scss');

// const withVideos = require('next-videos')
// const nextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     // includePaths: [path.join(__dirname, 'styles')],
//   },
// }
require('dotenv').config({ path: './.env' })

const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({
  path:'./.env'
})
module.exports={
  withVideos : require('next-videos'),
  nextConfig : {
    reactStrictMode: true  
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
}
}

// module.exports = nextConfig
