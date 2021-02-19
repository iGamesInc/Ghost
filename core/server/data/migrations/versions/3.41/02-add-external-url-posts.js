const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('posts', 'external_url', {
    type: 'text',
    maxlength: 2000,
    nullable: true
});