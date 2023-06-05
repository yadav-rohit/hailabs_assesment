/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['localhost', 'res.cloudinary.com'],
    },
}

module.exports = nextConfig
