import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg'
      ></img>
      <div className='home__row'>
        <Product
          id={12321341}
          title='What Moonlight Does To Beauty'
          price={150}
          rating={5}
          image='https://rukminim1.flixcart.com/image/832/832/kqgyhe80/book/3/y/s/what-moonlight-does-to-beauty-original-imag4ggghg72zzmg.jpeg?q=70'
        />
        <Product
          id={12321342}
          title='Temporal Bliss'
          price={200}
          rating={5}
          image='https://rukminim1.flixcart.com/image/832/832/ktlu9ow0/book/t/p/u/temporal-bliss-original-imag6xfnyffpuyyh.jpeg?q=70'
        />
      </div>
      <div className='home__row'>
        <Product
          id={12321343}
          title='Sony PlayStation 4 (PS4) Slim 500 GB with Uncharted 4, Horizon Zero Dawn (Complete Edition) and Gran Turismo Sport  (Jet Black)'
          price={30000}
          rating={5}
          image='https://rukminim1.flixcart.com/image/832/832/jvv9zm80/gamingconsole/5/z/y/500-cuh-2208ab01-sony-na-original-imafghu725285yyq.jpeg?q=70'
        />
        <Product
          id={12321344}
          title='Yamaha PSR E-500 Keyboard'
          price={20000}
          rating={5}
          image='https://rukminim1.flixcart.com/image/832/832/k6wiefk0/musical-keyboard/j/h/u/psr-i500-yamaha-original-imafp8w5xkb9fcej.jpeg?q=70'
        />
        <Product
          id={12321345}
          title='PHILIPS HP8142/00 Hair Dryer  (1000 W, Blue)'
          price={2000}
          rating={3}
          image='https://rukminim1.flixcart.com/image/832/832/jwuzzww0/hair-dryer/7/e/e/philips-hair-dryer-hp8142-00-original-imafe7wkz82x9d5t.jpeg?q=70'
        />
      </div>
      <div className='home__row'>
        <Product
          id={12321346}
          title='SAMSUNG Series 7 138 cm (55 inch) Ultra HD (4K) Curved LED Smart TV'
          price={300000}
          rating={4}
          image='https://rukminim1.flixcart.com/image/832/832/j4sronk0/television/u/p/8/samsung-65mu7500-original-imaevmghknyzjghe.jpeg?q=70'
        />
      </div>
    </div>
  );
}

export default Home;
