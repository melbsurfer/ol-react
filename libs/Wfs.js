import { WFS_URL } from '../config';

class Wfs {
  constructor() {
    this.url = WFS_URL;
  }

  getData(filter) {
    console.log(filter);
    if (filter === undefined) {
      filter = '';
    } else {
      filter = `in(${filter})`;
    }

    return fetch(`${WFS_URL
    }/getFeature?` +
      'service=WFS' +
      '&version=1.1.0' +
      '&request=GetFeature ' +
      '&typeName=omar%3Araster_entry' +
      '&resultType=results' +
      '&outputFormat=JSON' +
      `&filter=${encodeURIComponent(filter)
      }&maxFeatures=20` +
      '&startIndex=0')
      .then((response) => {
        if (!response.ok) {
          throw Error('Network error has occurred!');
        }
        return response;
      })
      .then(data => data.json())
      .then((data) => {
        let results = [];
        results = data.features.map(result => result);
        return results;
      });
  }

  getDataHits(obj) {
    // console.log(WFS_URL);
    const filter = '';

    return fetch(`${WFS_URL
    }/getFeature?` +
      'service=WFS' +
      '&request=GetFeature ' +
      '&typeName=omar%3Araster_entry' +
      '&outputFormat=JSON' +
      `&filter=${encodeURIComponent(filter)
      }&resultType=hits`)
      .then((response) => {
        if (!response) {
          alert('A network error has occurred!');
        }
        if (!response.ok) {
          throw Error('Network error has occurred!');
        }
        return response;
      })
      .then(data => data.json())
      .then(data => data.totalFeatures);
  }
}

export default Wfs;
