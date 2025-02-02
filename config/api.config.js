import {NODE_ENV} from '../environment'

const apisMap = {
  development: {
    FE: 'http://localhost:3000',
    BASE: 'http://localhost:8099/happyshare',
    CDN: '',
    PROXY: '/proxy',
    SOCKET: 'http://localhost:3000/ws',
    GRAVATAR: '/proxy/static.rymcu.com/avatar',
    VDITOR: 'https://static.rymcu.com/vditor@3.9.8/',
    VDITOR_CSS: 'https://static.rymcu.com/vditor@3.9.8/dist/css/content-theme'
  },
  test: {
    FE: 'https://rymcu.com',
    BASE: 'https://rymcu.com',
    CDN: 'https://static.rymcu.com',
    PROXY: 'https://static.rymcu.com/proxy',
    SOCKET: 'https://rymcu.com/wss',
    GRAVATAR: 'https://static.rymcu.com/avatar',
    VDITOR: 'https://static.rymcu.com/vditor@3.9.8/',
    VDITOR_CSS: 'https://static.rymcu.com/vditor@3.9.8/dist/css/content-theme'
  },
  production: {
    FE: 'https://rymcu.com',
    BASE: 'https://rymcu.com',
    CDN: 'https://static.rymcu.com',
    PROXY: 'https://static.rymcu.com/proxy',
    SOCKET: 'https://rymcu.com/wss',
    GRAVATAR: 'https://static.rymcu.com/avatar',
    VDITOR: 'https://static.rymcu.com/vditor@3.9.8/',
    VDITOR_CSS: 'https://static.rymcu.com/vditor@3.9.8/dist/css/content-theme'
  }
}

export default apisMap[NODE_ENV]
