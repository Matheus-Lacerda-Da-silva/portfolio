import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/fotomatheus.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme })=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= Mobile
            PaddingTop : "100%",

        },
        [theme.breakpoints.up('md')]: { // >= Mobile
            PaddingTop : "0",
        }
   }))

    const StyledImg = styled("img")(({ theme })=> ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
   }))

    return (
        <>
            <StyledHero>       
                <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Matheus Lacerda</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm full stack developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid size={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV                                        
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>

            </StyledHero>
        </>
    )
}

export default Hero
