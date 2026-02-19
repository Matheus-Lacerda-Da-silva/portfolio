import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
        const StyledToobar = styled(Toolbar)(()=> ({
            display: "flex",
            justifyContent: "space-evenly"

   }))

  return (
    <>
        <AppBar position="fixed">
            <StyledToobar>
            <MenuItem onClick={() => scrollToSection("home")}>Home</MenuItem>
            <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollToSection("skills")}>Skills</MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}>Projects</MenuItem>                        
            </StyledToobar>
        </AppBar>
    </>
  )
}
const scrollToSection =(id: string) => {
    const section = document.getElementById(id)
    if (section) {
        section.scrollIntoView ({
            behavior: "smooth"
        })
    }
}

export default NavBar
