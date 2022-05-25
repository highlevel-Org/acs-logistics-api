const {Login,Register}  = require('./user-controller/user-controller');
const {getAllShippment,
    getAllShippmentByUserId,
    PostShippment,
    getShippment,getCusterShippmentById,
    updateShippment,
    deleteShippment,} = require('./shippment-controller/shippment-controller')



module.exports ={Login,Register,getAllShippment,
    getAllShippmentByUserId,
    PostShippment,
    getShippment,
    updateShippment,
    deleteShippment,getCusterShippmentById}