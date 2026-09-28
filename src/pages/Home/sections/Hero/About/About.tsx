import { Box, Container, Typography } from "@mui/material";
import { AnimatedBackground } from "../../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:'#1e1e1e',
                textAlign: "center",
                color: "white",
                px:2,
                pt: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: { xs: "250px", md: "500px" },
                    height: { xs: "250px", md: "500px" },
                    right: { xs: "-50px", md: "5%" },
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.4,
                    pointerEvents: "none"
                }}
            >
                <AnimatedBackground />
            </Box>
            <Container
                maxWidth={false}
                sx={{
                    width: "100%",
                    maxWidth: {xs: "100%", md: "900px"},
                }}
            >
                <Typography  
                    variant = "h2" gutterBottom
                >
                    About Me
                </Typography>
                <Box
                    sx={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#00df9a",
                    margin: "0 auto 40px auto",
                    borderRadius: "2px"
                    }}
                />
                <Box
                sx={{
                    mt: 4,
                    backgroundColor: '#232323',
                    padding: { xs: 3, md: 7 },
                    borderRadius: "25px",
                }}
                >
                <Typography
                    color="white"
                    sx={{
                        lineHeight: 1.9,
                        fontSize: { xs: "0.95rem", md: "1.2rem" },
                    }}
                >
                    I'm 27 years old and an IT student majoring in Systems Analysis and 
                    Development at Unimetrocamp Wyden. After several years working in sales, 
                    I decided in 2023 to change careers and pursue a field I have always 
                    been passionate about: technology.

                    <br /><br />

                    I started my degree in early 2024 and I'm currently in my final semester, 
                    with graduation scheduled for December 2026.


                    <br /><br />

                    I'm a Full Stack Developer focused on building modern web applications. 
                    I work with technologies such as React, TypeScript, JavaScript, Node.js 
                    and Python, and I'm constantly improving my programming, problem-solving 
                    and software development skills through practical projects.

                    <br /><br />

                    I believe in continuous learning and enjoy turning what I learn 
                    into practical solutions. I hope you enjoy my work! If you'd like 
                    to get in touch or view my resume, feel free to use the buttons above.    
                </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default About
