module.exports = {
    norpc: true,
    testCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/buidler test --network coverage',
    compileCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/buidler compile --network coverage',
    buildDirPath: '/artifacts',
    skipFiles: [
        'lifecycle/Migrations.sol',
        'mocks'
    ]
}
