import { Box, Container, Grid, Typography } from "@mui/material"
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiTypescript, SiReact } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 size={50} color="#E44D26" />,
    description: "Estruturação semântica e acessível de páginas web."
  },
  {
    name: "CSS",
    icon: <SiCss3 size={50} color="#1572B6" />,
    description: "Estilização moderna com responsividade e animações."
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} color="#F7DF1E" />,
    description: "Lógica, manipulação de DOM e interatividade."
  },
  {
    name: "Python",
    icon: <SiPython size={50} color="#3776AB" />,
    description: "Automação, scripts e fundamentos de back-end."
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={50} color="#3178C6" />,
    description: "Tipagem estática para aplicações mais seguras."
  },
  {
    name: "React",
    icon: <SiReact size={50} color="#61DAFB" />,
    description: "Criação de interfaces modernas e componentizadas."
  }

]

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#232323",
        py: 8
      }}
    >
      <Container maxWidth="lg">
        {/* TÍTULO */}
        <Typography
          variant="h2"
          textAlign="center"
          color="white"
          gutterBottom
        >
          My Skills
        </Typography>

        {/* Linha verde decorativa */}
        <Box
          sx={{
            width: "60px",
            height: "4px",
            backgroundColor: "#00df9a",
            margin: "0 auto 40px auto",
            borderRadius: "2px"
          }}
        />

        {/* GRID DE SKILLS */}
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>              
              <Box textAlign="center"
                sx={{
                  backgroundColor: "#2a2a2a",
                  padding: 4,
                  borderRadius: "12px",
                  height: "220px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",    
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    background: "linear-gradient(145deg, #2a2a2a, #1f1f1f)"
                  },
                  "&:hover .description": {
                    opacity: 1,
                    transform: "translateY(0)"
                  },
                  "&:hover .icon": {
                    transform: "translateY(-10px) scale(1.1)"
                  },
                }}
              >
              <Box
                className="icon"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transition: "0.4s"
                }}
                >
                  {skill.icon}
                </Box>
                <Typography
                  variant="h6"
                  color="white"
                  mt={2}
                  mb={1}
                >
                  {skill.name}
                </Typography>

                <Typography
                  className="description"
                  variant="body2"
                  sx={{
                    color: "gray",
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "0.4s"  
                  }}
                >
                  {skill.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Skills
