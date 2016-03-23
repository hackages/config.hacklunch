#! /usr/bin/env babel-node

import cliparse from 'cliparse';
const {parsers} = cliparse;

function echoModule(params) {
  const [message] = params.args
  console.log(message);
}

function addModule(params) {

}

const cliParser = cliparse.cli({
  name: "philos",
  description: "Philos CLI tools for managing projects",
  commands: [
    cliparse.command(
      "echo",
      { description: "Display the given value",
        args: [ cliparse.argument("value", { description: "Simple value" })],
        options: [ cliparse.flag("reverse", { aliases: ["r"], description: "Reverse the value"}) ]
      },
      echoModule),

    cliparse.command(
      "add2",
      { description: "Add 2 to the given integer and display the result",
        args: [
          cliparse.argument("int",
            { default: 0,
              parser: parsers.intParser,
              description: "Int to add 2 to" })
        ]
      },
      addModule)
  ]
});

cliparse.parse(cliParser);
