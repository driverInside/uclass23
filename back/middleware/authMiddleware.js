const jwt = require('jsonwebtoken')

const getTokenFromHeader = headerStr => {
  return headerStr.includes('Bearer')
    ? headerStr.split(' ')[1]
    : headerStr

  // let token = ''
  // const hasBearer = headerStr.includes('Bearer')

  // if (hasBearer) {
  //   const headerArr = headerStr.split(' ')
  //   token = headerArr[1]
  // } else {
  //   token = headerStr
  // }

  // return token
}

const authMiddleware = (req, res, next) => {
  // 1. Obtener el header de authorization
  // 2. Quitar 'Bearer' y obtener token
  // 3. Verificar token
  // 4. Si no autorizado, tache huarache
  // 5. almacenar usuario dentro de la petición
  // 6. next

  const { authorization } = req.headers

  if (!authorization) {
    // authentication - 401 
    // authorization - 403
    res.status(403)
    return res.send({
      error: 'U shall not pass',
      code: 'tache huarache'
    })

  }

  const secret = process.env.TOKEN_SECRET

  const token = getTokenFromHeader(authorization)

  try {
    const decoded = jwt.verify(token, secret)
    req.user = decoded
  
    // const { method, path } = req

    // let hasPermissions = false
    // for (let i = 0; i < req.user.permissions.length; i++) {
    //   const permissions = req.user.permissions[i];
      
    //   const [pUrl, pMethod] = permissions.split(':')

    //   hasPermissions = path.replace('/', '') === pUrl && method.toLowerCase() == pMethod
    // }

    // if(hasPermissions) {
    //   next();
    // } else {
      //   res.status(403)
      //   return res.send({
        //     error: 'No ps no tienes permisos',
        //     code: 'x'
        //   })
        // }
          next();


    
  } catch (error) {
    console.error(error)
    res.status(403)
    return res.send({
      error: 'U shall not pass',
      code: 'tache huarache'
    })
  }
  

}

module.exports = authMiddleware
