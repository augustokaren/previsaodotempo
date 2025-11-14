import React from 'react';
import './WeatherInformations5Days.css';

function WeatherInformations5Days ({forecastData}) {
    
    // Objeto para agrupar as previsões (ex: {'14/11/2025': {...}, '15/11/2025': {...}})
    let dailyForecasts = {};

    // MELHORIA: Acessa 'forecastData' DIRETAMENTE (pois já é o Array 'list').
    for(let forecast of forecastData){ 
        // Converte o timestamp para string de data.
        const date = new Date (forecast.dt * 1000).toLocaleDateString('pt-BR'); 

        // LÓGICA DO TUTORIAL: Salva APENAS o primeiro objeto (leitura) encontrado para cada dia.
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = forecast; 
        }
    }
    
    const allDaysArray = Object.values(dailyForecasts);

    // Usa slice(1, 6) para descartar o dia atual (índice 0) e pegar os próximos 5 dias.
    const nextFiveDays = allDaysArray.slice(1, 6);

    // Tratamento de dados (impede renderização se o array estiver vazio)
    if (!forecastData || nextFiveDays.length === 0) {
        return <p>Carregando previsão de 5 dias...</p>; 
    }
    
    return (
        <div className='weather-container'>
            <h3>Previsão para os Próximos 5 Dias</h3>
            
            <div className="forecast-list"> 
                {/* CORREÇÃO/MELHORIA: Usamos 'day.dt' como a chave (key) porque é única e estável. */}
                {nextFiveDays.map((day) => (
                    <div key={day.dt} className='day-forecast-card'> 
                        
                        {/* MELHORIA UX: Separando data e dia da semana para melhor leitura. */}
                        <div className="day-info">
                            <p className="day-name">
                                {new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}
                            </p>
                            <p className="date-number">
                                {new Date(day.dt * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
                            </p>
                        </div>

                        {/* MELHORIA UX: Incluindo ícone para identificação visual rápida. */}
                        <div className="weather-icon-small">
                            <img 
                                src={`https://openweathermap.org/img/wn/${day.weather?.[0]?.icon}.png`} 
                                alt={day.weather?.[0]?.description} 
                            />
                        </div>
                        
                        {/* MELHORIA UX: Limpando o texto da temperatura (apenas números e graus). */}
                        <div className="temp-info">
                            <p className="max-temp">{Math.round(day.main.temp_max)}°</p>
                            <p className="min-temp">{Math.round(day.main.temp_min)}°</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherInformations5Days;