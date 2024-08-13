const CACHE_KEY = 'lista_pacientes';

export const salvarPacientesNoCache = (pacientes) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(pacientes));
};

export const obterPacientesDoCache = () => {
    const cache = localStorage.getItem(CACHE_KEY);
    return cache ? JSON.parse(cache) : [];
};

export const invalidarCache = () => {
    localStorage.removeItem(CACHE_KEY);
};
