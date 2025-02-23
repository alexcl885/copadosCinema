import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, TextField, Button } from "@mui/material";
import { LogOut, Save } from "lucide-react";
import { motion } from "framer-motion";
import "./Profile.css"; // Importamos los estilos personalizados
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        password: ""
    });

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Guardar cambios (simulado)
    const handleSave = () => {
        console.log("Datos guardados:", formData);
        setEditMode(false);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="profile-container"
        >
            {/* Avatar y nombre */}
            <div className="profile-header">
                <Avatar className="profile-avatar">
                    {user.email.charAt(0).toUpperCase()}
                </Avatar>
                <div className="profile-info">
                    <h2>{formData.name || "Usuario"}</h2>
                    <p>{formData.email}</p>
                </div>
            </div>

            {/* Formulario */}
            <div className="profile-form">
                <TextField 
                    label="Nombre" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    fullWidth 
                    disabled={!editMode} 
                    className="profile-input"
                />
                <TextField 
                    label="Email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    fullWidth 
                    disabled={!editMode} 
                    className="profile-input"
                />
                {editMode && (
                    <TextField 
                        label="Nueva Contraseña" 
                        name="password" 
                        type="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        fullWidth 
                        className="profile-input"
                    />
                )}
            </div>

            {/* Botones */}
            <div className="profile-buttons">
                {editMode ? (
                    <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<Save size={18} />} 
                        onClick={handleSave}
                        className="profile-button profile-button-edit"
                    >
                        Guardar
                    </Button>
                ) : (
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        onClick={() => setEditMode(true)}
                        className="profile-button profile-button-edit"
                    >
                        Editar Perfil
                    </Button>
                )}

                <Button 
                    variant="outlined" 
                    color="error" 
                    startIcon={<LogOut size={18} />} 
                    onClick={() => logout(navigate)}
                    className="profile-button profile-button-logout"
                >
                    Cerrar sesión
                </Button>
            </div>
        </motion.div>
    );
};

export default Profile;