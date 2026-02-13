import { Box, Container, Typography } from "@mui/material"; 

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItens: "center",
                justifyContent: "center",
                backgroundColor:'#232323'
            }}
        >
            <Container maxWidth = "md">
                <Typography  
                    variant = "h2"
                    textAlign="center"
                    color="white"
                    gutterBottom
                >
                    About Me
                </Typography>
                <Box
                sx={{
                    mt: 4,
                    backgroundColor: '#232323',
                    padding: "30px",
                    borderRadius: "12px",
                    textAlign: "center",
                    boxShadow: "0 0 15px rbga(0,0,0,0.3)"
                }}
                >
                <Typography
                    color="white"
                    sx={{
                        lineHeight: 1.8,
                        fontSize: "1.1rem"
                    }}
                >
Tenho 27 anos e sou estudante de TI, cursando Análise e Desenvolvimento de Sistemas na Unimetrocamp Wyden. Trabalhei por anos na área de vendas, porém, em 2023, percebi que não estava feliz nesse setor. Decidi, então, mudar de carreira para uma área pela qual sempre tive interesse e afinidade. Iniciei minha graduação no início de 2024, estou atualmente no 5º semestre e a conclusão está prevista para dezembro de 2026.

Busco aprender algo novo todos os dias e aplicar esse conhecimento na prática. No momento, tenho maior familiaridade com o Front-end, dominando as linguagens e ferramentas mais utilizadas no mercado — inclusive, este portfólio que você está vendo foi desenvolvido com Vite, React e TypeScript.

Espero que goste do meu trabalho! Caso queira entrar em contato ou visualizar meu currículo, basta clicar nos botões acima. Tenha um ótimo dia!            
                </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default About
