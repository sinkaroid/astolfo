const get = require('./Get');

/**
 * random astolfo
 * @returns {Promise<string>} promise
 */
function trap() {
    return new Promise((resolve, reject) => {
        get('https://mashu.sinkaroid.org/astolfo/').then(res => {
            resolve(res.body.file);
        }).catch(reject);
    });
}

module.exports = Object.assign(trap, {get});