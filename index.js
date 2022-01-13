const cohort1 = process.argv[2]
const user = process.env.USER
const shell = process.env.SHELL

if (cohort1 === 'web-49') {
    console.log(`${cohort1} sux`)
} else {
    console.log(`yeet ${cohort1}`)
}

console.log(`the user is ${user}`)
console.log(`the shell is ${shell}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({message: 'yo, wazzzzuuupp'})
})

const port = 9000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})