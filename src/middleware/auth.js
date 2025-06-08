const adminAuth = (req, res) => {
    const token = req.body?.token;
    if (token) {
        res.send('Data retrived successfully!')
    } else {
        res.status(401).send('Unauthorised!')
    }
}

const userAuth = (req, res) => {
    const token = req.body?.token;
    if (token) {
        res.send('Data retrived successfully!')
    } else {
        res.status(401).send('Unauthorised!')
    }
}

module.exports = { adminAuth, userAuth }