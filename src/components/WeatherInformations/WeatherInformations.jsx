import './WeatherInformations.css'

function WeatherInformations ({weather}) {
    console.log(weather)

    return (
        // ⬅️ O '.weather-container' AGORA É O ÚNICO ELEMENTO RAIZ
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            
            <div className='weather-info'>
                <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}.png`}        alt="Ícone do Tempo" 
                />    
                
                <p className='temperature'>{Math.round(weather.main.temp)} °C</p>
            </div>
            
            {/* ESTES ELEMENTOS AGORA ESTÃO DENTRO DO CONTAINER! */}
            <p className='description'>{weather.weather?.[0].description} </p>
        
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)} °C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>

        </div> // ⬅️ Fechamento do único elemento raiz
    )
}
export default WeatherInformations