import Hex2rgb from './components/Hex2rgb'

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Формы»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Конвертер цветов</h3>
          </header>
          <div className={'task__body'}>
            <Hex2rgb />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
