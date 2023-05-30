/** @type {import('next').NextConfig} */
// const path = require('./sass/main.scss');

// const withVideos = require('next-videos')
// const nextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     // includePaths: [path.join(__dirname, 'styles')],
//   },
// }
// require('dotenv').config({ path: './.env' })

const webpack = require('webpack')

module.exports={
  withVideos : require('next-videos'),
  nextConfig : {
    reactStrictMode: true  
  },

env: {
  'FULLNAME':process.env.NEXT_PUBLIC_FULLNAME,
  'EMAIL':process.env.NEXT_PUBLIC_EMAIL,
  'LINKEDIN_URL':process.env.NEXT_PUBLIC_LINKEDIN_URL,
  'BACKEND_URL':process.env.NEXT_PUBLIC_BACKEND_URL
}
}

// module.exports = nextConfig
