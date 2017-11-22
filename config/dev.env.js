var config = {
  port: 5000,
  logLevel: 'info',
  superScript: {
    // mongoURI: 'mongodb://localhost/superscriptDB',
    importFile: './data/data.json',
    factSystem: {
      clean: true,
      // importFiles: null,
    },
    // scope: '', // Any extra scope you want to pass into your plugins.
    // editMode: '',
    // pluginsPath: '',
    // messagePluginsPath: '', // ???
    // logPath: `${process.cwd()}/logs`, // If null, logging will be off. Otherwise writes conversation transcripts to the path.
    // conversationTimeout: 1000 * 300, // Time for a conversation to expire (In ms), default : 1000 * 300 = 5 minutes
    useMultitenancy: false,
    // historyCheckpoints: 10, 
  }
}

module.exports = config
