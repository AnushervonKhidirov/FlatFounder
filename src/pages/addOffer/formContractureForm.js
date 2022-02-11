const apartmentForm = [
    {
        title: 'Год постройки',
        key: 'buildingYear',
        input: true,
        valueItems: [
            {
                title: 'Введите год постройки',
                type: 'number',
                key: 'buildingYear'
            }
        ]
    },
    {
        title: 'Площадь',
        key: 'square',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь',
                type: 'number',
                key: 'square'
            }
        ]
    },
    {
        title: 'Этаж',
        key: 'floor',
        input: true,
        valueItems: [
            {
                title: 'введите в формате (Этаж/Всего этажей)',
                type: 'number',
                key: 'currentFloor'
            }
        ]
    },
    {
        title: 'Тип дома',
        key: 'buildingType',
        valueItems: [
            {
                title: 'Кирпич',
                key: 'brick'
            },
            {
                title: 'Монолит',
                key: 'monolith'
            },
            {
                title: 'Панель',
                key: 'panel'
            },
            {
                title: 'Кирпич-монолит',
                key: 'brickMonolith'
            },
            {
                title: 'Блок',
                key: 'block'
            }
        ]
    },
    {
        title: 'Тип парковки',
        key: 'parkingType',
        valueItems: [
            {
                title: 'Закрытая',
                key: 'closed'
            },
            {
                title: 'Открытая',
                key: 'opened'
            },
            {
                title: 'Подземная',
                key: 'underground'
            },
            {
                title: 'Нету',
                key: 'no'
            }
        ]
    },
    {
        title: 'Комнат',
        key: 'rooms',
        valueItems: [
            {
                title: '1',
                key: '1'
            },
            {
                title: '2',
                key: '2'
            },
            {
                title: '3',
                key: '3'
            },
            {
                title: '4',
                key: '4'
            },
            {
                title: '5',
                key: '5'
            },
            {
                title: '6+',
                key: '6'
            },
            {
                title: 'Студия',
                key: 'studio'
            }
        ]
    },
    {
        title: 'Санузел',
        key: 'bathroom',
        valueItems: [
            {
                title: 'Раздельный',
                key: 'separated'
            },
            {
                title: 'Совмещенный',
                key: 'combined'
            }
        ]
    },
    {
        title: 'Балкон',
        key: 'balcony',
        valueItems: [
            {
                title: 'Балкон',
                key: 'balcony'
            },
            {
                title: 'Лоджия',
                key: 'loggia'
            },
            {
                title: 'нет',
                key: 'no'
            }
        ]
    },
    {
        title: 'Ремонт',
        key: 'repair',
        valueItems: [
            {
                title: 'Косметический',
                key: 'cosmetic'
            },
            {
                title: 'Евро',
                key: 'euro'
            },
            {
                title: 'Дизайнерский',
                key: 'designer'
            },
            {
                title: 'Требуется',
                key: 'needs'
            }
        ]
    },
    {
        title: 'Окна',
        key: 'windows',
        valueItems: [
            {
                title: 'Во двор',
                key: 'yard'
            },
            {
                title: 'На улицу',
                key: 'street'
            }
        ]
    },
    {
        title: 'Цена',
        key: 'price',
        input: true,
        valueItems: [
            {
                title: 'Введите цену',
                type: 'number',
                key: 'price'
            }
        ]
    },
    {
        title: 'Тип сделки',
        key: 'dealType',
        info: [
            ['Свободная продажа — самостоятельная сделка, не зависящая от других сделок'],
            ['Альтернатива — одновременная сделка по продаже одного объекта недвижимости и приобретению другого'],
            ['Переуступка — это приобретение имущественных прав по договору долевого участия. В этом случае у продавца нет права собственности на жильё, а сам объект, как правило, ещё не сдан']
        ],
        valueItems: [
            {
                title: 'Свободная продажа',
                key: 'freeSale'
            },
            {
                title: 'Альтернатива',
                key: 'alternative'
            },
            {
                title: 'Переуступка',
                key: 'assignment'
            }
        ]
    },
    {
        title: 'Дополнительно',
        key: 'additional',
        valueItems: [
            {
                title: 'Возможен торг',
                key: 'bargain'
            },
            {
                title: 'Без торга',
                key: 'no_bargain'
            }
        ]
    }
];

