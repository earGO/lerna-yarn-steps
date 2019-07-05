export default [
  {
    nick: 'Timetable',
    name: 'Рабочее время',
    context: 'SYSTEM',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'SYSTEM',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'workDay', nickDict: 'Timetable'},
        name: 'День',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'dayTimetable', nickDict: 'Timetable'},
        name: 'Рабочее время (до обеда, после обеда)',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'dayComment', nickDict: 'Timetable'},
        name: 'Примечание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'unitMeasure',
    name: 'Единицы измерения',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'unitMeasure'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'unitMeasure'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'unitMeasure'},
        name: 'Краткое наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'test0306',
    name: 'Тест 030619',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: '123456789',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'nick 1', nickDict: 'test0306'},
        name: 'Атрибут 1',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 1
      },
      {
        id: {nick: 'nick 2', nickDict: 'test0306'},
        name: 'Атрибут 2',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '123456789',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nick 3', nickDict: 'test0306'},
        name: 'Атрибут 3',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 1
      },
      {
        id: {nick: 'nick 4', nickDict: 'test0306'},
        name: 'Атрибут 4',
        typeAttr: 'link',
        nickDictLink: 'test1',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'test0306'},
        name: 'Сортировка',
        typeAttr: 'link',
        nickDictLink: 'Timetable',
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'District',
    name: 'Районы',
    context: 'SYSTEM',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'SYSTEM',
    note: null,
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'District'},
        name: 'Название',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'code', nickDict: 'District'},
        name: 'Код',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'municipalName', nickDict: 'District'},
        name: 'Муниципальное образование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'municipalCode', nickDict: 'District'},
        name: 'Муниципальное образование (код)',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'perfectId', nickDict: 'District'},
        name: '',
        typeAttr: 'link',
        nickDictLink: 'Prefect',
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'synonyms', nickDict: 'District'},
        name: 'Синонимы',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'codeBTI', nickDict: 'District'},
        name: 'codeBTI',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'omkCode', nickDict: 'District'},
        name: 'Код ОМК',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'omkName', nickDict: 'District'},
        name: 'Наименование по ОМК',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'regNum', nickDict: 'District'},
        name: 'Код для регистрации разрешений',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 9,
        unique: 0
      }
    ]
  },
  {
    nick: 'test1',
    name: 'test22',
    context: 'SYSTEM',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'asdf',
    note: 'asdf',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'test1'},
        name: '3',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: 'gf',
        orders: 0,
        unique: 0
      }
    ]
  },
  {
    nick: 'TEST1123',
    name: 'TEST1',
    context: 'SYSTEM',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'test', nickDict: 'TEST1123'},
        name: 'test',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 1,
        deleted: 0,
        note: 'test',
        orders: 0,
        unique: 0
      }
    ]
  },
  {
    nick: 'TEST2',
    name: 'Тестовый справочник 2',
    context: 'SYSTEM',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: 'Описание тестового справочника',
    transfer: 0,
    nsiMetaAttrs: []
  },
  {
    nick: 'Business Days Calendar',
    name: 'Производственный календарь',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'SYSTEM',
    note: null,
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'dayType', nickDict: 'Business Days Calendar'},
        name: 'Код типа исключения (RED - 0/BLACK - 1)',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'calendarDay', nickDict: 'Business Days Calendar'},
        name: 'Дата',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'dayComment', nickDict: 'Business Days Calendar'},
        name: 'Примечание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'finSources',
    name: 'Источники финансирования',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'COMMON',
    note: 'Test description',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'finSources'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      }
    ]
  },
  {
    nick: 'yetAnotherTestDict',
    name: 'Еще один тестовый справочник',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'COMMON',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'link', nickDict: 'yetAnotherTestDict'},
        name: 'Другой справочник',
        typeAttr: 'link',
        nickDictLink: 'detailsUL',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'string', nickDict: 'yetAnotherTestDict'},
        name: 'Строковый атрибут',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: 'Описание атрибута',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'andMore',
    name: 'И еще',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: '',
    transfer: 0,
    nsiMetaAttrs: []
  },
  {
    nick: 'Prefect',
    name: 'Округа',
    context: 'SYSTEM',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'SYSTEM',
    note: null,
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'fullName', nickDict: 'Prefect'},
        name: 'fullName',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'Prefect'},
        name: 'name',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'code', nickDict: 'Prefect'},
        name: 'code',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'N_AO', nickDict: 'Prefect'},
        name: 'N_AO',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'isNew', nickDict: 'Prefect'},
        name: 'isNew',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'btiCode', nickDict: 'Prefect'},
        name: 'Код БТИ',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'prepCase', nickDict: 'Prefect'},
        name: 'Предложный падеж',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'prefectName', nickDict: 'Prefect'},
        name: 'Префектура',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'synonyms', nickDict: 'Prefect'},
        name: 'Синонимы',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'omkCode', nickDict: 'Prefect'},
        name: 'Код ОМК',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 9,
        unique: 0
      },
      {
        id: {nick: 'omkName', nickDict: 'Prefect'},
        name: 'Наименование по ОМК',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 10,
        unique: 0
      }
    ]
  },
  {
    nick: 'testDict',
    name: 'Тестовый справочник',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: 'Описание тестового справочника',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'alphabet', nickDict: 'testDict'},
        name: 'Alphabet',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: 'Description',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'secondAttr', nickDict: 'testDict'},
        name: 'Второй атрибут',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 1,
        note: 'Второй атрибут',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'attr', nickDict: 'testDict'},
        name: 'Атрибут',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 1,
        note: 'Логический атрибут',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'test', nickDict: 'testDict'},
        name: 'test',
        typeAttr: 'link',
        nickDictLink: 'District',
        arrayAttr: 0,
        required: 1,
        deleted: 1,
        note: 'qweqwe',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'vupsen',
    name: 'Вупсень',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'COMMON',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'string', nickDict: 'vupsen'},
        name: 'строка',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 1,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'link', nickDict: 'vupsen'},
        name: 'другой справочник',
        typeAttr: 'link',
        nickDictLink: 'District',
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: '1', nickDict: 'vupsen'},
        name: 'тоже строка',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'Timetable', nickDict: 'vupsen'},
        name: '123',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '1232131',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'num', nickDict: 'vupsen'},
        name: 'num',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'detailsUL',
    name: 'Реквизиты участников юрлиц',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Для фронта',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'detailsUL'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'attrName', nickDict: 'detailsUL'},
        name: 'Наименование параметра',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'detailsUL'},
        name: 'Тип',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'detailsUL'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'specialTypesII',
    name: 'Специальные виды ИИ',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'specialTypesII'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'specialTypesII'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'servicesType',
    name: 'Виды услуг',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'servicesType'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'servicesType'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'nick', nickDict: 'servicesType'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'servicesType'},
        name: 'Краткое наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'typeOKS',
    name: 'Виды ОКС',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'typeOKS'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'typeOKS'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'typeOKS'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'rolesParticipants',
    name: 'Роли участников',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Системные',
    note: 'Каталог ролей участников ЖЦ',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'participant', nickDict: 'rolesParticipants'},
        name: 'Участник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'rolesParticipants'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'rolesParticipants'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'role', nickDict: 'rolesParticipants'},
        name: 'Роль в родительном падеже',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'usageArea',
    name: 'Области применения',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Аудит',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'usageArea'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'normativeDocument',
    name: 'Нормативные документы',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'normativeDocument'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'integer', nickDict: 'normativeDocument'},
        name: 'Номер',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'normativeDocument'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'includePP1521', nickDict: 'normativeDocument'},
        name: 'Включен в ПП 1521',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'stagesOKS',
    name: 'Этапы жизненного цикла ОКС',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'nameFull', nickDict: 'stagesOKS'},
        name: 'Полное наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'stagesOKS'},
        name: 'Краткое наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'nick', nickDict: 'stagesOKS'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: 'string',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'stagesOKS'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'typesAddressableObject',
    name: 'Типы адресуемого объекта',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'typesAddressableObject'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'typesAddressableObject'},
        name: 'Сокращенное наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'typesAddressableObject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'climaticRegions',
    name: 'Климатические районы и подрайоны',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note: 'Справочник климатических зон по СП 131.13330',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'climaticRegions'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'district', nickDict: 'climaticRegions'},
        name: 'Климатический район',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'sub-district', nickDict: 'climaticRegions'},
        name: 'Климатический подрайон',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'dataType',
    name: 'Типы данных',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'dataType'},
        name: 'Нименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nick', nickDict: 'dataType'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'dataType'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'snowDistrict',
    name: 'Снеговой район',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'snowDistrict'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'snowDistrict', nickDict: 'snowDistrict'},
        name: 'Снеговые районы',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'value', nickDict: 'snowDistrict'},
        name: 'Нормативное значение веса снегового покрова',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'snowDistrict'},
        name: 'Единица измерения',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'conditionsUsageArea',
    name: 'Условия области применения',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Аудит',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'condition', nickDict: 'conditionsUsageArea'},
        name: 'Условие',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'element', nickDict: 'conditionsUsageArea'},
        name: 'Элемент',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'attribute', nickDict: 'conditionsUsageArea'},
        name: 'Атрибут',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'value', nickDict: 'conditionsUsageArea'},
        name: 'Значение',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'detailsObject',
    name: 'Реквизиты объекта',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'detailsObject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'attrName', nickDict: 'detailsObject'},
        name: 'Наименование параметра',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'detailsObject'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'detailsObject'},
        name: 'Единицы измерения',
        typeAttr: 'link',
        nickDictLink: 'unitMeasure',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'detailsObject'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'detailsObject'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'SMR', nickDict: 'detailsObject'},
        name: 'СМР',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'OPER', nickDict: 'detailsObject'},
        name: 'ЭКПЛ',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 9,
        unique: 0
      },
      {
        id: {nick: 'SNOS', nickDict: 'detailsObject'},
        name: 'СНОС',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 10,
        unique: 0
      }
    ]
  },
  {
    nick: 'architecturalSolution',
    name: 'Архитектурные решения',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note: 'Проектные решения',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'architecturalSolution'},
        name: 'Наименование параметра',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'classIFC', nickDict: 'architecturalSolution'},
        name: 'Класс IFC',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'architecturalSolution'},
        name: 'Тип параметра на фронте',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'architecturalSolution'},
        name: 'Файл',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'categoryEng-GeologicalConditions',
    name: 'Категория сложности инженерно-геологических условий',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'СП 47.13330.2012 Инженерные изыскания для строительства. Основные положения. . Приложение А',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'category', nickDict: 'categoryEng-GeologicalConditions'},
        name: 'Категория сложности инженерно-геологических условий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'KS2', nickDict: 'categoryEng-GeologicalConditions'},
        name: 'КС-2 (нормальный)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Уровень ответственности сооружений (в соответствии с ГОСТ 27751)',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'KS3', nickDict: 'categoryEng-GeologicalConditions'},
        name: 'КС-3 (повышенный)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Уровень ответственности сооружений (в соответствии с ГОСТ 27751)',
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'categoryEng-GeologicalConditions'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'KS1', nickDict: 'categoryEng-GeologicalConditions'},
        name: 'КС-1 (пониженный)',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'classificationElements',
    name: 'Классификатор элементов',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'code', nickDict: 'classificationElements'},
        name: 'Код',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'classificationElements'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'IFCclass', nickDict: 'classificationElements'},
        name: 'Ксласс IFC',
        typeAttr: 'link',
        nickDictLink: 'IFCclass',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'assignmentIFCclass', nickDict: 'classificationElements'},
        name: 'Назначение класса IFC',
        typeAttr: 'link',
        nickDictLink: 'assignmentIFCclass',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'degreeFireResistance',
    name: 'Степень огнестойкости',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'Здания, сооружения и пожарные отсеки по степени огнестойкости подразделяются на здания, сооружения и пожарные отсеки следующей степени огнестойкости которые представлены в таблице ниже. Порядок определения степени огнестойкости зданий, сооружений и пожарных отсеков устанавливается статьей 87 настоящего Федерального закона.(в ред. Федерального закона от 10.07.2012 N 117-ФЗ)',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'degreeFireResistance'},
        name: 'Сортировка',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {nick: 'degreeFireResistance', nickDict: 'degreeFireResistance'},
        name: 'Степень огнестойкости ',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'foundationDevelopmentDesignSolutions',
    name: 'Основания для разработки проектных решений',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'foundationDevelopmentDesignSolutions'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'foundationDevelopmentDesignSolutions'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'IFCclass',
    name: 'Классы IFC',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'nick', nickDict: 'IFCclass'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'climaticGeotechnicalParameters',
    name: 'Климатические и геотехнические параметры',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'unitMeasure', nickDict: 'climaticGeotechnicalParameters'},
        name: 'Единицы измерения',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'climaticGeotechnicalParameters'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'climaticGeotechnicalParameters'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'finSource',
    name: 'Источники финансирования',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'finSource'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'assignmentIFCclass',
    name: 'Назначение класса IFC',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'nick', nickDict: 'assignmentIFCclass'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'passportInvestmentProject',
    name: 'Паспорт инвестиционного проекта',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'ПРИКАЗ Минэкономразвития РФ от 2 апреля 2014 года N 199 Об утверждении формы паспорта инвестиционного проекта, представляемого для проведения проверки инвестиционных проектов на предмет эффективности использования средств федерального бюджета, направляемых на капитальные вложения, и внесении изменений в отдельные акты Минэкономразвития России',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'passportInvestmentProject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'passportInvestmentProject'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'passportInvestmentProject'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'passportInvestmentProject'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'passportInvestmentProject'},
        name: 'Единица измерения',
        typeAttr: 'link',
        nickDictLink: 'unitMeasure',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'passportInvestmentProject'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 6,
        unique: 0
      }
    ]
  },
  {
    nick: 'classStructuralFireHazard',
    name: 'Класс конструктивной пожарной опасности',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'Здания, сооружения и пожарные отсеки по конструктивной пожарной опасности подразделяются на классы представленные в таблице ниже. Порядок определения класса конструктивной пожарной опасности зданий, сооружений и пожарных отсеков устанавливается статьей 87 настоящего Федерального закона. (в ред. Федерального закона от 10.07.2012 N 117-ФЗ)',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'classStructuralFireHazard'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'class', nickDict: 'classStructuralFireHazard'},
        name: 'Класс конструктивной пожарной опасности',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'typeConstruction',
    name: 'Виды строительства',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'typeConstruction'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'typeConstruction'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'detailsFLIP',
    name: 'Реквизиты участников ИП и физлиц',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Для фронта',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'detailsFLIP'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'attrName', nickDict: 'detailsFLIP'},
        name: 'Наименование параметра',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'detailsFLIP'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'contractDetails',
    name: 'Реквизиты договоров',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'Реквизиты для реестра контрактов, договоров, соглашений. С учетом ПП РФ N 145 от 5 марта 2007 г. О ПОРЯДКЕ ОРГАНИЗАЦИИ И ПРОВЕДЕНИЯ ГОСЭКСПЕРТИЗЫ ПД И РЕЗУЛЬТАТОВ ИИ',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'contractDetails'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'attrName', nickDict: 'contractDetails'},
        name: 'Наименование параметра',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'contractDetails'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'NULL', nickDict: 'contractDetails'},
        name: 'Единицы измерения',
        typeAttr: 'link',
        nickDictLink: 'unitMeasure',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'contractDetails'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 5,
        unique: 0
      }
    ]
  },
  {
    nick: 'permitsAndConclusions',
    name: 'Разрешения и заключения',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'permitsAndConclusions'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'permitsAndConclusions'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'permitsAndConclusions'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'permitsAndConclusions'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'SMR', nickDict: 'permitsAndConclusions'},
        name: 'СМР',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'OPER', nickDict: 'permitsAndConclusions'},
        name: 'ЭКПЛ',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'SNOS', nickDict: 'permitsAndConclusions'},
        name: 'СНОС',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 7,
        unique: 0
      }
    ]
  },
  {
    nick: 'conceptualDigitalModel',
    name: 'Концептуальная цифровая модель',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Концептуальная цифровая модель УПМ 100. Предусмотреть загрузки нескольких файлов IFC.',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'conceptualDigitalModel'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'conceptualDigitalModel'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'conceptualDigitalModel'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'conceptualDigitalModel'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'planningDocumentation2',
    name: 'Градостроительная документация',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Предусмотреть возможность загрузки нескольких ГПЗУ. Тогда для каждого надо заполнить реквизиты.',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'planningDocumentation2'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'planningDocumentation2'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'planningDocumentation2'},
        name: 'Тип',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'planningDocumentation2'},
        name: 'Вид ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'planningDocumentation2'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'planningDocumentation2'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'reading', nickDict: 'planningDocumentation2'},
        name: 'Доступность для чтения участников ОБИН',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'planningDocumentation2'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'planningDocumentation2'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'SMR', nickDict: 'planningDocumentation2'},
        name: 'СМР',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 9,
        unique: 0
      },
      {
        id: {nick: 'OPER', nickDict: 'planningDocumentation2'},
        name: 'ЭКСПЛ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 10,
        unique: 0
      },
      {
        id: {nick: 'SNOS', nickDict: 'planningDocumentation2'},
        name: 'СНОС',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 11,
        unique: 0
      }
    ]
  },
  {
    nick: 'postalAddressObjecteState',
    name: 'Адрес почтовый объекта недвижимости',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'postalAddressObjecteState'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'postalAddressObjecteState'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'postalAddressObjecteState'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'designAssignment',
    name: 'Задание на проектирование',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Входит в Проектные решения. На основании Приказа Минстроя РФ от 01.03.2018 N 125/ПР',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'designAssignment'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'designAssignment'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'title', nickDict: 'designAssignment'},
        name: 'Отображаемое имя',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'designAssignment'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'showInterface', nickDict: 'designAssignment'},
        name: 'Вывод в интерфейс',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'designAssignment'},
        name: 'Вид ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      }
    ]
  },
  {
    nick: 'typeEngineeringSurveysIncludingSpecial',
    name: 'Виды инженерных изысканий, включая специальные',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'typeEngineeringSurveysIncludingSpecial'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'typeEngineeringSurveysIncludingSpecial'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {
          nick: 'checkbox',
          nickDict: 'typeEngineeringSurveysIncludingSpecial'
        },
        name: 'Чекбокс',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {
          nick: 'position',
          nickDict: 'typeEngineeringSurveysIncludingSpecial'
        },
        name: 'Положение чекбокса по-умолчанию',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'planningDocumentation',
    name: 'Перечень градостроительной документации',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'planningDocumentation'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'planningDocumentation'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'planningDocumentation'},
        name: 'Краткое наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'planningDocumentation'},
        name: 'Вид ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'windDistrict',
    name: 'Ветровой район',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'windDistrict'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'windDistrict', nickDict: 'windDistrict'},
        name: 'Ветровые районы',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'value', nickDict: 'windDistrict'},
        name: 'Нормативное значение ветрового давления',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'windDistrict'},
        name: 'Единица измерения',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'typesEngineeringSurveys',
    name: 'Виды инженерных изысканий',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'typesEngineeringSurveys'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'typesEngineeringSurveys'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'typePremises',
    name: 'Тип помещений и зон',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'typePremises'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'typePremises'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'projectTab',
    name: 'Разделы',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Системные',
    note: 'Справочник разделов (верхние горизонтальные вкладки)',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'projectTab'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'projectTab'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'code', nickDict: 'projectTab'},
        name: 'Код',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'gant', nickDict: 'projectTab'},
        name: 'Планирование',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'comment', nickDict: 'projectTab'},
        name: 'Доступ на чтение',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'projectTab'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'projectTab'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'SMR', nickDict: 'projectTab'},
        name: 'СМР',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 9,
        unique: 0
      },
      {
        id: {nick: 'OPER', nickDict: 'projectTab'},
        name: 'ЭКПЛ',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 10,
        unique: 0
      },
      {
        id: {nick: 'SNOS', nickDict: 'projectTab'},
        name: 'СНОС',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 11,
        unique: 0
      }
    ]
  },
  {
    nick: 'classFunctionalFireHazard',
    name: 'Класс функциональной пожарной опасности',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'Здания (сооружения, пожарные отсеки и части зданий, сооружений - помещения или группы помещений, функционально связанные между собой) по классу функциональной пожарной опасности в зависимости от их назначения, а также от возраста, физического состояния и количества людей, находящихся в здании, сооружении, возможности пребывания их в состоянии сна. (в ред. Федерального закона от 10.07.2012 N 117-ФЗ)',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'classFunctionalFireHazard'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'classification', nickDict: 'classFunctionalFireHazard'},
        name: 'Классификация',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'classFunctionalFireHazard'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'basisDesignObject',
    name: 'Основание для проектирования объекта',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Предусмотреть возможность загрузки нескольких оснований. Справочник Основания для разработки ПР.',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'basisDesignObject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'basisDesignObject'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'basisDesignObject'},
        name: 'Тип',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'basisDesignObject'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'basisDesignObject'},
        name: 'Вид ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      }
    ]
  },
  {
    nick: 'addressBuildingLocation',
    name: 'Адрес строительный (местоположение)',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'addressBuildingLocation'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'addressBuildingLocation'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'addressBuildingLocation'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'basicInformation',
    name: 'Основные сведения',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Входит в Принципиальные решения. ПП РФ от 12.05.2017 N 563 ""О порядке и об основаниях заключения контрактов …',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'basicInformation'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'basicInformation'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'basicInformation'},
        name: 'Виды ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'basicInformation'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'basicInformation'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'basicInformation'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      }
    ]
  },
  {
    nick: 'technicalConditions',
    name: 'Технические условия',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note:
      'Технические условия на подключение (присоединение) объекта к сетям инженерно-технического обеспечения',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'technicalConditions'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'technicalConditions'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'technicalConditions'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'technicalConditions'},
        name: 'Загрузка документа',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'ensureFireSafety',
    name: 'Обеспечение пожарной безопасности',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'ensureFireSafety'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'ensureFireSafety'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'normativeDocument', nickDict: 'ensureFireSafety'},
        name: 'Нормативный документ',
        typeAttr: 'link',
        nickDictLink: 'normativeDocument',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'ensureFireSafety'},
        name: 'Тип',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'test', nickDict: 'ensureFireSafety'},
        name: 'тест',
        typeAttr: 'link',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'ensureFireSafety'},
        name: 'Единицы измерения',
        typeAttr: 'link',
        nickDictLink: 'unitMeasure',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      }
    ]
  },
  {
    nick: 'indicativeTechnicalEconomicIndicators',
    name: 'Ориентировочные технико-экономические показатели',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'indicativeTechnicalEconomicIndicators'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {nick: 'sort', nickDict: 'indicativeTechnicalEconomicIndicators'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {
          nick: 'dataType',
          nickDict: 'indicativeTechnicalEconomicIndicators'
        },
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'needsEnergy',
    name: 'Потребности в энергоресурсах',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'Для формирования таблицы "Сведения о потребности ОКС в энергоресурсах"',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'needsEnergy'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'needsEnergy'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'value', nickDict: 'needsEnergy'},
        name: 'Значение',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'unitMeasure', nickDict: 'needsEnergy'},
        name: 'Единица измерения',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'classHazardProductionObject',
    name: 'Классы опасности производственных объектов',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'classHazardProductionObject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'classHazardProductionObject'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'classHazardProductionObject'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'categoriesHazardProductionObject',
    name: 'Категории опасных производственных объектов',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'categoriesHazardProductionObject'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'categoriesHazardProductionObject'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'categoriesHazardProductionObject'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'dictionary',
    name: 'Справочник',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'dictionary'},
        name: 'Строка',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'date', nickDict: 'dictionary'},
        name: 'Дата',
        typeAttr: 'date',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'number', nickDict: 'dictionary'},
        name: 'Число',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'boolean', nickDict: 'dictionary'},
        name: 'Логическое',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'dictionary', nickDict: 'dictionary'},
        name: 'Ссылка на справочник',
        typeAttr: 'link',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      }
    ]
  },
  {
    nick: 'libraryChecks',
    name: 'Библиотека проверок',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Системные',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'libraryChecks'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'libraryChecks'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'libraryChecks'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'libraryChecks'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'codeDM',
    name: 'Коды ЦМ',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'codeDM'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'normativeDocument', nickDict: 'codeDM'},
        name: 'Код',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'codeDM'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'selectionConstructionStages',
    name: 'Выделение этапов строительства',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: 'Используется в задании на проектирование',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'selectionConstructionStages'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'selectionConstructionStages'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'registryContracts',
    name: 'Реестр договоров',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: 'Типы контрактов, договоров, соглашений',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'registryContracts'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'registryContracts'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'registryContracts'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'basisPreparationOBIN',
    name: 'Основание для подготовки ОБИН',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: 'Входит в Принципиальные решения',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'basisPreparationOBIN'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'basisPreparationOBIN'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'dataType', nickDict: 'basisPreparationOBIN'},
        name: 'Тип данных',
        typeAttr: 'link',
        nickDictLink: 'dataType',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'file', nickDict: 'basisPreparationOBIN'},
        name: 'Загрузка файла',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'typeOKS', nickDict: 'basisPreparationOBIN'},
        name: 'Вид ОКС',
        typeAttr: 'link',
        nickDictLink: 'typeOKS',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 5,
        unique: 0
      }
    ]
  },
  {
    nick: 'projectTEP',
    name: 'Проектные ТЭП',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: []
  },
  {
    nick: 'categoriesFireExplosionHazard',
    name: 'Категории по пожарной и взрывопожарной опасности',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: 'Статья 27 123-ФЗ',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'categoriesFireExplosionHazard'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'categoriesFireExplosionHazard'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'categoriesFireExplosionHazard'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'engineeringLandSurveying',
    name: 'Инженерно-геодезические изыскания',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Подразделы',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'engineeringLandSurveying'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'engineeringLandSurveying'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: null,
        unique: 0
      }
    ]
  },
  {
    nick: 'existencePremisesConstantStayPeople',
    name: 'Наличие помещений с постоянным пребыванием людей',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'existencePremisesConstantStayPeople'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'existencePremisesConstantStayPeople'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'existencePremisesConstantStayPeople'},
        name: 'Описание',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 3,
        unique: 0
      }
    ]
  },
  {
    nick: 'levelResponsibility',
    name: 'Уровень ответственности',
    context: 'OTHER',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note: 'согласно пункту 7 части 1 и части 7 статьи 4 384-ФЗ',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'levelResponsibility'},
        name: 'Сортировка',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'levelResponsibility'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'organization',
    name: 'Справочник организаций',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Для фронта',
    note: 'Справочник организаций относится к конкретной ИМ ОКС',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'organization'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'organization'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nameShort', nickDict: 'organization'},
        name: 'Краткое наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'lengthField', nickDict: 'organization'},
        name: 'Длина поля (если известно)',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'required', nickDict: 'organization'},
        name: 'Обязательность',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 4,
        unique: 0
      }
    ]
  },
  {
    nick: 'informationNeedsEnergy',
    name: 'Сведения о потребности в энергоресурсах',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Для фронта',
    note:
      'Таблица. Строки формируются на основании чекбоксов в одноименной группе подраздела "Основные сведения"',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'informationNeedsEnergy'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'informationNeedsEnergy'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'detailsUploadedFiles',
    name: 'Реквизиты загружаемых файлов',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Для фронта',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'detailsUploadedFiles'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'detailsUploadedFiles'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'note', nickDict: 'detailsUploadedFiles'},
        name: 'Комментарий',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 2,
        unique: 0
      }
    ]
  },
  {
    nick: 'params',
    name: 'Параметры',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'SYSTEM',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'params'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'nick', nickDict: 'params'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'pset', nickDict: 'params'},
        name: 'Группа',
        typeAttr: 'string',
        nickDictLink: 'psetParametrs',
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: null,
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'pointEngGeocryologyShot',
    name: 'Точки наблюдения инж-геокриологич съемки',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 0,
    sysName: 'Справочники',
    note:
      'СП 11-105-97 Инженерно-геологические изыскания для строительства. Часть IV. Правила производства работ в районах распространения многолетнемерзлых грунтов. Таблица 6.1. Количество точек наблюдений (в том числе горных выработок) на 1 км.кв. инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'pointEngGeocryologyShot'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'size10000', nickDict: 'pointEngGeocryologyShot'},
        name: 'Масштаб инженерно-геокриологической съемки (1:10000)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Количество точек наблюдений на 1 км инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'size25000', nickDict: 'pointEngGeocryologyShot'},
        name: 'Масштаб инженерно-геокриологической съемки (1:25000)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Количество точек наблюдений на 1 км инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'size50000', nickDict: 'pointEngGeocryologyShot'},
        name: 'Масштаб инженерно-геокриологической съемки (1:50000)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Количество точек наблюдений на 1 км инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'size100000', nickDict: 'pointEngGeocryologyShot'},
        name: 'Масштаб инженерно-геокриологической съемки (1:100000)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Количество точек наблюдений на 1 км инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'size200000', nickDict: 'pointEngGeocryologyShot'},
        name: 'Масштаб инженерно-геокриологической съемки (1:200000)',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note:
          'Количество точек наблюдений на 1 км инженерно-геокриологической съемки (в числителе), в том числе горных выработок (в знаменателе)',
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'category', nickDict: 'pointEngGeocryologyShot'},
        name: 'Категория сложности инженерно-геокриологических условий',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 6,
        unique: 0
      }
    ]
  },
  {
    nick: 'projectSection',
    name: 'Подразделы',
    context: 'OTHER',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'Системные',
    note:
      'Левое вертикальное меню. Подраздел ""Виды инженерных изысканий, включая специальные"" содержит чекбоксы, которые добавляют/скрывают отображения подразделов 10-21',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'sort', nickDict: 'projectSection'},
        name: 'Сортировка',
        typeAttr: 'integer',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      },
      {
        id: {nick: 'name', nickDict: 'projectSection'},
        name: 'Наименование',
        typeAttr: 'string',
        nickDictLink: '',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: 'Название справочника',
        orders: 2,
        unique: 0
      },
      {
        id: {nick: 'tab', nickDict: 'projectSection'},
        name: 'В какой раздел входит',
        typeAttr: 'link',
        nickDictLink: 'projectTab',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: 'Привязка к разделу',
        orders: 3,
        unique: 0
      },
      {
        id: {nick: 'gant', nickDict: 'projectSection'},
        name: 'Планирование',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 4,
        unique: 0
      },
      {
        id: {nick: 'OBIN', nickDict: 'projectSection'},
        name: 'ОБИН',
        typeAttr: 'boolean',
        nickDictLink: '',
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 5,
        unique: 0
      },
      {
        id: {nick: 'PROJECTING', nickDict: 'projectSection'},
        name: 'ПРОЕКТ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 6,
        unique: 0
      },
      {
        id: {nick: 'SMR', nickDict: 'projectSection'},
        name: 'СМР',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 7,
        unique: 0
      },
      {
        id: {nick: 'OPER', nickDict: 'projectSection'},
        name: 'ЭКПЛ',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 8,
        unique: 0
      },
      {
        id: {nick: 'SNOS', nickDict: 'projectSection'},
        name: 'СНОС',
        typeAttr: 'boolean',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: null,
        orders: 9,
        unique: 0
      }
    ]
  },
  {
    nick: 'TESTTESTTEST',
    name: 'TESTTESTTEST1',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: 'TESTTESTTEST1',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'Test', nickDict: 'TESTTESTTEST'},
        name: 'Test',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: 'Test',
        orders: 0,
        unique: 0
      }
    ]
  },
  {
    nick: 'TESTTEST',
    name: 'TESTTEST12341123',
    context: 'COMMON',
    hierarchyDict: 0,
    deleted: 1,
    sysName: 'COMMON',
    note: 'TESTTEST123',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'TEST', nickDict: 'TESTTEST'},
        name: 'TEST',
        typeAttr: 'string',
        nickDictLink: 'District',
        arrayAttr: 0,
        required: 1,
        deleted: 0,
        note: 'TEST',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'qweqwe', nickDict: 'TESTTEST'},
        name: 'asdasd',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  },
  {
    nick: 'psetParametrs',
    name: 'Параметры и Pset',
    context: 'COMMON',
    hierarchyDict: 1,
    deleted: 0,
    sysName: 'SYSTEM',
    note: '',
    transfer: 0,
    nsiMetaAttrs: [
      {
        id: {nick: 'name', nickDict: 'psetParametrs'},
        name: 'Нименование',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 0,
        required: 0,
        deleted: 0,
        note: '',
        orders: 0,
        unique: 0
      },
      {
        id: {nick: 'nick', nickDict: 'psetParametrs'},
        name: 'Ник',
        typeAttr: 'string',
        nickDictLink: null,
        arrayAttr: 1,
        required: 0,
        deleted: 0,
        note: '',
        orders: 1,
        unique: 0
      }
    ]
  }
];
