const express = require('express')
const app = express ()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const persons = { 
    'assata shakur': {
        'quote': "Nobody in the world, nobody in history, has ever gotten their freedom by appealing to the moral sense of people who were oppressing them."
    },


    'anna julia cooper': {
        'quote': "The cause of freedom is not the cause of a race or a sect, a party or a class — it is the cause of human kind, the very birthright of humanity."
    },

    'alice walker': {
       'quote': "The most common way people give up their power is by thinking they don't have any."
    },

    'toni morrison': {
    'quote': "It's important, therefore, to know who the real enemy is, and to know the function of racism, which is distraction."
        },

    'sojourner truth': {
            'quote' : "If the first woman God ever made was strong enough to turn the world upside down all alone, these women together ought to be able to turn it back."
        },

    'june jordan': {
            'quote': "We are the ones we've been waiting for."
        },

    'angela davis': {
        'quote': "I am no longer accepting the things I cannot change. I am changing the things I cannot accept."
        },

    'zora neale hurston': {
            'quote': "If you are silent about your pain, they'll kill you and say you enjoyed it."
    },
        
    'fannie lou hamer' : {
        'quote' :"Nobody's free until everybody's free."
    },

    'shirley chisholm' : {
            'quote': "If they don't give you a seat at the table, bring in a folding chair."
    },
    'judith butler' : {
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
    if (persons[personName]) {
        response.json(persons[personName])
    } else {
        response.json(persons['unknown'])
    }
})


app.listen (process.env.PORT || PORT, () => {
    console.log(`The server is now running on PORT ${PORT}! Betta go Catch it!`)
})