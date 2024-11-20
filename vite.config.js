import { resolve } from 'path'
export default{
    css:{
        devSourceMap: true
    },
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname,'index.html'),
                marioKart: resolve(__dirname,'pages/mario-kart-8/mario-kart.html'),
                mortalKombat: resolve(__dirname,'pages/mortal-kombat/mk-11.html')
            }
        }
    }
}