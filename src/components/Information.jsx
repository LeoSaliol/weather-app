import { Box, Typography } from "@mui/material";

export default function Information({ data }) {
    return (
        <div>
            {data.city && (
                <Box
                    sx={{
                        mt: 2,
                        display: "grid",
                        gap: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" component="h2">
                        {data.city}, {data.country}
                    </Typography>
                    <Box
                        component="img"
                        alt={data.conditionText}
                        src={data.icon}
                        sx={{ margin: "0 auto" }}
                    />

                    <Typography variant="h5" component="h3">
                        {data.temp} °C
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {data.conditionText}
                    </Typography>
                </Box>
            )}
        </div>
    );
}
