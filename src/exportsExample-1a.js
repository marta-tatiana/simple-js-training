module.exports.a = [];

module.exports.callMe = function(argument) {
    console.log('you called me with argument ' + argument);
};

module.exports.constants = {
    homeDir: '/home/cqt673',
    NODE_ENV: 'development'
};

exports.f = function() {
    console.log('exporting by exports');
}