const roomForm = [
    {
        title: 'Год постройки',
        key: 'buildingYear',
        input: true,
        valueItems: [
            {
                title: 'Введите год постройки',
                type: 'number',
                key: 'buildingYear'
            }
        ]
    },
    {
        title: 'Площадь',
        key: 'square',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь',
                type: 'number',
                key: 'square'
            }
        ]
    },
    {
        title: 'Этаж',
        key: 'floor',
        input: true,
        valueItems: [
            {
                title: 'введите в формате (Этаж/Всего этажей)',
                type: 'number',
                key: 'currentFloor'
            }
        ]
    },
    {
        title: 'Тип дома',
        key: 'buildingType',
        valueItems: [
            {
                title: 'Кирпич',
                key: 'brick'
            },
            {
                title: 'Монолит',
                key: 'monolith'
            },
            {
                title: 'Панель',
                key: 'panel'
            },
            {
                title: 'Кирпич-монолит',
                key: 'brickMonolith'
            },
            {
                title: 'Блок',
                key: 'block'
            }
        ]
    },
    {
        title: 'Тип парковки',
        key: 'parkingType',
        valueItems: [
            {
                title: 'Закрытая',
                key: 'closed'
            },
            {
                title: 'Открытая',
                key: 'opened'
            },
            {
                title: 'Подземная',
                key: 'underground'
            },
            {
                title: 'Нету',
                key: 'no'
            }
        ]
    },
    {
        title: 'Комнат',
        key: 'rooms',
        valueItems: [
            {
                title: '1',
                key: '1'
            },
            {
                title: '2',
                key: '2'
            },
            {
                title: '3',
                key: '3'
            },
            {
                title: '4',
                key: '4'
            },
            {
                title: '5',
                key: '5'
            },
            {
                title: '6+',
                key: '6'
            },
            {
                title: 'Студия',
                key: 'studio'
            }
        ]
    },
    {
        title: 'Санузел',
        key: 'bathroom',
        valueItems: [
            {
                title: 'Раздельный',
                key: 'separated'
            },
            {
                title: 'Совмещенный',
                key: 'combined'
            }
        ]
    },
    {
        title: 'Балкон',
        key: 'balcony',
        valueItems: [
            {
                title: 'Балкон',
                key: 'balcony'
            },
            {
                title: 'Лоджия',
                key: 'loggia'
            },
            {
                title: 'нет',
                key: 'no'
            }
        ]
    },
    {
        title: 'Ремонт',
        key: 'repair',
        valueItems: [
            {
                title: 'Косметический',
                key: 'cosmetic'
            },
            {
                title: 'Евро',
                key: 'euro'
            },
            {
                title: 'Дизайнерский',
                key: 'designer'
            },
            {
                title: 'Требуется',
                key: 'needs'
            }
        ]
    },
    {
        title: 'Окна',
        key: 'windows',
        valueItems: [
            {
                title: 'Во двор',
                key: 'yard'
            },
            {
                title: 'На улицу',
                key: 'street'
            }
        ]
    },
    {
        title: 'Цена',
        key: 'price',
        input: true,
        valueItems: [
            {
                title: 'Введите цену',
                type: 'number',
                key: 'price'
            }
        ]
    },
    {
        title: 'Тип сделки',
        key: 'dealType',
        info: [
            ['Свободная продажа — самостоятельная сделка, не зависящая от других сделок'],
            ['Альтернатива — одновременная сделка по продаже одного объекта недвижимости и приобретению другого'],
            ['Переуступка — это приобретение имущественных прав по договору долевого участия. В этом случае у продавца нет права собственности на жильё, а сам объект, как правило, ещё не сдан']
        ],
        valueItems: [
            {
                title: 'Свободная продажа',
                key: 'freeSale'
            },
            {
                title: 'Альтернатива',
                key: 'alternative'
            },
            {
                title: 'Переуступка',
                key: 'assignment'
            }
        ]
    },
    {
        title: 'Дополнительно',
        key: 'additional',
        valueItems: [
            {
                title: 'Возможен торг',
                key: 'bargain'
            },
            {
                title: 'Без торга',
                key: 'no_bargain'
            }
        ]
    }
];

