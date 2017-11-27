//export const SERVER_URL = 'https://omar-dev.ossim.io';
export const SERVER_URL = 'http://localhost:8888';

export const BASIC_BASEMAP = `${SERVER_URL}/omar-mapproxy/service`
export const WFS_URL = `${SERVER_URL}/omar-wfs/wfs`;

export const THUMBNAIL_SERVICE = {
  url: `${SERVER_URL}/omar-oms/imageSpace/getThumbnail`,
  size: 100,
  format: 'jpeg'
};
