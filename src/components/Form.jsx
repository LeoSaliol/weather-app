import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
}&lang=es&q=`;

import { useState } from "react";

import Information from "./Information";

export default function Form() {
    const [city, setCity] = useState("quito");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temp: "",
        icon: "",
        conditionText: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({
            error: false,
            message: "",
        });
        try {
            if (!city.trim()) throw { message: "El campo es obligatorio" };
            const res = await fetch(`${API_WEATHER}${city}`);
            const data = await res.json();
            if (data.error) throw { message: data.error.message };
            setWeather({
                city: data.location.name,
                country: data.location.country,
                temp: data.current.temp_c,

                icon: data.current.condition.icon,
                conditionText: data.current.condition.text,
            });
        } catch (error) {
            setError({ error: true, message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box
                sx={{ display: "grid", gap: 2 }}
                component="form"
                onSubmit={onSubmit}
            >
                <TextField
                    id="city"
                    label="Ciudad"
                    variant="outlined"
                    color="secondary"
                    required
                    error={error.error}
                    helperText={error.message}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <LoadingButton
                    color="secondary"
                    type="submit"
                    variant="contained"
                    loading={loading}
                    loadingIndicator="Cargando..."
                >
                    Buscar
                </LoadingButton>
            </Box>
            <Information data={weather} />
        </>
    );
}
