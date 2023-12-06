import { FC } from 'react'

const Rules: FC = () => {
	return <div className={'flex flex-col mt-28 px-5'}>
		<h1 className={'text-center mb-5'}>ПРАВИЛА ИГРЫ:</h1>
		<div
			className={'max-w-[800px] bg-slate-200 text-slate-900 border-[4px] border-slate-950 rounded-2xl p-5 mx-auto max-h-[400px] overflow-y-auto'}>
			ИГРА, В КОТОРОЙ ВАМ БУДУТ ЗАДАВАТЬСЯ ВОПРОСЫ ИЗ РАЗНЫХ ОБЛАСТЕЙ ЗНАНИЙ, ТАК ИЛИ ИНАЧЕ СВЯЗАННЫХ С
			АВТОМОБИЛЯМИ. ОТВЕЧАТЬ НА ВОПРОСЫ НУЖНО С УЧЕТОМ ВРЕМЕНИ; <br /><br />

			ЗАДАЧА ИГРОКА СЛЕДУЮЩАЯ: ПРАВИЛЬНО И БЫСТРО ОТВЕЧАТЬ НА ВОПРОСЫ, КОТОРЫЕ ПОЯВЛЯЮТСЯ НА ЭКРАНЕ. ВСЕГО — 30
			ВОПРОСОВ, В КАЖДОМ 5 ВАРИАНТОВ ОТВЕТА. ВЫБРАТЬ ВЕРНЫЙ ОТВЕТ НЕОБХОДИМО КЛИКОМ МЫШИ ПО ПРЕДПОЛАГАЕМОМУ
			ВАРИАНТУ ОТВЕТА;
			<br /><br />
			БАЗА ВОПРОСОВ — 100 ВОПРОСОВ, КОТОРЫЕ РАНДОМНО ВЫДАЮТСЯ УЧАСТНИКАМ. КАЖДЫЙ МЕСЯЦ 20 НОВЫХ ВОПРОСОВ
			ЗАЛИВАЕМ.
			<br /><br />
			НА КАЖДЫЙ ОТВЕТ ДАЕТСЯ 10 СЕКУНД ИЛИ 1.000 МИЛЛИСЕКУНД, ГДЕ 1 МИЛЛИСЕКУНДА = 1 ОЧКО. ИДЕАЛЬНОЕ
			ПРОХОЖДЕНИЕ ИГРЫ = 300.000 ОЧКОВ. <br /><br />
			ВАЖНО: ИЗНАЧАЛЬНО У ИГРОКА ЕСТЬ ЛИШЬ «ОДНА ЖИЗНЬ», ТО ЕСТЬ ОДНО ПРАВО НА ОШИБКУ. НЕПРАВИЛЬНЫЙ ОТВЕТ —
			ЖИЗНЬ СГОРАЕТ, ВЫШЛО ВРЕМЯ — ЖИЗНЬ СГОРАЕТ, А ОЧКИ ЗА ОТВЕТ НЕ НАЧИСЛЯЮТСЯ. <br /><br />
			ИГРАТЬ В ИГРУ МОЖНО ОДИН РАЗ В СЕМЬ ДНЕЙ ДЛЯ ПОДДЕРЖАНИЯ СОРЕВНОВАТЕЛЬНОГО ДУХА ИГРА ЛИМИТИРОВАНИЕМ
			ПОПЫТОК, В МЕСЯЦ — НЕ БОЛЕЕ ЧЕТЫРЕХ ПОПЫТОК; <br /><br />
			РЕЙТИНГОВАЯ ТУРНИРНАЯ ТАБЛИЦА ФОРМИРУЕТСЯ ИЗ ИГРОКОВ, НАБРАВШИХ ОЧКИ. В КОНЦЕ КАЖДОГО МЕСЯЦА ЛИДЕРАМ
			НАЧИСЛЯЮТСЯ БАЛЛЫ ДЛЯ ТРАТ В МАГАЗИНЕ. НЕОБЯЗАТЕЛЬНО ОТВЕТИТЬ НА ВСЕ 30 ВОПРОСОВ. ЗА ОТВЕТ НА ВСЕ 30
			ВОПРОСОВ ОТКРЫВАЕТСЯ ДОСТУП К 5-ТИ СЛОЖНЕЙШИМ ВОПРОСАМ. ВСЕГО ТАКИХ ВОПРОСОВ-ЗАДАЧ БУДЕТ 20 В БАЗЕ.
			<br /><br />
			ВНИМАНИЕ: ТРЕБУЕТСЯ СТАБИЛЬНОЕ ИНТЕРНЕТСОЕДИНЕНИЕ
		</div>

	</div>
}

export default Rules
