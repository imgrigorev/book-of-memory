import { CForm, CFormInput, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import classes from './AdminPeople.module.scss';

// export interface PeopleInterface {
//   id: number;
//   geom: string;
//   fields: {
//     id: number;
//     num: number;
//     'Список для веб - Лист1_Field2': string;
//     'Список для веб - Лист1_Field3': string;
//     'Список для веб - Лист1_Field4': string;
//     'Список для веб - Лист1_Field5': string;
//     'Список для веб - Лист1_Field6': string;
//     Награды;
//   };
//   extensions: {
//     description: null | string;
//     attachment: {
//       id: number;
//       name: string;
//       keyname: null | string;
//       size: number;
//       mime_type: string;
//       description: string;
//       is_image: boolean;
//     }[];
//   };
// }

export const AdminPeople = () => {
  const [peopleData, setPeopleDate] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    (async () => {
      await axios
        .get('https://geois2.orb.ru/api/resource/7980/feature/', {
          params: {
            like: filter,
          },
          auth: {
            username: 'hackathon_34',
            password: 'hackathon_34_25',
          },
        })
        .then(res => {
          setPeopleDate(res.data);
        });
    })();
  }, []);

  const setData = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    (async () => {
      await axios
        .get('https://geois2.orb.ru/api/resource/7980/feature/', {
          params: {
            like: filter,
          },
          auth: {
            username: 'hackathon_34',
            password: 'hackathon_34_25',
          },
        })
        .then(res => {
          setPeopleDate(res.data);
        });
    })();
  };

  return (
    <div>
      <div className={classes.filterBlock}>
        <CForm>
          <CFormInput
            type="text"
            id="like"
            label="Поиск"
            placeholder="Поиск"
            value={filter}
            onChange={$e => setData($e)}
          />
        </CForm>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Наименование района</CTableHeaderCell>
            <CTableHeaderCell scope="col">ФИО</CTableHeaderCell>
            <CTableHeaderCell scope="col">Годы жизни</CTableHeaderCell>
            <CTableHeaderCell scope="col">Краткая информация</CTableHeaderCell>
            <CTableHeaderCell scope="col">Место службы</CTableHeaderCell>
            <CTableHeaderCell scope="col">Награды</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {peopleData.map((el: any) => {
            return (
              <CTableRow key={el.id}>
                {Object.values(el.fields)
                  .filter((_, index) => index !== 1)
                  .map((item: any, index) => {
                    return <CTableHeaderCell scope={index === 0 ? 'row' : ''}>{item}</CTableHeaderCell>;
                  })}
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </div>
  );
};
