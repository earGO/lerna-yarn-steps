
Модульный фронтенд с использованием Lerna и Yarn workspaces, redux-dynamic-modules, redux-saga-requests.

Весь фронтенд разбит на пакеты, итоговое приложение - один из таких пакетов. Позволяет все зависимости каждого пакета вынести в один общий node_modules, а так же иметь один build - у самого приложения.

Каждый пакет импортируется в другие через `yarn link`, ссылающийся на папку `lib`, где содержится локальная сборка пакета, выполненная при помощи `babel`   

#### Скрипты и начало работы
- `yarn build` - билдит все пакеты, кроме центрального приложения, для того, чтобы их импорты в другие пакеты были возможны
- `yarn bootstrap` - устанавливает все зависимости всех пакетов в общий node-modules, локальные зависимости пакетов устанавливаются в локальные node-modules. 
- `yarn gulp` - запускает вотчер gulp на все модули, кроме центрального приложения, чтобы ребилдить их при внесении изменений.
- `yarn dev` - поднимает storybook на порту 5555.
- `yarn unit` - Запускает тесты по всем пакетам в режиме --watchAll.
- `yarn start-app` - запускает центральное приложение на порту 3000 в режиме hot-reload

После установки репозитория для начала работы нужно выполнить скрипты именно в такой последовательности
- `yarn`
- `yarn bootstrap`
- `yarn build`
- `yarn gulp`
- `yarn start-app`

Установятся все зависимости (lerna в частности), после этого установятся все локальные зависимости и связи между ними, после этого создадутся локальные сборки, запустится вотчер изменений пакетов, и поднимется центральное приложение на порту 3000 в режиме мониторинга изменений.

#### Сборка центрального приложения
Стоит понимать следующее. 
В релиз идёт только локальная сборка финального приложения. У него свои локальные скрипты, наследуюемые от create-react-app. Остальные пакеты попадают в центральное приложение, во-первых, будучи уже обработанными babel, а во-вторых их зависимости лежат в общей глобальной папке node_modules. Поэтому зависимсти пакетов могут быть указаны не только как peerDependency, но даже как devDependency. На работу приложения локально и на сборку его для релиза (что, в целом, одно и то же с точки зрения webpack) это повлияет чуть менее, чем никак.
    
#### Импорт пакетов
Каждый пакет импортируется в приложение и другие пакеты при помощи `yarn link`:
1. Зайти в папку пакета - например 'components' - и выполнить там `yarn link`. Это создась ссылку на файл `src/index.js` пакета, название этой ссылки отобразится в консоли как результат выполнения команды. 
2. Зайти в папку "потребителя пакета" - например 'app' - и выполнить там `yarn link "components"` (в нашем случае). 
3. Компоненты из модуля 'components' теперь можно использовать в пакете 'app' через обычный импорт 
`import {Button} from "components"`

Ссылка `yarn link` не пишется в зависимостях компонента. Эти ссылки мониторит yarn при помощи своих workspaces. 

То же самое при перекрестном использовании модулей друг в друге.

#### Импорт и установка зависимостей
Установку общих зависимостей в новый модуль рекомендуется сразу производить в виде peer dependency командой `yarn add [--peer/-P] <package>`. 

Уникальные для пакета зависимости можно устанавливать обычной командой `yarn add <package>`. Можно устанавливать их как devDependency командой `yarn add [--dev/-D] <package>`

Командой `yarn add -W <package>` устанавливаются только зависимости, необходимые для работы инфраструктуры монорепозитория в целом - то есть в случае разработки модулей никакие. 


 
