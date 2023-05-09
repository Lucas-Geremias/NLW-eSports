import express, { request, response } from 'express'

const app = express()

app.get('/ads', (request, response)=>{
    return response.json(
        {id: 1, name:'anuncio 1'}
    )
})
app.listen(3333)