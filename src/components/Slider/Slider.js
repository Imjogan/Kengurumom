import './Slider.css';
import '../../blocks/button/button.css';

function Slider() {
    return (
        <section className="slider">
			<ul className="slider__list">
				<li className="slider__slide slider__slide_active">
					<div className="slider__cover">
						<div className="slider__contain">
							<h2 className="slider__title">
                                <span className="slider__title_accent">Kenguru</span>
                                комфорт	и эстетика с первых дней
							</h2>
							<p className="slider__subtitle">Качественная одежда и аксессуары
								для новорожденных и мам.
							</p>
							<p className="slider__subtitle">
                                От сердца к сердцу!
							</p>
							<button className="button">Заказать</button>
						</div>
						<div className="slider__overlay">
							<img className="slider__background" src="../../images/slider/photo-on-slider-1.jpg" alt="#" />
						</div>
					</div>
				</li>
				<li className="slider__slide">
					<div className="slider__cover">
						<div className="slider__contain">
							<h2 className="slider__title"><span className="slider__title_accent">Индивидуальный </span> 
								пошив
							</h2>
							<p className="slider__subtitle">По Вашим размерам 
								и Вашему выбору ткани
							</p>
							<button className="button">В каталог</button>
						</div>
						<div className="slider__overlay">
							<img className="slider__background" src="../../images/slider/photo-on-slider-2.jpg" alt="#" />
						</div>
					</div>
				</li>
			</ul>
			<ul className="slider__navigation">
				<li className="slider__dott slider__dott_active"></li>
				<li className="slider__dott"></li>
			</ul>
		</section>
    );
}

export default Slider;