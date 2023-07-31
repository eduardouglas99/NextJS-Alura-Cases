/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, //colocar a barra no final
    async redirects() { //redirecionamento de links
        return [
            {
                source: '/perguntas',
                destination: '/faq',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
