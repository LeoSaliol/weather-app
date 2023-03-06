import { Typography } from "@mui/material";

export default function Title() {
    return (
        <>
            <Typography
                sx={{ fontWeight: "800", letterSpacing: 3 }}
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
            >
                Clima
            </Typography>
        </>
    );
}
