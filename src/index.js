const {Command, flags} = require('@oclif/command')
const fs = require('fs');
const prefixer = require('./prefixer');

class PrefixerCommand extends Command {
  async run() {
    const {flags} = this.parse(PrefixerCommand)
    const filePath = flags.filePath || 2
    let prefix;
    let context = this;
    fs.readFile(filePath, 'utf8', function(err, contents) {
      let prefix = prefixer(contents);
      context.log(`Prefix : ${prefix} from infix ${contents}`)
    });
   
  }
}

PrefixerCommand.description = `Describe the command here
...
Extra documentation goes here
`

PrefixerCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  filePath: flags.string({char: 'n', description: 'Path to file contains infix expression'}),
}

module.exports = PrefixerCommand
