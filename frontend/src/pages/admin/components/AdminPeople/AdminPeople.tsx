import {
    CButton, CButtonGroup,
    CForm,
    CFormInput, CFormSelect, CFormTextarea,
    CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle,
    CTable,
    CTableBody, CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from '@coreui/react';
import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import classes from './AdminPeople.module.scss';
import {IMaskMixin} from 'react-imask'
import {MapContainerProps, ReactNgwMap} from "@nextgis/react-ngw-map";
import type {NgwMap} from "@nextgis/ngw-map";
import MapAdapter from "@nextgis/ol-map-adapter";


const resource = '7986';
const domen = 'https://geois2.orb.ru';
export const AdminPeople = () => {
    const [visibleUpload, setVisibleUpload] = useState(false);
    const [isEditProfile, setEditProfile] = useState(false);
    const [peopleData, setPeopleDate] = useState([]);
    const [filter, setFilter] = useState('');
    const [fio, setFio] = useState('');
    const [info, setInfo] = useState('');
    const [n_raion, setNRaion] = useState('ЗАТО Комаровский');
    const [years, setYears] = useState('');
    const [kontrakt, setKontrakt] = useState('Боевые действия в Афганистане');
    const [nagrads, setNagrads] = useState('');
    const [dob, setDOB] = useState('');// дата рождения
    const [dod, setDOD] = useState('');// дата смерти
    const [ox, setOX] = useState('6266521.594576891');
    const [oy, setOY] = useState('6868838.029030548');
    const [geom, setGeom] = useState('POINT(6266521.594576891 6868838.029030548)');
    const [visible, setVisible] = useState(false)
    const [region, setRegion] = useState<string[]>([]);
    const [currentAnket, setCurrentAnket] = useState();
    const war = [
        'Боевые действия в Афганистане',
        'Вооруженный конфликт в Чеченской Республике и на прилегающих к ней территориях Российской Федерации',
        'Выполнение специальных задач на территории Сирийской Арабской Республики',
        'Выполнение специальных задач на территории Таджикистана, Ингушетии, в Грузино-Абхазских событиях',
        'Специальная военная операция на Украине',
        'Великая отечественная война'
    ];

    const [ngwMap, setNgwMap] = useState<NgwMap>();

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
        whenCreated: n => {
            console.log('layer:n', n);
            n.emitter.on('click', event => {
                alert('Точка добавлена');
                setOX(event.latLng.lng);
                setOY(event.latLng.lat);
            });
            setNgwMap(n);
        },
    };

    useEffect(() => {
        (async () => {
            await axios
                .get('https://geois2.orb.ru/api/resource/8853/feature/', {
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
        if (!region.length)
            (async () => {
                await axios
                    .get<string[]>('https://geois2.orb.ru/api/resource/8000/feature/?geom=false', {
                        auth: {
                            username: 'hackathon_34',
                            password: 'hackathon_34_25',
                        },
                    })
                    .then(res => {
                        if (res.data.length) {
                            const regions = res.data.map((el) => el.fields.name);
                            setRegion(regions);
                        }
                    });
            })();
    }, []);

    const setData = (e: ChangeEvent<HTMLInputElement> | null) => {
        if (e)
            setFilter(e.target.value);
        else setFilter('');
        (async () => {
            await axios
                .get('https://geois2.orb.ru/api/resource/8853/feature/', {
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

    const createAnket = () => {
        const years = dob?.replaceAll('-', '.') + ' - ' + dod?.replaceAll('-', '.');
        const body = {
            extensions: {
                attachment: null,
                description: null
            },
            fields: {
                num: 1,
                fio,
                info,
                kontrakt,
                nagrads,
                n_raion,
                years
            },
            geom: `POINT(${ox} ${oy})`
        };
        if (isEditProfile)
            axios.put('https://geois2.orb.ru/api/resource/8853/feature/' + currentAnket, body, {
                auth: {
                    username: 'hackathon_34',
                    password: 'hackathon_34_25',
                },
                headers: {
                    Accept: '*/*'
                }
            })
                .then((res) => {
                    setData(null);
                    setVisible(false);
                });
        else
            (async () => {
                    await axios.post('https://geois2.orb.ru/api/resource/8853/feature/', body, {
                        auth: {
                            username: 'hackathon_34',
                            password: 'hackathon_34_25',
                        },
                        headers: {
                            Accept: '*/*'
                        }
                    })
                        .then((res) => {
                            setData(null);
                            setCurrentAnket(res.data.id);
                            setVisibleUpload(true);
                            // setVisible(false);
                        });
                }
            )()
    }

    const uploadFile = ($e: ChangeEvent<HTMLInputElement>) => {
        const files = $e.target.files;
        const formData = new FormData();

        for (let i = 0; i < $e.target.files?.length; i++) {
            formData.append('file', $e.target.files[i]);
            formData.append('name', $e.target.files[i].name);
        }
        axios.post('https://geois2.orb.ru/api/component/file_upload/', formData, {
            headers: {
                Accept: '*/*',
                "Content-Type": "multipart/form-data"
            },
            auth: {
                username: 'hackathon_34',
                password: 'hackathon_34_25',
            },
        })
            .then((res: any) => {
                console.log(res)
                const body =
                    {
                        name: res.data.upload_meta[0].name,
                        size: res.data.upload_meta[0].size,
                        mime_type: res.data.upload_meta[0].mime_type,
                        file_upload: {
                            id: res.data.upload_meta[0].id,
                            size: res.data.upload_meta[0].size
                        }
                    }
                axios.post(`https://geois2.orb.ru/api/resource/8853/feature/${currentAnket}/attachment/`, body, {
                    headers: {
                        Accept: '*/*',
                    },
                    auth: {
                        username: 'hackathon_34',
                        password: 'hackathon_34_25',
                    }
                })
                    .then((res) => {
                        setData(null);
                        setVisible(false);
                        setEditProfile(false);
                    })
            })
    }

    const CFormInputWithMask = IMaskMixin(({inputRef, ...props}) =>
        (
            <CFormInput {...props} ref={inputRef}/>
        ))

    const deleteProfile = (id: number) => {
        const body = [{
            id
        }]

        axios.delete('https://geois2.orb.ru/api/resource/8853/feature/', {
            headers: {
                Accept: '*/*',
            },
            auth: {
                username: 'hackathon_34',
                password: 'hackathon_34_25',
            },
            data:
                [{
                    id
                }]
        }).then(() => setData(null))
    }

    const deleteFiles = (el: any) => {
        axios.delete(`https://geois2.orb.ru/api/resource/8853/feature/${el.id}/attachment/${el.extensions.attachment[0].id}`, {
            headers: {
                Accept: '*/*',
            },
            auth: {
                username: 'hackathon_34',
                password: 'hackathon_34_25',
            }
        }).then(() => setData(null))
    }

    const closeModal = () => {
        setVisible(false);
        setFio('');
        setDOB('');
        setDOD('');
        setNagrads('');
        setInfo('')
        setEditProfile(false);
    }

    const editProfile = (id: number) => {
        setVisible(true);
        setEditProfile(true);
        const currentProfile = peopleData.find((el) => el.id === id);
        setCurrentAnket(id);
        if (currentProfile) {
            setFio(currentProfile.fields.fio);
            setNRaion(currentProfile.fields.n_raion);
            setNagrads(currentProfile.fields.nagrads);
            setInfo(currentProfile.fields.info);
            setKontrakt(currentProfile.fields.kontrakt);
            const [birthDateStr, deathDateStr] = currentProfile.fields.years.split(" - ");
            setDOB(birthDateStr.replaceAll('.', '-'));
            setDOD(deathDateStr.replaceAll('.', '-'));
            const numbers = currentProfile.fields.geom.match(/\d+\.\d+/g);
            setOX(numbers[0]);
            setOY(numbers[1]);
        }
    }

    return (
        <div>
            <h2>Анекты участников боевых действий</h2>
            <div className={classes.filterBlock}>
                <CForm className={classes.filterBlock__input}>
                    <label>Поиск</label>
                    <CFormInput
                        type="text"
                        id="like"
                        value={filter}
                        onChange={$e => setData($e)}
                    />
                    <label>Участник боевых действий</label>
                    <CFormSelect
                        aria-label="Участник боевых действий"
                        options={[
                            ...war
                        ]}
                        onChange={($e) => {
                            setData($e)
                        }}
                    />
                </CForm>

                <CButton color={"primary"} onClick={() => setVisible(!visible)}>Добавить анекту</CButton>
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
                        <CTableHeaderCell scope="col">Действия</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {peopleData.map((el: any) => {
                        return (
                            <CTableRow key={el.id}>
                                {Object.values(el.fields)
                                    .filter((_, index) => index !== 1)
                                    .map((item: any, index) => {
                                        return <CTableHeaderCell
                                            scope={index === 0 ? 'row' : ''}>{item}
                                        </CTableHeaderCell>;
                                    })}
                                <CTableHeaderCell>
                                    <CButtonGroup>
                                        <CButton color={"danger"}
                                                 onClick={() => deleteProfile(el.id)}>Удалить</CButton>
                                        {
                                            el.extensions?.attachment ?
                                                <CButton color={"warning"}
                                                         onClick={() => deleteFiles(el)}>Удалить
                                                    файлы</CButton>
                                                : ''
                                        }
                                        <CButton color={"success"}
                                                 onClick={() => editProfile(el.id)}>Редактировать</CButton>
                                    </CButtonGroup>
                                </CTableHeaderCell>
                            </CTableRow>
                        );
                    })}
                </CTableBody>
            </CTable>
            <CModal
                alignment="center"
                visible={visible}
                onClose={() => closeModal()}
                aria-labelledby="VerticallyCenteredExample"
            >
                <CModalHeader>
                    <CModalTitle
                        id="VerticallyCenteredExample">{isEditProfile ? 'Изменение анкеты' : 'Создание анкеты'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CFormInput
                        type="text"
                        id="fio"
                        label="ФИО участника боевых действий"
                        value={fio}
                        onChange={($e) => setFio($e.target.value)}
                    />
                    <label style={{margin: '10px'}}>Дата рождения</label>
                    <input type="date" value={dob} onChange={($e) => setDOB($e.target.value)}/>
                    <br/>
                    <label style={{margin: '10px'}}>Дата смерти</label>
                    <input type="date" value={dod} onChange={($e) => setDOD($e.target.value)}/>
                    <br/>
                    <CFormTextarea
                        type="text"
                        id="info"
                        label="Информация о человеке"
                        value={info}
                        onChange={($e) => setInfo($e.target.value)}
                    />
                    <label style={{margin: '10px 0'}}>Регион</label>
                    <CFormSelect
                        aria-label="Регион"
                        options={[
                            ...region
                        ]}
                        onChange={($e) => setNRaion($e.target.value)}
                    />
                    <label>Задать координаты отображения точки на карте</label>
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
                    <label style={{margin: '10px 0'}}>Участник боевых действий</label>
                    <CFormSelect
                        aria-label="Участник боевых действий"
                        options={[
                            ...war
                        ]}
                        onChange={($e) => setKontrakt($e.target.value)}
                    />
                    <CFormTextarea
                        type="text"
                        id="nagrads"
                        label="Награды"
                        value={nagrads}
                        onChange={($e) => setNagrads($e.target.value)}
                    />
                    {
                        visibleUpload || isEditProfile ?
                            <CFormInput type="file" id="formFile" label="Прикрепить файлы"
                                        onChange={($e) => uploadFile($e)}/>
                            : ''
                    }
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Закрыть
                    </CButton>
                    <CButton color="primary"
                             disabled={
                                 !fio || !info || !kontrakt || !n_raion || !dob
                             }
                             onClick={() => createAnket()}>{isEditProfile ? 'Изменить' : 'Создать'}</CButton>
                </CModalFooter>
            </CModal>
        </div>
    );
};
