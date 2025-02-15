import React, { useEffect } from 'react';
import { useAppDispatch } from 'app/store';
import { getMap } from 'entities/map';

export const NextGISMapPages: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMap());
  }, []);

  return <div>text</div>;

  // return (
  //   <ReactNgwMap
  //     baseUrl="https://geois2.orb.ru/api/component/render/image?resource=8854&extent=6189669.504163173,6809072.774663741,6300197.447063538,6946659.4255770575&size=723,900&nd=204"
  //     resources={[{ resource: 6118, id: 'webmap', fit: true }]}
  //   />
  // );
};
