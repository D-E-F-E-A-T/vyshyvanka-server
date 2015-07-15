module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);
  require('shipit-pm2')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/hresty.com',
      deployTo: '/srv/hresty.com',
      repositoryUrl: 'https://github.com/miroshko/vyshyvanka-server.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      npm: {
        remote: true
      }
    },
    staging: {
      servers: 'miroshko@miroshko.name'
    },
    pm2: { 
      json: 'app.json'
    }
  });

  shipit.task('start', function(done) {
    var current = shipit.config.deployTo + '/current';
    shipit.remote('cd ' + current + ' && npm start', done);
  });
};