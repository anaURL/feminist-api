const express = require('express')
const app = express ()
const PORT = 8000

const person = { 
    
'Judith Butler' : {
    'quote': 'There is no original or primary gender a drag imitates, but gender is a kind of imitation for which there is no original.' ,
    'source': 'Gender Trouble (1990).'
},
'bell hooks': {
    'quote': 'Class is more than money. Class is also about knowledge.',
    'source': 'Where we stand'
},
'unknown' : {
    'quote': 'unknown',
    'source':'unknown'
}
}

app.get('/', (request, response) => {     // the main route, req and res - an event listener
    response.sendFile(__dirname + '/index.html') // the server looks in the current *DIRECTORY* to find index.html
})    

app.get('/api/:name', (request,response) => {
    const personName = request.params.name.toLowerCase()
    if (person[personName]) {
        response.json(person[personName])
    } else {
        response.json(person['unknown'])
    }
})


app.listen (process.env.PORT || PORT, () => {
    console.log(`The server is now running on PORT ${PORT}! Betta go Catch it!`)
})