import classes from './HeroList.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import bcgr from './bcgi.png'
import img from './img.png'
import {CFormSelect} from "@coreui/react";
import {NavLink} from "react-router-dom";

export const HeroList: React.FC = () => {

    const [peopleData, setPeopleDate] = useState([]);

    const war = [
        '',
        'Боевые действия в Афганистане',
        'Вооруженный конфликт в Чеченской Республике и на прилегающих к ней территориях Российской Федерации',
        'Выполнение специальных задач на территории Сирийской Арабской Республики',
        'Выполнение специальных задач на территории Таджикистана, Ингушетии, в Грузино-Абхазских событиях',
        'Специальная военная операция на Украине',
        'Великая отечественная война'
    ];

    useEffect(() => {
        getData('');
    }, []);

    const getData = (filter: string) => {
        axios
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
    }

    const getLink = (el: any) =>{
        if(el.extensions?.attachment){
            return `https://geois2.orb.ru/api/resource/8853/feature/${el.id}/attachment/${el.extensions.attachment[0].id}/image?size=128x128`
        }else {
            return img;
        }
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Герои Оренбургской области</h1>
            <input
                className={classes.filter}
                type={"text"}
                onChange={($e) => getData($e.target.value)}
                placeholder="Поиск"
            />
            <label style={{color: 'white', marginTop: '20px'}}>Участник боевых действий</label>
            <CFormSelect
                aria-label="Участник боевых действий"
                options={[
                    ...war
                ]}
                onChange={($e) => {
                    getData($e.target.value)
                }}
                style={{marginBottom: '150px', marginTop: '20px'}}
            />
            <div className={classes.hero__list}>
                {
                    peopleData.map((el) => {
                        return (
                            <NavLink className={classes.hero__item} to={`/book?id=${el.id}`}>
                                <img className={classes.hero__item__avatar}
                                    src={getLink(el)}
                                    >
                                </img>
                                <div className={classes.hero__item__fio}>{el.fields.fio}</div>
                                <div className={classes.hero__item__date}>{el.fields.years}</div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}
