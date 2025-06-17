# Калкулатор за трошоци за живот

## 🌐 Cloud линк  
[Демо апликација](https://TVOJ_LINK_HERE)

## 📦 Како да стартувате локално (Docker)
1. Клонирај го репозиториумот
2. Инсталирај Docker и Docker Compose
3. Стартај:
docker-compose up

4. Отвори [https://lifecostcalc.onrender.com/api/login](https://lifecostcalc.onrender.com/api/login)

## ⚙️ Структура (MVC)
- **controllers/** – (ќе се полни во дел 3)
- **models/** – (ќе се полни во дел 3)
- **routes/** – (ќе се полни во дел 3)
- **public/** – статички HTML/CSS фајлови (од дел 1)
- **app.js** – Главен express сервер

## ☁️ Cloud база (MongoDB Atlas)
- Во cloud, користи connection string од MongoDB Atlas.
- Локално, Docker ја користи сопствената MongoDB.

## 📝 ENV пример
PORT=3000
MONGODB_URI=your-mongodb-uri

## 🖥️ Тестирано на
- Chrome, Firefox, Safari (десктоп, таблет, мобилен)
