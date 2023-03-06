import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <Typography textAlign="center" sx={{ mt: 2, fontSize: "11px" }}>
            Powered by:{" "}
            <a
                href="https://www.weatherapi.com/"
                title="Weather API"
                target="_blank"
                style={{ color: "#fff" }}
            >
                WeatherAPI.com
            </a>
        </Typography>
    );
}
