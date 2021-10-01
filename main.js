const express = require('express')

const app = express()


app.use(require('./logging/accessLogger'))
app.use("/files",require('./files/file'))
app.use("/data",require('./pdatabase/PDatabaseRouter'))


app.listen(7000,()=>{
    console.log('Server Listening on port 7000')
})

