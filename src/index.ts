#!/usr/bin/env node
import ora, { Color } from 'ora'
import { myFunction } from './bin.ts'


const spinner = ora(myFunction())
spinner.start()

myFunction()
setInterval(() => {
  spinner.color = [ 'red', 'yellow', 'green', 'blue', 'magenta', 'cyan', 'white' ][Math.floor(Math.random() * 7)] as Color
}, 500)