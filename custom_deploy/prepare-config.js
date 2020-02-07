const yaml = require('js-yaml');
const fs = require('fs');

let doc;

const argv = require('yargs')
.default('input.templatepath', '../samples/standalone.yml')
.default('env.smtp.address', 'smtp.sendgrid.net')
.default('env.smtp.username', 'apikey')
.default('env.smtp.password', 'supersecretstuff')
.default('output.path', '../containers/app.yml')
.default('env.hostname', 'discourse.example.com')
.argv;

try {
    doc = yaml.safeLoad(fs.readFileSync(
        argv.input.templatepath,
        'utf8'
    ));
    console.log('Original document parsed successfully');
} catch (e) {
    throw (e);
}

modifiedDoc = Object.assign({}, doc);

modifiedDoc.env['DISCOURSE_SMTP_ADDRESS'] = argv.env.smtp.address
modifiedDoc.env['DISCOURSE_SMTP_USER_NAME'] = argv.env.smtp.username
modifiedDoc.env['DISCOURSE_SMTP_PASSWORD'] = argv.env.smtp.password
modifiedDoc.env['DISCOURSE_HOSTNAME'] = argv.env.hostname


newYamlToWrite = yaml.safeDump(modifiedDoc);

fs.writeFileSync(argv.output.path, newYamlToWrite);
