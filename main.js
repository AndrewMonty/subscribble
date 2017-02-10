require('dotenv').config()

const path = require('path')
const url = require('url')
const menubar = require('menubar')

var options = {
  width: 300,
  height: 500
}

if (process.env.ENV === 'production') {
  options.dir = path.join(__dirname, '/dist')
} else {
  options.index = process.env.HOST
}

const mb = menubar(options)

mb.on('ready', function() {
  console.log('app ready')
})
