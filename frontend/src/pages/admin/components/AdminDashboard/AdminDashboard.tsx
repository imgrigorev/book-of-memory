import classes from './AdminDashboard.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { getStyle } from '@coreui/utils';
import type { ChartData, ChartOptions } from 'chart.js';
import { CChart } from '@coreui/react-chartjs';
import axios from 'axios';

export const AdminDashboard = () => {
  const chartRaionRef = useRef<Chart<'doughnut'> | null>(null);
  const chartKontraktRef = useRef<Chart<'doughnut'> | null>(null);
  const chartAgeRef = useRef<Chart<'line'> | null>(null);
  const [data, setData] = useState([]);
  const [nRaionStats, setNRaionStats] = useState({});
  const [kontraktStats, setKontraktStats] = useState({});
  const [ageStats, setAgeStats] = useState({});

  const mutedColors = [
    '#8A9A5B', // Серо-зеленый
    '#B2B2B2', // Серый
    '#6B8E23', // Оливковый
    '#A0522D', // Коричневый
    '#808080', // Серый
    '#556B2F', // Темно-оливковый
    '#8B4513', // Коричневый (SaddleBrown)
    '#696969', // Темно-серый
    '#6A5ACD', // Сланцево-синий
    '#8B7355', // Бронзовый
    '#708090', // Сланцево-серый
    '#483D8B', // Темно-сланцевый
    '#7B68EE', // Средний сланцево-синий
    '#9370DB', // Средний фиолетовый
    '#D2B48C', // Загар (Tan)
  ];

  useEffect(() => {
    (async () => {
      axios
        .get('https://geois2.orb.ru/api/resource/8853/feature/', {
          auth: {
            username: 'hackathon_34',
            password: 'hackathon_34_25',
          },
        })
        .then(res => {
          setData(res.data);
          getStatistics(res.data);
          // Получаем средний возраст по kontrakt
          setAgeStats(getAverageAgeByKontrakt(data));
        });
    })();

    const handleColorSchemeChange_raion = () => {
      const chartInstance = chartRaionRef.current;
      if (chartInstance) {
        const { options } = chartInstance;

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color');
        }

        chartInstance.update();
      }
    };
    const handleColorSchemeChange_kontrakt = () => {
      const chartInstance = chartKontraktRef.current;
      if (chartInstance) {
        const { options } = chartInstance;

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color');
        }

        chartInstance.update();
      }
    };

    const handleColorSchemeChange_age = () => {
      const chartInstance = chartAgeRef.current;
      if (chartInstance) {
        const { options } = chartInstance;

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color');
        }

        if (options.scales?.x) {
          if (options.scales.x.grid) {
            options.scales.x.grid.color = getStyle('--cui-border-color-translucent');
          }
          if (options.scales.x.ticks) {
            options.scales.x.ticks.color = getStyle('--cui-body-color');
          }
        }

        if (options.scales?.y) {
          if (options.scales.y.grid) {
            options.scales.y.grid.color = getStyle('--cui-border-color-translucent');
          }
          if (options.scales.y.ticks) {
            options.scales.y.ticks.color = getStyle('--cui-body-color');
          }
        }

        chartInstance.update();
      }
    };

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange_raion);
    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange_kontrakt);
    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange_age);
    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange_raion);
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange_kontrakt);
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange_age);
    };
  }, []);

  const dataKontrakt: ChartData<'doughnut'> = {
    labels: [
      ...Object.keys(kontraktStats)?.map(el =>
        el.replace('Выполнение специальных задач на территории', 'Вып. спец. задач на терр.')?.substring(0, 60),
      ),
    ],
    datasets: [
      {
        backgroundColor: mutedColors,
        data: [...Object.values(kontraktStats)],
      },
    ],
  };

  const dataRaion: ChartData<'doughnut'> = {
    labels: [...Object.keys(nRaionStats)?.map(el => el.substring(0, 30))],
    datasets: [
      {
        backgroundColor: mutedColors,
        data: [...Object.values(nRaionStats)],
      },
    ],
  };

  const data_age = {
    labels: Object.keys(ageStats),
    datasets: [
      {
        label: 'Средний срок жизни..',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: Object.values(ageStats),
        fill: true,
      },
    ],
  };

  const getStatistics = (data: any[]) => {
    const nRaionStats = {}; // Статистика по n_raion
    const kontraktStats = {}; // Статистика по kontrakt

    // Перебираем массив данных
    data.forEach(item => {
      const nRaion = item.fields.n_raion;
      const kontrakt = item.fields.kontrakt;

      // Подсчет для n_raion
      if (nRaionStats[nRaion]) {
        nRaionStats[nRaion]++;
      } else {
        nRaionStats[nRaion] = 1;
      }

      // Подсчет для kontrakt
      if (kontraktStats[kontrakt]) {
        kontraktStats[kontrakt]++;
      } else {
        kontraktStats[kontrakt] = 1;
      }
    });

    setNRaionStats(nRaionStats);
    setKontraktStats(kontraktStats);
  };

  // Функция для расчета количества прожитых лет
  const calculateAge = yearsString => {
    const [birthDateStr, deathDateStr] = yearsString.split(' - ');

    // Преобразуем строки дат в объекты Date
    const birthDate = new Date(birthDateStr);
    const deathDate = new Date(deathDateStr);

    // Вычисляем разницу в годах
    const age = deathDate.getFullYear() - birthDate.getFullYear();

    // Корректируем, если день рождения еще не наступил в году смерти
    if (
      deathDate.getMonth() < birthDate.getMonth() ||
      (deathDate.getMonth() === birthDate.getMonth() && deathDate.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }

    return age;
  };

  // Функция для расчета среднего возраста по kontrakt
  const getAverageAgeByKontrakt = data => {
    const kontraktStats = {}; // Статистика по kontrakt

    data.forEach(item => {
      const kontrakt = item.fields.kontrakt;
      const age = calculateAge(item.fields.years);

      // Инициализация группы, если она еще не существует
      if (!kontraktStats[kontrakt]) {
        kontraktStats[kontrakt] = {
          totalAge: 0,
          count: 0,
        };
      }

      // Добавляем возраст к общей сумме и увеличиваем счетчик
      kontraktStats[kontrakt].totalAge += age;
      kontraktStats[kontrakt].count++;
    });

    // Рассчитываем средний возраст для каждой группы
    const result = {};
    for (const [kontrakt, stats] of Object.entries(kontraktStats)) {
      result[kontrakt] = stats.totalAge / stats.count;
    }

    return result;
  };

  const options_age: ChartOptions<'line'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        type: 'category',
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  };

  return (
    <div>
      <section>
        <div className={classes.chart}>
          <div className={classes.chart__header}>Район</div>
          <CChart type="doughnut" data={dataRaion} options={options} ref={chartRaionRef} />
        </div>
        <div className={classes.chart}>
          <div className={classes.chart__header}>Участие в боевых действиях</div>
          <CChart type="doughnut" data={dataKontrakt} options={options} ref={chartKontraktRef} />
        </div>
      </section>
      {/*<section>*/}
      {/*    <div className={classes.chart__age}>*/}
      {/*        <CChart type="line" data={data_age} options={options_age} ref={chartAgeRef} />*/}
      {/*    </div>*/}
      {/*</section>*/}
    </div>
  );
};
