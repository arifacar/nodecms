
exports.setSuccessMessages = (data) => {
    let response = {}
    response.statusCode = 10
    response.data = data
    return response
}

exports.setErrorMessages = (err) => {
    let response = {}
    response.statusCode = 50
    response.statusDesc = "İşleminiz gerçekleştirilemedi!"
    response.devMessage = err
    return response
}