const houseForm = [
    {
        title: 'Год постройки',
        key: 'buildingYear',
        input: true,
        valueItems: [
            {
                title: 'Введите год постройки',
                type: 'number',
                key: 'buildingYear'
            }
        ]
    },
    {
        title: 'Площадь дома',
        key: 'squareHouse',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь',
                type: 'number',
                key: 'squareHouse'
            }
        ]
    },
    {
        title: 'Площадь участка',
        key: 'squarePlot',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь (в сотках)',
                type: 'number',
                key: 'squarePlot'
            }
        ]
    },
    {
        title: 'Тип дома',
        key: 'buildingType',
        valueItems: [
            {
                title: 'Кирпич',
                key: 'brick'
            },
            {
                title: 'Монолит',
                key: 'monolith'
            },
            {
                title: 'Панель',
                key: 'panel'
            },
            {
                title: 'Кирпич-монолит',
                key: 'brickMonolith'
            },
            {
                title: 'Блок',
                key: 'block'
            }
        ]
    },
    {
        title: 'Санузел',
        key: 'bathroom',
        valueItems: [
            {
                title: 'В дома',
                key: 'inside'
            },
            {
                title: 'На улице',
                key: 'outside'
            },
            {
                title: 'Отсутствует',
                key: 'no'
            }
        ]
    },
    {
        title: 'Ремонт',
        key: 'repair',
        valueItems: [
            {
                title: 'Косметический',
                key: 'cosmetic'
            },
            {
                title: 'Евро',
                key: 'euro'
            },
            {
                title: 'Дизайнерский',
                key: 'designer'
            },
            {
                title: 'Требуется',
                key: 'needs'
            }
        ]
    },
    {
        title: 'Цена',
        key: 'price',
        input: true,
        valueItems: [
            {
                title: 'Введите цену',
                type: 'number',
                key: 'price'
            }
        ]
    },
    {
        title: 'Тип сделки',
        key: 'dealType',
        info: [
            ['Свободная продажа — самостоятельная сделка, не зависящая от других сделок'],
            ['Альтернатива — одновременная сделка по продаже одного объекта недвижимости и приобретению другого'],
            ['Переуступка — это приобретение имущественных прав по договору долевого участия. В этом случае у продавца нет права собственности на жильё, а сам объект, как правило, ещё не сдан']
        ],
        valueItems: [
            {
                title: 'Свободная продажа',
                key: 'freeSale'
            },
            {
                title: 'Альтернатива',
                key: 'alternative'
            },
            {
                title: 'Переуступка',
                key: 'assignment'
            }
        ]
    },
    {
        title: 'Дополнительно',
        key: 'additional',
        valueItems: [
            {
                title: 'Возможен торг',
                key: 'bargain'
            },
            {
                title: 'Без торга',
                key: 'no_bargain'
            }
        ]
    }
];

const commercialForm = [
    {
        title: 'Площадь',
        key: 'square',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь',
                type: 'number',
                key: 'square'
            }
        ]
    },
    {
        title: 'Назначение',
        key: 'purpose',
        valueItems: [
            {
                title: 'Для офиса',
                key: 'office'
            },
            {
                title: 'Торговое помещение',
                key: 'trade'
            },
            {
                title: 'Свободное назначение',
                key: 'free'
            },
            {
                title: 'Общепит',
                key: 'public_catering'
            },
            {
                title: 'Автосервис',
                key: 'car_service'
            },
            {
                title: 'Готовый бизнес',
                key: 'ready_business'
            },
            {
                title: 'Склад',
                key: 'warehouse'
            },
            {
                title: 'Гостиница',
                key: 'hotel'
            },
            {
                title: 'Производство',
                key: 'production'
            }
        ]
    },
    {
        title: 'Цена',
        key: 'price',
        input: true,
        valueItems: [
            {
                title: 'Введите цену',
                type: 'number',
                key: 'price'
            }
        ]
    },
    {
        title: 'Тип сделки',
        key: 'dealType',
        info: [
            ['Свободная продажа — самостоятельная сделка, не зависящая от других сделок'],
            ['Альтернатива — одновременная сделка по продаже одного объекта недвижимости и приобретению другого'],
            ['Переуступка — это приобретение имущественных прав по договору долевого участия. В этом случае у продавца нет права собственности на жильё, а сам объект, как правило, ещё не сдан']
        ],
        valueItems: [
            {
                title: 'Свободная продажа',
                key: 'freeSale'
            },
            {
                title: 'Альтернатива',
                key: 'alternative'
            },
            {
                title: 'Переуступка',
                key: 'assignment'
            }
        ]
    },
    {
        title: 'Дополнительно',
        key: 'additional',
        valueItems: [
            {
                title: 'Возможен торг',
                key: 'bargain'
            },
            {
                title: 'Без торга',
                key: 'no_bargain'
            }
        ]
    }
];

const plotForm = [
    {
        title: 'Площадь участка',
        key: 'squarePlot',
        input: true,
        valueItems: [
            {
                title: 'Введите площадь (в сотках)',
                type: 'number',
                key: 'squarePlot'
            }
        ]
    },
    {
        title: 'Цена',
        key: 'price',
        input: true,
        valueItems: [
            {
                title: 'Введите цену',
                type: 'number',
                key: 'price'
            }
        ]
    },
    {
        title: 'Тип сделки',
        key: 'dealType',
        info: [
            ['Свободная продажа — самостоятельная сделка, не зависящая от других сделок'],
            ['Альтернатива — одновременная сделка по продаже одного объекта недвижимости и приобретению другого'],
            ['Переуступка — это приобретение имущественных прав по договору долевого участия. В этом случае у продавца нет права собственности на жильё, а сам объект, как правило, ещё не сдан']
        ],
        valueItems: [
            {
                title: 'Свободная продажа',
                key: 'freeSale'
            },
            {
                title: 'Альтернатива',
                key: 'alternative'
            },
            {
                title: 'Переуступка',
                key: 'assignment'
            }
        ]
    },
    {
        title: 'Дополнительно',
        key: 'additional',
        valueItems: [
            {
                title: 'Возможен торг',
                key: 'bargain'
            },
            {
                title: 'Без торга',
                key: 'no_bargain'
            }
        ]
    }
];

export { apartmentForm, roomForm, houseForm, commercialForm, plotForm };