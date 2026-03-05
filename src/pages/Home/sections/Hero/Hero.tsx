import { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
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
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <StyledHero id="home">       
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
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
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography 
                            color="primary.contrastText" 
                            variant="h1" 
                            textAlign="center" pb={2}
                        >
                            Matheus Lacerda
                        </Typography>
                        <Typography 
                            color="primary.contrastText" 
                            variant="h2" 
                            textAlign="center"
                        >
                            I'm Front-end developer
                        </Typography>
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
                                <StyledButton onClick={handleOpen}>
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
            <Dialog 
                open={open} 
                onClose={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "primary.main",
                            color: "primary.contrastText",
                            borderRadius: 3,
                            padding: 2
                        }
                    }
                }}     
            >
                <DialogTitle>Contact me</DialogTitle>
                <DialogContent>
                    <Typography sx={{mb: 2 }}>
                        Email:{" "}
                        <a href="mailto:matheus.lacerda01@outlook.com" >
                            matheus.lacerda01@outlook.com
                        </a>
                    </Typography>
                    <Typography>
                        WhatsApp:{" "}
                        <a
                            href="https://wa.me/5519989588144"
                            target="_blank"
                            rel="noopener noferrer"
                        >
                            Enviar mensagem
                        </a>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button 
                    onClick={handleClose}
                    sx={{
                        color: "white"
                    }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>                        
        </StyledHero>
    )
}

export default Hero
