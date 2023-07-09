/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/timmo001/notepad",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/timmo001/notepad/issues",
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
