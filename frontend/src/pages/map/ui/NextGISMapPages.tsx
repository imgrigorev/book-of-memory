import React, { useMemo } from 'react';
import { MapContainerProps, ReactNgwMap } from '@nextgis/react-ngw-map';
import MapAdapter from '@nextgis/ol-map-adapter';
import classes from './NextGISMapPages.module.scss';

import type { NgwMap } from '@nextgis/ngw-map';

const resource = '8854,7986';
const domen = 'https://geois2.orb.ru';

export const NextGISMapPages: React.FC = () => {
  const adapter = useMemo(() => {
    return new MapAdapter();
  }, []);

  const resources = useMemo(() => {
    return resource.split(',').map((item, index) => ({
      resource: Number(item),
      id: `layer1${index}`,
    }));
  }, []);

  const mapOptions: MapContainerProps = {
    id: 'map',
    osm: true,
    baseUrl: domen,
    resources: [...resources, { resource: 2092, id: 'webmap' }],
    whenCreated: (ngwMap: NgwMap) => {
      // console.log('layer:n', ngwMap);
      ngwMap.emitter.on('click', event => {
        // console.log('layer:toggle', event);
        // ngwMap.emitter;
      });
    },
  };

  return (
    <div className={classes.container}>
      <ReactNgwMap
        className={classes.map}
        mapAdapter={adapter}
        zoom={10}
        center={[56, 52.5]}
        auth={{
          login: 'hackathon_34',
          password: 'hackathon_34_25',
        }}
        {...mapOptions}
      ></ReactNgwMap>
    </div>
  );
};
