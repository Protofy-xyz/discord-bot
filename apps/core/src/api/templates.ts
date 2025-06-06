import * as fs from 'fs';
import { handler, getApp} from 'protonode'
import { connectDB } from 'app/bundles/storageProviders'
import { getLogger, templates } from 'protobase';
const { createExpressProxy } = require('app/proxy.js')

const logger = getLogger()

const app = getApp((app) => app.use( createExpressProxy('core') ))

logger.debug(`API Module loaded: ${__filename.split('.')[0]}`)

const requireAdmin = () => handler(async (req, res, session, next) => {
    if(!session || !session.user.admin) {
        res.status(401).send({error: "Unauthorized"})
        return
    }
    next()
})

app.post('/api/core/v1/templates/:tplname', requireAdmin(), handler(async (req, res) => {
    const tplname = req.params.tplname;
    const params = req.body

    if(!templates[tplname]) {
        throw "No such template: "+tplname
    }
    
    const name = params.name.replace(/[^a-zA-Z0-9\/_.-]/g, '')
    const path = params.data.path.replace(/\.\./g, '')
    const fullpath = '../..'+path+"/"+name
    logger.info({ template: {name: tplname, path: fullpath, vars: params }}, "Executing template: " + tplname)
    await templates[tplname]({connectDB, fs},fullpath, params)

    res.send({"result":"created"})
    return
}));

export default 'templates'