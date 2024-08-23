import { AppBar, Avatar, Badge, Box, IconButton, Menu, MenuItem, Toolbar } from "@mui/material"
import { Col} from "./ui/components/layout/Stack"
import { Text, Txt } from "./ui/components/primitives/Text"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

const Catalog = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#FFFFFF", boxShadow: "none", padding: "10px 30px" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo Placeholder */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Txt type="headline2" sx={{ color: "#4D4D4D", fontWeight: 'bold' }}>
                            Mi Aplicación
                        </Txt>
                    </Box>

                    {/* User & Notifications */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Notifications */}
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={5} color="error">
                                <NotificationsIcon sx={{ color: "#2B2964" }} />
                            </Badge>
                        </IconButton>

                        {/* User Dropdown */}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar sx={{ bgcolor: "#00ACC1" }}>JM</Avatar>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Perfil</MenuItem>
                            <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            <Col sx={{
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign:"center"
            }}>
                <Box component={"img"} src="empty-project.png" alt="No hay proyectos" sx={{ width: "300px" }}></Box>
                <Text type="headline1" sx={{fontSize: "32px", color: "#2B2964", marginBottom: "10px"}}>Aún no hay proyectos </Text>
                <Text type="subtitle1" sx={{ color: "#585858", fontSize: "16px", width: "304px" }}>De momento no hay proyectos disponibles para invertir. Estamos trabajando en ello.</Text>
            </Col>
        </Box>
    )
}

export default Catalog