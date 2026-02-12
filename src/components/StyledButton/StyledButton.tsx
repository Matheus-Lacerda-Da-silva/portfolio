import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}


const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {


    const StyledButton = styled("button")(({ theme })=> ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "8px 18px",
        color: theme.palette.primary.contrastText,

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        whiteSpace: "nowrap",
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText
        },
    }))
    

  return (
    <>
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>   
    </>
  )
}

export default StyledButton
