/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/assets/styles'),path.join(__dirname, '/assets/styles')],
    }
}

module.exports = nextConfig
