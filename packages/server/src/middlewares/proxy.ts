import httpProxy from 'http-proxy';
import { Request, Response } from 'express';


const devAPIProxy = () => {
  const proxy = httpProxy.createProxyServer({
    target: process.env.API_INTERNAL_HOST,
    secure: false,
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
    proxyTimeout: 15000,
    timeout: 15000,
  });

  proxy.on('proxyRes', (proxyRes) => {
    const setCookieHeaders = proxyRes.headers['set-cookie'];
    if (Array.isArray(setCookieHeaders)) {
      // eslint-disable-next-line no-param-reassign
      proxyRes.headers['set-cookie'] = setCookieHeaders.map((sc) => sc
        .split(';')
        .filter((v) => v.trim().toLowerCase() !== 'secure')
        .join('; '));
    }
  });

  return (req: Request, res: Response) => {
    proxy.web(req, res);
  };
};

export default devAPIProxy;
