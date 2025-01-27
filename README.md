     link na aplikaciju - http://193.198.53.212:4000

     aplikacija predana u rar datoteci se pokrece sa naredbom 'npm install' pa 'npm run dev' u root direktoriju

    interpolation/one-way binding	-	Da, src\views\HomeView.vue, :6
    two-way binding	-	Da, src\views\CityWeatherView.vue, :7 - :12
    methods		-	 Da, src\components\TempCalc.vue, :23
    computed properties		-	  Da, src\views\CityWeatherView.vue, :32
    barem jedan scoped style	-	Da, src\views\HomeView.vue, :95
    koristiti barem jedan lifecycle hook	-	Da, src\views\CityWeatherView.vue, :39
    routing (više stranica)	-	Da, src\router\index.js, :7
        aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)	-	Da, ne mogu tocno oznaciti u kodu, ali isprobajte
        dinamičko usmjeravanje s 404 stranicom ("catch all")	-	Da, src\router\index.js, :11
    (barem) dvije komponente	-	Da, src\components
        komponenta bez stanja, koristiti properties	-	Da, src\components\CityList.vue
        komponenta sa stanjem, Da, src\components\TempCalc.vue, sadrzi promjenjive varijable celsuis i fahrenheit
    barem jedna komponenta mora emitirati barem jedan event   -   Da, src\components\CountrySelect.vue, :28
    store (Pinia)	  -   Da, src\stores\CityData.js, koristi se u src\views\HomeView.vue i src\views\FavsView.vue
    asinkroni dohvat podataka s backenda	-	Da, src\services\weatherService.js, metode se pozivaju u src\views\CityWeatherView.vue i src\views\HomeView.vue, koristio sam asinkroni dohvat podataka sa OpenWeather API
