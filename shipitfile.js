module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);
  require('shipit-pm2')(shipit);

  shipit.initConfig({
    default: {
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      npm: {
        remote: true
      }
    },
    client: {
      servers: 'miroshko@miroshko.name',
      workspace: '/tmp/hresty.com/server',
      deployTo: '/srv/hresty.com/public',
      repositoryUrl: 'https://github.com/miroshko/vyshyvanka.git',
    },
    server: {
      servers: 'miroshko@miroshko.name',
      workspace: '/tmp/hresty.com/server',
      deployTo: '/srv/hresty.com/server',
      repositoryUrl: 'https://github.com/miroshko/vyshyvanka-server.git',
    },
    pm2: { 
      json: 'app.json'
    }
  });
};