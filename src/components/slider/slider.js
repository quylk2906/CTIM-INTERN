import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import './slider.scss';

export const Slider = () => {
  const [docTitle, setDocTitle] = useState('slider');
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
      var last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 3000);
    }
    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{docTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="slider">
        <div className="list">
          <div className="item">
            <img src="img/1.png" alt="" />
            <h1 className="text" />
          </div>
          <div className="item">
            <img src="img/2.png" alt="" />
          </div>
          <div className="item">
            <img src="img/3.png" alt="" />
          </div>
        </div>
        <div className="buttons">
          <span id="prev" class="material-symbols-outlined">
            arrow_back_ios
          </span>
          <span id="next" class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
        <ul className="dots">
          <li className="active" />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
};
