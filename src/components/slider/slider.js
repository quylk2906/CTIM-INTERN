import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import classnames from 'classnames';
import './slider.scss';

export const Slider = () => {
  const [docTitle, setDocTitle] = useState('slider');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    var slider = document.querySelector('.slider .list');
    var items = document.getElementsByClassName('item');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var dots = document.querySelectorAll('.slider .dots li');
    var lengthItems = items.length - 1;
    var active = 0;
    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      setDocTitle(`Slider ${active}`);
      reloadSlider();
    };
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };
    var refreshInterval = setInterval(() => {
      next.click();
    }, 3000);
    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 3000);
    }
    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        setActiveIndex(key);
        active = key;
        reloadSlider();
      });
    });
  }, []);

  const data = [
    { text: '1', image: 'img/1.png' },
    { text: '2', image: 'img/2.png' },
    { text: '3', image: 'img/3.png' },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{docTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="slider">
        <div className="list">
          {data.map((el, key) => (
            <div className="item" key={key}>
              <img src={el.image} alt="" />
              {el.text ? <h1 className={el.text} /> : ''}
            </div>
          ))}
        </div>
        <div className="buttons">
          <span id="prev" className="material-symbols-outlined">
            arrow_back_ios
          </span>
          <span id="next" className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
        <ul className="dots">
          {data.map((el, key) => (
            <li
              className={classnames(activeIndex === key && 'active')}
              key={key}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
