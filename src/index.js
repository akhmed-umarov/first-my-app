import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


///babel трансформирует react в обычный код 
//в старом реакте надо импортировать реакт в каждый файл


const element = <h2>Hello World!</h2> 
//одно и то же
// const element = React.createElement('h2', {className: `great`} , "Hello World!"); 

// из этого метода возвращается объект такого формата
// const element = { 
//   type: 'h2', 
//   props: { 
//     className: 'great', 
//     children: 'Hello World!'
//   }
// }


const text = 'Hello World!'


//если несколько тегов то надо элемент указывать в скобках 
//даже если указывать многострочный объект у него должен быть только один родитель
///{ } тоже самое что инторполяция ${} нельзя в них засовывать объекты (кроме масива)
const elem = ( 
  <div>
    <h2 className='Текст'> Текст: {text} </h2>
    <input type="text" />
    <label htmlFor="text"></label>
    <button>Click</button>
    <button children='click'/>
  </div>
)

//start 3 day

//ReactDON отвечает за то куда будет рендериться рект приложение в нашем приложении
/*-------------18 version React-------------------*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



/*-------------17 version React-------------------*/
// ReactDOM.render(
// <React.StrictMode>
// <App />
// </React.StrictMode> , 
// document.getElementById('root')
// )