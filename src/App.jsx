import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
    const [weather, setWeather] = useState(null)
    const [weather5Days, setWeather5Days] = useState(null)  
    const inputRef = useRef()
    const API_KEY = "563818157eac4b62617ca9ec9cd21496" // Chave da API centralizada

    async function searchCity() {
        const city = inputRef.current.value
        if (!city) return; // Evita busca se o campo estiver vazio.

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
        
        try {
            // MELHORIA: Usa Promise.all para buscar 1 dia e 5 dias ao mesmo tempo (mais rápido).
            const [apiInfo, apiInfo5Days] = await Promise.all([
                axios.get(url),
                axios.get(url5Days)
            ]);

            // CORREÇÃO CRÍTICA: Salva apenas o ARRAY 'list' no estado weather5Days. 
            // Isso resolveu o erro de tela branca causado por 'forecastData.list' no componente filho.
            setWeather5Days(apiInfo5Days.data.list); 
            setWeather (apiInfo.data);

        } catch (error) {
            // MELHORIA: Bloco try/catch para tratamento de erro (cidade não existe).
            alert("Cidade não encontrada ou erro na conexão.");
            setWeather(null);         // Limpa dados antigos.
            setWeather5Days(null);    // Limpa dados antigos.
            console.error("Erro na busca da cidade:", error);
        }
    }

    return (
        <div className="container">
            <h1> Previsão do Tempo</h1>
            <input ref={inputRef} type="text" placeholder='Digite o nome da sua cidade:'/>
            <button onClick={searchCity}>Buscar</button>
        
            {/* RENDERIZAÇÃO 1 DIA: Só renderiza se houver dados (weather) */}
            {weather && (
                <WeatherInformations weather={weather} />
            )}   
            
            {/* RENDERIZAÇÃO 5 DIAS: Só renderiza se houver dados (weather5Days). */}
            {/* CORREÇÃO: forecastData agora recebe DIRETAMENTE o Array do estado. */}
            {weather5Days && (
                <WeatherInformations5Days forecastData={weather5Days}/>
            )}
        </div>
    )
}

export default App