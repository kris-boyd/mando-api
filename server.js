const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const PORT = 8000

app.use(cors())

const mandoPlayers = {
    'bill monroe': {
        'name' : 'Bill Monroe',
        'band name' : 'The Bluegrass Boys',
        'birth date' : 'Sept 13, 1911'
    },
    'david grisman' : {
        'name' : 'David Grisman',
        'band name' : 'David Grisman Quartet',
        'birth date' : 'March 23, 1945'
    },
    'sam bush' : {
        'name' : 'Sam Bush',
        'band name' : 'Sam Bush band',
        'birth date' : 'April 13, 1952'
    },
    'Dont know that player!' : {
        'band name' : '?',
        'birth date' : '?'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:player', (request, response) => {
   const player = request.params.player.toLowerCase()
   if (mandoPlayers[player]) {
       response.json(mandoPlayers[player])
   } else {
       response.json(mandoPlayers['Dont know that player!'])
   }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})