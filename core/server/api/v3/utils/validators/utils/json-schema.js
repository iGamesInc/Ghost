const jsonSchema = require('@igames/ghost-admin-api-schema');

/**
 *
 * @param {Object} apiConfig "frame" api configruation object
 * @param {string} apiConfig.docName the name of the resource
 * @param {string} apiConfig.method API's method name
 * @param {Object} frame "frame" object with data attached to it
 * @param {Object} frame.data request data to validate
 */
const validate = async (apiConfig, frame) => await jsonSchema.validate({
    data: frame.data,
    schema: `${apiConfig.docName}-${apiConfig.method}`,
    version: 'v3'
});

module.exports.validate = validate;