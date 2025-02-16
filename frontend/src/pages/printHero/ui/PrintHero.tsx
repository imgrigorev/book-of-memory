import classes from './printHero.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import RImage from './Frame1.png'
import {useLocation} from "react-router-dom";
import img from "pages/core/heroList/ui/img.png";
import {el} from "@faker-js/faker";

export const PrintHero = () => {
    const [data, setDate] = useState();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    useEffect(() => {
        axios
            .get('https://geois2.orb.ru/api/resource/8853/feature/', {
                params: {
                    like: '',
                },
                auth: {
                    username: 'hackathon_34',
                    password: 'hackathon_34_25',
                },
            })
            .then(res => {
                const current = res.data.find((el)=>el.id == id);
                if(current){
                    setDate(current);
                    setTimeout(()=>
                        window.print(), 2000)
                }
            });
    }, []);
    const getLink = (el: any) => {
        console.log(el);
        if (el.extensions?.attachment) {
            return `https://geois2.orb.ru/api/resource/8853/feature/${el.id}/attachment/${el.extensions.attachment[0].id}/image?size=128x128`
        } else {
            return RImage;
        }
    }
    return (
        data?
        <div className={classes.printPage}>
            <div className={classes.header}>
                <img className={classes.header__avatar}
                     src={getLink(data)}
                />
                <div className={classes.header__person}>
                    <div className={classes.header__person}>
                        {data?.fields.fio}
                    </div>
                    <div className={classes.header__years}>
                        {data?.fields.years}
                    </div>
                    <div className={classes.header__extra}>
                        <div>Награды: {data?.fields.nagrads}</div>
                    </div>
                </div>
            </div>
            <div className={classes.info}>
                {data?.fields.info}
            </div>
            <div className={classes.memory}>
                Книга памяти
            </div>
        </div>:<></>
    )
}
