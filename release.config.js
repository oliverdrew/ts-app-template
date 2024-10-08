const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        pgkRoot: true,
        tarballDir: 'dist',
        registry: 'https://npm.pkg.github.com/'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/*.tgz',
            label: 'npm package'
          }
        ]
      }
    ]
  ]
};

export default config;
