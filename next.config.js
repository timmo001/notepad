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
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/novel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
