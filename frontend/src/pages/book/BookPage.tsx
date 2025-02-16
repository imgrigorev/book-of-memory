import classes from './BookPage.module.scss';
import classNames from "classnames";
import {useEffect, useState} from "react";
import axios from "axios";
import img from "pages/core/heroList/ui/img.png";
import {NavLink, useLocation} from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import {Button} from "shared/ui";

export const BookPage = () => {
    const [peopleData, setPeopleDate] = useState([]);
    const [selectData, setSelectData] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

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
                setTimeout(() => {
                    setPeopleDate(res.data);
                    if (id) {
                        const current = res.data.find((el) => el.id == id);
                        console.log(peopleData)
                        if (current) {
                            setSelectData(current);
                            console.log('current')
                        }
                    }
                }, 2500)
            });
    }
    const getLink = (el: any) => {
        if (el.extensions?.attachment) {
            return `https://geois2.orb.ru/api/resource/8853/feature/${el.id}/attachment/${el.extensions.attachment[0].id}/image?size=128x128`
        } else {
            return img;
        }
    }
    return (
        <div style={{padding: '50px'}}>
            <div className={classes.title}>Книга памяти</div>
            <div className={classes.book}>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classNames(classes.page, classes.turn)}></span>
                <span className={classes.cover}></span>
                <span className={classes.page}>{peopleData.map((el) => {
                    return (
                        <div
                            className={classNames(classes.fio__item, selectData.id == el.id ? classes.fio__item_active : '')}
                            onClick={() => setSelectData(el)}>
                            {el.fields.fio}
                        </div>
                    )
                })}</span>
                <span className={classNames(classes.page, classes.turn)}>
                    {
                        selectData ?
                            <div className={classes.person}>
                                <div className={classes.person__header}>
                                    <img className={classes.person__avatar}
                                         src={getLink(selectData)}
                                    />
                                    <div className={classes.person__header_section}>
                                        <div className={classes.person__fio}>
                                            {selectData.fields.fio.replace(/\s+/g, ' ')}
                                        </div>
                                        <div className={classes.person__description}>{selectData.fields.years}</div>
                                        <div
                                            className={classes.person__description}>Награды: {selectData.fields.nagrads}</div>
                                    </div>
                                </div>
                                <div className={classes.person__info}>
                                    {selectData.fields.info}
                                </div>
                                {
                                    selectData ?
                                        <NavLink to={'/print-hero?id=' + selectData.id} className={classes.print}>Версия
                                            для печати</NavLink> : ''
                                }
                            </div>
                            : ''
                    }
                </span>
                <span className={classNames(classes.cover, classes.turn)}></span>
            </div>
            {
                selectData ?
                    (<div className={classes.mobile}>
                        <div className={classes.mobile__title}>Книга памяти</div>
                        <img className={classes.mobile__avatar}
                             src={getLink(selectData)}
                        />
                        <div className={classes.mobile__fio}>
                            {selectData.fields.fio.replace(/\s+/g, ' ')}
                        </div>
                        <div className={classes.mobile__description}>
                            {selectData.fields.years}
                        </div>
                        <div className={classes.mobile__description}>
                            Награды: {selectData.fields.nagrads}
                        </div>
                        <div className={classes.mobile__info}>
                            {selectData.fields.info}
                        </div>
                        <NavLink className={classes.mobile__print} to={'/print-hero?id=' + selectData.id}>Печатная версия</NavLink>
                    </div>) : ''
            }
        </div>
    )
}
