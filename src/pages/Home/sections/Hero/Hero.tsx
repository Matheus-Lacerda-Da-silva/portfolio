import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/fotomatheus.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme })=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(10)
}))

const StyledImg = styled("img")(({ theme })=> ({
    width: "100%",
    maxWidth: "300px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,

    [theme.breakpoints.up("md")]: {
        maxWidth: "250px"
    }
}))

const Hero = () => {
    return (
        <StyledHero>       
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                   {/* FOTO */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box position="relative" textAlign="center">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    {/* TEXTO */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Matheus Lacerda</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm Front-end developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Box
                                display="flex"
                                gap={2}
                                justifyContent="center"
                                mt={3}
                                flexDirection={{
                                    xs: "column",
                                    sm: "row"
                                }}
                                alignItems="center"
                                >
                                <StyledButton onClick={()=> console.log("download")}>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV                                        
                                    </Typography>
                                </StyledButton>
                                <StyledButton onClick={()=> console.log("contact")}>
                                    <EmailIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>                           
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </StyledHero>
    )
}

export default Hero
