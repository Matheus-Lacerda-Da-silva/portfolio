import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import newP from "../../../../../../assets/images/newP.jpg";
import meuPortfolio from "../../../../../../assets/images/meuPortfolio.png";


const projects = [
  {
    name: "Portfólio Pessoal",
    image: meuPortfolio,
    description: "Portfólio desenvolvido com React, TypeScript e MUI.",
    tech: "React • TypeScript • MUI"
  },
  {
    name: "teste 2",
    image: newP,
    description: "Em costrução",
    tech: "..."
  },
  {
    name: "teste 3",
    image: newP,
    description: "Em construção.",
    tech: "..."
  }
]

const Projects = () => {
    return (
        <Box
            id="projects"
            sx={{
                minHeight :"100vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#232323",
                py: 8                    
            }}
        >
            <Container maxWidth="lg">
                {/* TITULO */}
                <Box textAlign="center" mb={6}>
                    <Typography
                    variant="h2"
                    color="white"
                    gutterBottom
                    >
                    My Projects
                    </Typography>
                    <Box
                        sx={{
                            width: "60px",
                            height: "4px",
                            backgroundColor: "#00df9a",
                            margin: "0 auto",
                            borderRadius: "2px"    
                        }}
                    />
                </Box>

                <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid size={{xs: 12, md: 4}} key={index}>
                    <Card
                        sx={{
                        height: 400,
                        borderRadius: 3,
                        overflow: "hidden",
                        }}
                    >
                        <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.name}
                        />

                        <CardContent>
                        <Typography variant="h6">
                            {project.name}
                        </Typography>

                        <Typography variant="body2">
                            {project.description}
                        </Typography>

                        <Typography variant="caption">
                            {project.tech}
                        </Typography>
                        </CardContent>

                    </Card>
                    </Grid>
                ))}
                </Grid>

            </Container>
        </Box>
    )
}

export default Projects