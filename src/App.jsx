import { Box, Card, CardContent, Container } from "@mui/material";
import Footer from "./components/Footer";

import Form from "./components/Form";

import Title from "./components/Title";

import "./index.css";

const App = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                bgcolor: "hsl(216, 12%, 8%)",

                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="xs">
                <Card
                    sx={{
                        p: 4,
                        bgcolor: "hsl(213, 19%, 18%)",
                        borderRadius: "15px",
                        color: "hsl(0, 0%, 100%)",
                        transition: "0.7s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    <CardContent>
                        <Title />
                        <Form />

                        <Footer />
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default App;
