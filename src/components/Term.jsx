import React from 'react';
import Terminal from '@nitric/react-animated-term';
import '@nitric/react-animated-term/css/styles.css';
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
import { SectionWrapper } from '../hoc';

const asciiArtImage = [
  " _______________                        |*\\_/*|________",
  " |  ___________  |     .-.     .-.      ||_/-\\_|______  |",
  " | |           | |    .****. .****.     | |           | |",
  " | |   0   0   | |    .*****.*****.     | |   0   0   | |",
  " | |     -     | |     .*********.      | |     -     | |",
  " | |   \\___/   | |      .*******.       | |   \\___/   | |",
  " | |___     ___| |       .*****.        | |___________| |",
  " |_____\\_/|_____|        .***.         |_______________|",
  "   _|__|/ \\|_|_.............*.............._|________|_",
  "  / ********** \\                          / ********** \\",
  " /  ************  \\                      /  ************  \\",
  "--------------------                    --------------------",
];

const termLines = [
  {
    text: 'node example.js',
    cmd: true,
    delay: 80,
  },
  {
    text: '✔ Loaded app',
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + ' Loading app',
        delay: 40,
      };
    }),
  },
  {
    text: 'Simulated Image:',
    cmd: false,
  },
  ...asciiArtImage.map((line) => ({
    text: line,
    cmd: false,
  })),
  {
    text: '',
    cmd: true,
  },
];

const Term = () => {
  return (
    <Terminal
      lines={termLines}
      interval={10}
      height={500}
    />
  );
};

export default SectionWrapper(Term, '');
