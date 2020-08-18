exports.succes = (req, res, message, status) => {
    res.status(status || 200).send({
        error: 'false',
        body: message,
    });
}
exports.error = (req, res, message, status, details) => {
    console.error(details);
    res.status(status || 500).send({
        error: 'true',
        body: message,
    });
}