const getRegisterErrorValidation = (obj, t) => {
    const errResult = {}

    if (!obj.username) {
        errResult.usernameErr = t('roots.registerErrorMessages.emptyUsername')
    } else if (obj.username.length < 4) {
        errResult.usernameErr = t('roots.registerErrorMessages.invalidUsername')
    } else {
        delete errResult.usernameErr
    }
    
    if (!obj.password) {
        errResult.passwordErr = t('roots.registerErrorMessages.emptyPassword')
    } else if (obj.password.length < 6) {
        errResult.passwordErr = t('roots.registerErrorMessages.invalidPassword')
    } else {
        delete errResult.passwordErr
    }
    
    if (!obj.repeatPassword) {
        errResult.repeatPasswordErr = t('roots.registerErrorMessages.emptyRepeatPassword')
    } else if (obj.repeatPassword !== obj.password) {
        errResult.repeatPasswordErr = t('roots.registerErrorMessages.invalidRepeatPassword')
    } else {
        delete errResult.repeatPasswordErr
    }

    return Object.values(errResult)
}

const getLoginErrorValidation = (obj, t) => {
    const errResult = {}

    if (!obj.username) {
        errResult.usernameErr = t('roots.registerErrorMessages.emptyUsername')
    } else if (obj.username.length < 4) {
        errResult.usernameErr = t('roots.registerErrorMessages.invalidUsername')
    } else {
        delete errResult.usernameErr
    }
    
    if (!obj.password) {
        errResult.passwordErr = t('roots.registerErrorMessages.emptyPassword')
    } else if (obj.password.length < 6) {
        errResult.passwordErr = t('roots.registerErrorMessages.invalidPassword')
    } else {
        delete errResult.passwordErr
    }

    return Object.values(errResult)
}

export {  getRegisterErrorValidation, getLoginErrorValidation }